import { Injectable } from '@nestjs/common';
import { AdjustmentType } from 'shared/generated-types';

import { RequestContext } from '../../../api/common/request-context';
import { Order } from '../../../entity/order/order.entity';
import { Promotion } from '../../../entity/promotion/promotion.entity';
import { Zone } from '../../../entity/zone/zone.entity';
import { TaxRateService } from '../../services/tax-rate.service';
import { ShippingCalculator } from '../shipping-calculator/shipping-calculator';
import { TaxCalculator } from '../tax-calculator/tax-calculator';

@Injectable()
export class OrderCalculator {
    constructor(
        private taxRateService: TaxRateService,
        private taxCalculator: TaxCalculator,
        private shippingCalculator: ShippingCalculator,
    ) {}

    /**
     * Applies taxes and promotions to an Order. Mutates the order object.
     */
    applyPriceAdjustments(ctx: RequestContext, order: Order, promotions: Promotion[]): Order {
        const activeZone = ctx.channel.defaultTaxZone;
        order.clearAdjustments();
        if (order.lines.length) {
            // First apply taxes to the non-discounted prices
            this.applyTaxes(ctx, order, activeZone);
            // Then test and apply promotions
            this.applyPromotions(order, promotions);
            // Finally, re-calculate taxes because the promotions may have
            // altered the unit prices, which in turn will alter the tax payable.
            this.applyTaxes(ctx, order, activeZone);
            this.applyShipping(ctx, order);
        } else {
            this.calculateOrderTotals(order);
        }
        return order;
    }

    /**
     * Applies the correct TaxRate to each OrderItem in the order.
     */
    private applyTaxes(ctx: RequestContext, order: Order, activeZone: Zone) {
        for (const line of order.lines) {
            line.clearAdjustments(AdjustmentType.TAX);

            const applicableTaxRate = this.taxRateService.getApplicableTaxRate(activeZone, line.taxCategory);
            const { price, priceIncludesTax, priceWithTax, priceWithoutTax } = this.taxCalculator.calculate(
                line.unitPrice,
                line.taxCategory,
                ctx,
            );

            line.setUnitPriceIncludesTax(priceIncludesTax);
            line.setTaxRate(applicableTaxRate.value);

            if (!priceIncludesTax) {
                for (const item of line.items) {
                    item.pendingAdjustments = item.pendingAdjustments.concat(
                        applicableTaxRate.apply(item.unitPriceWithPromotions),
                    );
                }
            }
            this.calculateOrderTotals(order);
        }
    }

    /**
     * Applies any eligible promotions to each OrderItem in the order.
     */
    private applyPromotions(order: Order, promotions: Promotion[]) {
        for (const line of order.lines) {
            const applicablePromotions = promotions.filter(p => p.test(order));

            line.clearAdjustments(AdjustmentType.PROMOTION);

            for (const promotion of applicablePromotions) {
                if (promotion.test(order)) {
                    for (const item of line.items) {
                        if (applicablePromotions) {
                            const adjustment = promotion.apply(item, line);
                            if (adjustment) {
                                item.pendingAdjustments = item.pendingAdjustments.concat(adjustment);
                            }
                        }
                    }
                }
                this.calculateOrderTotals(order);
            }
        }
        const applicableOrderPromotions = promotions.filter(p => p.test(order));
        if (applicableOrderPromotions.length) {
            for (const promotion of applicableOrderPromotions) {
                const adjustment = promotion.apply(order);
                if (adjustment) {
                    order.pendingAdjustments = order.pendingAdjustments.concat(adjustment);
                }
            }
            this.calculateOrderTotals(order);
        }
    }

    private applyShipping(ctx: RequestContext, order: Order) {
        const results = this.shippingCalculator.getEligibleShippingMethods(ctx, order);
        if (results && results.length) {
            order.shipping = results[0].price;
            order.shippingMethod = results[0].method.description;
        }
    }

    private calculateOrderTotals(order: Order) {
        let totalPrice = 0;
        let totalTax = 0;

        for (const line of order.lines) {
            totalPrice += line.totalPrice;
            totalTax += line.lineTax;
        }
        const totalPriceBeforeTax = totalPrice - totalTax;

        order.subTotalBeforeTax = totalPriceBeforeTax;
        order.subTotal = totalPrice;
    }
}
