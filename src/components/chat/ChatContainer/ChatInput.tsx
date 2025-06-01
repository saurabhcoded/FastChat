import BaseButton from '@/components/ui/BaseButton/BaseButton';
import BaseTextInput from '@/components/ui/BaseInput/BaseTextInput';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import BaseIcon from '@/components/ui/BaseIcon/BaseIcon';
import {Text, TextInput} from 'react-native-paper';

const ChatInput = ({
  handleSendChat,
}: {
  handleSendChat: (val: string) => Promise<void>;
}) => {
  const [chatText, setChatText] = useState<string>('');
  const [chatAttachMenuActive, setCharAttachMenuActive] = useState(false);
  const handleSubmit = async () => {
    await handleSendChat(chatText);
    setChatText('');
  };
  return (
    <View style={styles.chatInputWrapper}>
      <BaseTextInput
        textInputProps={{
          style: styles.chatInputText,
          outlineStyle: styles.chatInputOutline,
          right: (
            <TextInput.Icon
              style={styles.chatAttachIcon}
              icon="attachment"
              onPress={() => setCharAttachMenuActive(true)}
              color={'#900'}
            />
          ),
        }}
        value={chatText}
        setValue={setChatText}
      />
      <Pressable style={styles.chatInputButton} onPress={handleSubmit}>
        <BaseIcon name="lightning-bolt-outline" size={28} />{' '}
      </Pressable>
    </View>
  );
};

export default ChatInput;
