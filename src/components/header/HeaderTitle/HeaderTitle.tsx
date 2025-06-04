import { HeaderTitleProps } from '@react-navigation/elements';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const HeaderTitle = (props:HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} variant="headlineSmall">
        {props.children}
      </Text>
    </View>
  );
};

export default HeaderTitle;
