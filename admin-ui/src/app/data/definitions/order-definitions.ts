import gql from 'graphql-tag';

export const ADJUSTMENT_FRAGMENT = gql`
    fragment Adjustment on Adjustment {
        adjustmentSource
        amount
        description
        type
    }
`;

export const SHIPPING_ADDRESS_FRAGMENT = gql`
    fragment ShippingAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        phoneNumber
    }
`;

export const ORDER_FRAGMENT = gql`
    fragment Order on Order {
        id
        createdAt
        updatedAt
        code
        state
        total
        currencyCode
        customer {
            id
            firstName
            lastName
        }
    }
`;

export const FULFILLMENT_FRAGMENT = gql`
    fragment Fulfillment on Fulfillment {
        id
        createdAt
        updatedAt
        method
        trackingCode
    }
`;

export const ORDER_WITH_LINES_FRAGMENT = gql`
    fragment OrderWithLines on Order {
        id
        createdAt
        updatedAt
        code
        state
        active
        customer {
            id
            firstName
            lastName
        }
        lines {
            id
            featuredAsset {
                preview
            }
            productVariant {
                id
                name
                sku
            }
            unitPrice
            unitPriceWithTax
            quantity
            items {
                id
                unitPrice
                unitPriceIncludesTax
                unitPriceWithTax
                taxRate
                fulfillment {
                    ...Fulfillment
                }
            }
            totalPrice
        }
        adjustments {
            ...Adjustment
        }
        subTotal
        subTotalBeforeTax
        totalBeforeTax
        currencyCode
        shipping
        shippingMethod {
            id
            code
            description
        }
        shippingAddress {
            ...ShippingAddress
        }
        payments {
            id
            transactionId
            amount
            method
            state
            metadata
        }
        fulfillments {
            ...Fulfillment
        }
        total
    }
    ${ADJUSTMENT_FRAGMENT}
    ${SHIPPING_ADDRESS_FRAGMENT}
    ${FULFILLMENT_FRAGMENT}
`;

export const GET_ORDERS_LIST = gql`
    query GetOrderList($options: OrderListOptions) {
        orders(options: $options) {
            items {
                ...Order
            }
            totalItems
        }
    }
    ${ORDER_FRAGMENT}
`;

export const GET_ORDER = gql`
    query GetOrder($id: ID!) {
        order(id: $id) {
            ...OrderWithLines
        }
    }
    ${ORDER_WITH_LINES_FRAGMENT}
`;

export const SETTLE_PAYMENT = gql`
    mutation SettlePayment($id: ID!) {
        settlePayment(id: $id) {
            id
            transactionId
            amount
            method
            state
            metadata
        }
    }
`;

export const CREATE_FULFILLMENT = gql`
    mutation CreateFulfillment($input: CreateFulfillmentInput!) {
        createFulfillment(input: $input) {
            ...Fulfillment
        }
    }
    ${FULFILLMENT_FRAGMENT}
`;
