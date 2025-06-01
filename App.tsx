import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@/screens/chat/ChatScreen';
import SettingScreen from '@/screens/setting/SettingScreen';
import {PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Chat"
          screenOptions={{
            statusBarStyle: 'dark',
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: '#000',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{title: 'Fast Chat', headerTitleStyle: {fontWeight: 900}}}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              title: 'Settings',
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
