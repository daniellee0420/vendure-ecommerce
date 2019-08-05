import { ShippingEligibilityChecker } from './shipping-eligibility-checker';

export const defaultShippingEligibilityChecker = new ShippingEligibilityChecker({
    code: 'default-shipping-eligibility-checker',
    description: 'Default Shipping Eligibility Checker',
    args: {
        orderMinimum: { type: 'int' },
    },
    check: (order, args) => {
        return order.total >= args.orderMinimum;
    },
});
