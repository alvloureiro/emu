import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export const UserAccountsLimits: React.FC = () => {
  return (
    <Layout style={styles.container}>
      <Text>Limites</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
