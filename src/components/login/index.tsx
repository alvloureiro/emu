import React, {useState} from 'react';
import {
  Button,
  Image,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  View,
} from 'react-native';
import {EmuTextInput} from '../common';
import {useActions} from '../../hooks/useActions';
import colors from '../config/colors';
import strings from '../config/strings';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loginDidAttempt} = useActions();

  const handleUserNameChanged = (email: string) => {
    setUsername(email);
  };

  const handlePasswordChange = (pwd: string) => {
    setPassword(pwd);
  };

  const handleLoginPress = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    event.preventDefault();
    console.log('Submit clicked!');
    loginDidAttempt({username, password});
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../config/assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <EmuTextInput
          value={username}
          onChangeText={handleUserNameChanged}
          placeholder={strings.EMAIL_PLACEHOLDER}
          textContentType="emailAddress"
        />
        <EmuTextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={strings.PASSWORD_PLACEHOLDER}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button
          color={colors.GREEN}
          title={strings.LOGIN}
          onPress={handleLoginPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    backgroundColor: colors.WHITE,
    flex: 1,
    width: '60%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    backgroundColor: colors.WHITE,
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
});

export default LoginComponent;
