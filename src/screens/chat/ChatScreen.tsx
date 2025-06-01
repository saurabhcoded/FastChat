import ChatContainer, {
  chatDataI,
  chatUserI,
} from '@/components/chat/ChatContainer/ChatContainer';
import ChatInput from '@/components/chat/ChatContainer/ChatInput';
import BaseCard from '@/components/ui/BaseCard/BaseCard';
import {createChatElement} from '@/services/chat/chatServices';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from './styles';
import {useHeaderHeight} from '@react-navigation/elements';

let createdDate = new Date().toUTCString();

const chatRoomId = '1';
const currentUser: chatUserI = {
  id: '1234',
  userName: 'Saurabh Sharma',
  userProfile: 'https://avatar.iran.liara.run/public/1',
  userLongLat: null,
  createdAt: createdDate,
  updatedAt: createdDate,
  lastLoginAt: createdDate,
  isOnline: true,
};
const OtherUser: chatUserI = {
  id: '2345',
  userName: 'Vinay Singh',
  userProfile: 'https://avatar.iran.liara.run/public/2',
  userLongLat: null,
  createdAt: createdDate,
  updatedAt: createdDate,
  lastLoginAt: createdDate,
  isOnline: true,
};

const ChatScreen: React.FC = () => {
  const [chats, setChats] = useState<chatDataI[]>([]);
  const [isPartnerTyping, setIsPartnerTyping] = useState(false);
  const [disclaimerRead, setDisclaimerRead] = useState(false);
  const headerHeight = useHeaderHeight();

  const currentUserId = currentUser.id;

  const stimulateResponseMsg = async () => {
    setIsPartnerTyping(true);
    await setTimeout(() => {
      const newChatMessage = createChatElement({
        content: 'Hello this is the Stimulated Response of other user',
        userData: OtherUser,
        userId: OtherUser.id,
        chatRoomId: chatRoomId,
      });
      setChats(prev => prev.concat(newChatMessage));
    }, 1200);
    setIsPartnerTyping(false);
  };
  const handleSendChat = async (chatText: string) => {
    if (chatText) {
      const newChatMessage = createChatElement({
        content: chatText,
        userData: currentUser,
        userId: currentUserId,
        chatRoomId: chatRoomId,
      });
      setChats(prev => prev.concat(newChatMessage));
      stimulateResponseMsg();
    }
  };

  const [isKeyboarVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true); // your header height
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false); // reset offset when keyboard hides
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={isKeyboarVisible ? 98 : 0}>
        <View style={styles.container}>
          {!disclaimerRead && (
            <BaseCard>
              <Text variant="bodyMedium">
                Conversations are anonymous and not stored, but we cannot
                prevent users from sharing or recording messages. Avoid sharing
                personal, sensitive, or financial information during chats.
              </Text>
              <Button
                mode="outlined"
                labelStyle={styles.disclaimerReadBtnLabel}
                style={styles.disclaimerReadBtn}
                contentStyle={{padding: 0}}
                onPress={() => setDisclaimerRead(true)}
                compact>
                {'Mark read'}
              </Button>
            </BaseCard>
          )}
          <ChatContainer currentUserData={currentUser} chats={chats} />
          <ChatInput handleSendChat={handleSendChat} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

{
}
export default ChatScreen;
