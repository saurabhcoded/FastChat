import React from 'react';
import {Avatar, Text} from 'react-native-paper';
import {chatDataI, chatUserI} from './ChatContainer';
import {Pressable, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {ChatEnums} from '@/constants/constants';

interface ChatElementPropsI {
  chatData: chatDataI;
  currentUserData: chatUserI;
  onProfileClick: (userData: chatUserI) => void;
}

const ChatElement = (props: ChatElementPropsI) => {
  const {chatData, currentUserData, onProfileClick} = props;
  const currentUserId = currentUserData.id;
  const isCurrentUserChat = chatData.userId === currentUserId;
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        ...(isCurrentUserChat && {flexDirection: 'row-reverse'}),
      }}>
      <Pressable onPress={() => onProfileClick(chatData.userData)}>
        <Avatar.Image
          size={30}
          style={styles.userAvatar}
          source={{uri: chatData?.userData?.userProfile}}
        />
      </Pressable>
      <View
        style={{
          ...styles.chatElement,
          ...(isCurrentUserChat && styles.currentChatElement),
        }}>
        {chatData.content && (
          <Text variant="bodyMedium" style={styles.chatContent}>
            {chatData.content}
          </Text>
        )}
        {chatData.createdAt && (
          <Text
            variant="bodySmall"
            style={{
              ...styles.chatTime,
              ...(isCurrentUserChat && styles.currentChatTime),
            }}>
            {moment(chatData.createdAt).format(ChatEnums.timeFormat)}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ChatElement;
