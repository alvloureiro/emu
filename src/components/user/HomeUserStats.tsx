import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export const HomeUserStats: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Text>Usuário Exemplo</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
