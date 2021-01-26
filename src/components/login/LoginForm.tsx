import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {useActions} from '../../hooks/useActions';
import strings from '../config/strings';

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

type Props = StackScreenProps<{}>;

const LoginForm: React.FC<Props> = (props) => {
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

  const handleLoginPress = (event: GestureResponderEvent) => {
    console.log('Submit clicked!');
    event.preventDefault();
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
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
        <Button style={styles.button} size="large" onPress={handleLoginPress}>
          {strings.LOGIN}
        </Button>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('go to forgot password component');
            props.navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.text} status="info">
            {strings.FORGOT_PASSWORD}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
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
  text: {
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default LoginForm;
