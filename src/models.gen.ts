export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type Access = {
  __typename?: 'Access';
  active: Scalars['Boolean'];
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  locations: Array<Location>;
  name: Scalars['String'];
  type: AccessType;
  updatedAt: Scalars['DateTime'];
};

export type AccessMutations = {
  __typename?: 'AccessMutations';
  create: Access;
  delete: Scalars['Int'];
  update: Access;
};


export type AccessMutationsCreateArgs = {
  input: CreateAccessInput;
};


export type AccessMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type AccessMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateAccessInput;
};

export type AccessQueries = {
  __typename?: 'AccessQueries';
  access: Access;
  accesses: Array<Access>;
};


export type AccessQueriesAccessArgs = {
  id: Scalars['Float'];
};


export type AccessQueriesAccessesArgs = {
  companyId: Scalars['Float'];
};

export enum AccessType {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type AddPositionsInput = {
  orderId: Scalars['Int'];
  orderPositions: Array<OrderPositionInput>;
};

export type Addition = {
  __typename?: 'Addition';
  active: Scalars['Boolean'];
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  maxCount: Scalars['Int'];
  measureUnit: MeasureUnit;
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
};

export type AdditionMutations = {
  __typename?: 'AdditionMutations';
  create: Addition;
  delete: Scalars['Int'];
  duplicate: Addition;
  update: Addition;
};


export type AdditionMutationsCreateArgs = {
  input: CreateAdditionInput;
};


export type AdditionMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type AdditionMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type AdditionMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateAdditionInput;
};

export type AdditionQueries = {
  __typename?: 'AdditionQueries';
  addition: Addition;
  additions: Array<Addition>;
};


export type AdditionQueriesAdditionArgs = {
  id: Scalars['Float'];
};


export type AdditionQueriesAdditionsArgs = {
  companyId: Scalars['Float'];
};

export type Allergen = {
  __typename?: 'Allergen';
  active: Scalars['Boolean'];
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type: AllergenType;
  updatedAt: Scalars['DateTime'];
};

export type AllergenMutations = {
  __typename?: 'AllergenMutations';
  create: Allergen;
  delete: Scalars['Int'];
  duplicate: Allergen;
  update: Allergen;
};


export type AllergenMutationsCreateArgs = {
  input: CreateAllergenInput;
};


export type AllergenMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type AllergenMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type AllergenMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateAllergenInput;
};

export type AllergenQueries = {
  __typename?: 'AllergenQueries';
  allergen: Allergen;
  allergens: Array<Allergen>;
};


export type AllergenQueriesAllergenArgs = {
  id: Scalars['Float'];
};


export type AllergenQueriesAllergensArgs = {
  companyId: Scalars['Float'];
};

export enum AllergenType {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

export type Area = {
  __typename?: 'Area';
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  tables: Array<Table>;
  updatedAt: Scalars['DateTime'];
  waiter?: Maybe<Employee>;
  waiterId?: Maybe<Scalars['Int']>;
};

export type AreaMutations = {
  __typename?: 'AreaMutations';
  create: Area;
  delete: Scalars['Int'];
  duplicate: Area;
  update: Area;
};


export type AreaMutationsCreateArgs = {
  input: CreateAreaInput;
};


export type AreaMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type AreaMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type AreaMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateAreaInput;
};

export type AreaQueries = {
  __typename?: 'AreaQueries';
  area: Area;
  areas: Array<Area>;
};


export type AreaQueriesAreaArgs = {
  id: Scalars['Float'];
};


export type AreaQueriesAreasArgs = {
  locationId: Scalars['Float'];
};

export type AuthMutations = {
  __typename?: 'AuthMutations';
  loginGuest: Scalars['Boolean'];
  loginOwner: AuthTokens;
  logoutGuest: Scalars['Boolean'];
  logoutOwner: Scalars['Boolean'];
  refreshGuest: AuthTokens;
  refreshOwner: AuthTokens;
  registerOwner: User;
  verifyGuest: AuthTokens;
};


export type AuthMutationsLoginGuestArgs = {
  input: LoginGuestInput;
};


export type AuthMutationsLoginOwnerArgs = {
  input: LoginOwnerInput;
};


export type AuthMutationsRegisterOwnerArgs = {
  input: RegisterOwnerInput;
};


export type AuthMutationsVerifyGuestArgs = {
  input: VerifyGuestInput;
};

export type AuthQueries = {
  __typename?: 'AuthQueries';
  me: User;
  meGuest: Guest;
};

export type AuthTokens = {
  __typename?: 'AuthTokens';
  accessToken: Scalars['String'];
};

export type BookingSettings = {
  __typename?: 'BookingSettings';
  active: Scalars['Boolean'];
  autoCancel: Scalars['Boolean'];
  autoCancelTime: Scalars['Int'];
  autoConfirm: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  emailReminder: Scalars['Boolean'];
  id: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  maxGuestsCount: Scalars['Int'];
  maxTimeBeforeBooking: Scalars['Int'];
  minTimeBeforeBooking: Scalars['Int'];
  minTimeBeforeClosing: Scalars['Int'];
  nonWorkingTime: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type BookingSettingsMutations = {
  __typename?: 'BookingSettingsMutations';
  update: BookingSettings;
};


export type BookingSettingsMutationsUpdateArgs = {
  input: UpdateBookingSettingsInput;
  locationId: Scalars['Float'];
};

export type BookingSettingsQueries = {
  __typename?: 'BookingSettingsQueries';
  bookingSettings: BookingSettings;
};


export type BookingSettingsQueriesBookingSettingsArgs = {
  locationId: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  active: Scalars['Boolean'];
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  positions: Array<Position>;
  section?: Maybe<Section>;
  sectionId?: Maybe<Scalars['Int']>;
  templates: Array<Template>;
  updatedAt: Scalars['DateTime'];
};

export type CategoryMutations = {
  __typename?: 'CategoryMutations';
  create: Category;
  delete: Scalars['Int'];
  duplicate: Category;
  update: Category;
};


export type CategoryMutationsCreateArgs = {
  input: CreateCategoryInput;
};


export type CategoryMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type CategoryMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type CategoryMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateCategoryInput;
};

export type CategoryQueries = {
  __typename?: 'CategoryQueries';
  categories: Array<Category>;
  category: Category;
};


export type CategoryQueriesCategoriesArgs = {
  companyId: Scalars['Float'];
  empty?: InputMaybe<Scalars['Boolean']>;
  sectionId?: InputMaybe<Scalars['Float']>;
};


