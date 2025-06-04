import {UiColors} from '@/constants/colors';
import {StyleSheet} from 'react-native';

const BubbleBorderRadius = 15;

const styles = StyleSheet.create({
  chatWrapper: {
    flex: 1,
  },
  chatContainer: {
    paddingTop: 10,
  },
  chatElement: {
    borderWidth: 1,
    borderColor: '#F1F0F0',
    borderRadius: BubbleBorderRadius,
    padding: 10,
    borderTopLeftRadius: 0,
    backgroundColor: '#F1F0F0',
    maxWidth: '70%',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  currentChatElement: {
    alignSelf: 'flex-end',
    borderColor: '#FFDFE6',
    backgroundColor: '#FFDFE6',
    borderTopLeftRadius: BubbleBorderRadius,
    borderTopRightRadius: 0,
  },
  chatTime: {
    alignSelf: 'flex-start',
  },
  currentChatTime: {
    alignSelf: 'flex-end',
  },
  chatContent: {
    color: '#2E2E2E',
  },
  userAvatar: {},
  chatInputWrapper: {flexDirection: 'row', gap: 5},
  chatInputText: {
    flex: 1,
  },
  chatInputOutline: {borderRadius: 50, borderColor: '#90000040'},
  chatInputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFC0CB',
    minWidth: 70,
    borderRadius: 50,
  },
  chatAttachIcon: {
    // padding: ,
    backgroundColor: '#FFC0CB',
    color: '#FF1493',
  },
  // Chat User Profile Styles
  userProfileContainer: {
    backgroundColor: UiColors.neutral.light,
  },
  userAvatarRow: {
    flexDirection: 'row',
    gap: 10,
  },
  userAvatarRowTextContent: {
    gap: 3,
    justifyContent: 'center',
  },
  genderLabel: {
    color: UiColors.font.secondary,
    alignSelf: 'flex-start',
  },
  divider: {
    marginVertical: 10,
  },
  mainButtonRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 5,
  },
  mainButton: {
    flex: 1,
    borderColor: UiColors.primary.darkest,
  },
  mainButtonLabel: {
    // color: UiColors.white.main,
  },
  featureButtonCol: {
    gap: 5,
  },
  featureButton: {
    borderRadius: 15,
  },
  featureButtonLabel: {
    fontSize: 16,
  },
  featureButtonContent: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
    padding: 8,
    backgroundColor: UiColors.white.soft,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
});

export default styles;
