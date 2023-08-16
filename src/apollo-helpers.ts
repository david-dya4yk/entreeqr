import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccessKeySpecifier = ('active' | 'company' | 'companyId' | 'createdAt' | 'email' | 'id' | 'locations' | 'name' | 'type' | 'updatedAt' | AccessKeySpecifier)[];
export type AccessFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessMutationsKeySpecifier = ('create' | 'delete' | 'update' | AccessMutationsKeySpecifier)[];
export type AccessMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessQueriesKeySpecifier = ('access' | 'accesses' | AccessQueriesKeySpecifier)[];
export type AccessQueriesFieldPolicy = {
	access?: FieldPolicy<any> | FieldReadFunction<any>,
	accesses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdditionKeySpecifier = ('active' | 'company' | 'companyId' | 'createdAt' | 'id' | 'maxCount' | 'measureUnit' | 'name' | 'posId' | 'price' | 'updatedAt' | 'weight' | AdditionKeySpecifier)[];
export type AdditionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maxCount?: FieldPolicy<any> | FieldReadFunction<any>,
	measureUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdditionMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | AdditionMutationsKeySpecifier)[];
export type AdditionMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdditionQueriesKeySpecifier = ('addition' | 'additions' | AdditionQueriesKeySpecifier)[];
export type AdditionQueriesFieldPolicy = {
	addition?: FieldPolicy<any> | FieldReadFunction<any>,
	additions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllergenKeySpecifier = ('active' | 'company' | 'companyId' | 'createdAt' | 'id' | 'name' | 'type' | 'updatedAt' | AllergenKeySpecifier)[];
export type AllergenFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllergenMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | AllergenMutationsKeySpecifier)[];
export type AllergenMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllergenQueriesKeySpecifier = ('allergen' | 'allergens' | AllergenQueriesKeySpecifier)[];
export type AllergenQueriesFieldPolicy = {
	allergen?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AreaKeySpecifier = ('active' | 'createdAt' | 'id' | 'location' | 'locationId' | 'name' | 'posId' | 'tables' | 'updatedAt' | 'waiter' | 'waiterId' | AreaKeySpecifier)[];
export type AreaFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	tables?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	waiter?: FieldPolicy<any> | FieldReadFunction<any>,
	waiterId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AreaMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | AreaMutationsKeySpecifier)[];
