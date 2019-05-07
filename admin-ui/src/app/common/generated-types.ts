// tslint:disable
// Generated in 2019-05-07T14:21:21+02:00

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 */
  DateTime: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Address = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1: Scalars['String'],
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country: Country,
  phoneNumber?: Maybe<Scalars['String']>,
  defaultShippingAddress?: Maybe<Scalars['Boolean']>,
  defaultBillingAddress?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type Adjustment = {
  adjustmentSource: Scalars['String'],
  type: AdjustmentType,
  description: Scalars['String'],
  amount: Scalars['Int'],
};

export type AdjustmentOperations = {
  conditions: Array<ConfigurableOperation>,
  actions: Array<ConfigurableOperation>,
};

export enum AdjustmentType {
  TAX = 'TAX',
  PROMOTION = 'PROMOTION',
  SHIPPING = 'SHIPPING',
  REFUND = 'REFUND',
  TAX_REFUND = 'TAX_REFUND',
  PROMOTION_REFUND = 'PROMOTION_REFUND',
  SHIPPING_REFUND = 'SHIPPING_REFUND'
}

export type Administrator = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  emailAddress: Scalars['String'],
  user: User,
};

export type AdministratorFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  firstName?: Maybe<StringOperators>,
  lastName?: Maybe<StringOperators>,
  emailAddress?: Maybe<StringOperators>,
};

export type AdministratorList = PaginatedList & {
  items: Array<Administrator>,
  totalItems: Scalars['Int'],
};

export type AdministratorListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<AdministratorSortParameter>,
  filter?: Maybe<AdministratorFilterParameter>,
};

export type AdministratorSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  firstName?: Maybe<SortOrder>,
  lastName?: Maybe<SortOrder>,
  emailAddress?: Maybe<SortOrder>,
};

export type Asset = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  type: AssetType,
  fileSize: Scalars['Int'],
  mimeType: Scalars['String'],
  source: Scalars['String'],
  preview: Scalars['String'],
};

export type AssetFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  name?: Maybe<StringOperators>,
  type?: Maybe<StringOperators>,
  fileSize?: Maybe<NumberOperators>,
  mimeType?: Maybe<StringOperators>,
  source?: Maybe<StringOperators>,
  preview?: Maybe<StringOperators>,
};

export type AssetList = PaginatedList & {
  items: Array<Asset>,
  totalItems: Scalars['Int'],
};

export type AssetListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<AssetSortParameter>,
  filter?: Maybe<AssetFilterParameter>,
};

export type AssetSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  fileSize?: Maybe<SortOrder>,
  mimeType?: Maybe<SortOrder>,
  source?: Maybe<SortOrder>,
  preview?: Maybe<SortOrder>,
};

export enum AssetType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  BINARY = 'BINARY'
}

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>,
};

export type Cancellation = Node & StockMovement & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  type: StockMovementType,
  quantity: Scalars['Int'],
  orderLine: OrderLine,
};

export type Channel = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  token: Scalars['String'],
  defaultTaxZone?: Maybe<Zone>,
  defaultShippingZone?: Maybe<Zone>,
  defaultLanguageCode: LanguageCode,
  currencyCode: CurrencyCode,
  pricesIncludeTax: Scalars['Boolean'],
};

export type Collection = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode?: Maybe<LanguageCode>,
  name: Scalars['String'],
  breadcrumbs: Array<CollectionBreadcrumb>,
  position: Scalars['Int'],
  description: Scalars['String'],
  featuredAsset?: Maybe<Asset>,
  assets: Array<Asset>,
  parent?: Maybe<Collection>,
  children?: Maybe<Array<Collection>>,
  filters: Array<ConfigurableOperation>,
  translations: Array<CollectionTranslation>,
  productVariants: ProductVariantList,
  isPrivate: Scalars['Boolean'],
  customFields?: Maybe<Scalars['JSON']>,
};


export type CollectionProductVariantsArgs = {
  options?: Maybe<ProductVariantListOptions>
};

export type CollectionBreadcrumb = {
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type CollectionFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  languageCode?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  position?: Maybe<NumberOperators>,
  description?: Maybe<StringOperators>,
  isPrivate?: Maybe<BooleanOperators>,
};

export type CollectionList = PaginatedList & {
  items: Array<Collection>,
  totalItems: Scalars['Int'],
};

export type CollectionListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<CollectionSortParameter>,
  filter?: Maybe<CollectionFilterParameter>,
};

export type CollectionSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  position?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
};

export type CollectionTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
  description: Scalars['String'],
};

export type CollectionTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ConfigArg = {
  name: Scalars['String'],
  type: ConfigArgType,
  value?: Maybe<Scalars['String']>,
};

export type ConfigArgInput = {
  name: Scalars['String'],
  type: ConfigArgType,
  value?: Maybe<Scalars['String']>,
};

/** Certain entities allow arbitrary configuration arguments to be specified which can then
 * be set in the admin-ui and used in the business logic of the app. These are the valid
 * data types of such arguments. The data type influences:
 * 
 * 1. How the argument form field is rendered in the admin-ui
 * 2. The JavaScript type into which the value is coerced before being passed to the business logic.
 */
export enum ConfigArgType {
  PERCENTAGE = 'PERCENTAGE',
  MONEY = 'MONEY',
  INT = 'INT',
  STRING = 'STRING',
  DATETIME = 'DATETIME',
  BOOLEAN = 'BOOLEAN',
  FACET_VALUE_IDS = 'FACET_VALUE_IDS',
  STRING_OPERATOR = 'STRING_OPERATOR'
}

export type ConfigurableOperation = {
  code: Scalars['String'],
  args: Array<ConfigArg>,
  description: Scalars['String'],
};

export type ConfigurableOperationInput = {
  code: Scalars['String'],
  arguments: Array<ConfigArgInput>,
};

export type Country = Node & {
  id: Scalars['ID'],
  languageCode: LanguageCode,
  code: Scalars['String'],
  name: Scalars['String'],
  enabled: Scalars['Boolean'],
  translations: Array<CountryTranslation>,
};

export type CountryFilterParameter = {
  languageCode?: Maybe<StringOperators>,
  code?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  enabled?: Maybe<BooleanOperators>,
};

export type CountryList = PaginatedList & {
  items: Array<Country>,
  totalItems: Scalars['Int'],
};

export type CountryListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<CountrySortParameter>,
  filter?: Maybe<CountryFilterParameter>,
};

export type CountrySortParameter = {
  id?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
};

export type CountryTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type CountryTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
};

export type CreateAddressInput = {
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1: Scalars['String'],
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  countryCode: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  defaultShippingAddress?: Maybe<Scalars['Boolean']>,
  defaultBillingAddress?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateAdministratorInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  emailAddress: Scalars['String'],
  password: Scalars['String'],
  roleIds: Array<Scalars['ID']>,
};

export type CreateAssetInput = {
  file: Scalars['Upload'],
};

export type CreateChannelInput = {
  code: Scalars['String'],
  token: Scalars['String'],
  defaultLanguageCode: LanguageCode,
  pricesIncludeTax: Scalars['Boolean'],
  currencyCode: CurrencyCode,
  defaultTaxZoneId?: Maybe<Scalars['ID']>,
  defaultShippingZoneId?: Maybe<Scalars['ID']>,
};

export type CreateCollectionInput = {
  isPrivate?: Maybe<Scalars['Boolean']>,
  featuredAssetId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  parentId?: Maybe<Scalars['ID']>,
  filters: Array<ConfigurableOperationInput>,
  translations: Array<CollectionTranslationInput>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateCountryInput = {
  code: Scalars['String'],
  translations: Array<CountryTranslationInput>,
  enabled: Scalars['Boolean'],
};

export type CreateCustomerGroupInput = {
  name: Scalars['String'],
  customerIds?: Maybe<Array<Scalars['ID']>>,
};

export type CreateCustomerInput = {
  title?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  emailAddress: Scalars['String'],
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateFacetInput = {
  code: Scalars['String'],
  isPrivate: Scalars['Boolean'],
  translations: Array<FacetTranslationInput>,
  values?: Maybe<Array<CreateFacetValueWithFacetInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateFacetValueInput = {
  facetId: Scalars['ID'],
  code: Scalars['String'],
  translations: Array<FacetValueTranslationInput>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateFacetValueWithFacetInput = {
  code: Scalars['String'],
  translations: Array<FacetValueTranslationInput>,
};

export type CreateProductInput = {
  featuredAssetId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  facetValueIds?: Maybe<Array<Scalars['ID']>>,
  translations: Array<ProductTranslationInput>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateProductOptionGroupInput = {
  code: Scalars['String'],
  translations: Array<ProductOptionGroupTranslationInput>,
  options: Array<CreateProductOptionInput>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateProductOptionInput = {
  code: Scalars['String'],
  translations: Array<ProductOptionGroupTranslationInput>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreateProductVariantInput = {
  translations: Array<ProductVariantTranslationInput>,
  facetValueIds?: Maybe<Array<Scalars['ID']>>,
  sku: Scalars['String'],
  price?: Maybe<Scalars['Int']>,
  taxCategoryId: Scalars['ID'],
  optionIds?: Maybe<Array<Scalars['ID']>>,
  featuredAssetId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  stockOnHand?: Maybe<Scalars['Int']>,
  trackInventory?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type CreatePromotionInput = {
  name: Scalars['String'],
  enabled: Scalars['Boolean'],
  conditions: Array<ConfigurableOperationInput>,
  actions: Array<ConfigurableOperationInput>,
};

export type CreateRoleInput = {
  code: Scalars['String'],
  description: Scalars['String'],
  permissions: Array<Permission>,
};

export type CreateShippingMethodInput = {
  code: Scalars['String'],
  description: Scalars['String'],
  checker: ConfigurableOperationInput,
  calculator: ConfigurableOperationInput,
};

export type CreateTaxCategoryInput = {
  name: Scalars['String'],
};

export type CreateTaxRateInput = {
  name: Scalars['String'],
  enabled: Scalars['Boolean'],
  value: Scalars['Int'],
  categoryId: Scalars['ID'],
  zoneId: Scalars['ID'],
  customerGroupId?: Maybe<Scalars['ID']>,
};

export type CreateZoneInput = {
  name: Scalars['String'],
  memberIds?: Maybe<Array<Scalars['ID']>>,
};

/** ISO 4217 currency code */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = 'AED',
  /** Afghan afghani */
  AFN = 'AFN',
  /** Albanian lek */
  ALL = 'ALL',
  /** Armenian dram */
  AMD = 'AMD',
  /** Netherlands Antillean guilder */
  ANG = 'ANG',
  /** Angolan kwanza */
  AOA = 'AOA',
  /** Argentine peso */
  ARS = 'ARS',
  /** Australian dollar */
  AUD = 'AUD',
  /** Aruban florin */
  AWG = 'AWG',
  /** Azerbaijani manat */
  AZN = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  BAM = 'BAM',
  /** Barbados dollar */
  BBD = 'BBD',
  /** Bangladeshi taka */
  BDT = 'BDT',
  /** Bulgarian lev */
  BGN = 'BGN',
  /** Bahraini dinar */
  BHD = 'BHD',
  /** Burundian franc */
  BIF = 'BIF',
  /** Bermudian dollar */
  BMD = 'BMD',
  /** Brunei dollar */
  BND = 'BND',
  /** Boliviano */
  BOB = 'BOB',
  /** Brazilian real */
  BRL = 'BRL',
  /** Bahamian dollar */
  BSD = 'BSD',
  /** Bhutanese ngultrum */
  BTN = 'BTN',
  /** Botswana pula */
  BWP = 'BWP',
  /** Belarusian ruble */
  BYN = 'BYN',
  /** Belize dollar */
  BZD = 'BZD',
  /** Canadian dollar */
  CAD = 'CAD',
  /** Congolese franc */
  CHE = 'CHE',
  /** Swiss franc */
  CHW = 'CHW',
  /** Chilean peso */
  CLP = 'CLP',
  /** Renminbi (Chinese) yuan */
  CNY = 'CNY',
  /** Colombian peso */
  COP = 'COP',
  /** Costa Rican colon */
  CRC = 'CRC',
  /** Cuban convertible peso */
  CUC = 'CUC',
  /** Cuban peso */
  CUP = 'CUP',
  /** Cape Verde escudo */
  CVE = 'CVE',
  /** Czech koruna */
  CZK = 'CZK',
  /** Djiboutian franc */
  DJF = 'DJF',
  /** Danish krone */
  DKK = 'DKK',
  /** Dominican peso */
  DOP = 'DOP',
  /** Algerian dinar */
  DZD = 'DZD',
  /** Egyptian pound */
  EGP = 'EGP',
  /** Eritrean nakfa */
  ERN = 'ERN',
  /** Ethiopian birr */
  ETB = 'ETB',
  /** Euro */
  EUR = 'EUR',
  /** Fiji dollar */
  FJD = 'FJD',
  /** Falkland Islands pound */
  FKP = 'FKP',
  /** Pound sterling */
  GBP = 'GBP',
  /** Georgian lari */
  GEL = 'GEL',
  /** Ghanaian cedi */
  GHS = 'GHS',
  /** Gibraltar pound */
  GIP = 'GIP',
  /** Gambian dalasi */
  GMD = 'GMD',
  /** Guinean franc */
  GNF = 'GNF',
  /** Guatemalan quetzal */
  GTQ = 'GTQ',
  /** Guyanese dollar */
  GYD = 'GYD',
  /** Hong Kong dollar */
  HKD = 'HKD',
  /** Honduran lempira */
  HNL = 'HNL',
  /** Croatian kuna */
  HRK = 'HRK',
  /** Haitian gourde */
  HTG = 'HTG',
  /** Hungarian forint */
  HUF = 'HUF',
  /** Indonesian rupiah */
  IDR = 'IDR',
  /** Israeli new shekel */
  ILS = 'ILS',
  /** Indian rupee */
  INR = 'INR',
  /** Iraqi dinar */
  IQD = 'IQD',
  /** Iranian rial */
  IRR = 'IRR',
  /** Icelandic króna */
  ISK = 'ISK',
  /** Jamaican dollar */
  JMD = 'JMD',
  /** Jordanian dinar */
  JOD = 'JOD',
  /** Japanese yen */
  JPY = 'JPY',
  /** Kenyan shilling */
  KES = 'KES',
  /** Kyrgyzstani som */
  KGS = 'KGS',
  /** Cambodian riel */
  KHR = 'KHR',
  /** Comoro franc */
  KMF = 'KMF',
  /** North Korean won */
  KPW = 'KPW',
  /** South Korean won */
  KRW = 'KRW',
  /** Kuwaiti dinar */
  KWD = 'KWD',
  /** Cayman Islands dollar */
  KYD = 'KYD',
  /** Kazakhstani tenge */
  KZT = 'KZT',
  /** Lao kip */
  LAK = 'LAK',
  /** Lebanese pound */
  LBP = 'LBP',
  /** Sri Lankan rupee */
  LKR = 'LKR',
  /** Liberian dollar */
  LRD = 'LRD',
  /** Lesotho loti */
  LSL = 'LSL',
  /** Libyan dinar */
  LYD = 'LYD',
  /** Moroccan dirham */
  MAD = 'MAD',
  /** Moldovan leu */
  MDL = 'MDL',
  /** Malagasy ariary */
  MGA = 'MGA',
  /** Macedonian denar */
  MKD = 'MKD',
  /** Myanmar kyat */
  MMK = 'MMK',
  /** Mongolian tögrög */
  MNT = 'MNT',
  /** Macanese pataca */
  MOP = 'MOP',
  /** Mauritanian ouguiya */
  MRU = 'MRU',
  /** Mauritian rupee */
  MUR = 'MUR',
  /** Maldivian rufiyaa */
  MVR = 'MVR',
  /** Malawian kwacha */
  MWK = 'MWK',
  /** Mexican peso */
  MXN = 'MXN',
  /** Malaysian ringgit */
  MYR = 'MYR',
  /** Mozambican metical */
  MZN = 'MZN',
  /** Namibian dollar */
  NAD = 'NAD',
  /** Nigerian naira */
  NGN = 'NGN',
  /** Nicaraguan córdoba */
  NIO = 'NIO',
  /** Norwegian krone */
  NOK = 'NOK',
  /** Nepalese rupee */
  NPR = 'NPR',
  /** New Zealand dollar */
  NZD = 'NZD',
  /** Omani rial */
  OMR = 'OMR',
  /** Panamanian balboa */
  PAB = 'PAB',
  /** Peruvian sol */
  PEN = 'PEN',
  /** Papua New Guinean kina */
  PGK = 'PGK',
  /** Philippine peso */
  PHP = 'PHP',
  /** Pakistani rupee */
  PKR = 'PKR',
  /** Polish złoty */
  PLN = 'PLN',
  /** Paraguayan guaraní */
  PYG = 'PYG',
  /** Qatari riyal */
  QAR = 'QAR',
  /** Romanian leu */
  RON = 'RON',
  /** Serbian dinar */
  RSD = 'RSD',
  /** Russian ruble */
  RUB = 'RUB',
  /** Rwandan franc */
  RWF = 'RWF',
  /** Saudi riyal */
  SAR = 'SAR',
  /** Solomon Islands dollar */
  SBD = 'SBD',
  /** Seychelles rupee */
  SCR = 'SCR',
  /** Sudanese pound */
  SDG = 'SDG',
  /** Swedish krona/kronor */
  SEK = 'SEK',
  /** Singapore dollar */
  SGD = 'SGD',
  /** Saint Helena pound */
  SHP = 'SHP',
  /** Sierra Leonean leone */
  SLL = 'SLL',
  /** Somali shilling */
  SOS = 'SOS',
  /** Surinamese dollar */
  SRD = 'SRD',
  /** South Sudanese pound */
  SSP = 'SSP',
  /** São Tomé and Príncipe dobra */
  STN = 'STN',
  /** Salvadoran colón */
  SVC = 'SVC',
  /** Syrian pound */
  SYP = 'SYP',
  /** Swazi lilangeni */
  SZL = 'SZL',
  /** Thai baht */
  THB = 'THB',
  /** Tajikistani somoni */
  TJS = 'TJS',
  /** Turkmenistan manat */
  TMT = 'TMT',
  /** Tunisian dinar */
  TND = 'TND',
  /** Tongan paʻanga */
  TOP = 'TOP',
  /** Turkish lira */
  TRY = 'TRY',
  /** Trinidad and Tobago dollar */
  TTD = 'TTD',
  /** New Taiwan dollar */
  TWD = 'TWD',
  /** Tanzanian shilling */
  TZS = 'TZS',
  /** Ukrainian hryvnia */
  UAH = 'UAH',
  /** Ugandan shilling */
  UGX = 'UGX',
  /** United States dollar */
  USD = 'USD',
  /** Uruguayan peso */
  UYU = 'UYU',
  /** Uzbekistan som */
  UZS = 'UZS',
  /** Venezuelan bolívar soberano */
  VES = 'VES',
  /** Vietnamese đồng */
  VND = 'VND',
  /** Vanuatu vatu */
  VUV = 'VUV',
  /** Samoan tala */
  WST = 'WST',
  /** CFA franc BEAC */
  XAF = 'XAF',
  /** East Caribbean dollar */
  XCD = 'XCD',
  /** CFA franc BCEAO */
  XOF = 'XOF',
  /** CFP franc (franc Pacifique) */
  XPF = 'XPF',
  /** Yemeni rial */
  YER = 'YER',
  /** South African rand */
  ZAR = 'ZAR',
  /** Zambian kwacha */
  ZMW = 'ZMW',
  /** Zimbabwean dollar */
  ZWL = 'ZWL'
}

export type CurrentUser = {
  id: Scalars['ID'],
  identifier: Scalars['String'],
  channelTokens: Array<Scalars['String']>,
};

export type Customer = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  title?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  emailAddress: Scalars['String'],
  addresses?: Maybe<Array<Address>>,
  orders: OrderList,
  user?: Maybe<User>,
  customFields?: Maybe<Scalars['JSON']>,
};


export type CustomerOrdersArgs = {
  options?: Maybe<OrderListOptions>
};

export type CustomerFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  title?: Maybe<StringOperators>,
  firstName?: Maybe<StringOperators>,
  lastName?: Maybe<StringOperators>,
  phoneNumber?: Maybe<StringOperators>,
  emailAddress?: Maybe<StringOperators>,
};

export type CustomerGroup = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
};

export type CustomerList = PaginatedList & {
  items: Array<Customer>,
  totalItems: Scalars['Int'],
};

export type CustomerListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<CustomerSortParameter>,
  filter?: Maybe<CustomerFilterParameter>,
};

export type CustomerSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  title?: Maybe<SortOrder>,
  firstName?: Maybe<SortOrder>,
  lastName?: Maybe<SortOrder>,
  phoneNumber?: Maybe<SortOrder>,
  emailAddress?: Maybe<SortOrder>,
};

export type DateOperators = {
  eq?: Maybe<Scalars['DateTime']>,
  before?: Maybe<Scalars['DateTime']>,
  after?: Maybe<Scalars['DateTime']>,
  between?: Maybe<DateRange>,
};

export type DateRange = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
};


export type DeletionResponse = {
  result: DeletionResult,
  message?: Maybe<Scalars['String']>,
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = 'NOT_DELETED'
}

export type Facet = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
  code: Scalars['String'],
  values: Array<FacetValue>,
  translations: Array<FacetTranslation>,
  isPrivate: Scalars['Boolean'],
  customFields?: Maybe<Scalars['JSON']>,
};

