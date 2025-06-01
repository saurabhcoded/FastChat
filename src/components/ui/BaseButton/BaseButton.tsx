import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Button as RPButton} from 'react-native-paper';
import styles from './styles';

interface buttonI {
  label: string;
  href?: string;
  onPress?: ((e: GestureResponderEvent) => void | Promise<void>) | undefined;
  onLongPress?:
    | ((e: GestureResponderEvent) => void | Promise<void>)
    | undefined;
  buttonProps?: any;
}
const BaseButton = (props: buttonI) => {
  const {navigate} = useNavigation();
  const onPressHandler = (e: GestureResponderEvent) => {
    if (props.href) {
      return navigate(props.href);
    }
    return props.onPress?.(e);
  };
  return (
    <RPButton
      compact
      style={styles.buttonStyle}
      labelStyle={styles.labelStyle}
      contentStyle={styles.contentStyle}
      mode="contained"
      onPress={onPressHandler}
      onLongPress={props.onLongPress}>
      {props.label}
    </RPButton>
  );
};

export default BaseButton;
