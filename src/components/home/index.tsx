import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import {
  HomeUserStats as Home,
  UserAccountsLimits as Limites,
  Profile as Perfil,
  UserPurchases as Compras,
} from '../user';
import {UserData} from '../../actions';

type RootTabParamsList = {
  Perfil: {user: UserData};
  Home: {user: UserData};
  Compras: {user: UserData};
  Limites: {user: UserData};
};
type HomeUserRouteProp = RouteProp<RootTabParamsList, 'Home'>;
type HomeUserNavigationProp = BottomTabNavigationProp<
  RootTabParamsList,
  'Home'
>;

type HomeUserProps = {
  route: HomeUserRouteProp;
  navigation: HomeUserNavigationProp;
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

const HomeNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Compras" component={Compras} />
        <Tab.Screen name="Limites" component={Limites} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
