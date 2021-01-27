import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export const UserPurchases: React.FC = () => {
  return (
    <Layout style={styles.container}>
      <Text>Compras</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