export type AreaMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AreaQueriesKeySpecifier = ('area' | 'areas' | AreaQueriesKeySpecifier)[];
export type AreaQueriesFieldPolicy = {
	area?: FieldPolicy<any> | FieldReadFunction<any>,
	areas?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthMutationsKeySpecifier = ('loginGuest' | 'loginOwner' | 'logoutGuest' | 'logoutOwner' | 'refreshGuest' | 'refreshOwner' | 'registerOwner' | 'verifyGuest' | AuthMutationsKeySpecifier)[];
export type AuthMutationsFieldPolicy = {
	loginGuest?: FieldPolicy<any> | FieldReadFunction<any>,
	loginOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	logoutGuest?: FieldPolicy<any> | FieldReadFunction<any>,
	logoutOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshGuest?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	registerOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyGuest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthQueriesKeySpecifier = ('me' | 'meGuest' | AuthQueriesKeySpecifier)[];
export type AuthQueriesFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	meGuest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthTokensKeySpecifier = ('accessToken' | AuthTokensKeySpecifier)[];
export type AuthTokensFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookingSettingsKeySpecifier = ('active' | 'autoCancel' | 'autoCancelTime' | 'autoConfirm' | 'createdAt' | 'emailReminder' | 'id' | 'location' | 'locationId' | 'maxGuestsCount' | 'maxTimeBeforeBooking' | 'minTimeBeforeBooking' | 'minTimeBeforeClosing' | 'nonWorkingTime' | 'updatedAt' | BookingSettingsKeySpecifier)[];
export type BookingSettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	autoCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	autoCancelTime?: FieldPolicy<any> | FieldReadFunction<any>,
	autoConfirm?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	emailReminder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	maxGuestsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	maxTimeBeforeBooking?: FieldPolicy<any> | FieldReadFunction<any>,
	minTimeBeforeBooking?: FieldPolicy<any> | FieldReadFunction<any>,
	minTimeBeforeClosing?: FieldPolicy<any> | FieldReadFunction<any>,
	nonWorkingTime?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookingSettingsMutationsKeySpecifier = ('update' | BookingSettingsMutationsKeySpecifier)[];
export type BookingSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookingSettingsQueriesKeySpecifier = ('bookingSettings' | BookingSettingsQueriesKeySpecifier)[];
export type BookingSettingsQueriesFieldPolicy = {
	bookingSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('active' | 'company' | 'companyId' | 'createdAt' | 'description' | 'id' | 'name' | 'posId' | 'positions' | 'section' | 'sectionId' | 'templates' | 'updatedAt' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionId?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | CategoryMutationsKeySpecifier)[];
export type CategoryMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryQueriesKeySpecifier = ('categories' | 'category' | CategoryQueriesKeySpecifier)[];
export type CategoryQueriesFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('createdAt' | 'currency' | 'description' | 'domain' | 'id' | 'language' | 'locations' | 'logo' | 'logoKey' | 'name' | 'owner' | 'ownerId' | 'type' | 'uiSettings' | 'updatedAt' | 'website' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	logoKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uiSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyLogoKeySpecifier = ('medium' | 'small' | 'thumb' | CompanyLogoKeySpecifier)[];
export type CompanyLogoFieldPolicy = {
	medium?: FieldPolicy<any> | FieldReadFunction<any>,
	small?: FieldPolicy<any> | FieldReadFunction<any>,
	thumb?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyMutationsKeySpecifier = ('create' | 'delete' | 'update' | CompanyMutationsKeySpecifier)[];
export type CompanyMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyQueriesKeySpecifier = ('companies' | 'company' | 'owned' | CompanyQueriesKeySpecifier)[];
export type CompanyQueriesFieldPolicy = {
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	owned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateInvoiceTypeKeySpecifier = ('invoiceId' | 'pageUrl' | CreateInvoiceTypeKeySpecifier)[];
export type CreateInvoiceTypeFieldPolicy = {
	invoiceId?: FieldPolicy<any> | FieldReadFunction<any>,
	pageUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySettingsKeySpecifier = ('active' | 'allowAsapTime' | 'allowExactTime' | 'createdAt' | 'cutlery' | 'deliveryInfo' | 'discountEnabled' | 'discountType' | 'discountValue' | 'id' | 'location' | 'locationId' | 'messageToClient' | 'minDelayFromSubmitting' | 'minTimeBeforeOrder' | 'minTimeToDeliver' | 'paymentMethods' | 'showOrderStatus' | 'tips' | 'updatedAt' | DeliverySettingsKeySpecifier)[];
export type DeliverySettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	allowAsapTime?: FieldPolicy<any> | FieldReadFunction<any>,
	allowExactTime?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	cutlery?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	discountEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	discountType?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageToClient?: FieldPolicy<any> | FieldReadFunction<any>,
	minDelayFromSubmitting?: FieldPolicy<any> | FieldReadFunction<any>,
	minTimeBeforeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	minTimeToDeliver?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	showOrderStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	tips?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySettingsMutationsKeySpecifier = ('update' | DeliverySettingsMutationsKeySpecifier)[];
export type DeliverySettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySettingsQueriesKeySpecifier = ('deliverySettings' | DeliverySettingsQueriesKeySpecifier)[];
export type DeliverySettingsQueriesFieldPolicy = {
	deliverySettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmployeeKeySpecifier = ('areas' | 'avatarKey' | 'createdAt' | 'email' | 'emailVerified' | 'firstName' | 'gender' | 'id' | 'lastName' | 'location' | 'locationId' | 'orders' | 'password' | 'phone' | 'phoneVerified' | 'posId' | 'tables' | 'updatedAt' | EmployeeKeySpecifier)[];
export type EmployeeFieldPolicy = {
	areas?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	tables?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmployeeMutationsKeySpecifier = ('create' | 'delete' | 'update' | EmployeeMutationsKeySpecifier)[];
export type EmployeeMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmployeeQueriesKeySpecifier = ('employee' | 'employees' | EmployeeQueriesKeySpecifier)[];
export type EmployeeQueriesFieldPolicy = {
	employee?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnergyValueKeySpecifier = ('calories' | 'carbohydrates' | 'fats' | 'id' | 'positionId' | 'proteins' | EnergyValueKeySpecifier)[];
export type EnergyValueFieldPolicy = {
	calories?: FieldPolicy<any> | FieldReadFunction<any>,
	carbohydrates?: FieldPolicy<any> | FieldReadFunction<any>,
	fats?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	positionId?: FieldPolicy<any> | FieldReadFunction<any>,
	proteins?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavoritesSettingsKeySpecifier = ('active' | 'createdAt' | 'id' | 'location' | 'locationId' | 'updatedAt' | FavoritesSettingsKeySpecifier)[];
export type FavoritesSettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavoritesSettingsMutationsKeySpecifier = ('update' | FavoritesSettingsMutationsKeySpecifier)[];
export type FavoritesSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavoritesSettingsQueriesKeySpecifier = ('favoritesSettings' | FavoritesSettingsQueriesKeySpecifier)[];
export type FavoritesSettingsQueriesFieldPolicy = {
	favoritesSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestKeySpecifier = ('addresses' | 'birthday' | 'company' | 'companyId' | 'createdAt' | 'email' | 'firstName' | 'id' | 'instagram' | 'lastName' | 'lastOrder' | 'orders' | 'ordersCount' | 'phone' | 'phoneVerified' | 'sid' | 'updatedAt' | GuestKeySpecifier)[];
export type GuestFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	birthday?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instagram?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	sid?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestAddressKeySpecifier = ('apartment' | 'comment' | 'company' | 'companyId' | 'createdAt' | 'entrance' | 'flor' | 'guest' | 'guestId' | 'id' | 'phone' | 'street' | 'updatedAt' | GuestAddressKeySpecifier)[];
export type GuestAddressFieldPolicy = {
	apartment?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entrance?: FieldPolicy<any> | FieldReadFunction<any>,
	flor?: FieldPolicy<any> | FieldReadFunction<any>,
	guest?: FieldPolicy<any> | FieldReadFunction<any>,
	guestId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestAddressMutationsKeySpecifier = ('create' | 'delete' | 'update' | GuestAddressMutationsKeySpecifier)[];
export type GuestAddressMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestAddressQueriesKeySpecifier = ('guestAddress' | 'guestAddresses' | GuestAddressQueriesKeySpecifier)[];
export type GuestAddressQueriesFieldPolicy = {
	guestAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	guestAddresses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestMutationsKeySpecifier = ('create' | 'delete' | 'update' | 'updateClient' | GuestMutationsKeySpecifier)[];
export type GuestMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>,
	updateClient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestQueriesKeySpecifier = ('guest' | 'guests' | 'me' | GuestQueriesKeySpecifier)[];
export type GuestQueriesFieldPolicy = {
	guest?: FieldPolicy<any> | FieldReadFunction<any>,
	guests?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsideSettingsKeySpecifier = ('active' | 'callWaiter' | 'createdAt' | 'discount' | 'discountType' | 'discountValue' | 'id' | 'location' | 'locationId' | 'paymentMethods' | 'showOrderStatus' | 'tips' | 'updatedAt' | InsideSettingsKeySpecifier)[];
export type InsideSettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	callWaiter?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountType?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	showOrderStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	tips?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsideSettingsMutationsKeySpecifier = ('update' | InsideSettingsMutationsKeySpecifier)[];
export type InsideSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsideSettingsQueriesKeySpecifier = ('insideSettings' | InsideSettingsQueriesKeySpecifier)[];
export type InsideSettingsQueriesFieldPolicy = {
	insideSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelKeySpecifier = ('active' | 'color' | 'company' | 'companyId' | 'createdAt' | 'icon' | 'id' | 'name' | 'type' | 'updatedAt' | LabelKeySpecifier)[];
export type LabelFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | LabelMutationsKeySpecifier)[];
export type LabelMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelQueriesKeySpecifier = ('label' | 'labels' | LabelQueriesKeySpecifier)[];
export type LabelQueriesFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('address' | 'bookingSettings' | 'company' | 'companyId' | 'createdAt' | 'deliverySettings' | 'favoritesSettings' | 'id' | 'insideSettings' | 'menuSettings' | 'name' | 'phones' | 'posSettings' | 'reviewsSettings' | 'takeawaySettings' | 'updatedAt' | 'wifiName' | 'wifiPassword' | 'workHours' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	favoritesSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	insideSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	menuSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phones?: FieldPolicy<any> | FieldReadFunction<any>,
	posSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	takeawaySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	wifiName?: FieldPolicy<any> | FieldReadFunction<any>,
	wifiPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	workHours?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationsMutationsKeySpecifier = ('create' | 'delete' | 'update' | LocationsMutationsKeySpecifier)[];
export type LocationsMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationsQueriesKeySpecifier = ('location' | 'locations' | LocationsQueriesKeySpecifier)[];
export type LocationsQueriesFieldPolicy = {
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuSettingsKeySpecifier = ('additions' | 'allergens' | 'createdAt' | 'energyValue' | 'id' | 'labels' | 'location' | 'locationId' | 'modifiers' | 'recommendations' | 'updatedAt' | MenuSettingsKeySpecifier)[];
export type MenuSettingsFieldPolicy = {
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	energyValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuSettingsMutationsKeySpecifier = ('update' | MenuSettingsMutationsKeySpecifier)[];
export type MenuSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuSettingsQueriesKeySpecifier = ('menuSetting' | MenuSettingsQueriesKeySpecifier)[];
export type MenuSettingsQueriesFieldPolicy = {
	menuSetting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModifierKeySpecifier = ('active' | 'company' | 'companyId' | 'createdAt' | 'id' | 'name' | 'posId' | 'updatedAt' | 'variants' | ModifierKeySpecifier)[];
export type ModifierFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModifierMutationsKeySpecifier = ('create' | 'delete' | 'update' | ModifierMutationsKeySpecifier)[];
export type ModifierMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModifierQueriesKeySpecifier = ('modifier' | 'modifiers' | ModifierQueriesKeySpecifier)[];
export type ModifierQueriesFieldPolicy = {
	modifier?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModifierVariantKeySpecifier = ('active' | 'id' | 'modifierId' | 'name' | 'positionId' | ModifierVariantKeySpecifier)[];
export type ModifierVariantFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	modifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	positionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('accesses' | 'additions' | 'allergens' | 'areas' | 'auth' | 'bookingSettings' | 'categories' | 'companies' | 'deliverySettings' | 'employees' | 'favoritesSettings' | 'guestAddresses' | 'guests' | 'insideSettings' | 'labels' | 'locations' | 'menuSetting' | 'modifiers' | 'orders' | 'posSettings' | 'positions' | 'posts' | 'reviews' | 'reviewsSettings' | 'sections' | 'tables' | 'takeawaySettings' | 'templates' | 'uiSettings' | 'users' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	accesses?: FieldPolicy<any> | FieldReadFunction<any>,
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>,
	areas?: FieldPolicy<any> | FieldReadFunction<any>,
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	favoritesSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	guestAddresses?: FieldPolicy<any> | FieldReadFunction<any>,
	guests?: FieldPolicy<any> | FieldReadFunction<any>,
	insideSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	menuSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	posSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>,
	tables?: FieldPolicy<any> | FieldReadFunction<any>,
	takeawaySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	uiSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('cancelledAt' | 'checkoutUrl' | 'comment' | 'company' | 'completedAt' | 'createdAt' | 'currency' | 'deliverAt' | 'deliveryTime' | 'guest' | 'guestId' | 'guests' | 'id' | 'invoiceId' | 'location' | 'locationId' | 'number' | 'orderPositions' | 'orderedAt' | 'paidAt' | 'paymentMethod' | 'paymentStatus' | 'posId' | 'promo' | 'reason' | 'refundedAt' | 'status' | 'table' | 'tableId' | 'totalPrice' | 'type' | 'updatedAt' | 'waiter' | 'waiterId' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	cancelledAt?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTime?: FieldPolicy<any> | FieldReadFunction<any>,
	guest?: FieldPolicy<any> | FieldReadFunction<any>,
	guestId?: FieldPolicy<any> | FieldReadFunction<any>,
	guests?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceId?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	orderPositions?: FieldPolicy<any> | FieldReadFunction<any>,
	orderedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	paidAt?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	promo?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	refundedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	table?: FieldPolicy<any> | FieldReadFunction<any>,
	tableId?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	waiter?: FieldPolicy<any> | FieldReadFunction<any>,
	waiterId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderMutationsKeySpecifier = ('accept' | 'addPositions' | 'cancel' | 'changeStatus' | 'close' | 'createInvoice' | 'delete' | 'deleteAll' | 'prepare' | OrderMutationsKeySpecifier)[];
export type OrderMutationsFieldPolicy = {
	accept?: FieldPolicy<any> | FieldReadFunction<any>,
	addPositions?: FieldPolicy<any> | FieldReadFunction<any>,
	cancel?: FieldPolicy<any> | FieldReadFunction<any>,
	changeStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	close?: FieldPolicy<any> | FieldReadFunction<any>,
	createInvoice?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAll?: FieldPolicy<any> | FieldReadFunction<any>,
	prepare?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPositionKeySpecifier = ('additions' | 'amount' | 'createdAt' | 'guest' | 'guestId' | 'id' | 'locationId' | 'order' | 'orderId' | 'posId' | 'position' | 'positionId' | 'updatedAt' | OrderPositionKeySpecifier)[];
export type OrderPositionFieldPolicy = {
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	guest?: FieldPolicy<any> | FieldReadFunction<any>,
	guestId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPositionAdditionKeySpecifier = ('addition' | 'additionId' | 'amount' | 'createdAt' | 'id' | 'orderPosition' | 'orderPositionId' | 'updatedAt' | OrderPositionAdditionKeySpecifier)[];
export type OrderPositionAdditionFieldPolicy = {
	addition?: FieldPolicy<any> | FieldReadFunction<any>,
	additionId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orderPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	orderPositionId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderQueriesKeySpecifier = ('my' | 'opened' | 'order' | 'orders' | OrderQueriesKeySpecifier)[];
export type OrderQueriesFieldPolicy = {
	my?: FieldPolicy<any> | FieldReadFunction<any>,
	opened?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationKeySpecifier = ('pageInfo' | PaginationKeySpecifier)[];
export type PaginationFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'page' | 'perPage' | 'totalItems' | 'totalPages' | PaginationInfoKeySpecifier)[];
export type PaginationInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalItems?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhoneKeySpecifier = ('createdAt' | 'id' | 'location' | 'locationId' | 'name' | 'updatedAt' | 'value' | PhoneKeySpecifier)[];
export type PhoneFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosPositionKeySpecifier = ('active' | 'cookTimeFrom' | 'cookTimeTo' | 'description' | 'id' | 'image' | 'measureUnit' | 'name' | 'priceWithDiscount' | 'priceWithoutDiscount' | 'status' | 'weight' | PosPositionKeySpecifier)[];
export type PosPositionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	cookTimeFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	cookTimeTo?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	measureUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithoutDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosQueriesKeySpecifier = ('positions' | PosQueriesKeySpecifier)[];
export type PosQueriesFieldPolicy = {
	positions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosSettingsKeySpecifier = ('accessToken' | 'account' | 'active' | 'branchId' | 'code' | 'createdAt' | 'id' | 'location' | 'locationId' | 'tipsPosId' | 'updatedAt' | 'variant' | PosSettingsKeySpecifier)[];
export type PosSettingsFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	branchId?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	tipsPosId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosSettingsMutationsKeySpecifier = ('update' | PosSettingsMutationsKeySpecifier)[];
export type PosSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosSettingsQueriesKeySpecifier = ('posSettings' | PosSettingsQueriesKeySpecifier)[];
export type PosSettingsQueriesFieldPolicy = {
	posSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionKeySpecifier = ('additions' | 'allergens' | 'category' | 'categoryId' | 'company' | 'companyId' | 'cookTimeFrom' | 'cookTimeTo' | 'createdAt' | 'description' | 'energyValue' | 'id' | 'image' | 'imageKey' | 'labels' | 'measureUnit' | 'menuOrder' | 'modifiers' | 'name' | 'posId' | 'price' | 'updatedAt' | 'weight' | PositionKeySpecifier)[];
export type PositionFieldPolicy = {
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	cookTimeFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	cookTimeTo?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	energyValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageKey?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	measureUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionImageKeySpecifier = ('full' | 'medium' | 'small' | 'thumb' | PositionImageKeySpecifier)[];
export type PositionImageFieldPolicy = {
	full?: FieldPolicy<any> | FieldReadFunction<any>,
	medium?: FieldPolicy<any> | FieldReadFunction<any>,
	small?: FieldPolicy<any> | FieldReadFunction<any>,
	thumb?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionMutationsKeySpecifier = ('create' | 'delete' | 'deletePositions' | 'duplicate' | 'movePositions' | 'update' | PositionMutationsKeySpecifier)[];
export type PositionMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePositions?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	movePositions?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionPaginationKeySpecifier = ('items' | 'pageInfo' | PositionPaginationKeySpecifier)[];
export type PositionPaginationFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionPriceKeySpecifier = ('active' | 'createdAt' | 'id' | 'location' | 'locationId' | 'position' | 'positionId' | 'priceWithDiscount' | 'priceWithoutDiscount' | 'status' | 'updatedAt' | PositionPriceKeySpecifier)[];
export type PositionPriceFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionId?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithoutDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionQueriesKeySpecifier = ('position' | 'positions' | 'positionsPagination' | PositionQueriesKeySpecifier)[];
export type PositionQueriesFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	positionsPagination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('active' | 'buttonText' | 'content' | 'createdAt' | 'id' | 'imageKey' | 'location' | 'locationId' | 'previewKey' | 'title' | 'type' | 'updatedAt' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	buttonText?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageKey?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewKey?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | PostMutationsKeySpecifier)[];
export type PostMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostQueriesKeySpecifier = ('post' | 'posts' | PostQueriesKeySpecifier)[];
export type PostQueriesFieldPolicy = {
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('accesses' | 'additions' | 'allergens' | 'areas' | 'auth' | 'bookingSettings' | 'categories' | 'companies' | 'deliverySettings' | 'employees' | 'favoritesSettings' | 'guestAddresses' | 'guests' | 'insideSettings' | 'labels' | 'locations' | 'menuSetting' | 'modifiers' | 'orders' | 'pos' | 'posSettings' | 'positions' | 'posts' | 'reviews' | 'reviewsSettings' | 'sections' | 'tables' | 'takeawaySettings' | 'templates' | 'uiSettings' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	accesses?: FieldPolicy<any> | FieldReadFunction<any>,
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>,
	areas?: FieldPolicy<any> | FieldReadFunction<any>,
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	favoritesSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	guestAddresses?: FieldPolicy<any> | FieldReadFunction<any>,
	guests?: FieldPolicy<any> | FieldReadFunction<any>,
	insideSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	menuSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	pos?: FieldPolicy<any> | FieldReadFunction<any>,
	posSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>,
	tables?: FieldPolicy<any> | FieldReadFunction<any>,
	takeawaySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	uiSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('comment' | 'createdAt' | 'email' | 'guest' | 'guestId' | 'id' | 'location' | 'locationId' | 'name' | 'order' | 'orderId' | 'phone' | 'rate' | 'updatedAt' | 'waiter' | 'waiterId' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	guest?: FieldPolicy<any> | FieldReadFunction<any>,
	guestId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	waiter?: FieldPolicy<any> | FieldReadFunction<any>,
	waiterId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewMutationsKeySpecifier = ('create' | 'delete' | 'update' | ReviewMutationsKeySpecifier)[];
export type ReviewMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewQueriesKeySpecifier = ('my' | 'review' | 'reviews' | ReviewQueriesKeySpecifier)[];
export type ReviewQueriesFieldPolicy = {
	my?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewsSettingsKeySpecifier = ('active' | 'comment' | 'createdAt' | 'email' | 'id' | 'image' | 'location' | 'locationId' | 'name' | 'phone' | 'rate' | 'updatedAt' | ReviewsSettingsKeySpecifier)[];
export type ReviewsSettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewsSettingsMutationsKeySpecifier = ('update' | ReviewsSettingsMutationsKeySpecifier)[];
export type ReviewsSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewsSettingsQueriesKeySpecifier = ('reviewsSettings' | ReviewsSettingsQueriesKeySpecifier)[];
export type ReviewsSettingsQueriesFieldPolicy = {
	reviewsSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionKeySpecifier = ('active' | 'categories' | 'company' | 'companyId' | 'createdAt' | 'description' | 'id' | 'imageKey' | 'name' | 'posId' | 'updatedAt' | SectionKeySpecifier)[];
export type SectionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | SectionMutationsKeySpecifier)[];
export type SectionMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionQueriesKeySpecifier = ('section' | 'sections' | SectionQueriesKeySpecifier)[];
export type SectionQueriesFieldPolicy = {
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TableKeySpecifier = ('active' | 'area' | 'areaId' | 'createdAt' | 'id' | 'location' | 'locationId' | 'name' | 'orders' | 'posId' | 'seats' | 'updatedAt' | 'waiter' | 'waiterId' | TableKeySpecifier)[];
export type TableFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	area?: FieldPolicy<any> | FieldReadFunction<any>,
	areaId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	seats?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	waiter?: FieldPolicy<any> | FieldReadFunction<any>,
	waiterId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TableMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | TableMutationsKeySpecifier)[];
export type TableMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TableQueriesKeySpecifier = ('table' | 'tables' | TableQueriesKeySpecifier)[];
export type TableQueriesFieldPolicy = {
	table?: FieldPolicy<any> | FieldReadFunction<any>,
	tables?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TakeawaySettingsKeySpecifier = ('active' | 'allowAsapTime' | 'allowExactTime' | 'createdAt' | 'cutlery' | 'discountEnabled' | 'discountType' | 'discountValue' | 'id' | 'location' | 'locationId' | 'messageToClient' | 'minDelayFromSubmitting' | 'minSumToOrder' | 'minTimeToTakeaway' | 'paymentMethods' | 'showOrderStatus' | 'tips' | 'updatedAt' | TakeawaySettingsKeySpecifier)[];
export type TakeawaySettingsFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	allowAsapTime?: FieldPolicy<any> | FieldReadFunction<any>,
	allowExactTime?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	cutlery?: FieldPolicy<any> | FieldReadFunction<any>,
	discountEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	discountType?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageToClient?: FieldPolicy<any> | FieldReadFunction<any>,
	minDelayFromSubmitting?: FieldPolicy<any> | FieldReadFunction<any>,
	minSumToOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	minTimeToTakeaway?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	showOrderStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	tips?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TakeawaySettingsMutationsKeySpecifier = ('update' | TakeawaySettingsMutationsKeySpecifier)[];
export type TakeawaySettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TakeawaySettingsQueriesKeySpecifier = ('takeawaySettings' | TakeawaySettingsQueriesKeySpecifier)[];
export type TakeawaySettingsQueriesFieldPolicy = {
	takeawaySettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateKeySpecifier = ('additions' | 'allergens' | 'category' | 'categoryId' | 'company' | 'companyId' | 'createdAt' | 'id' | 'labels' | 'modifiers' | 'name' | 'updatedAt' | TemplateKeySpecifier)[];
export type TemplateFieldPolicy = {
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	allergens?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateMutationsKeySpecifier = ('create' | 'delete' | 'duplicate' | 'update' | TemplateMutationsKeySpecifier)[];
export type TemplateMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateQueriesKeySpecifier = ('template' | 'templates' | TemplateQueriesKeySpecifier)[];
export type TemplateQueriesFieldPolicy = {
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UiSettingsKeySpecifier = ('additional' | 'brandColor' | 'company' | 'companyId' | 'createdAt' | 'description' | 'footerBannerVariant' | 'heroImage' | 'id' | 'menuVariant' | 'mobileFooter' | 'mobileHero' | 'mobileHeroImage' | 'mobilePanel' | 'newsBanner' | 'positionImagePlacement' | 'positionSize' | 'positionVariant' | 'radius' | 'socials' | 'theme' | 'updatedAt' | 'workHours' | UiSettingsKeySpecifier)[];
export type UiSettingsFieldPolicy = {
	additional?: FieldPolicy<any> | FieldReadFunction<any>,
	brandColor?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	footerBannerVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	heroImage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menuVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileFooter?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileHero?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileHeroImage?: FieldPolicy<any> | FieldReadFunction<any>,
	mobilePanel?: FieldPolicy<any> | FieldReadFunction<any>,
	newsBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	positionImagePlacement?: FieldPolicy<any> | FieldReadFunction<any>,
	positionSize?: FieldPolicy<any> | FieldReadFunction<any>,
	positionVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	radius?: FieldPolicy<any> | FieldReadFunction<any>,
	socials?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workHours?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UiSettingsMutationsKeySpecifier = ('update' | UiSettingsMutationsKeySpecifier)[];
export type UiSettingsMutationsFieldPolicy = {
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UiSettingsQueriesKeySpecifier = ('uiSettings' | UiSettingsQueriesKeySpecifier)[];
export type UiSettingsQueriesFieldPolicy = {
	uiSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatarKey' | 'companies' | 'createdAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'invitedCompanies' | 'invitedLocations' | 'lastName' | 'password' | 'phone' | 'phoneVerified' | 'posId' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatarKey?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitedCompanies?: FieldPolicy<any> | FieldReadFunction<any>,
	invitedLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	posId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMutationsKeySpecifier = ('delete' | 'updateOwner' | UserMutationsKeySpecifier)[];
export type UserMutationsFieldPolicy = {
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOwner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserQueriesKeySpecifier = ('user' | 'users' | UserQueriesKeySpecifier)[];
export type UserQueriesFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkHourKeySpecifier = ('active' | 'dayOfWeek' | 'from' | 'id' | 'location' | 'locationId' | 'till' | WorkHourKeySpecifier)[];
export type WorkHourFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	dayOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	till?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Access?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessKeySpecifier | (() => undefined | AccessKeySpecifier),
		fields?: AccessFieldPolicy,
	},
	AccessMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessMutationsKeySpecifier | (() => undefined | AccessMutationsKeySpecifier),
		fields?: AccessMutationsFieldPolicy,
	},
	AccessQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessQueriesKeySpecifier | (() => undefined | AccessQueriesKeySpecifier),
		fields?: AccessQueriesFieldPolicy,
	},
	Addition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdditionKeySpecifier | (() => undefined | AdditionKeySpecifier),
		fields?: AdditionFieldPolicy,
	},
	AdditionMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdditionMutationsKeySpecifier | (() => undefined | AdditionMutationsKeySpecifier),
		fields?: AdditionMutationsFieldPolicy,
	},
	AdditionQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdditionQueriesKeySpecifier | (() => undefined | AdditionQueriesKeySpecifier),
		fields?: AdditionQueriesFieldPolicy,
	},
	Allergen?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllergenKeySpecifier | (() => undefined | AllergenKeySpecifier),
		fields?: AllergenFieldPolicy,
	},
	AllergenMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllergenMutationsKeySpecifier | (() => undefined | AllergenMutationsKeySpecifier),
		fields?: AllergenMutationsFieldPolicy,
	},
	AllergenQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllergenQueriesKeySpecifier | (() => undefined | AllergenQueriesKeySpecifier),
		fields?: AllergenQueriesFieldPolicy,
	},
	Area?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AreaKeySpecifier | (() => undefined | AreaKeySpecifier),
		fields?: AreaFieldPolicy,
	},
	AreaMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AreaMutationsKeySpecifier | (() => undefined | AreaMutationsKeySpecifier),
		fields?: AreaMutationsFieldPolicy,
	},
	AreaQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AreaQueriesKeySpecifier | (() => undefined | AreaQueriesKeySpecifier),
		fields?: AreaQueriesFieldPolicy,
	},
	AuthMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthMutationsKeySpecifier | (() => undefined | AuthMutationsKeySpecifier),
		fields?: AuthMutationsFieldPolicy,
	},
	AuthQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthQueriesKeySpecifier | (() => undefined | AuthQueriesKeySpecifier),
		fields?: AuthQueriesFieldPolicy,
	},
	AuthTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthTokensKeySpecifier | (() => undefined | AuthTokensKeySpecifier),
		fields?: AuthTokensFieldPolicy,
	},
	BookingSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookingSettingsKeySpecifier | (() => undefined | BookingSettingsKeySpecifier),
		fields?: BookingSettingsFieldPolicy,
	},
	BookingSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookingSettingsMutationsKeySpecifier | (() => undefined | BookingSettingsMutationsKeySpecifier),
		fields?: BookingSettingsMutationsFieldPolicy,
	},
	BookingSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookingSettingsQueriesKeySpecifier | (() => undefined | BookingSettingsQueriesKeySpecifier),
		fields?: BookingSettingsQueriesFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryMutationsKeySpecifier | (() => undefined | CategoryMutationsKeySpecifier),
		fields?: CategoryMutationsFieldPolicy,
	},
	CategoryQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryQueriesKeySpecifier | (() => undefined | CategoryQueriesKeySpecifier),
		fields?: CategoryQueriesFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	CompanyLogo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyLogoKeySpecifier | (() => undefined | CompanyLogoKeySpecifier),
		fields?: CompanyLogoFieldPolicy,
	},
	CompanyMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyMutationsKeySpecifier | (() => undefined | CompanyMutationsKeySpecifier),
		fields?: CompanyMutationsFieldPolicy,
	},
	CompanyQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyQueriesKeySpecifier | (() => undefined | CompanyQueriesKeySpecifier),
		fields?: CompanyQueriesFieldPolicy,
	},
	CreateInvoiceType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateInvoiceTypeKeySpecifier | (() => undefined | CreateInvoiceTypeKeySpecifier),
		fields?: CreateInvoiceTypeFieldPolicy,
	},
	DeliverySettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySettingsKeySpecifier | (() => undefined | DeliverySettingsKeySpecifier),
		fields?: DeliverySettingsFieldPolicy,
	},
	DeliverySettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySettingsMutationsKeySpecifier | (() => undefined | DeliverySettingsMutationsKeySpecifier),
		fields?: DeliverySettingsMutationsFieldPolicy,
	},
	DeliverySettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySettingsQueriesKeySpecifier | (() => undefined | DeliverySettingsQueriesKeySpecifier),
		fields?: DeliverySettingsQueriesFieldPolicy,
	},
	Employee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmployeeKeySpecifier | (() => undefined | EmployeeKeySpecifier),
		fields?: EmployeeFieldPolicy,
	},
	EmployeeMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmployeeMutationsKeySpecifier | (() => undefined | EmployeeMutationsKeySpecifier),
		fields?: EmployeeMutationsFieldPolicy,
	},
	EmployeeQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmployeeQueriesKeySpecifier | (() => undefined | EmployeeQueriesKeySpecifier),
		fields?: EmployeeQueriesFieldPolicy,
	},
	EnergyValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnergyValueKeySpecifier | (() => undefined | EnergyValueKeySpecifier),
		fields?: EnergyValueFieldPolicy,
	},
	FavoritesSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavoritesSettingsKeySpecifier | (() => undefined | FavoritesSettingsKeySpecifier),
		fields?: FavoritesSettingsFieldPolicy,
	},
	FavoritesSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavoritesSettingsMutationsKeySpecifier | (() => undefined | FavoritesSettingsMutationsKeySpecifier),
		fields?: FavoritesSettingsMutationsFieldPolicy,
	},
	FavoritesSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavoritesSettingsQueriesKeySpecifier | (() => undefined | FavoritesSettingsQueriesKeySpecifier),
		fields?: FavoritesSettingsQueriesFieldPolicy,
	},
	Guest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestKeySpecifier | (() => undefined | GuestKeySpecifier),
		fields?: GuestFieldPolicy,
	},
	GuestAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestAddressKeySpecifier | (() => undefined | GuestAddressKeySpecifier),
		fields?: GuestAddressFieldPolicy,
	},
	GuestAddressMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestAddressMutationsKeySpecifier | (() => undefined | GuestAddressMutationsKeySpecifier),
		fields?: GuestAddressMutationsFieldPolicy,
	},
	GuestAddressQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestAddressQueriesKeySpecifier | (() => undefined | GuestAddressQueriesKeySpecifier),
		fields?: GuestAddressQueriesFieldPolicy,
	},
	GuestMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestMutationsKeySpecifier | (() => undefined | GuestMutationsKeySpecifier),
		fields?: GuestMutationsFieldPolicy,
	},
	GuestQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestQueriesKeySpecifier | (() => undefined | GuestQueriesKeySpecifier),
		fields?: GuestQueriesFieldPolicy,
	},
	InsideSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsideSettingsKeySpecifier | (() => undefined | InsideSettingsKeySpecifier),
		fields?: InsideSettingsFieldPolicy,
	},
	InsideSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsideSettingsMutationsKeySpecifier | (() => undefined | InsideSettingsMutationsKeySpecifier),
		fields?: InsideSettingsMutationsFieldPolicy,
	},
	InsideSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsideSettingsQueriesKeySpecifier | (() => undefined | InsideSettingsQueriesKeySpecifier),
		fields?: InsideSettingsQueriesFieldPolicy,
	},
	Label?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelKeySpecifier | (() => undefined | LabelKeySpecifier),
		fields?: LabelFieldPolicy,
	},
	LabelMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelMutationsKeySpecifier | (() => undefined | LabelMutationsKeySpecifier),
		fields?: LabelMutationsFieldPolicy,
	},
	LabelQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelQueriesKeySpecifier | (() => undefined | LabelQueriesKeySpecifier),
		fields?: LabelQueriesFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationsMutationsKeySpecifier | (() => undefined | LocationsMutationsKeySpecifier),
		fields?: LocationsMutationsFieldPolicy,
	},
	LocationsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationsQueriesKeySpecifier | (() => undefined | LocationsQueriesKeySpecifier),
		fields?: LocationsQueriesFieldPolicy,
	},
	MenuSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuSettingsKeySpecifier | (() => undefined | MenuSettingsKeySpecifier),
		fields?: MenuSettingsFieldPolicy,
	},
	MenuSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuSettingsMutationsKeySpecifier | (() => undefined | MenuSettingsMutationsKeySpecifier),
		fields?: MenuSettingsMutationsFieldPolicy,
	},
	MenuSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuSettingsQueriesKeySpecifier | (() => undefined | MenuSettingsQueriesKeySpecifier),
		fields?: MenuSettingsQueriesFieldPolicy,
	},
	Modifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModifierKeySpecifier | (() => undefined | ModifierKeySpecifier),
		fields?: ModifierFieldPolicy,
	},
	ModifierMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModifierMutationsKeySpecifier | (() => undefined | ModifierMutationsKeySpecifier),
		fields?: ModifierMutationsFieldPolicy,
	},
	ModifierQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModifierQueriesKeySpecifier | (() => undefined | ModifierQueriesKeySpecifier),
		fields?: ModifierQueriesFieldPolicy,
	},
	ModifierVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModifierVariantKeySpecifier | (() => undefined | ModifierVariantKeySpecifier),
		fields?: ModifierVariantFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderMutationsKeySpecifier | (() => undefined | OrderMutationsKeySpecifier),
		fields?: OrderMutationsFieldPolicy,
	},
	OrderPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPositionKeySpecifier | (() => undefined | OrderPositionKeySpecifier),
		fields?: OrderPositionFieldPolicy,
	},
	OrderPositionAddition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPositionAdditionKeySpecifier | (() => undefined | OrderPositionAdditionKeySpecifier),
		fields?: OrderPositionAdditionFieldPolicy,
	},
	OrderQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderQueriesKeySpecifier | (() => undefined | OrderQueriesKeySpecifier),
		fields?: OrderQueriesFieldPolicy,
	},
	Pagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationKeySpecifier | (() => undefined | PaginationKeySpecifier),
		fields?: PaginationFieldPolicy,
	},
	PaginationInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationInfoKeySpecifier | (() => undefined | PaginationInfoKeySpecifier),
		fields?: PaginationInfoFieldPolicy,
	},
	Phone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhoneKeySpecifier | (() => undefined | PhoneKeySpecifier),
		fields?: PhoneFieldPolicy,
	},
	PosPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosPositionKeySpecifier | (() => undefined | PosPositionKeySpecifier),
		fields?: PosPositionFieldPolicy,
	},
	PosQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosQueriesKeySpecifier | (() => undefined | PosQueriesKeySpecifier),
		fields?: PosQueriesFieldPolicy,
	},
	PosSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosSettingsKeySpecifier | (() => undefined | PosSettingsKeySpecifier),
		fields?: PosSettingsFieldPolicy,
	},
	PosSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosSettingsMutationsKeySpecifier | (() => undefined | PosSettingsMutationsKeySpecifier),
		fields?: PosSettingsMutationsFieldPolicy,
	},
	PosSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosSettingsQueriesKeySpecifier | (() => undefined | PosSettingsQueriesKeySpecifier),
		fields?: PosSettingsQueriesFieldPolicy,
	},
	Position?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		fields?: PositionFieldPolicy,
	},
	PositionImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionImageKeySpecifier | (() => undefined | PositionImageKeySpecifier),
		fields?: PositionImageFieldPolicy,
	},
	PositionMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionMutationsKeySpecifier | (() => undefined | PositionMutationsKeySpecifier),
		fields?: PositionMutationsFieldPolicy,
	},
	PositionPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionPaginationKeySpecifier | (() => undefined | PositionPaginationKeySpecifier),
		fields?: PositionPaginationFieldPolicy,
	},
	PositionPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionPriceKeySpecifier | (() => undefined | PositionPriceKeySpecifier),
		fields?: PositionPriceFieldPolicy,
	},
	PositionQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionQueriesKeySpecifier | (() => undefined | PositionQueriesKeySpecifier),
		fields?: PositionQueriesFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostMutationsKeySpecifier | (() => undefined | PostMutationsKeySpecifier),
		fields?: PostMutationsFieldPolicy,
	},
	PostQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostQueriesKeySpecifier | (() => undefined | PostQueriesKeySpecifier),
		fields?: PostQueriesFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	ReviewMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewMutationsKeySpecifier | (() => undefined | ReviewMutationsKeySpecifier),
		fields?: ReviewMutationsFieldPolicy,
	},
	ReviewQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewQueriesKeySpecifier | (() => undefined | ReviewQueriesKeySpecifier),
		fields?: ReviewQueriesFieldPolicy,
	},
	ReviewsSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewsSettingsKeySpecifier | (() => undefined | ReviewsSettingsKeySpecifier),
		fields?: ReviewsSettingsFieldPolicy,
	},
	ReviewsSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewsSettingsMutationsKeySpecifier | (() => undefined | ReviewsSettingsMutationsKeySpecifier),
		fields?: ReviewsSettingsMutationsFieldPolicy,
	},
	ReviewsSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewsSettingsQueriesKeySpecifier | (() => undefined | ReviewsSettingsQueriesKeySpecifier),
		fields?: ReviewsSettingsQueriesFieldPolicy,
	},
	Section?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionKeySpecifier | (() => undefined | SectionKeySpecifier),
		fields?: SectionFieldPolicy,
	},
	SectionMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionMutationsKeySpecifier | (() => undefined | SectionMutationsKeySpecifier),
		fields?: SectionMutationsFieldPolicy,
	},
	SectionQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionQueriesKeySpecifier | (() => undefined | SectionQueriesKeySpecifier),
		fields?: SectionQueriesFieldPolicy,
	},
	Table?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TableKeySpecifier | (() => undefined | TableKeySpecifier),
		fields?: TableFieldPolicy,
	},
	TableMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TableMutationsKeySpecifier | (() => undefined | TableMutationsKeySpecifier),
		fields?: TableMutationsFieldPolicy,
	},
	TableQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TableQueriesKeySpecifier | (() => undefined | TableQueriesKeySpecifier),
		fields?: TableQueriesFieldPolicy,
	},
	TakeawaySettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TakeawaySettingsKeySpecifier | (() => undefined | TakeawaySettingsKeySpecifier),
		fields?: TakeawaySettingsFieldPolicy,
	},
	TakeawaySettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TakeawaySettingsMutationsKeySpecifier | (() => undefined | TakeawaySettingsMutationsKeySpecifier),
		fields?: TakeawaySettingsMutationsFieldPolicy,
	},
	TakeawaySettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TakeawaySettingsQueriesKeySpecifier | (() => undefined | TakeawaySettingsQueriesKeySpecifier),
		fields?: TakeawaySettingsQueriesFieldPolicy,
	},
	Template?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateKeySpecifier | (() => undefined | TemplateKeySpecifier),
		fields?: TemplateFieldPolicy,
	},
	TemplateMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateMutationsKeySpecifier | (() => undefined | TemplateMutationsKeySpecifier),
		fields?: TemplateMutationsFieldPolicy,
	},
	TemplateQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateQueriesKeySpecifier | (() => undefined | TemplateQueriesKeySpecifier),
		fields?: TemplateQueriesFieldPolicy,
	},
	UiSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UiSettingsKeySpecifier | (() => undefined | UiSettingsKeySpecifier),
		fields?: UiSettingsFieldPolicy,
	},
	UiSettingsMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UiSettingsMutationsKeySpecifier | (() => undefined | UiSettingsMutationsKeySpecifier),
		fields?: UiSettingsMutationsFieldPolicy,
	},
	UiSettingsQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UiSettingsQueriesKeySpecifier | (() => undefined | UiSettingsQueriesKeySpecifier),
		fields?: UiSettingsQueriesFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMutationsKeySpecifier | (() => undefined | UserMutationsKeySpecifier),
		fields?: UserMutationsFieldPolicy,
	},
	UserQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserQueriesKeySpecifier | (() => undefined | UserQueriesKeySpecifier),
		fields?: UserQueriesFieldPolicy,
	},
	WorkHour?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkHourKeySpecifier | (() => undefined | WorkHourKeySpecifier),
		fields?: WorkHourFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;