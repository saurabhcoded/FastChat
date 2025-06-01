import React, {ReactNode} from 'react';
import {GestureResponderEvent, useColorScheme} from 'react-native';
import {Card as RPCard} from 'react-native-paper';
import styles from './styles';
import {ColorSchemes} from '@/constants/constants';

interface BaseCardActionI {
  label: string;
  icon?: string;
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: (e: GestureResponderEvent) => void;
}

interface BaseCardI {
  title?: string;
  cardSubtitle?: string;
  cardTitleLeftContent?: ReactNode;
  showTitle?: boolean;
  children: ReactNode;
  cardActions?: BaseCardActionI[];
}

const BaseCard = (props: BaseCardI) => {
  const colorVar = useColorScheme() || 'light';
  const Colors = ColorSchemes[colorVar];
  const showCardTitle: boolean = Boolean(
    props.title || props.cardSubtitle || props.cardTitleLeftContent,
  );

  // Colors Vars Update
  //   styles.card.borderColor = Colors.borderColor;
  return (
    <RPCard mode="outlined" style={styles.card}>
      {/* {props?.showTitle && (
        <RPCard.Title
          style={styles.cardTitle}
          {...{
            title: props.title,
            subtitle: props.cardSubtitle,
            left: props.cardTitleLeftContent,
          }}
        />
      )} */}
      <RPCard.Content style={styles.cardContent}>
        {props.children}
      </RPCard.Content>
    </RPCard>
  );
};

export default BaseCard;
