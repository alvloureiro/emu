import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {
  HomeUserStats as Home,
  UserAccountsLimits as Limites,
  Profile as Perfil,
  UserPurchases as Compras,
} from '../user';
import {HomeIcon, LimitsIcon, ShopIcon, ProfileIcon} from '../common';
import {RootTabParamsList} from '../../navigation';

const Tab = createBottomTabNavigator<RootTabParamsList>();

const BottomTabBar = (props: BottomTabBarProps<BottomTabBarOptions>) => (
  <BottomNavigation
    selectedIndex={props.state.index}
    appearance="noIndicator"
    onSelect={(index) =>
      props.navigation.navigate(props.state.routeNames[index])
    }>
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Compras" icon={ShopIcon} />
    <BottomNavigationTab title="Limites" icon={LimitsIcon} />
    <BottomNavigationTab title="Perfil" icon={ProfileIcon} />
  </BottomNavigation>
);

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Compras" component={Compras} />
      <Tab.Screen name="Limites" component={Limites} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
