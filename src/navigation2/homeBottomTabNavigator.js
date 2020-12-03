import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';

import BottomTabNavigator from '../components/BottomTabNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabNavigator {...props} />}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="DiscoveryScreen" component={DiscoverScreen} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomNavigator;