export type FacetFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  languageCode?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  code?: Maybe<StringOperators>,
  isPrivate?: Maybe<BooleanOperators>,
};

export type FacetList = PaginatedList & {
  items: Array<Facet>,
  totalItems: Scalars['Int'],
};

export type FacetListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<FacetSortParameter>,
  filter?: Maybe<FacetFilterParameter>,
};

export type FacetSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
};

export type FacetTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type FacetTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type FacetValue = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  facet: Facet,
  name: Scalars['String'],
  code: Scalars['String'],
  translations: Array<FacetValueTranslation>,
  customFields?: Maybe<Scalars['JSON']>,
};

/** Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  facetValue: FacetValue,
  count: Scalars['Int'],
};

export type FacetValueTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type FacetValueTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type GlobalSettings = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  availableLanguages: Array<LanguageCode>,
  trackInventory: Scalars['Boolean'],
  serverConfig: ServerConfig,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ImportInfo = {
  errors?: Maybe<Array<Scalars['String']>>,
  processed: Scalars['Int'],
  imported: Scalars['Int'],
};


/** ISO 639-1 language code */
export enum LanguageCode {
  /** Afar */
  aa = 'aa',
  /** Abkhazian */
  ab = 'ab',
  /** Afrikaans */
  af = 'af',
  /** Akan */
  ak = 'ak',
  /** Albanian */
  sq = 'sq',
  /** Amharic */
  am = 'am',
  /** Arabic */
  ar = 'ar',
  /** Aragonese */
  an = 'an',
  /** Armenian */
  hy = 'hy',
  /** Assamese */
  as = 'as',
  /** Avaric */
  av = 'av',
  /** Avestan */
  ae = 'ae',
  /** Aymara */
  ay = 'ay',
  /** Azerbaijani */
  az = 'az',
  /** Bashkir */
  ba = 'ba',
  /** Bambara */
  bm = 'bm',
  /** Basque */
  eu = 'eu',
  /** Belarusian */
  be = 'be',
  /** Bengali */
  bn = 'bn',
  /** Bihari languages */
  bh = 'bh',
  /** Bislama */
  bi = 'bi',
  /** Bosnian */
  bs = 'bs',
  /** Breton */
  br = 'br',
  /** Bulgarian */
  bg = 'bg',
  /** Burmese */
  my = 'my',
  /** Catalan; Valencian */
  ca = 'ca',
  /** Chamorro */
  ch = 'ch',
  /** Chechen */
  ce = 'ce',
  /** Chinese */
  zh = 'zh',
  /** Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic */
  cu = 'cu',
  /** Chuvash */
  cv = 'cv',
  /** Cornish */
  kw = 'kw',
  /** Corsican */
  co = 'co',
  /** Cree */
  cr = 'cr',
  /** Czech */
  cs = 'cs',
  /** Danish */
  da = 'da',
  /** Divehi; Dhivehi; Maldivian */
  dv = 'dv',
  /** Dutch; Flemish */
  nl = 'nl',
  /** Dzongkha */
  dz = 'dz',
  /** English */
  en = 'en',
  /** Esperanto */
  eo = 'eo',
  /** Estonian */
  et = 'et',
  /** Ewe */
  ee = 'ee',
  /** Faroese */
  fo = 'fo',
  /** Fijian */
  fj = 'fj',
  /** Finnish */
  fi = 'fi',
  /** French */
  fr = 'fr',
  /** Western Frisian */
  fy = 'fy',
  /** Fulah */
  ff = 'ff',
  /** Georgian */
  ka = 'ka',
  /** German */
  de = 'de',
  /** Gaelic; Scottish Gaelic */
  gd = 'gd',
  /** Irish */
  ga = 'ga',
  /** Galician */
  gl = 'gl',
  /** Manx */
  gv = 'gv',
  /** Greek, Modern (1453-) */
  el = 'el',
  /** Guarani */
  gn = 'gn',
  /** Gujarati */
  gu = 'gu',
  /** Haitian; Haitian Creole */
  ht = 'ht',
  /** Hausa */
  ha = 'ha',
  /** Hebrew */
  he = 'he',
  /** Herero */
  hz = 'hz',
  /** Hindi */
  hi = 'hi',
  /** Hiri Motu */
  ho = 'ho',
  /** Croatian */
  hr = 'hr',
  /** Hungarian */
  hu = 'hu',
  /** Igbo */
  ig = 'ig',
  /** Icelandic */
  is = 'is',
  /** Ido */
  io = 'io',
  /** Sichuan Yi; Nuosu */
  ii = 'ii',
  /** Inuktitut */
  iu = 'iu',
  /** Interlingue; Occidental */
  ie = 'ie',
  /** Interlingua (International Auxiliary Language Association) */
  ia = 'ia',
  /** Indonesian */
  id = 'id',
  /** Inupiaq */
  ik = 'ik',
  /** Italian */
  it = 'it',
  /** Javanese */
  jv = 'jv',
  /** Japanese */
  ja = 'ja',
  /** Kalaallisut; Greenlandic */
  kl = 'kl',
  /** Kannada */
  kn = 'kn',
  /** Kashmiri */
  ks = 'ks',
  /** Kanuri */
  kr = 'kr',
  /** Kazakh */
  kk = 'kk',
  /** Central Khmer */
  km = 'km',
  /** Kikuyu; Gikuyu */
  ki = 'ki',
  /** Kinyarwanda */
  rw = 'rw',
  /** Kirghiz; Kyrgyz */
  ky = 'ky',
  /** Komi */
  kv = 'kv',
  /** Kongo */
  kg = 'kg',
  /** Korean */
  ko = 'ko',
  /** Kuanyama; Kwanyama */
  kj = 'kj',
  /** Kurdish */
  ku = 'ku',
  /** Lao */
  lo = 'lo',
  /** Latin */
  la = 'la',
  /** Latvian */
  lv = 'lv',
  /** Limburgan; Limburger; Limburgish */
  li = 'li',
  /** Lingala */
  ln = 'ln',
  /** Lithuanian */
  lt = 'lt',
  /** Luxembourgish; Letzeburgesch */
  lb = 'lb',
  /** Luba-Katanga */
  lu = 'lu',
  /** Ganda */
  lg = 'lg',
  /** Macedonian */
  mk = 'mk',
  /** Marshallese */
  mh = 'mh',
  /** Malayalam */
  ml = 'ml',
  /** Maori */
  mi = 'mi',
  /** Marathi */
  mr = 'mr',
  /** Malay */
  ms = 'ms',
  /** Malagasy */
  mg = 'mg',
  /** Maltese */
  mt = 'mt',
  /** Mongolian */
  mn = 'mn',
  /** Nauru */
  na = 'na',
  /** Navajo; Navaho */
  nv = 'nv',
  /** Ndebele, South; South Ndebele */
  nr = 'nr',
  /** Ndebele, North; North Ndebele */
  nd = 'nd',
  /** Ndonga */
  ng = 'ng',
  /** Nepali */
  ne = 'ne',
  /** Norwegian Nynorsk; Nynorsk, Norwegian */
  nn = 'nn',
  /** Bokmål, Norwegian; Norwegian Bokmål */
  nb = 'nb',
  /** Norwegian */
  no = 'no',
  /** Chichewa; Chewa; Nyanja */
  ny = 'ny',
  /** Occitan (post 1500); Provençal */
  oc = 'oc',
  /** Ojibwa */
  oj = 'oj',
  /** Oriya */
  or = 'or',
  /** Oromo */
  om = 'om',
  /** Ossetian; Ossetic */
  os = 'os',
  /** Panjabi; Punjabi */
  pa = 'pa',
  /** Persian */
  fa = 'fa',
  /** Pali */
  pi = 'pi',
  /** Polish */
  pl = 'pl',
  /** Portuguese */
  pt = 'pt',
  /** Pushto; Pashto */
  ps = 'ps',
  /** Quechua */
  qu = 'qu',
  /** Romansh */
  rm = 'rm',
  /** Romanian; Moldavian; Moldovan */
  ro = 'ro',
  /** Rundi */
  rn = 'rn',
  /** Russian */
  ru = 'ru',
  /** Sango */
  sg = 'sg',
  /** Sanskrit */
  sa = 'sa',
  /** Sinhala; Sinhalese */
  si = 'si',
  /** Slovak */
  sk = 'sk',
  /** Slovenian */
  sl = 'sl',
  /** Northern Sami */
  se = 'se',
  /** Samoan */
  sm = 'sm',
  /** Shona */
  sn = 'sn',
  /** Sindhi */
  sd = 'sd',
  /** Somali */
  so = 'so',
  /** Sotho, Southern */
  st = 'st',
  /** Spanish; Castilian */
  es = 'es',
  /** Sardinian */
  sc = 'sc',
  /** Serbian */
  sr = 'sr',
  /** Swati */
  ss = 'ss',
  /** Sundanese */
  su = 'su',
  /** Swahili */
  sw = 'sw',
  /** Swedish */
  sv = 'sv',
  /** Tahitian */
  ty = 'ty',
  /** Tamil */
  ta = 'ta',
  /** Tatar */
  tt = 'tt',
  /** Telugu */
  te = 'te',
  /** Tajik */
  tg = 'tg',
  /** Tagalog */
  tl = 'tl',
  /** Thai */
  th = 'th',
  /** Tibetan */
  bo = 'bo',
  /** Tigrinya */
  ti = 'ti',
  /** Tonga (Tonga Islands) */
  to = 'to',
  /** Tswana */
  tn = 'tn',
  /** Tsonga */
  ts = 'ts',
  /** Turkmen */
  tk = 'tk',
  /** Turkish */
  tr = 'tr',
  /** Twi */
  tw = 'tw',
  /** Uighur; Uyghur */
  ug = 'ug',
  /** Ukrainian */
  uk = 'uk',
  /** Urdu */
  ur = 'ur',
  /** Uzbek */
  uz = 'uz',
  /** Venda */
  ve = 've',
  /** Vietnamese */
  vi = 'vi',
  /** Volapük */
  vo = 'vo',
  /** Welsh */
  cy = 'cy',
  /** Walloon */
  wa = 'wa',
  /** Wolof */
  wo = 'wo',
  /** Xhosa */
  xh = 'xh',
  /** Yiddish */
  yi = 'yi',
  /** Yoruba */
  yo = 'yo',
  /** Zhuang; Chuang */
  za = 'za',
  /** Zulu */
  zu = 'zu'
}

export type LoginResult = {
  user: CurrentUser,
};

export type MoveCollectionInput = {
  collectionId: Scalars['ID'],
  parentId: Scalars['ID'],
  index: Scalars['Int'],
};

