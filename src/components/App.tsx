import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from '../components/config/theme/app-theme.json';
import {Provider} from 'react-redux';
import store from '../store';
import RootNavigator from './login';

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <RootNavigator />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
