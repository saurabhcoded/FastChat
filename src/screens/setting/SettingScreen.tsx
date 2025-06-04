import {UiColors} from '@/constants/colors';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Badge,
  Card,
  Divider,
  IconButton,
  List,
  Switch,
  Text,
} from 'react-native-paper';
import styles from './styles';

const SettingsPage = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Sarah Johnson',
    userId: '@sarah_j23',
    avatar: null,
    status: 'Online',
  });

  const [settings, setSettings] = useState({
    autoAcceptFriendRequests: false,
    showOnlineStatus: true,
    readReceipts: true,
    notifications: true,
  });

  const handleToggleSetting = settingKey => {
    setSettings(prev => ({
      ...prev,
      [settingKey]: !prev[settingKey],
    }));
  };

  const SectionTitle = ({title}) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  const SocialItem = ({icon, title, subtitle, badgeCount, onPress}) => (
    <Card style={styles.listCard}>
      <List.Item
        title={title}
        description={subtitle}
        left={props => (
          <List.Icon {...props} icon={icon} color={UiColors.primary.main} />
        )}
        right={() => (
          <View style={styles.listRightContainer}>
            {badgeCount > 0 && (
              <Badge style={styles.badge} size={20}>
                {badgeCount}
              </Badge>
            )}
            <List.Icon icon="chevron-right" color={UiColors.neutral.dark} />
          </View>
        )}
        onPress={onPress}
        titleStyle={styles.listTitle}
        descriptionStyle={styles.listDescription}
        style={styles.listItem}
      />
    </Card>
  );

  const SettingToggle = ({title, description, value, onValueChange}) => (
    <Card style={styles.settingCard}>
      <View style={styles.settingContainer}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>{title}</Text>
          {description && (
            <Text style={styles.settingDescription}>{description}</Text>
          )}
        </View>
        <Switch
          value={value}
          onValueChange={onValueChange}
          thumbColor={value ? UiColors.primary.main : UiColors.neutral.medium}
          trackColor={{
            false: UiColors.neutral.light,
            true: UiColors.primary.light,
          }}
        />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <ProfileHeader userProfile={userProfile} />

        {/* Social Section */}
        <View style={styles.section}>
          <SectionTitle title="Social" />
          <SocialItem
            icon="account-group"
            title="Friends"
            subtitle="Manage your friend list"
            badgeCount={12}
            onPress={() => console.log('Friends pressed')}
          />
          <SocialItem
            icon="account-plus"
            title="Following"
            subtitle="People you follow"
            badgeCount={8}
            onPress={() => console.log('Following pressed')}
          />
          <SocialItem
            icon="account-cancel"
            title="Blocked"
            subtitle="Blocked users"
            badgeCount={0}
            onPress={() => console.log('Blocked pressed')}
          />
        </View>

        {/* Chat Settings Section */}
        <View style={styles.section}>
          <SectionTitle title="Chat Settings" />
          <SettingToggle
            title="Auto Accept Friend Requests"
            description="Automatically accept incoming friend requests"
            value={settings.autoAcceptFriendRequests}
            onValueChange={() =>
              handleToggleSetting('autoAcceptFriendRequests')
            }
          />
          <SettingToggle
            title="Show Online Status"
            description="Let others see when you're online"
            value={settings.showOnlineStatus}
            onValueChange={() => handleToggleSetting('showOnlineStatus')}
          />
          <SettingToggle
            title="Read Receipts"
            description="Show when you've read messages"
            value={settings.readReceipts}
            onValueChange={() => handleToggleSetting('readReceipts')}
          />
          <SettingToggle
            title="Push Notifications"
            description="Receive notifications for new messages"
            value={settings.notifications}
            onValueChange={() => handleToggleSetting('notifications')}
          />
        </View>

        {/* Additional Options */}
        <View style={styles.section}>
          <SectionTitle title="More" />
          <SocialItem
            icon="palette"
            title="Chat Themes"
            subtitle="Customize your chat appearance"
            badgeCount={0}
            onPress={() => console.log('Themes pressed')}
          />
          <SocialItem
            icon="bell"
            title="Notification Settings"
            subtitle="Configure notification preferences"
            badgeCount={0}
            onPress={() => console.log('Notifications pressed')}
          />
        </View>

        {/* Settings Summary */}
        <Card style={styles.summaryCard}>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Current Settings</Text>
            <Divider style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Auto Accept:</Text>
              <Text
                style={[
                  styles.summaryValue,
                  {
                    color: settings.autoAcceptFriendRequests
                      ? UiColors.tertiary.main
                      : UiColors.neutral.dark,
                  },
                ]}>
                {settings.autoAcceptFriendRequests ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Online Status:</Text>
              <Text
                style={[
                  styles.summaryValue,
                  {
                    color: settings.showOnlineStatus
                      ? UiColors.tertiary.main
                      : UiColors.neutral.dark,
                  },
                ]}>
                {settings.showOnlineStatus ? 'Visible' : 'Hidden'}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Read Receipts:</Text>
              <Text
                style={[
                  styles.summaryValue,
                  {
                    color: settings.readReceipts
                      ? UiColors.tertiary.main
                      : UiColors.neutral.dark,
                  },
                ]}>
                {settings.readReceipts ? 'On' : 'Off'}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Notifications:</Text>
              <Text
                style={[
                  styles.summaryValue,
                  {
                    color: settings.notifications
                      ? UiColors.tertiary.main
                      : UiColors.neutral.dark,
                  },
                ]}>
                {settings.notifications ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileHeader = ({userProfile}) => (
  <Card style={styles.profileCard}>
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Avatar.Text
          size={80}
          label={userProfile.name.charAt(0)}
          style={styles.avatar}
          labelStyle={styles.avatarLabel}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <IconButton icon="camera" iconColor={UiColors.white.main} size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.userName}>{userProfile.name}</Text>
        <Text style={styles.userId}>{userProfile.userId}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>{userProfile.status}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <IconButton icon="pencil" iconColor={UiColors.primary.main} size={20} />
      </TouchableOpacity>
    </View>
  </Card>
);

export default SettingsPage;