export type Mutation = {
  /** Create a new Administrator */
  createAdministrator: Administrator,
  /** Update an existing Administrator */
  updateAdministrator: Administrator,
  /** Assign a Role to an Administrator */
  assignRoleToAdministrator: Administrator,
  /** Create a new Channel */
  createChannel: Channel,
  /** Update an existing Channel */
  updateChannel: Channel,
  /** Create a new Asset */
  createAssets: Array<Asset>,
  login: LoginResult,
  logout: Scalars['Boolean'],
  /** Create a new Country */
  createCountry: Country,
  /** Update an existing Country */
  updateCountry: Country,
  /** Delete a Country */
  deleteCountry: DeletionResponse,
  /** Create a new Collection */
  createCollection: Collection,
  /** Update an existing Collection */
  updateCollection: Collection,
  /** Move a Collection to a different parent or index */
  moveCollection: Collection,
  /** Create a new CustomerGroup */
  createCustomerGroup: CustomerGroup,
  /** Update an existing CustomerGroup */
  updateCustomerGroup: CustomerGroup,
  /** Add Customers to a CustomerGroup */
  addCustomersToGroup: CustomerGroup,
  /** Remove Customers from a CustomerGroup */
  removeCustomersFromGroup: CustomerGroup,
  /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
  createCustomer: Customer,
  /** Update an existing Customer */
  updateCustomer: Customer,
  /** Delete a Customer */
  deleteCustomer: DeletionResponse,
  /** Create a new Address and associate it with the Customer specified by customerId */
  createCustomerAddress: Address,
  /** Update an existing Address */
  updateCustomerAddress: Address,
  /** Update an existing Address */
  deleteCustomerAddress: Scalars['Boolean'],
  /** Create a new Facet */
  createFacet: Facet,
  /** Update an existing Facet */
  updateFacet: Facet,
  /** Delete an existing Facet */
  deleteFacet: DeletionResponse,
  /** Create one or more FacetValues */
  createFacetValues: Array<FacetValue>,
  /** Update one or more FacetValues */
  updateFacetValues: Array<FacetValue>,
  /** Delete one or more FacetValues */
  deleteFacetValues: Array<DeletionResponse>,
  updateGlobalSettings: GlobalSettings,
  importProducts?: Maybe<ImportInfo>,
  /** Update an existing PaymentMethod */
  updatePaymentMethod: PaymentMethod,
  /** Create a new ProductOptionGroup */
  createProductOptionGroup: ProductOptionGroup,
  /** Update an existing ProductOptionGroup */
  updateProductOptionGroup: ProductOptionGroup,
  reindex: SearchReindexResponse,
  /** Create a new Product */
  createProduct: Product,
  /** Update an existing Product */
  updateProduct: Product,
  /** Delete a Product */
  deleteProduct: DeletionResponse,
  /** Add an OptionGroup to a Product */
  addOptionGroupToProduct: Product,
  /** Remove an OptionGroup from a Product */
  removeOptionGroupFromProduct: Product,
  /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
  generateVariantsForProduct: Product,
  /** Update existing ProductVariants */
  updateProductVariants: Array<Maybe<ProductVariant>>,
  createPromotion: Promotion,
  updatePromotion: Promotion,
  deletePromotion: DeletionResponse,
  /** Create a new Role */
  createRole: Role,
  /** Update an existing Role */
  updateRole: Role,
  /** Create a new TaxCategory */
  createTaxCategory: TaxCategory,
  /** Update an existing TaxCategory */
  updateTaxCategory: TaxCategory,
  /** Create a new ShippingMethod */
  createShippingMethod: ShippingMethod,
  /** Update an existing ShippingMethod */
  updateShippingMethod: ShippingMethod,
  /** Create a new TaxRate */
  createTaxRate: TaxRate,
  /** Update an existing TaxRate */
  updateTaxRate: TaxRate,
  /** Create a new Zone */
  createZone: Zone,
  /** Update an existing Zone */
  updateZone: Zone,
  /** Delete a Zone */
  deleteZone: DeletionResponse,
  /** Add members to a Zone */
  addMembersToZone: Zone,
  /** Remove members from a Zone */
  removeMembersFromZone: Zone,
  requestStarted: Scalars['Int'],
  requestCompleted: Scalars['Int'],
  setAsLoggedIn: UserStatus,
  setAsLoggedOut: UserStatus,
  setUiLanguage?: Maybe<LanguageCode>,
};


export type MutationCreateAdministratorArgs = {
  input: CreateAdministratorInput
};


export type MutationUpdateAdministratorArgs = {
  input: UpdateAdministratorInput
};


export type MutationAssignRoleToAdministratorArgs = {
  administratorId: Scalars['ID'],
  roleId: Scalars['ID']
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput
};


export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>
};


export type MutationLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String'],
  rememberMe?: Maybe<Scalars['Boolean']>
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID']
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput
};


export type MutationMoveCollectionArgs = {
  input: MoveCollectionInput
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput
};


export type MutationAddCustomersToGroupArgs = {
  customerGroupId: Scalars['ID'],
  customerIds: Array<Scalars['ID']>
};


export type MutationRemoveCustomersFromGroupArgs = {
  customerGroupId: Scalars['ID'],
  customerIds: Array<Scalars['ID']>
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput,
  password?: Maybe<Scalars['String']>
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID']
};


export type MutationCreateCustomerAddressArgs = {
  customerId: Scalars['ID'],
  input: CreateAddressInput
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']
};


export type MutationCreateFacetArgs = {
  input: CreateFacetInput
};


export type MutationUpdateFacetArgs = {
  input: UpdateFacetInput
};


export type MutationDeleteFacetArgs = {
  id: Scalars['ID'],
  force?: Maybe<Scalars['Boolean']>
};


export type MutationCreateFacetValuesArgs = {
  input: Array<CreateFacetValueInput>
};


export type MutationUpdateFacetValuesArgs = {
  input: Array<UpdateFacetValueInput>
};


export type MutationDeleteFacetValuesArgs = {
  ids: Array<Scalars['ID']>,
  force?: Maybe<Scalars['Boolean']>
};


export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput
};


export type MutationImportProductsArgs = {
  csvFile: Scalars['Upload']
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput
};


export type MutationCreateProductOptionGroupArgs = {
  input: CreateProductOptionGroupInput
};


export type MutationUpdateProductOptionGroupArgs = {
  input: UpdateProductOptionGroupInput
};


export type MutationCreateProductArgs = {
  input: CreateProductInput
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']
};


export type MutationAddOptionGroupToProductArgs = {
  productId: Scalars['ID'],
  optionGroupId: Scalars['ID']
};


export type MutationRemoveOptionGroupFromProductArgs = {
  productId: Scalars['ID'],
  optionGroupId: Scalars['ID']
};


export type MutationGenerateVariantsForProductArgs = {
  productId: Scalars['ID'],
  defaultTaxCategoryId?: Maybe<Scalars['ID']>,
  defaultPrice?: Maybe<Scalars['Int']>,
  defaultSku?: Maybe<Scalars['String']>
};


export type MutationUpdateProductVariantsArgs = {
  input: Array<UpdateProductVariantInput>
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID']
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput
};


export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput
};


export type MutationUpdateTaxCategoryArgs = {
  input: UpdateTaxCategoryInput
};


export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput
};


export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput
};


export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput
};


export type MutationCreateZoneArgs = {
  input: CreateZoneInput
};


export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput
};


export type MutationDeleteZoneArgs = {
  id: Scalars['ID']
};


export type MutationAddMembersToZoneArgs = {
  zoneId: Scalars['ID'],
  memberIds: Array<Scalars['ID']>
};


export type MutationRemoveMembersFromZoneArgs = {
  zoneId: Scalars['ID'],
  memberIds: Array<Scalars['ID']>
};


export type MutationSetAsLoggedInArgs = {
  username: Scalars['String'],
  loginTime: Scalars['String']
};


export type MutationSetUiLanguageArgs = {
  languageCode?: Maybe<LanguageCode>
};

export type NetworkStatus = {
  inFlightRequests: Scalars['Int'],
};

export type Node = {
  id: Scalars['ID'],
};

export type NumberOperators = {
  eq?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  between?: Maybe<NumberRange>,
};

export type NumberRange = {
  start: Scalars['Float'],
  end: Scalars['Float'],
};

export type Order = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  state: Scalars['String'],
  active: Scalars['Boolean'],
  customer?: Maybe<Customer>,
  shippingAddress?: Maybe<OrderAddress>,
  billingAddress?: Maybe<OrderAddress>,
  lines: Array<OrderLine>,
  adjustments: Array<Adjustment>,
  payments?: Maybe<Array<Payment>>,
  subTotalBeforeTax: Scalars['Int'],
  subTotal: Scalars['Int'],
  currencyCode: CurrencyCode,
  shipping: Scalars['Int'],
  shippingMethod?: Maybe<ShippingMethod>,
  totalBeforeTax: Scalars['Int'],
  total: Scalars['Int'],
};

export type OrderAddress = {
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1?: Maybe<Scalars['String']>,
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
};

export type OrderFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  code?: Maybe<StringOperators>,
  state?: Maybe<StringOperators>,
  active?: Maybe<BooleanOperators>,
  subTotalBeforeTax?: Maybe<NumberOperators>,
  subTotal?: Maybe<NumberOperators>,
  currencyCode?: Maybe<StringOperators>,
  shipping?: Maybe<NumberOperators>,
  totalBeforeTax?: Maybe<NumberOperators>,
  total?: Maybe<NumberOperators>,
};

export type OrderItem = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  unitPrice: Scalars['Int'],
  unitPriceWithTax: Scalars['Int'],
  unitPriceIncludesTax: Scalars['Boolean'],
  taxRate: Scalars['Float'],
  adjustments: Array<Adjustment>,
};

export type OrderLine = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  featuredAsset?: Maybe<Asset>,
  unitPrice: Scalars['Int'],
  unitPriceWithTax: Scalars['Int'],
  quantity: Scalars['Int'],
  items: Array<OrderItem>,
  totalPrice: Scalars['Int'],
  adjustments: Array<Adjustment>,
  order: Order,
};

export type OrderList = PaginatedList & {
  items: Array<Order>,
  totalItems: Scalars['Int'],
};

export type OrderListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<OrderSortParameter>,
  filter?: Maybe<OrderFilterParameter>,
};

export type OrderSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
  state?: Maybe<SortOrder>,
  subTotalBeforeTax?: Maybe<SortOrder>,
  subTotal?: Maybe<SortOrder>,
  shipping?: Maybe<SortOrder>,
  totalBeforeTax?: Maybe<SortOrder>,
  total?: Maybe<SortOrder>,
};

export type PaginatedList = {
  items: Array<Node>,
  totalItems: Scalars['Int'],
};

export type Payment = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  method: Scalars['String'],
  amount: Scalars['Int'],
  state: Scalars['String'],
  transactionId?: Maybe<Scalars['String']>,
  metadata?: Maybe<Scalars['JSON']>,
};

export type PaymentMethod = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  enabled: Scalars['Boolean'],
  configArgs: Array<ConfigArg>,
};

export type PaymentMethodFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  code?: Maybe<StringOperators>,
  enabled?: Maybe<BooleanOperators>,
};

export type PaymentMethodList = PaginatedList & {
  items: Array<PaymentMethod>,
  totalItems: Scalars['Int'],
};

export type PaymentMethodListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<PaymentMethodSortParameter>,
  filter?: Maybe<PaymentMethodFilterParameter>,
};

export type PaymentMethodSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
};

/**  Permissions for administrators and customers  */
export enum Permission {
  /**  The Authenticated role means simply that the user is logged in  */
  Authenticated = 'Authenticated',
  /**  SuperAdmin can perform the most sensitive tasks  */
  SuperAdmin = 'SuperAdmin',
  /**  Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /**  Public means any unauthenticated user may perform the operation  */
  Public = 'Public',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  min: Scalars['Int'],
  max: Scalars['Int'],
};

export type Product = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
  slug: Scalars['String'],
  description: Scalars['String'],
  featuredAsset?: Maybe<Asset>,
  assets: Array<Asset>,
  variants: Array<ProductVariant>,
  optionGroups: Array<ProductOptionGroup>,
  facetValues: Array<FacetValue>,
  translations: Array<ProductTranslation>,
  collections: Array<Collection>,
  enabled: Scalars['Boolean'],
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  languageCode?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  slug?: Maybe<StringOperators>,
  description?: Maybe<StringOperators>,
  enabled?: Maybe<BooleanOperators>,
};

export type ProductList = PaginatedList & {
  items: Array<Product>,
  totalItems: Scalars['Int'],
};

export type ProductListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<ProductSortParameter>,
  filter?: Maybe<ProductFilterParameter>,
};

export type ProductOption = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode?: Maybe<LanguageCode>,
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  translations: Array<ProductOptionTranslation>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductOptionGroup = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  code: Scalars['String'],
  name: Scalars['String'],
  options: Array<ProductOption>,
  translations: Array<ProductOptionGroupTranslation>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductOptionGroupTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type ProductOptionGroupTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductOptionTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type ProductOptionTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  slug?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
};

export type ProductTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
  slug: Scalars['String'],
  description: Scalars['String'],
};

export type ProductTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type ProductVariant = Node & {
  id: Scalars['ID'],
  productId: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  sku: Scalars['String'],
  name: Scalars['String'],
  featuredAsset?: Maybe<Asset>,
  assets: Array<Asset>,
  price: Scalars['Int'],
  currencyCode: CurrencyCode,
  priceIncludesTax: Scalars['Boolean'],
  priceWithTax: Scalars['Int'],
  taxRateApplied: TaxRate,
  taxCategory: TaxCategory,
  options: Array<ProductOption>,
  facetValues: Array<FacetValue>,
  translations: Array<ProductVariantTranslation>,
  enabled: Scalars['Boolean'],
  stockOnHand: Scalars['Int'],
  trackInventory: Scalars['Boolean'],
  stockMovements: StockMovementList,
  customFields?: Maybe<Scalars['JSON']>,
};


export type ProductVariantStockMovementsArgs = {
  options?: Maybe<StockMovementListOptions>
};

export type ProductVariantFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  languageCode?: Maybe<StringOperators>,
  sku?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  price?: Maybe<NumberOperators>,
  currencyCode?: Maybe<StringOperators>,
  priceIncludesTax?: Maybe<BooleanOperators>,
  priceWithTax?: Maybe<NumberOperators>,
  enabled?: Maybe<BooleanOperators>,
  stockOnHand?: Maybe<NumberOperators>,
  trackInventory?: Maybe<BooleanOperators>,
};

export type ProductVariantList = PaginatedList & {
  items: Array<ProductVariant>,
  totalItems: Scalars['Int'],
};

export type ProductVariantListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<ProductVariantSortParameter>,
  filter?: Maybe<ProductVariantFilterParameter>,
};

export type ProductVariantSortParameter = {
  id?: Maybe<SortOrder>,
  productId?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  sku?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  price?: Maybe<SortOrder>,
  priceWithTax?: Maybe<SortOrder>,
  stockOnHand?: Maybe<SortOrder>,
};

export type ProductVariantTranslation = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  languageCode: LanguageCode,
  name: Scalars['String'],
};

export type ProductVariantTranslationInput = {
  id?: Maybe<Scalars['ID']>,
  languageCode: LanguageCode,
  name?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type Promotion = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  enabled: Scalars['Boolean'],
  conditions: Array<ConfigurableOperation>,
  actions: Array<ConfigurableOperation>,
};

export type PromotionFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  name?: Maybe<StringOperators>,
  enabled?: Maybe<BooleanOperators>,
};

export type PromotionList = PaginatedList & {
  items: Array<Promotion>,
  totalItems: Scalars['Int'],
};

export type PromotionListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<PromotionSortParameter>,
  filter?: Maybe<PromotionFilterParameter>,
};

export type PromotionSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
};

