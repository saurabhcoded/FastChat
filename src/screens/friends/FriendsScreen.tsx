import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Text,
  Searchbar,
  Badge,
  Divider,
} from 'react-native-paper';
import styles from './styles';
import {UiColors} from '@/constants/colors';

const FriendsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState([
    {
      id: '1',
      name: 'Emma Wilson',
      lastMessage: 'Hey! How are you doing?',
      timestamp: '2m ago',
      isOnline: true,
      unreadCount: 2,
      avatar: null,
    },
    {
      id: '2',
      name: 'Alex Chen',
      lastMessage: 'Thanks for the help yesterday',
      timestamp: '1h ago',
      isOnline: true,
      unreadCount: 0,
      avatar: null,
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      lastMessage: 'See you tomorrow!',
      timestamp: '3h ago',
      isOnline: false,
      unreadCount: 1,
      avatar: null,
    },
    {
      id: '4',
      name: 'Mike Rodriguez',
      lastMessage: 'Great job on the project',
      timestamp: '1d ago',
      isOnline: false,
      unreadCount: 0,
      avatar: null,
    },
    {
      id: '5',
      name: 'Lisa Park',
      lastMessage: 'Can we reschedule the meeting?',
      timestamp: '2d ago',
      isOnline: true,
      unreadCount: 3,
      avatar: null,
    },
  ]);
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const FriendItem = ({item}) => (
    <TouchableOpacity
      style={styles.friendItem}
      onPress={() => console.log('Chat with', item.name)}
      activeOpacity={0.7}>
      <View style={styles.friendContent}>
        <View style={styles.avatarContainer}>
          <Avatar.Text
            size={50}
            label={item.name
              .split(' ')
              .map(n => n[0])
              .join('')}
            style={[
              styles.avatar,
              {
                backgroundColor: item.isOnline
                  ? UiColors.primary.main
                  : UiColors.neutral.medium,
              },
            ]}
            labelStyle={styles.avatarLabel}
          />
          {item.isOnline && <View style={styles.onlineIndicator} />}
        </View>

        <View style={styles.friendInfo}>
          <Text style={styles.friendName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>

        <View style={styles.friendMeta}>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
          {item.unreadCount > 0 && (
            <Badge style={styles.unreadBadge} size={20}>
              {item.unreadCount}
            </Badge>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  const EmptyState = () => (
    <View style={styles.emptyContainer}>
      <Avatar.Icon size={80} icon="account-group" style={styles.emptyIcon} />
      <Text style={styles.emptyTitle}>No friends yet</Text>
      <Text style={styles.emptySubtitle}>Add friends to start chatting</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search friends..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
          iconColor={UiColors.primary.main}
        />
      </View>
      {/* Friends List */}
      <FlatList
        data={filteredFriends}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FriendItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={EmptyState}
      />
    </SafeAreaView>
  );
};

FriendsScreen.displayName = 'FriendsScreen';

export default FriendsScreen;
