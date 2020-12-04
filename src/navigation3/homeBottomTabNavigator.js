import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoryScreen from '../screens/StoryScreen';

import AddButton from '../components/AddButton';

// FontAwesome5.loadFont();

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#CFCCCE',
      inactiveTintColor: 'gray',
      // style: {
      //   justifyContent: 'center',
      //   backgroundColor: '#FFF',
      //   elevation: 2,
      // },
      showLabel: false,
      tabStyle: {
        backgroundColor: '#FFF',
      },
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="book-medical" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="DiscoveryScreen"
      component={DiscoverScreen}
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="heartbeat" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Upload"
      component={DiscoverScreen}
      options={{tabBarIcon: ({color, size}) => <AddButton />}}
    />

    <Tab.Screen
      name="StoryScreen"
      component={StoryScreen}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="band-aid" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="user" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
