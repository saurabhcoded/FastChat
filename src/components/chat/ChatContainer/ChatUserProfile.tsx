import * as React from 'react';
import {Button, Dialog, Portal, PaperProvider, Text} from 'react-native-paper';
import { chatUserI } from './ChatContainer';

interface chatUserProfilePropsI {
  visible: boolean;
  handleClose: () => void;
  userProfileData: chatUserI | null
}
const ChatUserProfile = (props: chatUserProfilePropsI) => {
  const {visible, handleClose, userProfileData} = props;

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={handleClose}>
        <Dialog.Content>
          <Text variant="bodyMedium">{userProfileData?.userName}</Text>
          <Button onPress={()=>{}}>Add Friend</Button>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>Close</Button>
          <Button onPress={handleClose}>Disconnect</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ChatUserProfile;