export type Query = {
  administrators: AdministratorList,
  administrator?: Maybe<Administrator>,
  channels: Array<Channel>,
  channel?: Maybe<Channel>,
  activeChannel: Channel,
  assets: AssetList,
  asset?: Maybe<Asset>,
  me?: Maybe<CurrentUser>,
  countries: CountryList,
  country?: Maybe<Country>,
  collections: CollectionList,
  collection?: Maybe<Collection>,
  collectionFilters: Array<ConfigurableOperation>,
  customerGroups: Array<CustomerGroup>,
  customerGroup?: Maybe<CustomerGroup>,
  customers: CustomerList,
  customer?: Maybe<Customer>,
  facets: FacetList,
  facet?: Maybe<Facet>,
  globalSettings: GlobalSettings,
  paymentMethods: PaymentMethodList,
  paymentMethod?: Maybe<PaymentMethod>,
  order?: Maybe<Order>,
  orders: OrderList,
  productOptionGroups: Array<ProductOptionGroup>,
  productOptionGroup?: Maybe<ProductOptionGroup>,
  search: SearchResponse,
  products: ProductList,
  product?: Maybe<Product>,
  promotion?: Maybe<Promotion>,
  promotions: PromotionList,
  adjustmentOperations: AdjustmentOperations,
  roles: RoleList,
  role?: Maybe<Role>,
  taxCategories: Array<TaxCategory>,
  taxCategory?: Maybe<TaxCategory>,
  shippingMethods: ShippingMethodList,
  shippingMethod?: Maybe<ShippingMethod>,
  shippingEligibilityCheckers: Array<ConfigurableOperation>,
  shippingCalculators: Array<ConfigurableOperation>,
  taxRates: TaxRateList,
  taxRate?: Maybe<TaxRate>,
  zones: Array<Zone>,
  zone?: Maybe<Zone>,
  temp__?: Maybe<Scalars['Boolean']>,
  networkStatus: NetworkStatus,
  userStatus: UserStatus,
  uiState: UiState,
};


export type QueryAdministratorsArgs = {
  options?: Maybe<AdministratorListOptions>
};


export type QueryAdministratorArgs = {
  id: Scalars['ID']
};


export type QueryChannelArgs = {
  id: Scalars['ID']
};


export type QueryAssetsArgs = {
  options?: Maybe<AssetListOptions>
};


export type QueryAssetArgs = {
  id: Scalars['ID']
};


export type QueryCountriesArgs = {
  options?: Maybe<CountryListOptions>
};


export type QueryCountryArgs = {
  id: Scalars['ID']
};


export type QueryCollectionsArgs = {
  languageCode?: Maybe<LanguageCode>,
  options?: Maybe<CollectionListOptions>
};


export type QueryCollectionArgs = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type QueryCustomerGroupArgs = {
  id: Scalars['ID']
};


export type QueryCustomersArgs = {
  options?: Maybe<CustomerListOptions>
};


export type QueryCustomerArgs = {
  id: Scalars['ID']
};


export type QueryFacetsArgs = {
  languageCode?: Maybe<LanguageCode>,
  options?: Maybe<FacetListOptions>
};


export type QueryFacetArgs = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type QueryPaymentMethodsArgs = {
  options?: Maybe<PaymentMethodListOptions>
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID']
};


export type QueryOrderArgs = {
  id: Scalars['ID']
};


export type QueryOrdersArgs = {
  options?: Maybe<OrderListOptions>
};


export type QueryProductOptionGroupsArgs = {
  languageCode?: Maybe<LanguageCode>,
  filterTerm?: Maybe<Scalars['String']>
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type QuerySearchArgs = {
  input: SearchInput
};


export type QueryProductsArgs = {
  languageCode?: Maybe<LanguageCode>,
  options?: Maybe<ProductListOptions>
};


export type QueryProductArgs = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type QueryPromotionArgs = {
  id: Scalars['ID']
};


export type QueryPromotionsArgs = {
  options?: Maybe<PromotionListOptions>
};


export type QueryRolesArgs = {
  options?: Maybe<RoleListOptions>
};


export type QueryRoleArgs = {
  id: Scalars['ID']
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID']
};


export type QueryShippingMethodsArgs = {
  options?: Maybe<ShippingMethodListOptions>
};


export type QueryShippingMethodArgs = {
  id: Scalars['ID']
};


export type QueryTaxRatesArgs = {
  options?: Maybe<TaxRateListOptions>
};


export type QueryTaxRateArgs = {
  id: Scalars['ID']
};


export type QueryZoneArgs = {
  id: Scalars['ID']
};

export type Return = Node & StockMovement & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  type: StockMovementType,
  quantity: Scalars['Int'],
  orderItem: OrderItem,
};

export type Role = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  description: Scalars['String'],
  permissions: Array<Permission>,
  channels: Array<Channel>,
};

export type RoleFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  code?: Maybe<StringOperators>,
  description?: Maybe<StringOperators>,
};

export type RoleList = PaginatedList & {
  items: Array<Role>,
  totalItems: Scalars['Int'],
};

export type RoleListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<RoleSortParameter>,
  filter?: Maybe<RoleFilterParameter>,
};

export type RoleSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
};

export type Sale = Node & StockMovement & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  type: StockMovementType,
  quantity: Scalars['Int'],
  orderLine: OrderLine,
};

export type SearchInput = {
  term?: Maybe<Scalars['String']>,
  facetIds?: Maybe<Array<Scalars['String']>>,
  collectionId?: Maybe<Scalars['String']>,
  groupByProduct?: Maybe<Scalars['Boolean']>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SearchResultSortParameter>,
};

export type SearchReindexResponse = {
  success: Scalars['Boolean'],
  timeTaken: Scalars['Int'],
  indexedItemCount: Scalars['Int'],
};

export type SearchResponse = {
  items: Array<SearchResult>,
  totalItems: Scalars['Int'],
  facetValues: Array<FacetValueResult>,
};

export type SearchResult = {
  sku: Scalars['String'],
  slug: Scalars['String'],
  productId: Scalars['ID'],
  productName: Scalars['String'],
  productPreview: Scalars['String'],
  productVariantId: Scalars['ID'],
  productVariantName: Scalars['String'],
  productVariantPreview: Scalars['String'],
  price: SearchResultPrice,
  priceWithTax: SearchResultPrice,
  currencyCode: CurrencyCode,
  description: Scalars['String'],
  facetIds: Array<Scalars['String']>,
  facetValueIds: Array<Scalars['String']>,
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['String']>,
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'],
  enabled: Scalars['Boolean'],
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>,
  price?: Maybe<SortOrder>,
};

export type ServerConfig = {
  customFields?: Maybe<Scalars['JSON']>,
};

export type ShippingMethod = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  description: Scalars['String'],
  checker: ConfigurableOperation,
  calculator: ConfigurableOperation,
};

export type ShippingMethodFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  code?: Maybe<StringOperators>,
  description?: Maybe<StringOperators>,
};

export type ShippingMethodList = PaginatedList & {
  items: Array<ShippingMethod>,
  totalItems: Scalars['Int'],
};

export type ShippingMethodListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<ShippingMethodSortParameter>,
  filter?: Maybe<ShippingMethodFilterParameter>,
};

export type ShippingMethodQuote = {
  id: Scalars['ID'],
  price: Scalars['Int'],
  description: Scalars['String'],
};

export type ShippingMethodSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  code?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
};

/** The price value where the result has a single price */
export type SinglePrice = {
  value: Scalars['Int'],
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StockAdjustment = Node & StockMovement & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  type: StockMovementType,
  quantity: Scalars['Int'],
};

export type StockMovement = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  productVariant: ProductVariant,
  type: StockMovementType,
  quantity: Scalars['Int'],
};

export type StockMovementItem = StockAdjustment | Sale | Cancellation | Return;

export type StockMovementList = {
  items: Array<StockMovementItem>,
  totalItems: Scalars['Int'],
};

export type StockMovementListOptions = {
  type?: Maybe<StockMovementType>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
};

export enum StockMovementType {
  ADJUSTMENT = 'ADJUSTMENT',
  SALE = 'SALE',
  CANCELLATION = 'CANCELLATION',
  RETURN = 'RETURN'
}

export type StringOperators = {
  eq?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
};

export type TaxCategory = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
};

export type TaxRate = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  enabled: Scalars['Boolean'],
  value: Scalars['Int'],
  category: TaxCategory,
  zone: Zone,
  customerGroup?: Maybe<CustomerGroup>,
};

export type TaxRateFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  name?: Maybe<StringOperators>,
  enabled?: Maybe<BooleanOperators>,
  value?: Maybe<NumberOperators>,
};

export type TaxRateList = PaginatedList & {
  items: Array<TaxRate>,
  totalItems: Scalars['Int'],
};

export type TaxRateListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<TaxRateSortParameter>,
  filter?: Maybe<TaxRateFilterParameter>,
};

export type TaxRateSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  value?: Maybe<SortOrder>,
};

export type UiState = {
  language: LanguageCode,
};

export type UpdateAddressInput = {
  id: Scalars['ID'],
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1?: Maybe<Scalars['String']>,
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  defaultShippingAddress?: Maybe<Scalars['Boolean']>,
  defaultBillingAddress?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateAdministratorInput = {
  id: Scalars['ID'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  emailAddress?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  roleIds?: Maybe<Array<Scalars['ID']>>,
};

export type UpdateChannelInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  defaultLanguageCode?: Maybe<LanguageCode>,
  pricesIncludeTax?: Maybe<Scalars['Boolean']>,
  currencyCode?: Maybe<CurrencyCode>,
  defaultTaxZoneId?: Maybe<Scalars['ID']>,
  defaultShippingZoneId?: Maybe<Scalars['ID']>,
};

export type UpdateCollectionInput = {
  id: Scalars['ID'],
  isPrivate?: Maybe<Scalars['Boolean']>,
  featuredAssetId?: Maybe<Scalars['ID']>,
  parentId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  filters?: Maybe<Array<ConfigurableOperationInput>>,
  translations?: Maybe<Array<CollectionTranslationInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateCountryInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  translations?: Maybe<Array<CountryTranslationInput>>,
  enabled?: Maybe<Scalars['Boolean']>,
};

export type UpdateCustomerGroupInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdateCustomerInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  emailAddress?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateFacetInput = {
  id: Scalars['ID'],
  isPrivate?: Maybe<Scalars['Boolean']>,
  code?: Maybe<Scalars['String']>,
  translations?: Maybe<Array<FacetTranslationInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateFacetValueInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  translations?: Maybe<Array<FacetValueTranslationInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateGlobalSettingsInput = {
  availableLanguages?: Maybe<Array<LanguageCode>>,
  trackInventory?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdatePaymentMethodInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  enabled?: Maybe<Scalars['Boolean']>,
  configArgs?: Maybe<Array<ConfigArgInput>>,
};

export type UpdateProductInput = {
  id: Scalars['ID'],
  enabled?: Maybe<Scalars['Boolean']>,
  featuredAssetId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  facetValueIds?: Maybe<Array<Scalars['ID']>>,
  translations?: Maybe<Array<ProductTranslationInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateProductOptionGroupInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  translations?: Maybe<Array<ProductOptionGroupTranslationInput>>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdateProductVariantInput = {
  id: Scalars['ID'],
  enabled?: Maybe<Scalars['Boolean']>,
  translations?: Maybe<Array<ProductVariantTranslationInput>>,
  facetValueIds?: Maybe<Array<Scalars['ID']>>,
  sku?: Maybe<Scalars['String']>,
  taxCategoryId?: Maybe<Scalars['ID']>,
  price?: Maybe<Scalars['Int']>,
  featuredAssetId?: Maybe<Scalars['ID']>,
  assetIds?: Maybe<Array<Scalars['ID']>>,
  stockOnHand?: Maybe<Scalars['Int']>,
  trackInventory?: Maybe<Scalars['Boolean']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UpdatePromotionInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  enabled?: Maybe<Scalars['Boolean']>,
  conditions?: Maybe<Array<ConfigurableOperationInput>>,
  actions?: Maybe<Array<ConfigurableOperationInput>>,
};

export type UpdateRoleInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Permission>>,
};

export type UpdateShippingMethodInput = {
  id: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  checker?: Maybe<ConfigurableOperationInput>,
  calculator?: Maybe<ConfigurableOperationInput>,
};

export type UpdateTaxCategoryInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdateTaxRateInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  enabled?: Maybe<Scalars['Boolean']>,
  categoryId?: Maybe<Scalars['ID']>,
  zoneId?: Maybe<Scalars['ID']>,
  customerGroupId?: Maybe<Scalars['ID']>,
};

export type UpdateZoneInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};


export type User = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  identifier: Scalars['String'],
  verified: Scalars['Boolean'],
  roles: Array<Role>,
  lastLogin?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['JSON']>,
};

export type UserStatus = {
  username: Scalars['String'],
  isLoggedIn: Scalars['Boolean'],
  loginTime: Scalars['String'],
};

export type Zone = Node & {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  members: Array<Country>,
};
export type AdministratorFragment = ({ __typename?: 'Administrator' } & Pick<Administrator, 'id' | 'firstName' | 'lastName' | 'emailAddress'> & { user: ({ __typename?: 'User' } & Pick<User, 'id' | 'identifier' | 'lastLogin'> & { roles: Array<({ __typename?: 'Role' } & Pick<Role, 'id' | 'code' | 'description' | 'permissions'>)> }) });

export type RoleFragment = ({ __typename?: 'Role' } & Pick<Role, 'id' | 'code' | 'description' | 'permissions'> & { channels: Array<({ __typename?: 'Channel' } & Pick<Channel, 'id' | 'code' | 'token'>)> });

export type GetAdministratorsQueryVariables = {
  options?: Maybe<AdministratorListOptions>
};


export type GetAdministratorsQuery = ({ __typename?: 'Query' } & { administrators: ({ __typename?: 'AdministratorList' } & Pick<AdministratorList, 'totalItems'> & { items: Array<({ __typename?: 'Administrator' } & AdministratorFragment)> }) });

export type GetAdministratorQueryVariables = {
  id: Scalars['ID']
};


export type GetAdministratorQuery = ({ __typename?: 'Query' } & { administrator: Maybe<({ __typename?: 'Administrator' } & AdministratorFragment)> });

export type CreateAdministratorMutationVariables = {
  input: CreateAdministratorInput
};


export type CreateAdministratorMutation = ({ __typename?: 'Mutation' } & { createAdministrator: ({ __typename?: 'Administrator' } & AdministratorFragment) });

export type UpdateAdministratorMutationVariables = {
  input: UpdateAdministratorInput
};


export type UpdateAdministratorMutation = ({ __typename?: 'Mutation' } & { updateAdministrator: ({ __typename?: 'Administrator' } & AdministratorFragment) });

export type GetRolesQueryVariables = {
  options?: Maybe<RoleListOptions>
};


export type GetRolesQuery = ({ __typename?: 'Query' } & { roles: ({ __typename?: 'RoleList' } & Pick<RoleList, 'totalItems'> & { items: Array<({ __typename?: 'Role' } & RoleFragment)> }) });

export type GetRoleQueryVariables = {
  id: Scalars['ID']
};


export type GetRoleQuery = ({ __typename?: 'Query' } & { role: Maybe<({ __typename?: 'Role' } & RoleFragment)> });

export type CreateRoleMutationVariables = {
  input: CreateRoleInput
};


export type CreateRoleMutation = ({ __typename?: 'Mutation' } & { createRole: ({ __typename?: 'Role' } & RoleFragment) });

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput
};


export type UpdateRoleMutation = ({ __typename?: 'Mutation' } & { updateRole: ({ __typename?: 'Role' } & RoleFragment) });

export type AssignRoleToAdministratorMutationVariables = {
  administratorId: Scalars['ID'],
  roleId: Scalars['ID']
};


export type AssignRoleToAdministratorMutation = ({ __typename?: 'Mutation' } & { assignRoleToAdministrator: ({ __typename?: 'Administrator' } & AdministratorFragment) });

export type CurrentUserFragment = ({ __typename?: 'CurrentUser' } & Pick<CurrentUser, 'id' | 'identifier' | 'channelTokens'>);

export type AttemptLoginMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String'],
  rememberMe: Scalars['Boolean']
};


export type AttemptLoginMutation = ({ __typename?: 'Mutation' } & { login: ({ __typename?: 'LoginResult' } & { user: ({ __typename?: 'CurrentUser' } & CurrentUserFragment) }) });

export type LogOutMutationVariables = {};


export type LogOutMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'logout'>);

export type GetCurrentUserQueryVariables = {};


