//TODO use axios to make a real request
import {
  UserData,
  UserAccountInfo,
  UserPurchaseResume,
  Purchase,
  GeneralUserAccountResume,
  Partners,
  Retailer,
} from '../actions';
import {
  MockLoginCredentials,
  MockUserData,
  MockPurchaseList,
  MockUserAccountInfo,
  MockUserPurchaseResume,
  MockPartners,
} from './mock';

interface LoginCredentials {
  username: string;
  password: string;
}

interface RecoverySuccess {
  message: string;
}

export const doLogin = (credentials: LoginCredentials): UserData => {
  const {username, password} = credentials;
  if (!username) {
    throw new Error('Nome de usuário inválido!');
  }
  if (!password) {
    throw new Error('Senha inválida ou vazia!');
  }
  if (
    username !== MockLoginCredentials.username &&
    password !== MockLoginCredentials.password
  ) {
    throw new Error('Usuário ou senha inválidos!');
  }

  return MockUserData;
};

export const recoverPassword = (email: string): RecoverySuccess => {
  if (!email) {
    throw new Error('Email Inválido!');
  }

  if (email !== MockLoginCredentials.username) {
    throw new Error('Email não consta em nossa base de dados!');
  }

  return {
    message:
      'Um email para reconfiguração de senha foi enviado para seu email cadastrado',
  };
};

export const getUserAccountInfo = (user: UserData): UserAccountInfo => {
  if (!user) {
    throw new Error('Usuário Invãlido!');
  }

  return MockUserAccountInfo;
};

export const getUserPurchasesResume = (user: UserData): UserPurchaseResume => {
  // TODO: improve user validation
  if (!user) {
    throw new Error('Usuário Inválido!');
  }

  return MockUserPurchaseResume;
};

export const getUserPurchases = (user: UserData): Purchase[] => {
  if (!user) {
    throw new Error('Usuário Inválido!');
  }

  return MockPurchaseList;
};

export const getPartners = (): Partners => {
  //FIXME: we should add a token as parameter?

  const {partners} = MockPartners;

  return partners;
};

export const getPartnerDetails = (id: number): Retailer | undefined => {
  if (id < 0) {
    throw new Error('Parceiro não cadastrado em nossa base de dados');
  }
  const {partners} = MockPartners;
  const {data} = partners;
  let temp = [
    ...data.acessories,
    ...data.food,
    ...data.supermarket,
    ...data.telephony,
  ];
  return temp.find((p) => p.id === id);
};

export const getGeneralUserAccountInfo = (
  user: UserData,
): GeneralUserAccountResume => {
  if (!user) {
    throw new Error('Usuário Inválido! ou inexistente em nossa base de dados!');
  }

  return [
    {
      title: 'Limites',
      data: MockUserAccountInfo,
    },
    {
      title: 'Compras',
      data: MockUserPurchaseResume,
    },
  ];
};
