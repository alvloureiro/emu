import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Layout} from '@ui-kitten/components';

const ForgotPassword: React.FC = () => {
  // TODO: connect with redux
  const [email, setEmail] = useState('');

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePwdRecoveryPress = () => {
    console.log('Recovery password clicked!');
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.form}>
        <Input
          caption="Insira o email cadastrado"
          value={email}
          onChangeText={handleEmailChange}
          placeholder={'Email Cadastrado'}
          size="large"
          textContentType="emailAddress"
        />
        <Button
          style={styles.button}
          size="large"
          onPress={handlePwdRecoveryPress}>
          Recuperar Senha
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    // flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
});

export default ForgotPassword;
