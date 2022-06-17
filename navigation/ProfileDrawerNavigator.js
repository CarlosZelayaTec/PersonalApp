import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    HomeScreen
} from "../screens/index";

const Drawer = createDrawerNavigator();

export default ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Perfil">
        <Drawer.Screen name="Perfil" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
