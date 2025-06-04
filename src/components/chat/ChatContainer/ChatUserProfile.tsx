import * as React from 'react';
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
  Avatar,
  Divider,
} from 'react-native-paper';
import {chatUserI} from './ChatContainer';
import {View} from 'react-native';
import styles from './styles';
import {getGenderIcon} from '@/services/chat/chatServices';
import BaseIcon from '@/components/ui/BaseIcon/BaseIcon';
import {UiColors} from '@/constants/colors';

interface chatUserProfilePropsI {
  visible: boolean;
  handleClose: () => void;
  userProfileData: chatUserI | null;
}
const ChatUserProfile = (props: chatUserProfilePropsI) => {
  const {visible, handleClose, userProfileData} = props;
  const userGenderRepresent = React.useMemo(
    () => getGenderIcon(userProfileData?.gender),
    [userProfileData?.gender],
  );
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={handleClose}
        style={styles.userProfileContainer}>
        <Dialog.Content>
          <View style={styles.userAvatarRow}>
            <Avatar.Image
              size={70}
              style={styles.userAvatar}
              source={{uri: userProfileData?.userProfile}}
            />
            <View style={styles.userAvatarRowTextContent}>
              <Text variant="titleLarge">{userProfileData?.userName}</Text>
              <Text variant="bodyLarge" style={styles.genderLabel}>
                {userProfileData?.gender}{' '}
                <BaseIcon size={15} name={userGenderRepresent.icon} />
              </Text>
            </View>
          </View>
          <View style={styles.mainButtonRow}>
            <Button
              mode="outlined"
              textColor={UiColors.primary.darkest}
              buttonColor={UiColors.primary.lightest}
              labelStyle={styles.mainButtonLabel}
              style={styles.mainButton}
              onPress={() => {}}
              icon={'account-plus-outline'}>
              Add Friend
            </Button>
            <Button
              mode="outlined"
              textColor={UiColors.primary.darkest}
              buttonColor={UiColors.primary.lightest}
              labelStyle={styles.mainButtonLabel}
              style={styles.mainButton}
              onPress={() => {}}
              icon={'heart-outline'}>
              Follow
            </Button>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.featureButtonCol}>
            <Button
              textColor={UiColors.font.primary}
              style={styles.featureButton}
              contentStyle={styles.featureButtonContent}
              icon={'gift-outline'}
              labelStyle={styles.featureButtonLabel}
              onPress={() => {}}>
              Send Gift
            </Button>
            <Button
              textColor={UiColors.font.primary}
              style={styles.featureButton}
              contentStyle={styles.featureButtonContent}
              icon={'block-helper'}
              labelStyle={styles.featureButtonLabel}
              onPress={() => {}}>
              Block
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default ChatUserProfile;