export type GetCurrentUserQuery = ({ __typename?: 'Query' } & { me: Maybe<({ __typename?: 'CurrentUser' } & CurrentUserFragment)> });

export type RequestStartedMutationVariables = {};


export type RequestStartedMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'requestStarted'>);

export type RequestCompletedMutationVariables = {};


export type RequestCompletedMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'requestCompleted'>);

export type SetAsLoggedInMutationVariables = {
  username: Scalars['String'],
  loginTime: Scalars['String']
};


export type SetAsLoggedInMutation = ({ __typename?: 'Mutation' } & { setAsLoggedIn: ({ __typename?: 'UserStatus' } & Pick<UserStatus, 'username' | 'isLoggedIn' | 'loginTime'>) });

export type SetAsLoggedOutMutationVariables = {};


export type SetAsLoggedOutMutation = ({ __typename?: 'Mutation' } & { setAsLoggedOut: ({ __typename?: 'UserStatus' } & Pick<UserStatus, 'username' | 'isLoggedIn' | 'loginTime'>) });

export type SetUiLanguageMutationVariables = {
  languageCode: LanguageCode
};


export type SetUiLanguageMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'setUiLanguage'>);

export type GetNetworkStatusQueryVariables = {};


export type GetNetworkStatusQuery = ({ __typename?: 'Query' } & { networkStatus: ({ __typename?: 'NetworkStatus' } & Pick<NetworkStatus, 'inFlightRequests'>) });

export type GetUserStatusQueryVariables = {};


export type GetUserStatusQuery = ({ __typename?: 'Query' } & { userStatus: ({ __typename?: 'UserStatus' } & Pick<UserStatus, 'username' | 'isLoggedIn' | 'loginTime'>) });

export type GetUiStateQueryVariables = {};


export type GetUiStateQuery = ({ __typename?: 'Query' } & { uiState: ({ __typename?: 'UiState' } & Pick<UiState, 'language'>) });

export type GetCollectionFiltersQueryVariables = {};


export type GetCollectionFiltersQuery = ({ __typename?: 'Query' } & { collectionFilters: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)> });

export type CollectionFragment = ({ __typename?: 'Collection' } & Pick<Collection, 'id' | 'name' | 'description' | 'isPrivate' | 'languageCode'> & { featuredAsset: Maybe<({ __typename?: 'Asset' } & AssetFragment)>, assets: Array<({ __typename?: 'Asset' } & AssetFragment)>, filters: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)>, translations: Array<({ __typename?: 'CollectionTranslation' } & Pick<CollectionTranslation, 'id' | 'languageCode' | 'name' | 'description'>)>, parent: Maybe<({ __typename?: 'Collection' } & Pick<Collection, 'id' | 'name'>)>, children: Maybe<Array<({ __typename?: 'Collection' } & Pick<Collection, 'id' | 'name'>)>> });

export type GetCollectionListQueryVariables = {
  options?: Maybe<CollectionListOptions>,
  languageCode?: Maybe<LanguageCode>
};


export type GetCollectionListQuery = ({ __typename?: 'Query' } & { collections: ({ __typename?: 'CollectionList' } & Pick<CollectionList, 'totalItems'> & { items: Array<({ __typename?: 'Collection' } & Pick<Collection, 'id' | 'name' | 'description' | 'isPrivate'> & { featuredAsset: Maybe<({ __typename?: 'Asset' } & AssetFragment)>, parent: Maybe<({ __typename?: 'Collection' } & Pick<Collection, 'id'>)> })> }) });

export type GetCollectionQueryVariables = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type GetCollectionQuery = ({ __typename?: 'Query' } & { collection: Maybe<({ __typename?: 'Collection' } & CollectionFragment)> });

export type CreateCollectionMutationVariables = {
  input: CreateCollectionInput
};


export type CreateCollectionMutation = ({ __typename?: 'Mutation' } & { createCollection: ({ __typename?: 'Collection' } & CollectionFragment) });

export type UpdateCollectionMutationVariables = {
  input: UpdateCollectionInput
};


export type UpdateCollectionMutation = ({ __typename?: 'Mutation' } & { updateCollection: ({ __typename?: 'Collection' } & CollectionFragment) });

export type MoveCollectionMutationVariables = {
  input: MoveCollectionInput
};


export type MoveCollectionMutation = ({ __typename?: 'Mutation' } & { moveCollection: ({ __typename?: 'Collection' } & CollectionFragment) });

export type GetCollectionContentsQueryVariables = {
  id: Scalars['ID'],
  options?: Maybe<ProductVariantListOptions>
};


export type GetCollectionContentsQuery = ({ __typename?: 'Query' } & { collection: Maybe<({ __typename?: 'Collection' } & Pick<Collection, 'id' | 'name'> & { productVariants: ({ __typename?: 'ProductVariantList' } & Pick<ProductVariantList, 'totalItems'> & { items: Array<({ __typename?: 'ProductVariant' } & Pick<ProductVariant, 'id' | 'productId' | 'name'>)> }) })> });

export type AddressFragment = ({ __typename?: 'Address' } & Pick<Address, 'id' | 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'phoneNumber' | 'defaultShippingAddress' | 'defaultBillingAddress'> & { country: ({ __typename?: 'Country' } & Pick<Country, 'id' | 'code' | 'name'>) });

export type CustomerFragment = ({ __typename?: 'Customer' } & Pick<Customer, 'id' | 'title' | 'firstName' | 'lastName' | 'phoneNumber' | 'emailAddress'> & { user: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'identifier' | 'verified' | 'lastLogin'>)>, addresses: Maybe<Array<({ __typename?: 'Address' } & AddressFragment)>> });

export type GetCustomerListQueryVariables = {
  options?: Maybe<CustomerListOptions>
};


export type GetCustomerListQuery = ({ __typename?: 'Query' } & { customers: ({ __typename?: 'CustomerList' } & Pick<CustomerList, 'totalItems'> & { items: Array<({ __typename?: 'Customer' } & Pick<Customer, 'id' | 'title' | 'firstName' | 'lastName' | 'emailAddress'> & { user: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'verified'>)> })> }) });

export type GetCustomerQueryVariables = {
  id: Scalars['ID'],
  orderListOptions?: Maybe<OrderListOptions>
};


export type GetCustomerQuery = ({ __typename?: 'Query' } & { customer: Maybe<({ __typename?: 'Customer' } & { orders: ({ __typename?: 'OrderList' } & Pick<OrderList, 'totalItems'> & { items: Array<({ __typename?: 'Order' } & Pick<Order, 'id' | 'code' | 'state' | 'total' | 'currencyCode' | 'updatedAt'>)> }) } & CustomerFragment)> });

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  password?: Maybe<Scalars['String']>
};


export type CreateCustomerMutation = ({ __typename?: 'Mutation' } & { createCustomer: ({ __typename?: 'Customer' } & CustomerFragment) });

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput
};


export type UpdateCustomerMutation = ({ __typename?: 'Mutation' } & { updateCustomer: ({ __typename?: 'Customer' } & CustomerFragment) });

export type CreateCustomerAddressMutationVariables = {
  customerId: Scalars['ID'],
  input: CreateAddressInput
};


export type CreateCustomerAddressMutation = ({ __typename?: 'Mutation' } & { createCustomerAddress: ({ __typename?: 'Address' } & AddressFragment) });

export type UpdateCustomerAddressMutationVariables = {
  input: UpdateAddressInput
};


export type UpdateCustomerAddressMutation = ({ __typename?: 'Mutation' } & { updateCustomerAddress: ({ __typename?: 'Address' } & AddressFragment) });

export type FacetValueFragment = ({ __typename?: 'FacetValue' } & Pick<FacetValue, 'id' | 'languageCode' | 'code' | 'name'> & { translations: Array<({ __typename?: 'FacetValueTranslation' } & Pick<FacetValueTranslation, 'id' | 'languageCode' | 'name'>)>, facet: ({ __typename?: 'Facet' } & Pick<Facet, 'id' | 'name'>) });

export type FacetWithValuesFragment = ({ __typename?: 'Facet' } & Pick<Facet, 'id' | 'languageCode' | 'isPrivate' | 'code' | 'name'> & { translations: Array<({ __typename?: 'FacetTranslation' } & Pick<FacetTranslation, 'id' | 'languageCode' | 'name'>)>, values: Array<({ __typename?: 'FacetValue' } & FacetValueFragment)> });

export type CreateFacetMutationVariables = {
  input: CreateFacetInput
};


export type CreateFacetMutation = ({ __typename?: 'Mutation' } & { createFacet: ({ __typename?: 'Facet' } & FacetWithValuesFragment) });

export type UpdateFacetMutationVariables = {
  input: UpdateFacetInput
};


export type UpdateFacetMutation = ({ __typename?: 'Mutation' } & { updateFacet: ({ __typename?: 'Facet' } & FacetWithValuesFragment) });

export type DeleteFacetMutationVariables = {
  id: Scalars['ID'],
  force?: Maybe<Scalars['Boolean']>
};


export type DeleteFacetMutation = ({ __typename?: 'Mutation' } & { deleteFacet: ({ __typename?: 'DeletionResponse' } & Pick<DeletionResponse, 'result' | 'message'>) });

export type CreateFacetValuesMutationVariables = {
  input: Array<CreateFacetValueInput>
};


export type CreateFacetValuesMutation = ({ __typename?: 'Mutation' } & { createFacetValues: Array<({ __typename?: 'FacetValue' } & FacetValueFragment)> });

export type UpdateFacetValuesMutationVariables = {
  input: Array<UpdateFacetValueInput>
};


export type UpdateFacetValuesMutation = ({ __typename?: 'Mutation' } & { updateFacetValues: Array<({ __typename?: 'FacetValue' } & FacetValueFragment)> });

export type DeleteFacetValuesMutationVariables = {
  ids: Array<Scalars['ID']>,
  force?: Maybe<Scalars['Boolean']>
};


export type DeleteFacetValuesMutation = ({ __typename?: 'Mutation' } & { deleteFacetValues: Array<({ __typename?: 'DeletionResponse' } & Pick<DeletionResponse, 'result' | 'message'>)> });

export type GetFacetListQueryVariables = {
  options?: Maybe<FacetListOptions>,
  languageCode?: Maybe<LanguageCode>
};


export type GetFacetListQuery = ({ __typename?: 'Query' } & { facets: ({ __typename?: 'FacetList' } & Pick<FacetList, 'totalItems'> & { items: Array<({ __typename?: 'Facet' } & FacetWithValuesFragment)> }) });

export type GetFacetWithValuesQueryVariables = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type GetFacetWithValuesQuery = ({ __typename?: 'Query' } & { facet: Maybe<({ __typename?: 'Facet' } & FacetWithValuesFragment)> });

export type AdjustmentFragment = ({ __typename?: 'Adjustment' } & Pick<Adjustment, 'adjustmentSource' | 'amount' | 'description' | 'type'>);

export type ShippingAddressFragment = ({ __typename?: 'OrderAddress' } & Pick<OrderAddress, 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'country' | 'phoneNumber'>);

export type OrderFragment = ({ __typename?: 'Order' } & Pick<Order, 'id' | 'createdAt' | 'updatedAt' | 'code' | 'state' | 'total' | 'currencyCode'> & { customer: Maybe<({ __typename?: 'Customer' } & Pick<Customer, 'id' | 'firstName' | 'lastName'>)> });

export type OrderWithLinesFragment = ({ __typename?: 'Order' } & Pick<Order, 'id' | 'createdAt' | 'updatedAt' | 'code' | 'state' | 'active' | 'subTotal' | 'subTotalBeforeTax' | 'totalBeforeTax' | 'currencyCode' | 'shipping' | 'total'> & { customer: Maybe<({ __typename?: 'Customer' } & Pick<Customer, 'id' | 'firstName' | 'lastName'>)>, lines: Array<({ __typename?: 'OrderLine' } & Pick<OrderLine, 'id' | 'unitPrice' | 'unitPriceWithTax' | 'quantity' | 'totalPrice'> & { featuredAsset: Maybe<({ __typename?: 'Asset' } & Pick<Asset, 'preview'>)>, productVariant: ({ __typename?: 'ProductVariant' } & Pick<ProductVariant, 'id' | 'name' | 'sku'>), items: Array<({ __typename?: 'OrderItem' } & Pick<OrderItem, 'id' | 'unitPrice' | 'unitPriceIncludesTax' | 'unitPriceWithTax' | 'taxRate'>)> })>, adjustments: Array<({ __typename?: 'Adjustment' } & AdjustmentFragment)>, shippingMethod: Maybe<({ __typename?: 'ShippingMethod' } & Pick<ShippingMethod, 'id' | 'code' | 'description'>)>, shippingAddress: Maybe<({ __typename?: 'OrderAddress' } & ShippingAddressFragment)>, payments: Maybe<Array<({ __typename?: 'Payment' } & Pick<Payment, 'id' | 'transactionId' | 'amount' | 'method' | 'state' | 'metadata'>)>> });

export type GetOrderListQueryVariables = {
  options?: Maybe<OrderListOptions>
};


export type GetOrderListQuery = ({ __typename?: 'Query' } & { orders: ({ __typename?: 'OrderList' } & Pick<OrderList, 'totalItems'> & { items: Array<({ __typename?: 'Order' } & OrderFragment)> }) });

export type GetOrderQueryVariables = {
  id: Scalars['ID']
};


export type GetOrderQuery = ({ __typename?: 'Query' } & { order: Maybe<({ __typename?: 'Order' } & OrderWithLinesFragment)> });

export type AssetFragment = ({ __typename?: 'Asset' } & Pick<Asset, 'id' | 'createdAt' | 'name' | 'fileSize' | 'mimeType' | 'type' | 'preview' | 'source'>);

export type ProductVariantFragment = ({ __typename?: 'ProductVariant' } & Pick<ProductVariant, 'id' | 'enabled' | 'languageCode' | 'name' | 'price' | 'currencyCode' | 'priceIncludesTax' | 'priceWithTax' | 'stockOnHand' | 'trackInventory' | 'sku'> & { taxRateApplied: ({ __typename?: 'TaxRate' } & Pick<TaxRate, 'id' | 'name' | 'value'>), taxCategory: ({ __typename?: 'TaxCategory' } & Pick<TaxCategory, 'id' | 'name'>), options: Array<({ __typename?: 'ProductOption' } & Pick<ProductOption, 'id' | 'code' | 'languageCode' | 'name'>)>, facetValues: Array<({ __typename?: 'FacetValue' } & Pick<FacetValue, 'id' | 'code' | 'name'> & { facet: ({ __typename?: 'Facet' } & Pick<Facet, 'id' | 'name'>) })>, featuredAsset: Maybe<({ __typename?: 'Asset' } & AssetFragment)>, assets: Array<({ __typename?: 'Asset' } & AssetFragment)>, translations: Array<({ __typename?: 'ProductVariantTranslation' } & Pick<ProductVariantTranslation, 'id' | 'languageCode' | 'name'>)> });

export type ProductWithVariantsFragment = ({ __typename?: 'Product' } & Pick<Product, 'id' | 'enabled' | 'languageCode' | 'name' | 'slug' | 'description'> & { featuredAsset: Maybe<({ __typename?: 'Asset' } & AssetFragment)>, assets: Array<({ __typename?: 'Asset' } & AssetFragment)>, translations: Array<({ __typename?: 'ProductTranslation' } & Pick<ProductTranslation, 'languageCode' | 'name' | 'slug' | 'description'>)>, optionGroups: Array<({ __typename?: 'ProductOptionGroup' } & Pick<ProductOptionGroup, 'id' | 'languageCode' | 'code' | 'name'>)>, variants: Array<({ __typename?: 'ProductVariant' } & ProductVariantFragment)>, facetValues: Array<({ __typename?: 'FacetValue' } & Pick<FacetValue, 'id' | 'code' | 'name'> & { facet: ({ __typename?: 'Facet' } & Pick<Facet, 'id' | 'name'>) })> });

