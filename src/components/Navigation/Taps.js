import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home'
import Detail from '../Screens/Detail'
import Maps from '../Screens/Maps'

const Tab = createBottomTabNavigator();

const Tabs=()=> {
  return (
<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} /> 
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Map" component={Maps} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs