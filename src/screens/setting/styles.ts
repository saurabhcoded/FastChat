import { StyleSheet } from "react-native";
import {UiColors} from '@/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColors.neutral.light,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // Profile Card
  profileCard: {
    margin: 20,
    marginBottom: 10,
    backgroundColor: UiColors.white.main,
    borderRadius: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    backgroundColor: UiColors.primary.main,
  },
  avatarLabel: {
    color: UiColors.white.main,
    fontSize: 32,
    fontWeight: 'bold',
  },
  cameraButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: UiColors.primary.main,
    borderRadius: 20,
    width: 32,
    height: 32,
    elevation: 3,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: UiColors.font.primary,
  },
  userId: {
    fontSize: 14,
    color: UiColors.font.secondary,
    marginTop: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: UiColors.tertiary.main,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: UiColors.font.secondary,
  },
  editButton: {
    backgroundColor: UiColors.primary.lightest,
    borderRadius: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: UiColors.font.primary,
    marginLeft: 20,
    marginBottom: 12,
  },
  listCard: {
    marginHorizontal: 20,
    marginBottom: 8,
    backgroundColor: UiColors.white.main,
    elevation: 0,
    borderRadius: 12,
  },
  listItem: {
    paddingVertical: 8,
  },
  listIconContainer: {
    backgroundColor: UiColors.primary.lightest,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  listRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: UiColors.font.primary,
  },
  listDescription: {
    fontSize: 13,
    color: UiColors.font.secondary,
  },
  badge: {
    backgroundColor: UiColors.primary.main,
    marginRight: 8,
  },
  settingCard: {
    marginHorizontal: 20,
    marginBottom: 8,
    backgroundColor: UiColors.white.main,
    elevation: 2,
    borderRadius: 12,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: UiColors.font.primary,
  },
  settingDescription: {
    fontSize: 13,
    color: UiColors.font.secondary,
    marginTop: 2,
  },
  summaryCard: {
    margin: 20,
    backgroundColor: UiColors.white.main,
    elevation: 2,
    borderRadius: 12,
  },
  summaryContainer: {
    padding: 16,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: UiColors.font.primary,
    marginBottom: 12,
  },
  summaryDivider: {
    backgroundColor: UiColors.neutral.light,
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: UiColors.font.secondary,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;