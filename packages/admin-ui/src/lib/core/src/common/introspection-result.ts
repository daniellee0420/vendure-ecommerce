// tslint:disable

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AddFulfillmentToOrderResult": [
      "CreateFulfillmentError",
      "EmptyOrderLineSelectionError",
      "Fulfillment",
      "FulfillmentStateTransitionError",
      "InsufficientStockOnHandError",
      "InvalidFulfillmentHandlerError",
      "ItemsAlreadyFulfilledError"
    ],
    "AddManualPaymentToOrderResult": [
      "ManualPaymentStateError",
      "Order"
    ],
    "AuthenticationResult": [
      "CurrentUser",
      "InvalidCredentialsError"
    ],
    "CancelOrderResult": [
      "CancelActiveOrderError",
      "EmptyOrderLineSelectionError",
      "MultipleOrderError",
      "Order",
      "OrderStateTransitionError",
      "QuantityTooGreatError"
    ],
    "CreateAssetResult": [
      "Asset",
      "MimeTypeError"
    ],
    "CreateChannelResult": [
      "Channel",
      "LanguageNotAvailableError"
    ],
    "CreateCustomerResult": [
      "Customer",
      "EmailAddressConflictError"
    ],
    "CreatePromotionResult": [
      "MissingConditionsError",
      "Promotion"
    ],
    "CustomField": [
      "BooleanCustomFieldConfig",
      "DateTimeCustomFieldConfig",
      "FloatCustomFieldConfig",
      "IntCustomFieldConfig",
      "LocaleStringCustomFieldConfig",
      "RelationCustomFieldConfig",
      "StringCustomFieldConfig",
      "TextCustomFieldConfig"
    ],
    "CustomFieldConfig": [
      "BooleanCustomFieldConfig",
      "DateTimeCustomFieldConfig",
      "FloatCustomFieldConfig",
      "IntCustomFieldConfig",
      "LocaleStringCustomFieldConfig",
      "RelationCustomFieldConfig",
      "StringCustomFieldConfig",
      "TextCustomFieldConfig"
    ],
    "ErrorResult": [
      "AlreadyRefundedError",
      "CancelActiveOrderError",
      "ChannelDefaultLanguageError",
      "CouponCodeExpiredError",
      "CouponCodeInvalidError",
      "CouponCodeLimitError",
      "CreateFulfillmentError",
      "EmailAddressConflictError",
      "EmptyOrderLineSelectionError",
      "FulfillmentStateTransitionError",
      "InsufficientStockError",
      "InsufficientStockOnHandError",
      "InvalidCredentialsError",
      "InvalidFulfillmentHandlerError",
      "ItemsAlreadyFulfilledError",
      "LanguageNotAvailableError",
      "ManualPaymentStateError",
      "MimeTypeError",
      "MissingConditionsError",
      "MultipleOrderError",
      "NativeAuthStrategyError",
      "NegativeQuantityError",
      "NoChangesSpecifiedError",
      "NothingToRefundError",
      "OrderLimitError",
      "OrderModificationStateError",
      "OrderStateTransitionError",
      "PaymentMethodMissingError",
      "PaymentOrderMismatchError",
      "PaymentStateTransitionError",
      "ProductOptionInUseError",
      "QuantityTooGreatError",
      "RefundOrderStateError",
      "RefundPaymentIdMissingError",
      "RefundStateTransitionError",
      "SettlePaymentError"
    ],
    "ModifyOrderResult": [
      "CouponCodeExpiredError",
      "CouponCodeInvalidError",
      "CouponCodeLimitError",
      "InsufficientStockError",
      "NegativeQuantityError",
      "NoChangesSpecifiedError",
      "Order",
      "OrderLimitError",
      "OrderModificationStateError",
      "PaymentMethodMissingError",
      "RefundPaymentIdMissingError"
    ],
    "NativeAuthenticationResult": [
      "CurrentUser",
      "InvalidCredentialsError",
      "NativeAuthStrategyError"
    ],
    "Node": [
      "Address",
      "Administrator",
      "Allocation",
      "Asset",
      "AuthenticationMethod",
      "Cancellation",
      "Channel",
      "Collection",
      "Country",
      "Customer",
      "CustomerGroup",
      "Facet",
      "FacetValue",
      "Fulfillment",
      "HistoryEntry",
      "Job",
      "Order",
      "OrderItem",
      "OrderLine",
      "OrderModification",
      "Payment",
      "PaymentMethod",
      "Product",
      "ProductOption",
      "ProductOptionGroup",
      "ProductVariant",
      "Promotion",
      "Refund",
      "Release",
      "Return",
      "Role",
      "Sale",
      "ShippingMethod",
      "StockAdjustment",
      "Surcharge",
      "Tag",
      "TaxCategory",
      "TaxRate",
      "User",
      "Zone"
    ],
    "PaginatedList": [
      "AdministratorList",
      "AssetList",
      "CollectionList",
      "CountryList",
      "CustomerGroupList",
      "CustomerList",
      "FacetList",
      "HistoryEntryList",
      "JobList",
      "OrderList",
      "PaymentMethodList",
      "ProductList",
      "ProductVariantList",
      "PromotionList",
      "RoleList",
      "ShippingMethodList",
      "TagList",
      "TaxRateList"
    ],
    "RefundOrderResult": [
      "AlreadyRefundedError",
      "MultipleOrderError",
      "NothingToRefundError",
      "OrderStateTransitionError",
      "PaymentOrderMismatchError",
      "QuantityTooGreatError",
      "Refund",
      "RefundOrderStateError",
      "RefundStateTransitionError"
    ],
    "RemoveOptionGroupFromProductResult": [
      "Product",
      "ProductOptionInUseError"
    ],
    "SearchResultPrice": [
      "PriceRange",
      "SinglePrice"
    ],
    "SettlePaymentResult": [
      "OrderStateTransitionError",
      "Payment",
      "PaymentStateTransitionError",
      "SettlePaymentError"
    ],
    "SettleRefundResult": [
      "Refund",
      "RefundStateTransitionError"
    ],
    "StockMovement": [
      "Allocation",
      "Cancellation",
      "Release",
      "Return",
      "Sale",
      "StockAdjustment"
    ],
    "StockMovementItem": [
      "Allocation",
      "Cancellation",
      "Release",
      "Return",
      "Sale",
      "StockAdjustment"
    ],
    "TransitionFulfillmentToStateResult": [
      "Fulfillment",
      "FulfillmentStateTransitionError"
    ],
    "TransitionOrderToStateResult": [
      "Order",
      "OrderStateTransitionError"
    ],
    "TransitionPaymentToStateResult": [
      "Payment",
      "PaymentStateTransitionError"
    ],
    "UpdateChannelResult": [
      "Channel",
      "LanguageNotAvailableError"
    ],
    "UpdateCustomerResult": [
      "Customer",
      "EmailAddressConflictError"
    ],
    "UpdateGlobalSettingsResult": [
      "ChannelDefaultLanguageError",
      "GlobalSettings"
    ],
    "UpdatePromotionResult": [
      "MissingConditionsError",
      "Promotion"
    ]
  }
};
      export default result;
    