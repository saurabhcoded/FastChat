import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import ChatElement from './ChatElement';
import styles from './styles';
import ChatUserProfile from './ChatUserProfile';

export interface chatUserI {
  id: string;
  userName: string;
  userProfile: string;
  gender: string;
  userLongLat: string | null;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;
  isOnline: boolean;
}

export interface chatDataI {
  userId: string;
  userData: chatUserI;
  chatRoomId: string;
  content: string | null;
  media: string | undefined;
  mediaType: string | undefined;
  createdAt: string;
  isEdited: boolean;
  editedAt: string | null;
}

interface ChatContainerPropsI {
  chats: chatDataI[];
  currentUserData: chatUserI;
}

const ChatContainer = (props: ChatContainerPropsI) => {
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    if (props.chats.length > 0) {
      flatListRef.current?.scrollToEnd({animated: true});
    }
  }, [props.chats, flatListRef]);

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({animated: true});
  };

  const [userProfileVisible, setUserProfileVisible] = useState<{
    open: boolean;
    data: chatUserI | null;
  }>({
    open: false,
    data: null,
  });
  const handleOpenProfile = (userProfileData: chatUserI) => {
    setUserProfileVisible({open: true, data: userProfileData});
  };
  const handleCloseProfile = () => {
    setUserProfileVisible({
      open: false,
      data: null,
    });
  };
  return (
    <>
      <FlatList
        ref={flatListRef}
        style={styles.chatWrapper}
        contentContainerStyle={styles.chatContainer}
        data={props.chats}
        renderItem={({item}) => (
          <ChatElement
            onProfileClick={handleOpenProfile}
            currentUserData={props.currentUserData}
            chatData={item}
          />
        )}
        onContentSizeChange={scrollToBottom}
      />
      {userProfileVisible.open && (
        <ChatUserProfile
          handleClose={handleCloseProfile}
          visible={userProfileVisible.open}
          userProfileData={userProfileVisible.data}
        />
      )}
    </>
  );
};

export default ChatContainer;
