export const MockLoginCredentials = {
  username: 'sonic@ume.com.br',
  password: 'password',
};

export const MockUserData = {
  id: 1,
  name: 'Sonic the Headgehog',
  photo_url: '',
  email: 'sonic@ume.com.br',
  signup_date: new Date(),
};

export const MockUserAccountInfo = {
  user: MockUserData,
  total: 100,
  used: 30,
  available: 70,
};

export const AcessoriesCategory = {
  name: 'Acessórios',
};

export const SupermarketCategory = {
  name: 'Supermercado',
};

export const FoodsCategory = {
  name: 'Alimentos',
};

export const MockTropicalAtacaoRetailer = {
  id: 1,
  category: AcessoriesCategory,
  name: 'Tropical Atacadão',
  logo_url: '',
  phone: '222222222',
  address: 'Miranda Leão',
  parent_store_location: '',
};

export const MockTropicalMultilojaRetailer = {
  id: 2,
  category: SupermarketCategory,
  name: 'Tropical Multiloja',
  logo_url: '',
  phone: '222222222',
  address: 'Via Norte',
  parent_store_location: '',
};

export const MockCORetailer = {
  id: 2,
  category: SupermarketCategory,
  name: 'CO Supermercados',
  logo_url: '',
  phone: '222222222',
  address: 'Av Tefé',
  parent_store_location: '',
};

export const MockPurchaseList = [
  {
    id: 1,
    user: MockUserData,
    retailer: MockCORetailer,
    purchase_date: new Date(),
    amount_paid: 10,
  },
  {
    id: 3,
    user: MockUserData,
    retailer: MockTropicalAtacaoRetailer,
    purchase_date: new Date(),
    amount_paid: 13,
  },
  {
    id: 2,
    user: MockUserData,
    retailer: MockTropicalMultilojaRetailer,
    purchase_date: new Date(),
    amount_paid: 12,
  },
];

export const MockUserPurchaseResume = {
  user: MockUserData,
  resume: {
    amount_paid: 200,
    amount_payable: 120,
    unpaid_amount: 40,
  },
  purchases: MockPurchaseList,
};
