import {UserPurchaseResume} from '../../actions';
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

export enum PartnerCategory {
  Acessories = 'Acessórios',
  Foods = 'Alimentos',
  Telephony = 'Telefonia',
  Supermarker = 'Supermercado',
}

export const MockTropicalAtacaoRetailer = {
  id: 1,
  category: PartnerCategory.Acessories,
  name: 'Tropical Atacadão',
  logo_url: '',
  phone: '222222222',
  address: 'Miranda Leão',
  parent_store_location: '',
};

export const MockTropicalMultilojaRetailer = {
  id: 2,
  category: PartnerCategory.Acessories,
  name: 'Tropical Multiloja',
  logo_url: '',
  phone: '222222222',
  address: 'Via Norte',
  parent_store_location: '',
};

export const MockCORetailer = {
  id: 3,
  category: PartnerCategory.Supermarker,
  name: 'CO Supermercados',
  logo_url: '',
  phone: '222222222',
  address: 'Av Tefé',
  parent_store_location: '',
};

export const MockViaUnoRetailer = {
  id: 4,
  category: PartnerCategory.Acessories,
  name: 'Via Uno',
  logo_url: '',
  phone: '222222222',
  address: 'Manaura Shopping',
  parent_store_location: '',
};

export const MockInfoCellRetailer = {
  id: 5,
  category: PartnerCategory.Telephony,
  name: 'Info Cell',
  logo_url: '',
  phone: '222222222',
  address: 'Samaúma Shopping',
  parent_store_location: '',
};

export const MockClaroRetailer = {
  id: 6,
  category: PartnerCategory.Telephony,
  name: 'Claro',
  logo_url: '',
  phone: '222222222',
  address: 'Samaúma Shopping',
  parent_store_location: '',
};

export const MockPartners = {
  user: {
    data: MockUserData,
    accountInfo: MockUserAccountInfo,
  },
  partners: {
    data: {
      supermarket: [MockCORetailer],
      food: [MockCORetailer],
      acessories: [
        MockViaUnoRetailer,
        MockTropicalMultilojaRetailer,
        MockTropicalAtacaoRetailer,
      ],
      telephony: [MockClaroRetailer, MockInfoCellRetailer],
    },
  },
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

export const MockUserPurchaseResume: UserPurchaseResume = {
  user: MockUserData,
  resume: {
    amount_paid: 200,
    amount_payable: 120,
    unpaid_amount: 40,
  },
  purchases: MockPurchaseList,
};

export const MockGeneralUserAccountInfo = [
  {
    title: 'Limites',
    data: MockUserAccountInfo,
  },
  {
    title: 'Compras',
    data: MockUserPurchaseResume,
  },
];
