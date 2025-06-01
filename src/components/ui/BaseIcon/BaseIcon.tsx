import Icon from '@react-native-vector-icons/material-design-icons';
import React from 'react';

const BaseIcon = (props: any) => {
  return <Icon name={"rocket"} size={30} color="#900" {...props} />;
};

export default BaseIcon;
