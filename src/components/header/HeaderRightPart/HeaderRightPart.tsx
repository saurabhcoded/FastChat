import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';
import {UiColors} from '@/constants/colors';
import {Link, useNavigation} from '@react-navigation/native';
import {AppRoutes} from '@/constants/constants';

const HeaderRightPart = (props: Headers) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <IconButton
        icon="forum-outline"
        size={28}
        iconColor={UiColors.secondary.darkest}
        onPress={() => navigate.navigate(AppRoutes.friends.path)}
      />
      <IconButton
        icon="cog-outline"
        size={28}
        iconColor={UiColors.secondary.darkest}
        onPress={() => navigate.navigate(AppRoutes.settings.path)}
      />
    </View>
  );
};

export default HeaderRightPart;
