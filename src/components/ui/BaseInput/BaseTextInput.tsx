import React from 'react';
import {TextInput as RPTextInput} from 'react-native-paper';
import styles from './styles';

interface RPTextInputI {
  value: any | undefined;
  setValue: (value: string) => void;
  error?: string | undefined;
  showError?: boolean;
  label?: string | undefined;
  textInputProps?: any;
}
const BaseTextInput = (props: RPTextInputI) => {
  return (
    <RPTextInput
      style={styles.inputStyle}
      mode="outlined"
      label={props.label}
      value={props.value}
      onChangeText={text => props.setValue(text)}
      {...props.textInputProps}
    />
  );
};

export default BaseTextInput;
