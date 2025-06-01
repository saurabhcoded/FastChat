import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@/screens/chat/ChatScreen';
import SettingScreen from '@/screens/setting/SettingScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Chat',
  screens: {
    Chat: ChatScreen,
    Setting: SettingScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