export type CategoryQueriesCategoryArgs = {
  id: Scalars['Float'];
};

export type ChangeStatusInput = {
  orderId: Scalars['Int'];
  status: OrderStatus;
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime'];
  currency: Scalars['Int'];
  description: Scalars['String'];
  domain: Scalars['String'];
  id: Scalars['Int'];
  language: Scalars['String'];
  locations: Array<Location>;
  logo?: Maybe<CompanyLogo>;
  logoKey?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner?: Maybe<User>;
  ownerId: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  uiSettings?: Maybe<UiSettings>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

export type CompanyLogo = {
  __typename?: 'CompanyLogo';
  medium: Scalars['String'];
  small: Scalars['String'];
  thumb: Scalars['String'];
};

export type CompanyMutations = {
  __typename?: 'CompanyMutations';
  create: Company;
  delete: Scalars['Int'];
  update: Company;
};


export type CompanyMutationsCreateArgs = {
  input: CreateCompanyInput;
};


export type CompanyMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type CompanyMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateCompanyInput;
};

export type CompanyQueries = {
  __typename?: 'CompanyQueries';
  companies: Array<Company>;
  company: Company;
  owned: Array<Company>;
};


export type CompanyQueriesCompanyArgs = {
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
};

export type CreateAccessInput = {
  active: Scalars['Boolean'];
  companyId: Scalars['Int'];
  email: Scalars['String'];
  locationIds: Array<Scalars['Int']>;
  name: Scalars['String'];
  type: AccessType;
};

export type CreateAdditionInput = {
  active?: Scalars['Boolean'];
  companyId: Scalars['Int'];
  maxCount: Scalars['Int'];
  measureUnit: MeasureUnit;
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  weight: Scalars['Int'];
};

export type CreateAllergenInput = {
  active: Scalars['Boolean'];
  companyId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  type?: AllergenType;
};

export type CreateAreaInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  tableIds?: InputMaybe<Array<Scalars['Int']>>;
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type CreateCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId: Scalars['Int'];
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['Int']>;
};

export type CreateCompanyInput = {
  currency: Scalars['Int'];
  domain: Scalars['String'];
  language: Scalars['String'];
  logo: Scalars['Upload'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
};

export type CreateEmployeeInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  image?: InputMaybe<Scalars['Upload']>;
  lastName: Scalars['String'];
  locationId: Scalars['Int'];
  phone: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
};

export type CreateGuestAddressInput = {
  apartment: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  entrance?: InputMaybe<Scalars['String']>;
  flor: Scalars['Int'];
  phone?: InputMaybe<Scalars['String']>;
  street: Scalars['String'];
};

export type CreateGuestInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  companyId: Scalars['Int'];
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  sid?: InputMaybe<Scalars['String']>;
};

export type CreateInvoiceType = {
  __typename?: 'CreateInvoiceType';
  invoiceId: Scalars['String'];
  pageUrl: Scalars['String'];
};

export type CreateLabelInput = {
  active: Scalars['Boolean'];
  color: Scalars['String'];
  companyId?: InputMaybe<Scalars['Int']>;
  icon: Scalars['String'];
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  type?: LabelType;
};

export type CreateLocationInput = {
  address: Scalars['String'];
  companyId: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateModifierInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId: Scalars['Int'];
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  variants?: Array<ModifierVariantInput>;
};

export type CreateOrderInput = {
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['Int']>;
  cutlery?: InputMaybe<Scalars['Int']>;
  deliveryTime?: InputMaybe<OrderDeliveryTime>;
  guestId?: InputMaybe<Scalars['Int']>;
  guestIds: Array<Scalars['Int']>;
  locationId: Scalars['Int'];
  number?: InputMaybe<Scalars['String']>;
  orderPositions: Array<OrderPositionInput>;
  paymentMethod?: InputMaybe<OrderPaymentMethod>;
  promo?: InputMaybe<Scalars['String']>;
  tableId?: InputMaybe<Scalars['Int']>;
  type: OrderType;
};

export type CreatePositionInput = {
  additionIds?: InputMaybe<Array<Scalars['Int']>>;
  allergenIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryId?: InputMaybe<Scalars['Int']>;
  companyId: Scalars['Int'];
  cookTimeFrom?: InputMaybe<Scalars['Int']>;
  cookTimeTo?: InputMaybe<Scalars['Int']>;
  cookingTimeFrom?: InputMaybe<Scalars['Int']>;
  cookingTimeTo?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  energyValue?: InputMaybe<EnergyValueInput>;
  image?: InputMaybe<Scalars['Upload']>;
  labelIds?: InputMaybe<Array<Scalars['Int']>>;
  measureUnit: MeasureUnit;
  modifierIds?: InputMaybe<Array<Scalars['Int']>>;
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  price: Array<CreatePositionPriceInput>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type CreatePositionPriceInput = {
  active: Scalars['Boolean'];
  locationId: Scalars['Int'];
  priceWithDiscount: Scalars['Int'];
  priceWithoutDiscount?: InputMaybe<Scalars['Int']>;
  status: PositionStatus;
};

export type CreatePostInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  buttonText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  locationId: Scalars['Int'];
  preview: Scalars['Upload'];
  title: Scalars['String'];
  type?: InputMaybe<PostType>;
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  guestId?: InputMaybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  orderId?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  rate: Scalars['Int'];
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type CreateSectionInput = {
  active: Scalars['Boolean'];
  companyId: Scalars['Int'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type CreateTableInput = {
  active: Scalars['Boolean'];
  areaId?: InputMaybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  posId?: InputMaybe<Scalars['String']>;
  seats: Scalars['Int'];
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type CreateTemplateInput = {
  additionIds: Array<Scalars['Int']>;
  allergenIds: Array<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  companyId: Scalars['Int'];
  labelIds: Array<Scalars['Int']>;
  name: Scalars['String'];
};

export type DeletePositionsInput = {
  ids: Array<Scalars['Int']>;
};

export enum DeliveryDiscountType {
  Percent = 'PERCENT',
  Sum = 'SUM'
}

export type DeliverySettings = {
  __typename?: 'DeliverySettings';
  active: Scalars['Boolean'];
  allowAsapTime: Scalars['Boolean'];
  allowExactTime: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  cutlery: Scalars['Boolean'];
  deliveryInfo: Scalars['String'];
  discountEnabled: Scalars['Boolean'];
  discountType: DeliveryDiscountType;
  discountValue: Scalars['Int'];
  id: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  messageToClient: Scalars['String'];
  minDelayFromSubmitting: Scalars['Int'];
  minTimeBeforeOrder: Scalars['Int'];
  minTimeToDeliver: Scalars['Int'];
  paymentMethods: Array<OrderPaymentMethod>;
  showOrderStatus: Scalars['Boolean'];
  tips: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type DeliverySettingsMutations = {
  __typename?: 'DeliverySettingsMutations';
  update: DeliverySettings;
};


export type DeliverySettingsMutationsUpdateArgs = {
  input: UpdateDeliverySettingsInput;
  locationId: Scalars['Float'];
};

export type DeliverySettingsQueries = {
  __typename?: 'DeliverySettingsQueries';
  deliverySettings: DeliverySettings;
};


export type DeliverySettingsQueriesDeliverySettingsArgs = {
  locationId: Scalars['Float'];
};

export type Employee = {
  __typename?: 'Employee';
  areas: Array<Area>;
  avatarKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  orders: Array<Order>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneVerified: Scalars['Boolean'];
  posId?: Maybe<Scalars['String']>;
  tables: Array<Table>;
  updatedAt: Scalars['DateTime'];
};

export type EmployeeMutations = {
  __typename?: 'EmployeeMutations';
  create: Employee;
  delete: Scalars['Int'];
  update: Employee;
};


export type EmployeeMutationsCreateArgs = {
  input: CreateEmployeeInput;
};


export type EmployeeMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type EmployeeMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateEmployeeInput;
};

export type EmployeeQueries = {
  __typename?: 'EmployeeQueries';
  employee: Employee;
  employees: Array<Employee>;
};


export type EmployeeQueriesEmployeeArgs = {
  id: Scalars['Float'];
};


export type EmployeeQueriesEmployeesArgs = {
  locationId: Scalars['Float'];
};

export type EnergyValue = {
  __typename?: 'EnergyValue';
  calories: Scalars['Int'];
  carbohydrates: Scalars['Int'];
  fats: Scalars['Int'];
  id: Scalars['Int'];
  positionId: Scalars['Int'];
  proteins: Scalars['Int'];
};

export type EnergyValueInput = {
  calories: Scalars['Int'];
  carbohydrates: Scalars['Int'];
  fats: Scalars['Int'];
  proteins: Scalars['Int'];
};

export type FavoritesSettings = {
  __typename?: 'FavoritesSettings';
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type FavoritesSettingsMutations = {
  __typename?: 'FavoritesSettingsMutations';
  update: FavoritesSettings;
};


export type FavoritesSettingsMutationsUpdateArgs = {
  input: UpdateFavoritesSettingsInput;
  locationId: Scalars['Float'];
};

export type FavoritesSettingsQueries = {
  __typename?: 'FavoritesSettingsQueries';
  favoritesSettings: FavoritesSettings;
};


export type FavoritesSettingsQueriesFavoritesSettingsArgs = {
  locationId: Scalars['Float'];
};

export enum FooterBannerVariant {
  Banner = 'BANNER',
  Image = 'IMAGE',
  Map = 'MAP'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Guest = {
  __typename?: 'Guest';
  addresses: Array<GuestAddress>;
  birthday?: Maybe<Scalars['DateTime']>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  instagram?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastOrder?: Maybe<Scalars['DateTime']>;
  orders: Array<Order>;
  ordersCount: Scalars['Int'];
  phone: Scalars['String'];
  phoneVerified?: Maybe<Scalars['Boolean']>;
  sid?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GuestAddress = {
  __typename?: 'GuestAddress';
  apartment: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  entrance?: Maybe<Scalars['String']>;
  flor: Scalars['Int'];
  guest: Guest;
  guestId: Scalars['Int'];
  id: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GuestAddressMutations = {
  __typename?: 'GuestAddressMutations';
  create: GuestAddress;
  delete: Scalars['Int'];
  update: GuestAddress;
};


export type GuestAddressMutationsCreateArgs = {
  input: CreateGuestAddressInput;
};


export type GuestAddressMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type GuestAddressMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateGuestAddressInput;
};

export type GuestAddressQueries = {
  __typename?: 'GuestAddressQueries';
  guestAddress: GuestAddress;
  guestAddresses: Array<GuestAddress>;
};


export type GuestAddressQueriesGuestAddressArgs = {
  id: Scalars['Float'];
};

export type GuestMutations = {
  __typename?: 'GuestMutations';
  create: Guest;
  delete: Scalars['Int'];
  update: Guest;
  updateClient: Guest;
};


export type GuestMutationsCreateArgs = {
  input: CreateGuestInput;
};


export type GuestMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type GuestMutationsUpdateArgs = {
  input: UpdateGuestInput;
};


export type GuestMutationsUpdateClientArgs = {
  id: Scalars['Float'];
  input: UpdateGuestInput;
};

export type GuestQueries = {
  __typename?: 'GuestQueries';
  guest: Guest;
  guests: Array<Guest>;
  me: Guest;
};


export type GuestQueriesGuestArgs = {
  id: Scalars['Float'];
};


export type GuestQueriesGuestsArgs = {
  companyId: Scalars['Float'];
};

export enum InsideDiscountType {
  Percent = 'PERCENT',
  Sum = 'SUM'
}

export type InsideSettings = {
  __typename?: 'InsideSettings';
  active: Scalars['Boolean'];
  callWaiter: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  discount: Scalars['Boolean'];
  discountType: InsideDiscountType;
  discountValue: Scalars['Int'];
  id: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  paymentMethods: Array<OrderPaymentMethod>;
  showOrderStatus: Scalars['Boolean'];
  tips: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type InsideSettingsMutations = {
  __typename?: 'InsideSettingsMutations';
  update: InsideSettings;
};


export type InsideSettingsMutationsUpdateArgs = {
  input: UpdateInsideSettingsInput;
  locationId: Scalars['Float'];
};

export type InsideSettingsQueries = {
  __typename?: 'InsideSettingsQueries';
  insideSettings: InsideSettings;
};


export type InsideSettingsQueriesInsideSettingsArgs = {
  locationId: Scalars['Float'];
};

export type Label = {
  __typename?: 'Label';
  active: Scalars['Boolean'];
  color: Scalars['String'];
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type: LabelType;
  updatedAt: Scalars['DateTime'];
};

export type LabelMutations = {
  __typename?: 'LabelMutations';
  create: Label;
  delete: Scalars['Int'];
  duplicate: Label;
  update: Label;
};


export type LabelMutationsCreateArgs = {
  input: CreateLabelInput;
};


export type LabelMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type LabelMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type LabelMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateLabelInput;
};

export type LabelQueries = {
  __typename?: 'LabelQueries';
  label: Label;
  labels: Array<Label>;
};


export type LabelQueriesLabelArgs = {
  id: Scalars['Float'];
};


export type LabelQueriesLabelsArgs = {
  companyId: Scalars['Float'];
};

export enum LabelType {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  bookingSettings?: Maybe<BookingSettings>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deliverySettings?: Maybe<DeliverySettings>;
  favoritesSettings?: Maybe<FavoritesSettings>;
  id: Scalars['Int'];
  insideSettings?: Maybe<InsideSettings>;
  menuSettings?: Maybe<MenuSettings>;
  name: Scalars['String'];
  phones: Array<Phone>;
  posSettings?: Maybe<PosSettings>;
  reviewsSettings?: Maybe<ReviewsSettings>;
  takeawaySettings?: Maybe<TakeawaySettings>;
  updatedAt: Scalars['DateTime'];
  wifiName?: Maybe<Scalars['String']>;
  wifiPassword?: Maybe<Scalars['String']>;
  workHours: Array<WorkHour>;
};

export type LocationsMutations = {
  __typename?: 'LocationsMutations';
  create: Location;
  delete: Scalars['Int'];
  update: Location;
};


export type LocationsMutationsCreateArgs = {
  input: CreateLocationInput;
};


export type LocationsMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type LocationsMutationsUpdateArgs = {
  input: UpdateLocationInput;
  locationId: Scalars['Float'];
};

export type LocationsQueries = {
  __typename?: 'LocationsQueries';
  location: Location;
  locations: Array<Location>;
};


export type LocationsQueriesLocationArgs = {
  locationId: Scalars['Float'];
};


export type LocationsQueriesLocationsArgs = {
  companyId: Scalars['Float'];
};

export type LoginGuestInput = {
  companyId: Scalars['Int'];
  phone: Scalars['String'];
};

export type LoginOwnerInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum MeasureUnit {
  G = 'G',
  Kg = 'KG',
  L = 'L',
  Ml = 'ML',
  P = 'P'
}

export type MenuSettings = {
  __typename?: 'MenuSettings';
  additions: Scalars['Boolean'];
  allergens: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  energyValue?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  labels: Scalars['Boolean'];
  location: Location;
  locationId: Scalars['Int'];
  modifiers: Scalars['Boolean'];
  recommendations: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type MenuSettingsMutations = {
  __typename?: 'MenuSettingsMutations';
  update: MenuSettings;
};


export type MenuSettingsMutationsUpdateArgs = {
  input: UpdateMenuSettingsInput;
  locationId: Scalars['Float'];
};

export type MenuSettingsQueries = {
  __typename?: 'MenuSettingsQueries';
  menuSetting: MenuSettings;
};


export type MenuSettingsQueriesMenuSettingArgs = {
  locationId: Scalars['Float'];
};

export enum MenuVariant {
  Horizontal_1 = 'HORIZONTAL_1',
  Horizontal_2 = 'HORIZONTAL_2',
  Vertical = 'VERTICAL',
  VerticalWithSections = 'VERTICAL_WITH_SECTIONS'
}

export enum MobileFooter {
  Categories = 'CATEGORIES',
  CategoriesWithMap = 'CATEGORIES_WITH_MAP',
  Map = 'MAP'
}

export enum MobileHero {
  Color = 'COLOR',
  Image = 'IMAGE',
  Pattern = 'PATTERN'
}

export enum MobilePanels {
  CategoriesSeparated = 'CATEGORIES_SEPARATED',
  MenuImage = 'MENU_IMAGE',
  Standard = 'STANDARD',
  StandardWithImage = 'STANDARD_WITH_IMAGE'
}

export type Modifier = {
  __typename?: 'Modifier';
  active: Scalars['Boolean'];
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  variants: Array<ModifierVariant>;
};

export type ModifierMutations = {
  __typename?: 'ModifierMutations';
  create: Modifier;
  delete: Scalars['Int'];
  update: Modifier;
};


export type ModifierMutationsCreateArgs = {
  input: CreateModifierInput;
};


export type ModifierMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type ModifierMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateModifierInput;
};

export type ModifierQueries = {
  __typename?: 'ModifierQueries';
  modifier: Modifier;
  modifiers: Array<Modifier>;
};


export type ModifierQueriesModifierArgs = {
  id: Scalars['Float'];
};


export type ModifierQueriesModifiersArgs = {
  companyId: Scalars['Float'];
};

export type ModifierVariant = {
  __typename?: 'ModifierVariant';
  active: Scalars['Boolean'];
  id: Scalars['Int'];
  modifierId: Scalars['Int'];
  name: Scalars['String'];
  positionId: Scalars['Int'];
};

export type ModifierVariantInput = {
  active: Scalars['Boolean'];
  name: Scalars['String'];
};

export type MovePositionsInput = {
  categoryId: Scalars['Int'];
  ids: Array<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accesses: AccessMutations;
  additions: AdditionMutations;
  allergens: AllergenMutations;
  areas: AreaMutations;
  auth: AuthMutations;
  bookingSettings: BookingSettingsMutations;
  categories: CategoryMutations;
  companies: CompanyMutations;
  deliverySettings: DeliverySettingsMutations;
  employees: EmployeeMutations;
  favoritesSettings: FavoritesSettingsMutations;
  guestAddresses: GuestAddressMutations;
  guests: GuestMutations;
  insideSettings: InsideSettingsMutations;
  labels: LabelMutations;
  locations: LocationsMutations;
  menuSetting: MenuSettingsMutations;
  modifiers: ModifierMutations;
  orders: OrderMutations;
  posSettings: PosSettingsMutations;
  positions: PositionMutations;
  posts: PostMutations;
  reviews: ReviewMutations;
  reviewsSettings: ReviewsSettingsMutations;
  sections: SectionMutations;
  tables: TableMutations;
  takeawaySettings: TakeawaySettingsMutations;
  templates: TemplateMutations;
  uiSettings: UiSettingsMutations;
  users: UserMutations;
};

export enum NewsBanner {
  FourBanners = 'FOUR_BANNERS',
  Image = 'IMAGE',
  ThreeBanners = 'THREE_BANNERS',
  TwoBanners = 'TWO_BANNERS'
}

export type Order = {
  __typename?: 'Order';
  cancelledAt?: Maybe<Scalars['DateTime']>;
  checkoutUrl?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  company: Company;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['Int']>;
  deliverAt?: Maybe<Scalars['DateTime']>;
  deliveryTime?: Maybe<OrderDeliveryTime>;
  guest?: Maybe<Guest>;
  guestId?: Maybe<Scalars['Int']>;
  guests: Array<Guest>;
  id: Scalars['Int'];
  invoiceId?: Maybe<Scalars['String']>;
  location: Location;
  locationId: Scalars['Int'];
  number?: Maybe<Scalars['String']>;
  orderPositions: Array<OrderPosition>;
  orderedAt?: Maybe<Scalars['DateTime']>;
  paidAt?: Maybe<Scalars['DateTime']>;
  paymentMethod?: Maybe<OrderPaymentMethod>;
  paymentStatus: OrderPaymentStatus;
  posId?: Maybe<Scalars['String']>;
  promo?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  refundedAt?: Maybe<Scalars['DateTime']>;
  status: OrderStatus;
  table?: Maybe<Table>;
  tableId?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  type: OrderType;
  updatedAt: Scalars['DateTime'];
  waiter?: Maybe<Employee>;
  waiterId?: Maybe<Scalars['Int']>;
};

export enum OrderDeliveryTime {
  Asap = 'ASAP',
  Time = 'TIME'
}

export type OrderMutations = {
  __typename?: 'OrderMutations';
  accept: Order;
  addPositions: Order;
  cancel: Scalars['Boolean'];
  changeStatus: Order;
  close: Order;
  createInvoice: CreateInvoiceType;
  delete: Scalars['Int'];
  deleteAll: Scalars['Boolean'];
  prepare: Order;
};


export type OrderMutationsAcceptArgs = {
  id: Scalars['Float'];
};


export type OrderMutationsAddPositionsArgs = {
  input: AddPositionsInput;
};


export type OrderMutationsCancelArgs = {
  id: Scalars['Float'];
};


export type OrderMutationsChangeStatusArgs = {
  input: ChangeStatusInput;
};


export type OrderMutationsCloseArgs = {
  id: Scalars['Float'];
};


export type OrderMutationsCreateInvoiceArgs = {
  id: Scalars['Float'];
};


export type OrderMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type OrderMutationsPrepareArgs = {
  input: CreateOrderInput;
};

export enum OrderPaymentMethod {
  Card = 'CARD',
  Cash = 'CASH',
  Online = 'ONLINE'
}

export enum OrderPaymentStatus {
  Created = 'CREATED',
  Failure = 'FAILURE',
  Idle = 'IDLE',
  Processing = 'PROCESSING',
  Success = 'SUCCESS'
}

export type OrderPosition = {
  __typename?: 'OrderPosition';
  additions: Array<OrderPositionAddition>;
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  guest?: Maybe<Guest>;
  guestId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  order: Order;
  orderId: Scalars['Int'];
  posId?: Maybe<Scalars['String']>;
  position: Position;
  positionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderPositionAddition = {
  __typename?: 'OrderPositionAddition';
  addition: Addition;
  additionId: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderPosition: OrderPosition;
  orderPositionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderPositionInput = {
  additions?: InputMaybe<Array<PositionAdditionInput>>;
  amount: Scalars['Int'];
  guestId?: InputMaybe<Scalars['Int']>;
  posId?: InputMaybe<Scalars['String']>;
  positionId: Scalars['Int'];
};

export type OrderQueries = {
  __typename?: 'OrderQueries';
  my: Array<Order>;
  opened: Array<Order>;
  order: Order;
  orders: Array<Order>;
};


export type OrderQueriesOpenedArgs = {
  tableId: Scalars['Float'];
};


export type OrderQueriesOrderArgs = {
  id: Scalars['Float'];
};


export type OrderQueriesOrdersArgs = {
  locationId: Scalars['Float'];
};

export enum OrderStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Cooking = 'COOKING',
  Done = 'DONE',
  New = 'NEW',
  OnTheWay = 'ON_THE_WAY',
  Waiting = 'WAITING'
}

export enum OrderType {
  Delivery = 'DELIVERY',
  Inside = 'INSIDE',
  Takeaway = 'TAKEAWAY'
}

export type Pagination = {
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Phone = {
  __typename?: 'Phone';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type PosPosition = {
  __typename?: 'PosPosition';
  active: Scalars['Boolean'];
  cookTimeFrom: Scalars['Int'];
  cookTimeTo: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  measureUnit: MeasureUnit;
  name: Scalars['String'];
  priceWithDiscount: Scalars['Int'];
  priceWithoutDiscount: Scalars['Int'];
  status: PositionStatus;
  weight: Scalars['Int'];
};

export type PosQueries = {
  __typename?: 'PosQueries';
  positions: Array<PosPosition>;
};


export type PosQueriesPositionsArgs = {
  companyId: Scalars['Float'];
};

export type PosSettings = {
  __typename?: 'PosSettings';
  accessToken?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  branchId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  tipsPosId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  variant?: Maybe<PosSettingsVariant>;
};

export type PosSettingsMutations = {
  __typename?: 'PosSettingsMutations';
  update: PosSettings;
};


export type PosSettingsMutationsUpdateArgs = {
  input: UpdatePosSettingsInput;
  locationId: Scalars['Float'];
};

export type PosSettingsQueries = {
  __typename?: 'PosSettingsQueries';
  posSettings: PosSettings;
};


export type PosSettingsQueriesPosSettingsArgs = {
  locationId: Scalars['Float'];
};

export enum PosSettingsVariant {
  Iiko = 'IIKO',
  Poster = 'POSTER'
}

export type Position = {
  __typename?: 'Position';
  additions: Array<Addition>;
  allergens: Array<Allergen>;
  category: Category;
  categoryId?: Maybe<Scalars['Int']>;
  company: Company;
  companyId: Scalars['Int'];
  cookTimeFrom: Scalars['Int'];
  cookTimeTo: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  energyValue?: Maybe<EnergyValue>;
  id: Scalars['Int'];
  image?: Maybe<PositionImage>;
  imageKey?: Maybe<Scalars['String']>;
  labels: Array<Label>;
  measureUnit: MeasureUnit;
  menuOrder: Scalars['Int'];
  modifiers: Array<Modifier>;
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  price: Array<PositionPrice>;
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
};

export type PositionAdditionInput = {
  amount: Scalars['Int'];
  id: Scalars['Int'];
};

export type PositionImage = {
  __typename?: 'PositionImage';
  full: Scalars['String'];
  medium: Scalars['String'];
  small: Scalars['String'];
  thumb: Scalars['String'];
};

export enum PositionImagePlacement {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type PositionMutations = {
  __typename?: 'PositionMutations';
  create: Position;
  delete: Scalars['Int'];
  deletePositions: Scalars['Int'];
  duplicate: Position;
  movePositions: Array<Position>;
  update: Position;
};


export type PositionMutationsCreateArgs = {
  input: CreatePositionInput;
};


export type PositionMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type PositionMutationsDeletePositionsArgs = {
  input: DeletePositionsInput;
};


export type PositionMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type PositionMutationsMovePositionsArgs = {
  input: MovePositionsInput;
};


export type PositionMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdatePositionInput;
};

export type PositionPagination = Pagination & {
  __typename?: 'PositionPagination';
  items: Array<Position>;
  pageInfo: PaginationInfo;
};

export type PositionPrice = {
  __typename?: 'PositionPrice';
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  position: Position;
  positionId: Scalars['Int'];
  priceWithDiscount: Scalars['Int'];
  priceWithoutDiscount: Scalars['Int'];
  status: PositionStatus;
  updatedAt: Scalars['DateTime'];
};

export type PositionQueries = {
  __typename?: 'PositionQueries';
  position: Position;
  positions: Array<Position>;
  positionsPagination: PositionPagination;
};


export type PositionQueriesPositionArgs = {
  id: Scalars['Float'];
};


export type PositionQueriesPositionsArgs = {
  categoryId?: InputMaybe<Scalars['Float']>;
  companyId: Scalars['Float'];
  locationId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
};


export type PositionQueriesPositionsPaginationArgs = {
  categoryId?: InputMaybe<Scalars['Float']>;
  companyId: Scalars['Float'];
  locationId?: InputMaybe<Scalars['Float']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};

export enum PositionSize {
  Big = 'BIG',
  Small = 'SMALL'
}

export enum PositionStatus {
  Inactive = 'INACTIVE',
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export enum PositionVariant {
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}

export type Post = {
  __typename?: 'Post';
  active: Scalars['Boolean'];
  buttonText?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imageKey?: Maybe<Scalars['String']>;
  location: Location;
  locationId: Scalars['Int'];
  previewKey?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: PostType;
  updatedAt: Scalars['DateTime'];
};

export type PostMutations = {
  __typename?: 'PostMutations';
  create: Post;
  delete: Scalars['Int'];
  duplicate: Post;
  update: Post;
};


export type PostMutationsCreateArgs = {
  input: CreatePostInput;
};


export type PostMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type PostMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type PostMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdatePostInput;
};

export type PostQueries = {
  __typename?: 'PostQueries';
  post: Post;
  posts: Array<Post>;
};


export type PostQueriesPostArgs = {
  id: Scalars['Float'];
};


export type PostQueriesPostsArgs = {
  locationId: Scalars['Float'];
};

export enum PostType {
  Default = 'DEFAULT',
  Story = 'STORY'
}

export type Query = {
  __typename?: 'Query';
  accesses: AccessQueries;
  additions: AdditionQueries;
  allergens: AllergenQueries;
  areas: AreaQueries;
  auth: AuthQueries;
  bookingSettings: BookingSettingsQueries;
  categories: CategoryQueries;
  companies: CompanyQueries;
  deliverySettings: DeliverySettingsQueries;
  employees: EmployeeQueries;
  favoritesSettings: FavoritesSettingsQueries;
  guestAddresses: GuestAddressQueries;
  guests: GuestQueries;
  insideSettings: InsideSettingsQueries;
  labels: LabelQueries;
  locations: LocationsQueries;
  menuSetting: MenuSettingsQueries;
  modifiers: ModifierQueries;
  orders: OrderQueries;
  pos: PosQueries;
  posSettings: PosSettingsQueries;
  positions: PositionQueries;
  posts: PostQueries;
  reviews: ReviewQueries;
  reviewsSettings: ReviewsSettingsQueries;
  sections: SectionQueries;
  tables: TableQueries;
  takeawaySettings: TakeawaySettingsQueries;
  templates: TemplateQueries;
  uiSettings: UiSettingsQueries;
  users: UserQueries;
};

export enum Radius {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Mini = 'MINI',
  Small = 'SMALL',
  Standard = 'STANDARD'
}

export type RegisterOwnerInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  guest?: Maybe<Guest>;
  guestId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
  phone: Scalars['String'];
  rate: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  waiter?: Maybe<Employee>;
  waiterId?: Maybe<Scalars['Int']>;
};

export type ReviewMutations = {
  __typename?: 'ReviewMutations';
  create: Review;
  delete: Scalars['Int'];
  update: Review;
};


export type ReviewMutationsCreateArgs = {
  input: CreateReviewInput;
};


export type ReviewMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type ReviewMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateReviewInput;
};

export type ReviewQueries = {
  __typename?: 'ReviewQueries';
  my: Array<Review>;
  review: Review;
  reviews: Array<Review>;
};


export type ReviewQueriesReviewArgs = {
  id: Scalars['Float'];
};


export type ReviewQueriesReviewsArgs = {
  locationId: Scalars['Float'];
};

export type ReviewsSettings = {
  __typename?: 'ReviewsSettings';
  active: Scalars['Boolean'];
  comment: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['Boolean'];
  id: Scalars['Int'];
  image: Scalars['Boolean'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['Boolean'];
  phone: Scalars['Boolean'];
  rate: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type ReviewsSettingsMutations = {
  __typename?: 'ReviewsSettingsMutations';
  update: ReviewsSettings;
};


export type ReviewsSettingsMutationsUpdateArgs = {
  input: UpdateReviewsSettingsInput;
  locationId: Scalars['Float'];
};

export type ReviewsSettingsQueries = {
  __typename?: 'ReviewsSettingsQueries';
  reviewsSettings: ReviewsSettings;
};


export type ReviewsSettingsQueriesReviewsSettingsArgs = {
  locationId: Scalars['Float'];
};

export type Section = {
  __typename?: 'Section';
  active: Scalars['Boolean'];
  categories: Array<Category>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageKey?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type SectionCategoriesArgs = {
  empty?: InputMaybe<Scalars['Boolean']>;
};

export type SectionMutations = {
  __typename?: 'SectionMutations';
  create: Section;
  delete: Scalars['Int'];
  duplicate: Section;
  update: Section;
};


export type SectionMutationsCreateArgs = {
  input: CreateSectionInput;
};


export type SectionMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type SectionMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type SectionMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateSectionInput;
};

export type SectionQueries = {
  __typename?: 'SectionQueries';
  section: Section;
  sections: Array<Section>;
};


export type SectionQueriesSectionArgs = {
  id: Scalars['Float'];
};


export type SectionQueriesSectionsArgs = {
  companyId: Scalars['Float'];
};

export type Table = {
  __typename?: 'Table';
  active: Scalars['Boolean'];
  area?: Maybe<Area>;
  areaId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  orders: Array<Order>;
  posId?: Maybe<Scalars['String']>;
  seats: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  waiter?: Maybe<Employee>;
  waiterId?: Maybe<Scalars['Int']>;
};

export type TableMutations = {
  __typename?: 'TableMutations';
  create: Table;
  delete: Scalars['Int'];
  duplicate: Table;
  update: Table;
};


export type TableMutationsCreateArgs = {
  input: CreateTableInput;
};


export type TableMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type TableMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type TableMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateTableInput;
};

export type TableQueries = {
  __typename?: 'TableQueries';
  table: Table;
  tables: Array<Table>;
};


export type TableQueriesTableArgs = {
  id: Scalars['Float'];
};


export type TableQueriesTablesArgs = {
  areaId?: InputMaybe<Scalars['Float']>;
  empty?: InputMaybe<Scalars['Boolean']>;
  locationId: Scalars['Float'];
};

export enum TakeawayDiscountType {
  Percent = 'PERCENT',
  Sum = 'SUM'
}

export type TakeawaySettings = {
  __typename?: 'TakeawaySettings';
  active: Scalars['Boolean'];
  allowAsapTime: Scalars['Boolean'];
  allowExactTime: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  cutlery: Scalars['Boolean'];
  discountEnabled: Scalars['Boolean'];
  discountType: TakeawayDiscountType;
  discountValue: Scalars['Int'];
  id: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  messageToClient: Scalars['String'];
  minDelayFromSubmitting: Scalars['Int'];
  minSumToOrder: Scalars['Int'];
  minTimeToTakeaway: Scalars['Int'];
  paymentMethods: Array<OrderPaymentMethod>;
  showOrderStatus: Scalars['Boolean'];
  tips: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type TakeawaySettingsMutations = {
  __typename?: 'TakeawaySettingsMutations';
  update: TakeawaySettings;
};


export type TakeawaySettingsMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateTakeawaySettingsInput;
};

export type TakeawaySettingsQueries = {
  __typename?: 'TakeawaySettingsQueries';
  takeawaySettings: TakeawaySettings;
};


export type TakeawaySettingsQueriesTakeawaySettingsArgs = {
  locationId: Scalars['Float'];
};

export type Template = {
  __typename?: 'Template';
  additions: Array<Addition>;
  allergens: Array<Allergen>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Int']>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  labels: Array<Label>;
  modifiers: Array<Modifier>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TemplateMutations = {
  __typename?: 'TemplateMutations';
  create: Template;
  delete: Scalars['Int'];
  duplicate: Template;
  update: Template;
};


export type TemplateMutationsCreateArgs = {
  input: CreateTemplateInput;
};


export type TemplateMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type TemplateMutationsDuplicateArgs = {
  id: Scalars['Float'];
};


export type TemplateMutationsUpdateArgs = {
  id: Scalars['Float'];
  input: UpdateTemplateInput;
};

export type TemplateQueries = {
  __typename?: 'TemplateQueries';
  template: Template;
  templates: Array<Template>;
};


export type TemplateQueriesTemplateArgs = {
  id: Scalars['Float'];
};


export type TemplateQueriesTemplatesArgs = {
  companyId: Scalars['Float'];
};

export enum Theme {
  Air = 'AIR',
  Dark = 'DARK',
  Iceberg = 'ICEBERG',
  Pearl = 'PEARL'
}

export type UiSettings = {
  __typename?: 'UiSettings';
  additional: Scalars['Boolean'];
  brandColor: Scalars['String'];
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['Boolean'];
  footerBannerVariant: FooterBannerVariant;
  heroImage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  menuVariant: MenuVariant;
  mobileFooter: MobileFooter;
  mobileHero: MobileHero;
  mobileHeroImage?: Maybe<Scalars['String']>;
  mobilePanel: MobilePanels;
  newsBanner: NewsBanner;
  positionImagePlacement: PositionImagePlacement;
  positionSize: PositionSize;
  positionVariant: PositionVariant;
  radius: Radius;
  socials: Scalars['Boolean'];
  theme: Theme;
  updatedAt: Scalars['DateTime'];
  workHours: Scalars['Boolean'];
};

export type UiSettingsMutations = {
  __typename?: 'UiSettingsMutations';
  update: UiSettings;
};


export type UiSettingsMutationsUpdateArgs = {
  companyId: Scalars['Float'];
  input: UpdateUiSettingsInput;
};

export type UiSettingsQueries = {
  __typename?: 'UiSettingsQueries';
  uiSettings: UiSettings;
};


export type UiSettingsQueriesUiSettingsArgs = {
  companyId: Scalars['Float'];
};

export type UpdateAccessInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  locationIds?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AccessType>;
};

export type UpdateAdditionInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  maxCount?: InputMaybe<Scalars['Int']>;
  measureUnit?: InputMaybe<MeasureUnit>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type UpdateAllergenInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AllergenType>;
};

export type UpdateAreaInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  tableIds?: InputMaybe<Array<Scalars['Int']>>;
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type UpdateBookingSettingsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  autoCancel?: Scalars['Boolean'];
  autoCancelTime?: Scalars['Int'];
  autoConfirm?: Scalars['Boolean'];
  emailReminder?: Scalars['Boolean'];
  maxGuestsCount?: Scalars['Int'];
  maxTimeBeforeBooking?: Scalars['Int'];
  minTimeBeforeBooking?: Scalars['Int'];
  minTimeBeforeClosing?: Scalars['Int'];
  nonWorkingTime?: Scalars['Boolean'];
};

export type UpdateCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['Int']>;
};

export type UpdateCompanyInput = {
  currency?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  language?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  wifiName?: InputMaybe<Scalars['String']>;
  wifiPassword?: InputMaybe<Scalars['String']>;
};

export type UpdateDeliverySettingsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  allowAsapTime?: InputMaybe<Scalars['Boolean']>;
  allowExactTime?: InputMaybe<Scalars['Boolean']>;
  cutlery?: InputMaybe<Scalars['Boolean']>;
  discountEnabled?: InputMaybe<Scalars['Boolean']>;
  discountType?: DeliveryDiscountType;
  discountValue?: InputMaybe<Scalars['Int']>;
  messageToClient?: InputMaybe<Scalars['String']>;
  minDelayFromSubmitting?: InputMaybe<Scalars['Int']>;
  minTimeBeforeOrder?: InputMaybe<Scalars['Int']>;
  minTimeToDeliver?: InputMaybe<Scalars['Int']>;
  paymentMethods?: InputMaybe<Array<OrderPaymentMethod>>;
  showOrderStatus?: InputMaybe<Scalars['Boolean']>;
  tips?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateEmployeeInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  image?: InputMaybe<Scalars['Upload']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
};

export type UpdateFavoritesSettingsInput = {
  active?: Scalars['Boolean'];
};

export type UpdateGuestAddressInput = {
  apartment?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  entrance?: InputMaybe<Scalars['String']>;
  flor?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type UpdateGuestInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sid?: InputMaybe<Scalars['String']>;
};

export type UpdateInsideSettingsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  callWaiter?: InputMaybe<Scalars['Boolean']>;
  discount?: InputMaybe<Scalars['Boolean']>;
  discountType?: InsideDiscountType;
  discountValue?: InputMaybe<Scalars['Int']>;
  paymentMethods?: InputMaybe<Array<OrderPaymentMethod>>;
  showOrderStatus?: InputMaybe<Scalars['Boolean']>;
  tips?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateLabelInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LabelType>;
};

export type UpdateLocationInput = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Array<UpdatePhoneInput>>;
  wifiName?: InputMaybe<Scalars['String']>;
  wifiPassword?: InputMaybe<Scalars['String']>;
};

export type UpdateMenuSettingsInput = {
  additions?: InputMaybe<Scalars['Boolean']>;
  allergens?: InputMaybe<Scalars['Boolean']>;
  energyValue?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Scalars['Boolean']>;
  modifiers?: InputMaybe<Scalars['Boolean']>;
  recommendations?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateModifierInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  variants?: InputMaybe<Array<ModifierVariantInput>>;
};

export type UpdateOwnerInput = {
  avatar?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  posId?: InputMaybe<Scalars['String']>;
};

export type UpdatePhoneInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type UpdatePosSettingsInput = {
  account?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  branchId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  tipsPosId?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<PosSettingsVariant>;
};

export type UpdatePositionInput = {
  additionIds?: InputMaybe<Array<Scalars['Int']>>;
  allergenIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryId?: InputMaybe<Scalars['Int']>;
  cookTimeFrom?: InputMaybe<Scalars['Int']>;
  cookTimeTo?: InputMaybe<Scalars['Int']>;
  cookingTimeFrom?: InputMaybe<Scalars['Int']>;
  cookingTimeTo?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  energyValue?: InputMaybe<EnergyValueInput>;
  image?: InputMaybe<Scalars['Upload']>;
  labelIds?: InputMaybe<Array<Scalars['Int']>>;
  measureUnit?: InputMaybe<MeasureUnit>;
  modifierIds?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Array<UpdatePositionPriceInput>>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type UpdatePositionPriceInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  locationId: Scalars['Int'];
  priceWithDiscount?: InputMaybe<Scalars['Int']>;
  priceWithoutDiscount?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<PositionStatus>;
};

export type UpdatePostInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  buttonText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  preview?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostType>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  guestId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Int']>;
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type UpdateReviewsSettingsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['Boolean']>;
  rate?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateSectionInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTableInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  areaId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  posId?: InputMaybe<Scalars['String']>;
  seats?: InputMaybe<Scalars['Int']>;
  waiterId?: InputMaybe<Scalars['Int']>;
};

export type UpdateTakeawaySettingsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  cutlery?: InputMaybe<Scalars['Boolean']>;
  discountEnabled?: InputMaybe<Scalars['Boolean']>;
  discountValue?: InputMaybe<Scalars['Int']>;
  messageToClient?: InputMaybe<Scalars['String']>;
  minDelayFromSubmitting?: InputMaybe<Scalars['Int']>;
  minSum?: InputMaybe<Scalars['Int']>;
  minTimeToTakeaway?: InputMaybe<Scalars['Int']>;
  showOrderStatus?: InputMaybe<Scalars['Boolean']>;
  tips?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateTemplateInput = {
  additionIds?: InputMaybe<Array<Scalars['Int']>>;
  allergenIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryId?: InputMaybe<Scalars['Int']>;
  labelIds?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUiSettingsInput = {
  additional?: InputMaybe<Scalars['Boolean']>;
  brandColor?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['Upload']>;
  description?: InputMaybe<Scalars['Boolean']>;
  footerBannerVariant?: InputMaybe<FooterBannerVariant>;
  legalInformation?: InputMaybe<Scalars['Boolean']>;
  menuVariant?: InputMaybe<MenuVariant>;
  mobileFooter?: InputMaybe<MobileFooter>;
  mobileHero?: InputMaybe<MobileHero>;
  mobileHeroImage?: InputMaybe<Scalars['Upload']>;
  mobilePanel?: InputMaybe<MobilePanels>;
  newsBanner?: InputMaybe<NewsBanner>;
  positionImagePlacement?: InputMaybe<PositionImagePlacement>;
  positionSize?: InputMaybe<PositionSize>;
  positionVariant?: InputMaybe<PositionVariant>;
  radius?: InputMaybe<Radius>;
  socials?: InputMaybe<Scalars['Boolean']>;
  theme?: InputMaybe<Theme>;
  workHours?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  avatarKey?: Maybe<Scalars['String']>;
  companies: Array<Company>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  invitedCompanies: Array<Company>;
  invitedLocations: Array<Location>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified: Scalars['Boolean'];
  posId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserMutations = {
  __typename?: 'UserMutations';
  delete: Scalars['Int'];
  updateOwner: User;
};


export type UserMutationsDeleteArgs = {
  id: Scalars['Float'];
};


export type UserMutationsUpdateOwnerArgs = {
  input: UpdateOwnerInput;
};

export type UserQueries = {
  __typename?: 'UserQueries';
  user: User;
  users: Array<User>;
};


export type UserQueriesUserArgs = {
  id: Scalars['Float'];
};

export type VerifyGuestInput = {
  code: Scalars['String'];
  companyId: Scalars['Int'];
  phone: Scalars['String'];
};

export type WorkHour = {
  __typename?: 'WorkHour';
  active: Scalars['Boolean'];
  dayOfWeek: Scalars['Int'];
  from: Scalars['String'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  till: Scalars['String'];
};
