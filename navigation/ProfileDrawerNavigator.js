import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    HomeScreen, 
    TrainingScreen,
    XperienceScreen
} from "../screens/index";

const Drawer = createDrawerNavigator();

export default ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Perfil">
        <Drawer.Screen name="Perfil" component={HomeScreen} />
        <Drawer.Screen name="Formacion" component={TrainingScreen} options={{ headerTitle: "Formación Academica" }} />
        <Drawer.Screen name="Experiencia" component={XperienceScreen} options={{ headerTitle: "Experiencia" }} />
    </Drawer.Navigator>
  )
}
