import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ProfileDrawerNavigator from './navigation/ProfileDrawerNavigator';
import * as React from 'react';

export default function App() {
  return (
    <NavigationContainer>

      <ProfileDrawerNavigator />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
