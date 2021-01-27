export interface UserData {
  id: number;
  name: string;
  photo_url: string;
  email: string;
  signup_date: Date;
}

export interface UserAccountInfo {
  user: UserData;
  total: number;
  available: number;
  used: number;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface Purchase {
  id: number;
  user: UserData;
  retailer: Retailer;
  purchase_date: Date;
  amount_paid: number;
}
export interface UserPurchaseResume {
  user: UserData;
  resume: {
    amount_paid: number;
    amount_payable: number;
    unpaid_amount: number;
  };
  purchases: Purchase[];
}

export interface RetailerCategory {
  name: string;
}

export interface Retailer {
  id: number;
  category: RetailerCategory;
  name: string;
  logo_url: string;
  phone: string;
  address: string;
  parent_store_location: string;
}
