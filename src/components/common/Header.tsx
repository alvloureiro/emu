import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Avatar, Button, Text} from '@ui-kitten/components';
import {ChatIcon} from './Icons';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={header.container}>
      <Avatar
        style={{marginLeft: 15}}
        source={require('../config/assets/images/logo.png')}
        size="small"
      />
      <Text style={header.title}>{title}</Text>
      <Button appearance="ghost" accessoryLeft={ChatIcon} size="medium" />
    </View>
  );
};

const header = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 100 : 80,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
