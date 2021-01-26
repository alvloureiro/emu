import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';

const TransitionsScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
const RootStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={TransitionsScreenOptions}>
        <RootStack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
