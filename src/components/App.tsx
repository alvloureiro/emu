import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import LoginComponent from './login';
import {ScrollView, StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <LoginComponent />
      </ScrollView>
    </Provider>
  );
};

export default App;
