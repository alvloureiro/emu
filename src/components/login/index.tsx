import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import HomeNavigator from '../home';
import * as RootNavigation from '../../navigation';

const TransitionsScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
const RootStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={TransitionsScreenOptions}
        headerMode="none">
        <RootStack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
