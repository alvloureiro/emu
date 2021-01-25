import React, {useState} from 'react';
import {
  Image,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon, Input} from '@ui-kitten/components';
import {useActions} from '../../hooks/useActions';
import colors from '../config/colors';
import strings from '../config/strings';

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <Image
        source={require('../config/assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Input
          value={username}
          onChangeText={handleUserNameChanged}
          placeholder={strings.EMAIL_PLACEHOLDER}
          size="large"
          textContentType="emailAddress"
        />
        <Input
          caption="Senha deve conter pelo menos 8 caracteres"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={strings.PASSWORD_PLACEHOLDER}
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}
          size="large"
          secureTextEntry={secureTextEntry}
          textContentType="password"
        />
        <Button style={{marginTop: 50}} size="large" onPress={handleLoginPress}>
          {strings.LOGIN}
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    //backgroundColor: colors.WHITE,
    flex: 1,
    width: '60%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    //backgroundColor: colors.BLUELIGHT,
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
});

export default LoginComponent;