export type ProductOptionGroupFragment = ({ __typename?: 'ProductOptionGroup' } & Pick<ProductOptionGroup, 'id' | 'languageCode' | 'code' | 'name'> & { translations: Array<({ __typename?: 'ProductOptionGroupTranslation' } & Pick<ProductOptionGroupTranslation, 'name'>)>, options: Array<({ __typename?: 'ProductOption' } & Pick<ProductOption, 'id' | 'languageCode' | 'name' | 'code'> & { translations: Array<({ __typename?: 'ProductOptionTranslation' } & Pick<ProductOptionTranslation, 'name'>)> })> });

export type UpdateProductMutationVariables = {
  input: UpdateProductInput
};


export type UpdateProductMutation = ({ __typename?: 'Mutation' } & { updateProduct: ({ __typename?: 'Product' } & ProductWithVariantsFragment) });

export type CreateProductMutationVariables = {
  input: CreateProductInput
};


export type CreateProductMutation = ({ __typename?: 'Mutation' } & { createProduct: ({ __typename?: 'Product' } & ProductWithVariantsFragment) });

export type DeleteProductMutationVariables = {
  id: Scalars['ID']
};


export type DeleteProductMutation = ({ __typename?: 'Mutation' } & { deleteProduct: ({ __typename?: 'DeletionResponse' } & Pick<DeletionResponse, 'result' | 'message'>) });

export type GenerateProductVariantsMutationVariables = {
  productId: Scalars['ID'],
  defaultTaxCategoryId?: Maybe<Scalars['ID']>,
  defaultPrice?: Maybe<Scalars['Int']>,
  defaultSku?: Maybe<Scalars['String']>
};


export type GenerateProductVariantsMutation = ({ __typename?: 'Mutation' } & { generateVariantsForProduct: ({ __typename?: 'Product' } & ProductWithVariantsFragment) });

export type UpdateProductVariantsMutationVariables = {
  input: Array<UpdateProductVariantInput>
};


export type UpdateProductVariantsMutation = ({ __typename?: 'Mutation' } & { updateProductVariants: Array<Maybe<({ __typename?: 'ProductVariant' } & ProductVariantFragment)>> });

export type CreateProductOptionGroupMutationVariables = {
  input: CreateProductOptionGroupInput
};


export type CreateProductOptionGroupMutation = ({ __typename?: 'Mutation' } & { createProductOptionGroup: ({ __typename?: 'ProductOptionGroup' } & ProductOptionGroupFragment) });

export type AddOptionGroupToProductMutationVariables = {
  productId: Scalars['ID'],
  optionGroupId: Scalars['ID']
};


export type AddOptionGroupToProductMutation = ({ __typename?: 'Mutation' } & { addOptionGroupToProduct: ({ __typename?: 'Product' } & Pick<Product, 'id'> & { optionGroups: Array<({ __typename?: 'ProductOptionGroup' } & Pick<ProductOptionGroup, 'id' | 'code'> & { options: Array<({ __typename?: 'ProductOption' } & Pick<ProductOption, 'id' | 'code'>)> })> }) });

export type RemoveOptionGroupFromProductMutationVariables = {
  productId: Scalars['ID'],
  optionGroupId: Scalars['ID']
};


export type RemoveOptionGroupFromProductMutation = ({ __typename?: 'Mutation' } & { removeOptionGroupFromProduct: ({ __typename?: 'Product' } & Pick<Product, 'id'> & { optionGroups: Array<({ __typename?: 'ProductOptionGroup' } & Pick<ProductOptionGroup, 'id' | 'code'> & { options: Array<({ __typename?: 'ProductOption' } & Pick<ProductOption, 'id' | 'code'>)> })> }) });

export type GetProductWithVariantsQueryVariables = {
  id: Scalars['ID'],
  languageCode?: Maybe<LanguageCode>
};


export type GetProductWithVariantsQuery = ({ __typename?: 'Query' } & { product: Maybe<({ __typename?: 'Product' } & ProductWithVariantsFragment)> });

export type GetProductListQueryVariables = {
  options?: Maybe<ProductListOptions>,
  languageCode?: Maybe<LanguageCode>
};


export type GetProductListQuery = ({ __typename?: 'Query' } & { products: ({ __typename?: 'ProductList' } & Pick<ProductList, 'totalItems'> & { items: Array<({ __typename?: 'Product' } & Pick<Product, 'id' | 'enabled' | 'languageCode' | 'name' | 'slug'> & { featuredAsset: Maybe<({ __typename?: 'Asset' } & Pick<Asset, 'id' | 'preview'>)> })> }) });

export type GetProductOptionGroupsQueryVariables = {
  filterTerm?: Maybe<Scalars['String']>,
  languageCode?: Maybe<LanguageCode>
};


export type GetProductOptionGroupsQuery = ({ __typename?: 'Query' } & { productOptionGroups: Array<({ __typename?: 'ProductOptionGroup' } & Pick<ProductOptionGroup, 'id' | 'languageCode' | 'code' | 'name'> & { options: Array<({ __typename?: 'ProductOption' } & Pick<ProductOption, 'id' | 'languageCode' | 'code' | 'name'>)> })> });

export type GetAssetListQueryVariables = {
  options?: Maybe<AssetListOptions>
};


export type GetAssetListQuery = ({ __typename?: 'Query' } & { assets: ({ __typename?: 'AssetList' } & Pick<AssetList, 'totalItems'> & { items: Array<({ __typename?: 'Asset' } & AssetFragment)> }) });

export type CreateAssetsMutationVariables = {
  input: Array<CreateAssetInput>
};


export type CreateAssetsMutation = ({ __typename?: 'Mutation' } & { createAssets: Array<({ __typename?: 'Asset' } & AssetFragment)> });

export type SearchProductsQueryVariables = {
  input: SearchInput
};


export type SearchProductsQuery = ({ __typename?: 'Query' } & { search: ({ __typename?: 'SearchResponse' } & Pick<SearchResponse, 'totalItems'> & { items: Array<({ __typename?: 'SearchResult' } & Pick<SearchResult, 'enabled' | 'productId' | 'productName' | 'productPreview' | 'productVariantId' | 'productVariantName' | 'productVariantPreview' | 'sku'>)> }) });

export type ConfigurableOperationFragment = ({ __typename?: 'ConfigurableOperation' } & Pick<ConfigurableOperation, 'code' | 'description'> & { args: Array<({ __typename?: 'ConfigArg' } & Pick<ConfigArg, 'name' | 'type' | 'value'>)> });

export type PromotionFragment = ({ __typename?: 'Promotion' } & Pick<Promotion, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'enabled'> & { conditions: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)>, actions: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)> });

export type GetPromotionListQueryVariables = {
  options?: Maybe<PromotionListOptions>
};


export type GetPromotionListQuery = ({ __typename?: 'Query' } & { promotions: ({ __typename?: 'PromotionList' } & Pick<PromotionList, 'totalItems'> & { items: Array<({ __typename?: 'Promotion' } & PromotionFragment)> }) });

export type GetPromotionQueryVariables = {
  id: Scalars['ID']
};


export type GetPromotionQuery = ({ __typename?: 'Query' } & { promotion: Maybe<({ __typename?: 'Promotion' } & PromotionFragment)> });

export type GetAdjustmentOperationsQueryVariables = {};


export type GetAdjustmentOperationsQuery = ({ __typename?: 'Query' } & { adjustmentOperations: ({ __typename?: 'AdjustmentOperations' } & { actions: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)>, conditions: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)> }) });

export type CreatePromotionMutationVariables = {
  input: CreatePromotionInput
};


export type CreatePromotionMutation = ({ __typename?: 'Mutation' } & { createPromotion: ({ __typename?: 'Promotion' } & PromotionFragment) });

export type UpdatePromotionMutationVariables = {
  input: UpdatePromotionInput
};


export type UpdatePromotionMutation = ({ __typename?: 'Mutation' } & { updatePromotion: ({ __typename?: 'Promotion' } & PromotionFragment) });

export type CountryFragment = ({ __typename?: 'Country' } & Pick<Country, 'id' | 'code' | 'name' | 'enabled'> & { translations: Array<({ __typename?: 'CountryTranslation' } & Pick<CountryTranslation, 'id' | 'languageCode' | 'name'>)> });

export type GetCountryListQueryVariables = {
  options?: Maybe<CountryListOptions>
};


export type GetCountryListQuery = ({ __typename?: 'Query' } & { countries: ({ __typename?: 'CountryList' } & Pick<CountryList, 'totalItems'> & { items: Array<({ __typename?: 'Country' } & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>)> }) });

export type GetAvailableCountriesQueryVariables = {};


export type GetAvailableCountriesQuery = ({ __typename?: 'Query' } & { countries: ({ __typename?: 'CountryList' } & { items: Array<({ __typename?: 'Country' } & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>)> }) });

export type GetCountryQueryVariables = {
  id: Scalars['ID']
};


export type GetCountryQuery = ({ __typename?: 'Query' } & { country: Maybe<({ __typename?: 'Country' } & CountryFragment)> });

export type CreateCountryMutationVariables = {
  input: CreateCountryInput
};


export type CreateCountryMutation = ({ __typename?: 'Mutation' } & { createCountry: ({ __typename?: 'Country' } & CountryFragment) });

export type UpdateCountryMutationVariables = {
  input: UpdateCountryInput
};


export type UpdateCountryMutation = ({ __typename?: 'Mutation' } & { updateCountry: ({ __typename?: 'Country' } & CountryFragment) });

export type DeleteCountryMutationVariables = {
  id: Scalars['ID']
};


export type DeleteCountryMutation = ({ __typename?: 'Mutation' } & { deleteCountry: ({ __typename?: 'DeletionResponse' } & Pick<DeletionResponse, 'result' | 'message'>) });

export type ZoneFragment = ({ __typename?: 'Zone' } & Pick<Zone, 'id' | 'name'> & { members: Array<({ __typename?: 'Country' } & CountryFragment)> });

export type GetZonesQueryVariables = {};


export type GetZonesQuery = ({ __typename?: 'Query' } & { zones: Array<({ __typename?: 'Zone' } & Pick<Zone, 'id' | 'name'> & { members: Array<({ __typename?: 'Country' } & Pick<Country, 'id' | 'name' | 'code'>)> })> });

export type GetZoneQueryVariables = {
  id: Scalars['ID']
};


export type GetZoneQuery = ({ __typename?: 'Query' } & { zone: Maybe<({ __typename?: 'Zone' } & ZoneFragment)> });

export type CreateZoneMutationVariables = {
  input: CreateZoneInput
};


export type CreateZoneMutation = ({ __typename?: 'Mutation' } & { createZone: ({ __typename?: 'Zone' } & ZoneFragment) });

export type UpdateZoneMutationVariables = {
  input: UpdateZoneInput
};


export type UpdateZoneMutation = ({ __typename?: 'Mutation' } & { updateZone: ({ __typename?: 'Zone' } & ZoneFragment) });

export type AddMembersToZoneMutationVariables = {
  zoneId: Scalars['ID'],
  memberIds: Array<Scalars['ID']>
};


export type AddMembersToZoneMutation = ({ __typename?: 'Mutation' } & { addMembersToZone: ({ __typename?: 'Zone' } & ZoneFragment) });

export type RemoveMembersFromZoneMutationVariables = {
  zoneId: Scalars['ID'],
  memberIds: Array<Scalars['ID']>
};


export type RemoveMembersFromZoneMutation = ({ __typename?: 'Mutation' } & { removeMembersFromZone: ({ __typename?: 'Zone' } & ZoneFragment) });

export type TaxCategoryFragment = ({ __typename?: 'TaxCategory' } & Pick<TaxCategory, 'id' | 'name'>);

export type GetTaxCategoriesQueryVariables = {};


export type GetTaxCategoriesQuery = ({ __typename?: 'Query' } & { taxCategories: Array<({ __typename?: 'TaxCategory' } & TaxCategoryFragment)> });

export type GetTaxCategoryQueryVariables = {
  id: Scalars['ID']
};


export type GetTaxCategoryQuery = ({ __typename?: 'Query' } & { taxCategory: Maybe<({ __typename?: 'TaxCategory' } & TaxCategoryFragment)> });

export type CreateTaxCategoryMutationVariables = {
  input: CreateTaxCategoryInput
};


export type CreateTaxCategoryMutation = ({ __typename?: 'Mutation' } & { createTaxCategory: ({ __typename?: 'TaxCategory' } & TaxCategoryFragment) });

export type UpdateTaxCategoryMutationVariables = {
  input: UpdateTaxCategoryInput
};


export type UpdateTaxCategoryMutation = ({ __typename?: 'Mutation' } & { updateTaxCategory: ({ __typename?: 'TaxCategory' } & TaxCategoryFragment) });

export type TaxRateFragment = ({ __typename?: 'TaxRate' } & Pick<TaxRate, 'id' | 'name' | 'enabled' | 'value'> & { category: ({ __typename?: 'TaxCategory' } & Pick<TaxCategory, 'id' | 'name'>), zone: ({ __typename?: 'Zone' } & Pick<Zone, 'id' | 'name'>), customerGroup: Maybe<({ __typename?: 'CustomerGroup' } & Pick<CustomerGroup, 'id' | 'name'>)> });

export type GetTaxRateListQueryVariables = {
  options?: Maybe<TaxRateListOptions>
};


export type GetTaxRateListQuery = ({ __typename?: 'Query' } & { taxRates: ({ __typename?: 'TaxRateList' } & Pick<TaxRateList, 'totalItems'> & { items: Array<({ __typename?: 'TaxRate' } & TaxRateFragment)> }) });

export type GetTaxRateQueryVariables = {
  id: Scalars['ID']
};


export type GetTaxRateQuery = ({ __typename?: 'Query' } & { taxRate: Maybe<({ __typename?: 'TaxRate' } & TaxRateFragment)> });

export type CreateTaxRateMutationVariables = {
  input: CreateTaxRateInput
};


export type CreateTaxRateMutation = ({ __typename?: 'Mutation' } & { createTaxRate: ({ __typename?: 'TaxRate' } & TaxRateFragment) });

export type UpdateTaxRateMutationVariables = {
  input: UpdateTaxRateInput
};


export type UpdateTaxRateMutation = ({ __typename?: 'Mutation' } & { updateTaxRate: ({ __typename?: 'TaxRate' } & TaxRateFragment) });

export type ChannelFragment = ({ __typename?: 'Channel' } & Pick<Channel, 'id' | 'code' | 'token' | 'pricesIncludeTax' | 'currencyCode' | 'defaultLanguageCode'> & { defaultShippingZone: Maybe<({ __typename?: 'Zone' } & Pick<Zone, 'id' | 'name'>)>, defaultTaxZone: Maybe<({ __typename?: 'Zone' } & Pick<Zone, 'id' | 'name'>)> });

export type GetChannelsQueryVariables = {};


export type GetChannelsQuery = ({ __typename?: 'Query' } & { channels: Array<({ __typename?: 'Channel' } & ChannelFragment)> });

export type GetChannelQueryVariables = {
  id: Scalars['ID']
};


export type GetChannelQuery = ({ __typename?: 'Query' } & { channel: Maybe<({ __typename?: 'Channel' } & ChannelFragment)> });

export type GetActiveChannelQueryVariables = {};


export type GetActiveChannelQuery = ({ __typename?: 'Query' } & { activeChannel: ({ __typename?: 'Channel' } & ChannelFragment) });

export type CreateChannelMutationVariables = {
  input: CreateChannelInput
};


export type CreateChannelMutation = ({ __typename?: 'Mutation' } & { createChannel: ({ __typename?: 'Channel' } & ChannelFragment) });

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput
};


export type UpdateChannelMutation = ({ __typename?: 'Mutation' } & { updateChannel: ({ __typename?: 'Channel' } & ChannelFragment) });

export type PaymentMethodFragment = ({ __typename?: 'PaymentMethod' } & Pick<PaymentMethod, 'id' | 'code' | 'enabled'> & { configArgs: Array<({ __typename?: 'ConfigArg' } & Pick<ConfigArg, 'name' | 'type' | 'value'>)> });

export type GetPaymentMethodListQueryVariables = {
  options: PaymentMethodListOptions
};


export type GetPaymentMethodListQuery = ({ __typename?: 'Query' } & { paymentMethods: ({ __typename?: 'PaymentMethodList' } & Pick<PaymentMethodList, 'totalItems'> & { items: Array<({ __typename?: 'PaymentMethod' } & PaymentMethodFragment)> }) });

