import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '../config/colors';

type Props = TextInputProps;

export const EmuTextInput: React.FC<Props> = (props) => {
  const {style, ...otherProps} = props;
  return (
    <TextInput
      selectionColor={colors.GREENLIGHT}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});
