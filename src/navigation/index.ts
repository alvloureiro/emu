import React from 'react';
import {NavigationContainerRef, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {UserData} from '../actions';

export type RootTabParamsList = {
  Perfil: {user: UserData};
  Home: {user: UserData};
  Compras: {user: UserData};
  Limites: {user: UserData};
  Parceiros: {user: UserData} | undefined;
};
export type HomeUserRouteProp = RouteProp<RootTabParamsList, 'Home'>;
export type HomeUserNavigationProp = BottomTabNavigationProp<
  RootTabParamsList,
  'Home'
>;

export type HomeUserProps = {
  route: HomeUserRouteProp;
  navigation: HomeUserNavigationProp;
};

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}