export type GetPaymentMethodQueryVariables = {
  id: Scalars['ID']
};


export type GetPaymentMethodQuery = ({ __typename?: 'Query' } & { paymentMethod: Maybe<({ __typename?: 'PaymentMethod' } & PaymentMethodFragment)> });

export type UpdatePaymentMethodMutationVariables = {
  input: UpdatePaymentMethodInput
};


export type UpdatePaymentMethodMutation = ({ __typename?: 'Mutation' } & { updatePaymentMethod: ({ __typename?: 'PaymentMethod' } & PaymentMethodFragment) });

export type GlobalSettingsFragment = ({ __typename?: 'GlobalSettings' } & Pick<GlobalSettings, 'availableLanguages' | 'trackInventory'>);

export type GetGlobalSettingsQueryVariables = {};


export type GetGlobalSettingsQuery = ({ __typename?: 'Query' } & { globalSettings: ({ __typename?: 'GlobalSettings' } & GlobalSettingsFragment) });

export type UpdateGlobalSettingsMutationVariables = {
  input: UpdateGlobalSettingsInput
};


export type UpdateGlobalSettingsMutation = ({ __typename?: 'Mutation' } & { updateGlobalSettings: ({ __typename?: 'GlobalSettings' } & GlobalSettingsFragment) });

export type GetServerConfigQueryVariables = {};


export type GetServerConfigQuery = ({ __typename?: 'Query' } & { globalSettings: ({ __typename?: 'GlobalSettings' } & { serverConfig: ({ __typename?: 'ServerConfig' } & Pick<ServerConfig, 'customFields'>) }) });

