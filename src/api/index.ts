//TODO use axios to make a real request
import {UserData} from '../actions';
import {MockLoginCredentials, MockUserData} from './mock';

interface LoginCredentials {
  username: string;
  password: string;
}

export const doLogin = (credentials: LoginCredentials): UserData => {
  const {username, password} = credentials;
  if (
    username !== MockLoginCredentials.username &&
    password !== MockLoginCredentials.password
  ) {
    throw new Error('Invalid Login Credentials!');
  }

  return MockUserData;
};
