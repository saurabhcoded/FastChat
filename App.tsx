import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@/screens/chat/ChatScreen';
import SettingScreen from '@/screens/setting/SettingScreen';
import {PaperProvider} from 'react-native-paper';
import HeaderRightPart from '@/components/header/HeaderRightPart/HeaderRightPart';
import HeaderTitle from '@/components/header/HeaderTitle/HeaderTitle';
import {AppRoutes} from '@/constants/constants';
import FriendsScreen from '@/screens/friends/FriendsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={AppRoutes.chat.path}
          screenOptions={{
            statusBarStyle: 'dark',
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: '#000',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitle: HeaderTitle,
            headerRight: HeaderRightPart,
          }}>
          <Stack.Screen
            name={AppRoutes.chat.path}
            component={ChatScreen}
            options={{
              title: AppRoutes.chat.label,
              headerTitleStyle: {fontWeight: 900},
            }}
          />

          <Stack.Screen
            name={AppRoutes.settings.path}
            component={SettingScreen}
            options={{
              title: AppRoutes.settings.label,
            }}
          />
          <Stack.Screen
            name={AppRoutes.friends.path}
            component={FriendsScreen}
            options={{
              title: AppRoutes.friends.label,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