export type ShippingMethodFragment = ({ __typename?: 'ShippingMethod' } & Pick<ShippingMethod, 'id' | 'createdAt' | 'updatedAt' | 'code' | 'description'> & { checker: ({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment), calculator: ({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment) });

export type GetShippingMethodListQueryVariables = {
  options?: Maybe<ShippingMethodListOptions>
};


export type GetShippingMethodListQuery = ({ __typename?: 'Query' } & { shippingMethods: ({ __typename?: 'ShippingMethodList' } & Pick<ShippingMethodList, 'totalItems'> & { items: Array<({ __typename?: 'ShippingMethod' } & ShippingMethodFragment)> }) });

export type GetShippingMethodQueryVariables = {
  id: Scalars['ID']
};


export type GetShippingMethodQuery = ({ __typename?: 'Query' } & { shippingMethod: Maybe<({ __typename?: 'ShippingMethod' } & ShippingMethodFragment)> });

export type GetShippingMethodOperationsQueryVariables = {};


export type GetShippingMethodOperationsQuery = ({ __typename?: 'Query' } & { shippingEligibilityCheckers: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)>, shippingCalculators: Array<({ __typename?: 'ConfigurableOperation' } & ConfigurableOperationFragment)> });

export type CreateShippingMethodMutationVariables = {
  input: CreateShippingMethodInput
};


export type CreateShippingMethodMutation = ({ __typename?: 'Mutation' } & { createShippingMethod: ({ __typename?: 'ShippingMethod' } & ShippingMethodFragment) });

export type UpdateShippingMethodMutationVariables = {
  input: UpdateShippingMethodInput
};


export type UpdateShippingMethodMutation = ({ __typename?: 'Mutation' } & { updateShippingMethod: ({ __typename?: 'ShippingMethod' } & ShippingMethodFragment) });
export namespace Administrator {
  export type Fragment = AdministratorFragment;
  export type User = AdministratorFragment['user'];
  export type Roles = (NonNullable<AdministratorFragment['user']['roles'][0]>);
}

export namespace Role {
  export type Fragment = RoleFragment;
  export type Channels = (NonNullable<RoleFragment['channels'][0]>);
}

export namespace GetAdministrators {
  export type Variables = GetAdministratorsQueryVariables;
  export type Query = GetAdministratorsQuery;
  export type Administrators = GetAdministratorsQuery['administrators'];
  export type Items = AdministratorFragment;
}

export namespace GetAdministrator {
  export type Variables = GetAdministratorQueryVariables;
  export type Query = GetAdministratorQuery;
  export type Administrator = AdministratorFragment;
}

export namespace CreateAdministrator {
  export type Variables = CreateAdministratorMutationVariables;
  export type Mutation = CreateAdministratorMutation;
  export type CreateAdministrator = AdministratorFragment;
}

export namespace UpdateAdministrator {
  export type Variables = UpdateAdministratorMutationVariables;
  export type Mutation = UpdateAdministratorMutation;
  export type UpdateAdministrator = AdministratorFragment;
}

export namespace GetRoles {
  export type Variables = GetRolesQueryVariables;
  export type Query = GetRolesQuery;
  export type Roles = GetRolesQuery['roles'];
  export type Items = RoleFragment;
}

export namespace GetRole {
  export type Variables = GetRoleQueryVariables;
  export type Query = GetRoleQuery;
  export type Role = RoleFragment;
}

export namespace CreateRole {
  export type Variables = CreateRoleMutationVariables;
  export type Mutation = CreateRoleMutation;
  export type CreateRole = RoleFragment;
}

export namespace UpdateRole {
  export type Variables = UpdateRoleMutationVariables;
  export type Mutation = UpdateRoleMutation;
  export type UpdateRole = RoleFragment;
}

export namespace AssignRoleToAdministrator {
  export type Variables = AssignRoleToAdministratorMutationVariables;
  export type Mutation = AssignRoleToAdministratorMutation;
  export type AssignRoleToAdministrator = AdministratorFragment;
}

export namespace CurrentUser {
  export type Fragment = CurrentUserFragment;
}

export namespace AttemptLogin {
  export type Variables = AttemptLoginMutationVariables;
  export type Mutation = AttemptLoginMutation;
  export type Login = AttemptLoginMutation['login'];
  export type User = CurrentUserFragment;
}

export namespace LogOut {
  export type Variables = LogOutMutationVariables;
  export type Mutation = LogOutMutation;
}

export namespace GetCurrentUser {
  export type Variables = GetCurrentUserQueryVariables;
  export type Query = GetCurrentUserQuery;
  export type Me = CurrentUserFragment;
}

export namespace RequestStarted {
  export type Variables = RequestStartedMutationVariables;
  export type Mutation = RequestStartedMutation;
}

export namespace RequestCompleted {
  export type Variables = RequestCompletedMutationVariables;
  export type Mutation = RequestCompletedMutation;
}

export namespace SetAsLoggedIn {
  export type Variables = SetAsLoggedInMutationVariables;
  export type Mutation = SetAsLoggedInMutation;
  export type SetAsLoggedIn = SetAsLoggedInMutation['setAsLoggedIn'];
}

export namespace SetAsLoggedOut {
  export type Variables = SetAsLoggedOutMutationVariables;
  export type Mutation = SetAsLoggedOutMutation;
  export type SetAsLoggedOut = SetAsLoggedOutMutation['setAsLoggedOut'];
}

export namespace SetUiLanguage {
  export type Variables = SetUiLanguageMutationVariables;
  export type Mutation = SetUiLanguageMutation;
}

export namespace GetNetworkStatus {
  export type Variables = GetNetworkStatusQueryVariables;
  export type Query = GetNetworkStatusQuery;
  export type NetworkStatus = GetNetworkStatusQuery['networkStatus'];
}

export namespace GetUserStatus {
  export type Variables = GetUserStatusQueryVariables;
  export type Query = GetUserStatusQuery;
  export type UserStatus = GetUserStatusQuery['userStatus'];
}

export namespace GetUiState {
  export type Variables = GetUiStateQueryVariables;
  export type Query = GetUiStateQuery;
  export type UiState = GetUiStateQuery['uiState'];
}

export namespace GetCollectionFilters {
  export type Variables = GetCollectionFiltersQueryVariables;
  export type Query = GetCollectionFiltersQuery;
  export type CollectionFilters = ConfigurableOperationFragment;
}

export namespace Collection {
  export type Fragment = CollectionFragment;
  export type FeaturedAsset = AssetFragment;
  export type Assets = AssetFragment;
  export type Filters = ConfigurableOperationFragment;
  export type Translations = (NonNullable<CollectionFragment['translations'][0]>);
  export type Parent = (NonNullable<CollectionFragment['parent']>);
  export type Children = (NonNullable<(NonNullable<CollectionFragment['children']>)[0]>);
}

export namespace GetCollectionList {
  export type Variables = GetCollectionListQueryVariables;
  export type Query = GetCollectionListQuery;
  export type Collections = GetCollectionListQuery['collections'];
  export type Items = (NonNullable<GetCollectionListQuery['collections']['items'][0]>);
  export type FeaturedAsset = AssetFragment;
  export type Parent = (NonNullable<(NonNullable<GetCollectionListQuery['collections']['items'][0]>)['parent']>);
}

export namespace GetCollection {
  export type Variables = GetCollectionQueryVariables;
  export type Query = GetCollectionQuery;
  export type Collection = CollectionFragment;
}

export namespace CreateCollection {
  export type Variables = CreateCollectionMutationVariables;
  export type Mutation = CreateCollectionMutation;
  export type CreateCollection = CollectionFragment;
}

export namespace UpdateCollection {
  export type Variables = UpdateCollectionMutationVariables;
  export type Mutation = UpdateCollectionMutation;
  export type UpdateCollection = CollectionFragment;
}

export namespace MoveCollection {
  export type Variables = MoveCollectionMutationVariables;
  export type Mutation = MoveCollectionMutation;
  export type MoveCollection = CollectionFragment;
}

export namespace GetCollectionContents {
  export type Variables = GetCollectionContentsQueryVariables;
  export type Query = GetCollectionContentsQuery;
  export type Collection = (NonNullable<GetCollectionContentsQuery['collection']>);
  export type ProductVariants = (NonNullable<GetCollectionContentsQuery['collection']>)['productVariants'];
  export type Items = (NonNullable<(NonNullable<GetCollectionContentsQuery['collection']>)['productVariants']['items'][0]>);
}

export namespace Address {
  export type Fragment = AddressFragment;
  export type Country = AddressFragment['country'];
}

export namespace Customer {
  export type Fragment = CustomerFragment;
  export type User = (NonNullable<CustomerFragment['user']>);
  export type Addresses = AddressFragment;
}

export namespace GetCustomerList {
  export type Variables = GetCustomerListQueryVariables;
  export type Query = GetCustomerListQuery;
  export type Customers = GetCustomerListQuery['customers'];
  export type Items = (NonNullable<GetCustomerListQuery['customers']['items'][0]>);
  export type User = (NonNullable<(NonNullable<GetCustomerListQuery['customers']['items'][0]>)['user']>);
}

export namespace GetCustomer {
  export type Variables = GetCustomerQueryVariables;
  export type Query = GetCustomerQuery;
  export type Customer = CustomerFragment;
  export type Orders = (NonNullable<GetCustomerQuery['customer']>)['orders'];
  export type Items = (NonNullable<(NonNullable<GetCustomerQuery['customer']>)['orders']['items'][0]>);
}

export namespace CreateCustomer {
  export type Variables = CreateCustomerMutationVariables;
  export type Mutation = CreateCustomerMutation;
  export type CreateCustomer = CustomerFragment;
}

export namespace UpdateCustomer {
  export type Variables = UpdateCustomerMutationVariables;
  export type Mutation = UpdateCustomerMutation;
  export type UpdateCustomer = CustomerFragment;
}

export namespace CreateCustomerAddress {
  export type Variables = CreateCustomerAddressMutationVariables;
  export type Mutation = CreateCustomerAddressMutation;
  export type CreateCustomerAddress = AddressFragment;
}

export namespace UpdateCustomerAddress {
  export type Variables = UpdateCustomerAddressMutationVariables;
  export type Mutation = UpdateCustomerAddressMutation;
  export type UpdateCustomerAddress = AddressFragment;
}

export namespace FacetValue {
  export type Fragment = FacetValueFragment;
  export type Translations = (NonNullable<FacetValueFragment['translations'][0]>);
  export type Facet = FacetValueFragment['facet'];
}

export namespace FacetWithValues {
  export type Fragment = FacetWithValuesFragment;
  export type Translations = (NonNullable<FacetWithValuesFragment['translations'][0]>);
  export type Values = FacetValueFragment;
}

export namespace CreateFacet {
  export type Variables = CreateFacetMutationVariables;
  export type Mutation = CreateFacetMutation;
  export type CreateFacet = FacetWithValuesFragment;
}

export namespace UpdateFacet {
  export type Variables = UpdateFacetMutationVariables;
  export type Mutation = UpdateFacetMutation;
  export type UpdateFacet = FacetWithValuesFragment;
}

export namespace DeleteFacet {
  export type Variables = DeleteFacetMutationVariables;
  export type Mutation = DeleteFacetMutation;
  export type DeleteFacet = DeleteFacetMutation['deleteFacet'];
}

export namespace CreateFacetValues {
  export type Variables = CreateFacetValuesMutationVariables;
  export type Mutation = CreateFacetValuesMutation;
  export type CreateFacetValues = FacetValueFragment;
}

export namespace UpdateFacetValues {
  export type Variables = UpdateFacetValuesMutationVariables;
  export type Mutation = UpdateFacetValuesMutation;
  export type UpdateFacetValues = FacetValueFragment;
}

export namespace DeleteFacetValues {
  export type Variables = DeleteFacetValuesMutationVariables;
  export type Mutation = DeleteFacetValuesMutation;
  export type DeleteFacetValues = (NonNullable<DeleteFacetValuesMutation['deleteFacetValues'][0]>);
}

export namespace GetFacetList {
  export type Variables = GetFacetListQueryVariables;
  export type Query = GetFacetListQuery;
  export type Facets = GetFacetListQuery['facets'];
  export type Items = FacetWithValuesFragment;
}

export namespace GetFacetWithValues {
  export type Variables = GetFacetWithValuesQueryVariables;
  export type Query = GetFacetWithValuesQuery;
  export type Facet = FacetWithValuesFragment;
}

export namespace Adjustment {
  export type Fragment = AdjustmentFragment;
}

export namespace ShippingAddress {
  export type Fragment = ShippingAddressFragment;
}

export namespace Order {
  export type Fragment = OrderFragment;
  export type Customer = (NonNullable<OrderFragment['customer']>);
}

export namespace OrderWithLines {
  export type Fragment = OrderWithLinesFragment;
  export type Customer = (NonNullable<OrderWithLinesFragment['customer']>);
  export type Lines = (NonNullable<OrderWithLinesFragment['lines'][0]>);
  export type FeaturedAsset = (NonNullable<(NonNullable<OrderWithLinesFragment['lines'][0]>)['featuredAsset']>);
  export type ProductVariant = (NonNullable<OrderWithLinesFragment['lines'][0]>)['productVariant'];
  export type Items = (NonNullable<(NonNullable<OrderWithLinesFragment['lines'][0]>)['items'][0]>);
  export type Adjustments = AdjustmentFragment;
  export type ShippingMethod = (NonNullable<OrderWithLinesFragment['shippingMethod']>);
  export type ShippingAddress = ShippingAddressFragment;
  export type Payments = (NonNullable<(NonNullable<OrderWithLinesFragment['payments']>)[0]>);
}

export namespace GetOrderList {
  export type Variables = GetOrderListQueryVariables;
  export type Query = GetOrderListQuery;
  export type Orders = GetOrderListQuery['orders'];
  export type Items = OrderFragment;
}

export namespace GetOrder {
  export type Variables = GetOrderQueryVariables;
  export type Query = GetOrderQuery;
  export type Order = OrderWithLinesFragment;
}

export namespace Asset {
  export type Fragment = AssetFragment;
}

export namespace ProductVariant {
  export type Fragment = ProductVariantFragment;
  export type TaxRateApplied = ProductVariantFragment['taxRateApplied'];
  export type TaxCategory = ProductVariantFragment['taxCategory'];
  export type Options = (NonNullable<ProductVariantFragment['options'][0]>);
  export type FacetValues = (NonNullable<ProductVariantFragment['facetValues'][0]>);
  export type Facet = (NonNullable<ProductVariantFragment['facetValues'][0]>)['facet'];
  export type FeaturedAsset = AssetFragment;
  export type Assets = AssetFragment;
  export type Translations = (NonNullable<ProductVariantFragment['translations'][0]>);
}

export namespace ProductWithVariants {
  export type Fragment = ProductWithVariantsFragment;
  export type FeaturedAsset = AssetFragment;
  export type Assets = AssetFragment;
  export type Translations = (NonNullable<ProductWithVariantsFragment['translations'][0]>);
  export type OptionGroups = (NonNullable<ProductWithVariantsFragment['optionGroups'][0]>);
  export type Variants = ProductVariantFragment;
  export type FacetValues = (NonNullable<ProductWithVariantsFragment['facetValues'][0]>);
  export type Facet = (NonNullable<ProductWithVariantsFragment['facetValues'][0]>)['facet'];
}

export namespace ProductOptionGroup {
  export type Fragment = ProductOptionGroupFragment;
  export type Translations = (NonNullable<ProductOptionGroupFragment['translations'][0]>);
  export type Options = (NonNullable<ProductOptionGroupFragment['options'][0]>);
  export type _Translations = (NonNullable<(NonNullable<ProductOptionGroupFragment['options'][0]>)['translations'][0]>);
}

export namespace UpdateProduct {
  export type Variables = UpdateProductMutationVariables;
  export type Mutation = UpdateProductMutation;
  export type UpdateProduct = ProductWithVariantsFragment;
}

export namespace CreateProduct {
  export type Variables = CreateProductMutationVariables;
  export type Mutation = CreateProductMutation;
  export type CreateProduct = ProductWithVariantsFragment;
}

export namespace DeleteProduct {
  export type Variables = DeleteProductMutationVariables;
  export type Mutation = DeleteProductMutation;
  export type DeleteProduct = DeleteProductMutation['deleteProduct'];
}

export namespace GenerateProductVariants {
  export type Variables = GenerateProductVariantsMutationVariables;
  export type Mutation = GenerateProductVariantsMutation;
  export type GenerateVariantsForProduct = ProductWithVariantsFragment;
}

export namespace UpdateProductVariants {
  export type Variables = UpdateProductVariantsMutationVariables;
  export type Mutation = UpdateProductVariantsMutation;
  export type UpdateProductVariants = ProductVariantFragment;
}

export namespace CreateProductOptionGroup {
  export type Variables = CreateProductOptionGroupMutationVariables;
  export type Mutation = CreateProductOptionGroupMutation;
  export type CreateProductOptionGroup = ProductOptionGroupFragment;
}

export namespace AddOptionGroupToProduct {
  export type Variables = AddOptionGroupToProductMutationVariables;
  export type Mutation = AddOptionGroupToProductMutation;
  export type AddOptionGroupToProduct = AddOptionGroupToProductMutation['addOptionGroupToProduct'];
  export type OptionGroups = (NonNullable<AddOptionGroupToProductMutation['addOptionGroupToProduct']['optionGroups'][0]>);
  export type Options = (NonNullable<(NonNullable<AddOptionGroupToProductMutation['addOptionGroupToProduct']['optionGroups'][0]>)['options'][0]>);
}

export namespace RemoveOptionGroupFromProduct {
  export type Variables = RemoveOptionGroupFromProductMutationVariables;
  export type Mutation = RemoveOptionGroupFromProductMutation;
  export type RemoveOptionGroupFromProduct = RemoveOptionGroupFromProductMutation['removeOptionGroupFromProduct'];
  export type OptionGroups = (NonNullable<RemoveOptionGroupFromProductMutation['removeOptionGroupFromProduct']['optionGroups'][0]>);
  export type Options = (NonNullable<(NonNullable<RemoveOptionGroupFromProductMutation['removeOptionGroupFromProduct']['optionGroups'][0]>)['options'][0]>);
}

export namespace GetProductWithVariants {
  export type Variables = GetProductWithVariantsQueryVariables;
  export type Query = GetProductWithVariantsQuery;
  export type Product = ProductWithVariantsFragment;
}

export namespace GetProductList {
  export type Variables = GetProductListQueryVariables;
  export type Query = GetProductListQuery;
  export type Products = GetProductListQuery['products'];
  export type Items = (NonNullable<GetProductListQuery['products']['items'][0]>);
  export type FeaturedAsset = (NonNullable<(NonNullable<GetProductListQuery['products']['items'][0]>)['featuredAsset']>);
}

export namespace GetProductOptionGroups {
  export type Variables = GetProductOptionGroupsQueryVariables;
  export type Query = GetProductOptionGroupsQuery;
  export type ProductOptionGroups = (NonNullable<GetProductOptionGroupsQuery['productOptionGroups'][0]>);
  export type Options = (NonNullable<(NonNullable<GetProductOptionGroupsQuery['productOptionGroups'][0]>)['options'][0]>);
}

export namespace GetAssetList {
  export type Variables = GetAssetListQueryVariables;
  export type Query = GetAssetListQuery;
  export type Assets = GetAssetListQuery['assets'];
  export type Items = AssetFragment;
}

export namespace CreateAssets {
  export type Variables = CreateAssetsMutationVariables;
  export type Mutation = CreateAssetsMutation;
  export type CreateAssets = AssetFragment;
}

export namespace SearchProducts {
  export type Variables = SearchProductsQueryVariables;
  export type Query = SearchProductsQuery;
  export type Search = SearchProductsQuery['search'];
  export type Items = (NonNullable<SearchProductsQuery['search']['items'][0]>);
}

export namespace ConfigurableOperation {
  export type Fragment = ConfigurableOperationFragment;
  export type Args = (NonNullable<ConfigurableOperationFragment['args'][0]>);
}

export namespace Promotion {
  export type Fragment = PromotionFragment;
  export type Conditions = ConfigurableOperationFragment;
  export type Actions = ConfigurableOperationFragment;
}

export namespace GetPromotionList {
  export type Variables = GetPromotionListQueryVariables;
  export type Query = GetPromotionListQuery;
  export type Promotions = GetPromotionListQuery['promotions'];
  export type Items = PromotionFragment;
}

export namespace GetPromotion {
  export type Variables = GetPromotionQueryVariables;
  export type Query = GetPromotionQuery;
  export type Promotion = PromotionFragment;
}

export namespace GetAdjustmentOperations {
  export type Variables = GetAdjustmentOperationsQueryVariables;
  export type Query = GetAdjustmentOperationsQuery;
  export type AdjustmentOperations = GetAdjustmentOperationsQuery['adjustmentOperations'];
  export type Actions = ConfigurableOperationFragment;
  export type Conditions = ConfigurableOperationFragment;
}

export namespace CreatePromotion {
  export type Variables = CreatePromotionMutationVariables;
  export type Mutation = CreatePromotionMutation;
  export type CreatePromotion = PromotionFragment;
}

export namespace UpdatePromotion {
  export type Variables = UpdatePromotionMutationVariables;
  export type Mutation = UpdatePromotionMutation;
  export type UpdatePromotion = PromotionFragment;
}

export namespace Country {
  export type Fragment = CountryFragment;
  export type Translations = (NonNullable<CountryFragment['translations'][0]>);
}

export namespace GetCountryList {
  export type Variables = GetCountryListQueryVariables;
  export type Query = GetCountryListQuery;
  export type Countries = GetCountryListQuery['countries'];
  export type Items = (NonNullable<GetCountryListQuery['countries']['items'][0]>);
}

export namespace GetAvailableCountries {
  export type Variables = GetAvailableCountriesQueryVariables;
  export type Query = GetAvailableCountriesQuery;
  export type Countries = GetAvailableCountriesQuery['countries'];
  export type Items = (NonNullable<GetAvailableCountriesQuery['countries']['items'][0]>);
}

export namespace GetCountry {
  export type Variables = GetCountryQueryVariables;
  export type Query = GetCountryQuery;
  export type Country = CountryFragment;
}

export namespace CreateCountry {
  export type Variables = CreateCountryMutationVariables;
  export type Mutation = CreateCountryMutation;
  export type CreateCountry = CountryFragment;
}

export namespace UpdateCountry {
  export type Variables = UpdateCountryMutationVariables;
  export type Mutation = UpdateCountryMutation;
  export type UpdateCountry = CountryFragment;
}

export namespace DeleteCountry {
  export type Variables = DeleteCountryMutationVariables;
  export type Mutation = DeleteCountryMutation;
  export type DeleteCountry = DeleteCountryMutation['deleteCountry'];
}

export namespace Zone {
  export type Fragment = ZoneFragment;
  export type Members = CountryFragment;
}

export namespace GetZones {
  export type Variables = GetZonesQueryVariables;
  export type Query = GetZonesQuery;
  export type Zones = (NonNullable<GetZonesQuery['zones'][0]>);
  export type Members = (NonNullable<(NonNullable<GetZonesQuery['zones'][0]>)['members'][0]>);
}

export namespace GetZone {
  export type Variables = GetZoneQueryVariables;
  export type Query = GetZoneQuery;
  export type Zone = ZoneFragment;
}

export namespace CreateZone {
  export type Variables = CreateZoneMutationVariables;
  export type Mutation = CreateZoneMutation;
  export type CreateZone = ZoneFragment;
}

export namespace UpdateZone {
  export type Variables = UpdateZoneMutationVariables;
  export type Mutation = UpdateZoneMutation;
  export type UpdateZone = ZoneFragment;
}

export namespace AddMembersToZone {
  export type Variables = AddMembersToZoneMutationVariables;
  export type Mutation = AddMembersToZoneMutation;
  export type AddMembersToZone = ZoneFragment;
}

export namespace RemoveMembersFromZone {
  export type Variables = RemoveMembersFromZoneMutationVariables;
  export type Mutation = RemoveMembersFromZoneMutation;
  export type RemoveMembersFromZone = ZoneFragment;
}

export namespace TaxCategory {
  export type Fragment = TaxCategoryFragment;
}

export namespace GetTaxCategories {
  export type Variables = GetTaxCategoriesQueryVariables;
  export type Query = GetTaxCategoriesQuery;
  export type TaxCategories = TaxCategoryFragment;
}

export namespace GetTaxCategory {
  export type Variables = GetTaxCategoryQueryVariables;
  export type Query = GetTaxCategoryQuery;
  export type TaxCategory = TaxCategoryFragment;
}

export namespace CreateTaxCategory {
  export type Variables = CreateTaxCategoryMutationVariables;
  export type Mutation = CreateTaxCategoryMutation;
  export type CreateTaxCategory = TaxCategoryFragment;
}

export namespace UpdateTaxCategory {
  export type Variables = UpdateTaxCategoryMutationVariables;
  export type Mutation = UpdateTaxCategoryMutation;
  export type UpdateTaxCategory = TaxCategoryFragment;
}

export namespace TaxRate {
  export type Fragment = TaxRateFragment;
  export type Category = TaxRateFragment['category'];
  export type Zone = TaxRateFragment['zone'];
  export type CustomerGroup = (NonNullable<TaxRateFragment['customerGroup']>);
}

export namespace GetTaxRateList {
  export type Variables = GetTaxRateListQueryVariables;
  export type Query = GetTaxRateListQuery;
  export type TaxRates = GetTaxRateListQuery['taxRates'];
  export type Items = TaxRateFragment;
}

export namespace GetTaxRate {
  export type Variables = GetTaxRateQueryVariables;
  export type Query = GetTaxRateQuery;
  export type TaxRate = TaxRateFragment;
}

export namespace CreateTaxRate {
  export type Variables = CreateTaxRateMutationVariables;
  export type Mutation = CreateTaxRateMutation;
  export type CreateTaxRate = TaxRateFragment;
}

export namespace UpdateTaxRate {
  export type Variables = UpdateTaxRateMutationVariables;
  export type Mutation = UpdateTaxRateMutation;
  export type UpdateTaxRate = TaxRateFragment;
}

export namespace Channel {
  export type Fragment = ChannelFragment;
  export type DefaultShippingZone = (NonNullable<ChannelFragment['defaultShippingZone']>);
  export type DefaultTaxZone = (NonNullable<ChannelFragment['defaultTaxZone']>);
}

export namespace GetChannels {
  export type Variables = GetChannelsQueryVariables;
  export type Query = GetChannelsQuery;
  export type Channels = ChannelFragment;
}

export namespace GetChannel {
  export type Variables = GetChannelQueryVariables;
  export type Query = GetChannelQuery;
  export type Channel = ChannelFragment;
}

export namespace GetActiveChannel {
  export type Variables = GetActiveChannelQueryVariables;
  export type Query = GetActiveChannelQuery;
  export type ActiveChannel = ChannelFragment;
}

export namespace CreateChannel {
  export type Variables = CreateChannelMutationVariables;
  export type Mutation = CreateChannelMutation;
  export type CreateChannel = ChannelFragment;
}

export namespace UpdateChannel {
  export type Variables = UpdateChannelMutationVariables;
  export type Mutation = UpdateChannelMutation;
  export type UpdateChannel = ChannelFragment;
}

export namespace PaymentMethod {
  export type Fragment = PaymentMethodFragment;
  export type ConfigArgs = (NonNullable<PaymentMethodFragment['configArgs'][0]>);
}

export namespace GetPaymentMethodList {
  export type Variables = GetPaymentMethodListQueryVariables;
  export type Query = GetPaymentMethodListQuery;
  export type PaymentMethods = GetPaymentMethodListQuery['paymentMethods'];
  export type Items = PaymentMethodFragment;
}

export namespace GetPaymentMethod {
  export type Variables = GetPaymentMethodQueryVariables;
  export type Query = GetPaymentMethodQuery;
  export type PaymentMethod = PaymentMethodFragment;
}

export namespace UpdatePaymentMethod {
  export type Variables = UpdatePaymentMethodMutationVariables;
  export type Mutation = UpdatePaymentMethodMutation;
  export type UpdatePaymentMethod = PaymentMethodFragment;
}

export namespace GlobalSettings {
  export type Fragment = GlobalSettingsFragment;
}

export namespace GetGlobalSettings {
  export type Variables = GetGlobalSettingsQueryVariables;
  export type Query = GetGlobalSettingsQuery;
  export type GlobalSettings = GlobalSettingsFragment;
}

export namespace UpdateGlobalSettings {
  export type Variables = UpdateGlobalSettingsMutationVariables;
  export type Mutation = UpdateGlobalSettingsMutation;
  export type UpdateGlobalSettings = GlobalSettingsFragment;
}

export namespace GetServerConfig {
  export type Variables = GetServerConfigQueryVariables;
  export type Query = GetServerConfigQuery;
  export type GlobalSettings = GetServerConfigQuery['globalSettings'];
  export type ServerConfig = GetServerConfigQuery['globalSettings']['serverConfig'];
}

export namespace ShippingMethod {
  export type Fragment = ShippingMethodFragment;
  export type Checker = ConfigurableOperationFragment;
  export type Calculator = ConfigurableOperationFragment;
}

export namespace GetShippingMethodList {
  export type Variables = GetShippingMethodListQueryVariables;
  export type Query = GetShippingMethodListQuery;
  export type ShippingMethods = GetShippingMethodListQuery['shippingMethods'];
  export type Items = ShippingMethodFragment;
}

export namespace GetShippingMethod {
  export type Variables = GetShippingMethodQueryVariables;
  export type Query = GetShippingMethodQuery;
  export type ShippingMethod = ShippingMethodFragment;
}

export namespace GetShippingMethodOperations {
  export type Variables = GetShippingMethodOperationsQueryVariables;
  export type Query = GetShippingMethodOperationsQuery;
  export type ShippingEligibilityCheckers = ConfigurableOperationFragment;
  export type ShippingCalculators = ConfigurableOperationFragment;
}

export namespace CreateShippingMethod {
  export type Variables = CreateShippingMethodMutationVariables;
  export type Mutation = CreateShippingMethodMutation;
  export type CreateShippingMethod = ShippingMethodFragment;
}

export namespace UpdateShippingMethod {
  export type Variables = UpdateShippingMethodMutationVariables;
  export type Mutation = UpdateShippingMethodMutation;
  export type UpdateShippingMethod = ShippingMethodFragment;
}
