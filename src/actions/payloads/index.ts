export interface UserData {
  name: string;
  photo_url: string;
  email: string;
  signup_date: Date;
  account_stats: AccountStats;
}

export interface AccountStats {
  total: number;
  available: number;
  used: number;
}

export interface UserCredentials {
  username: string;
  password: string;
}
