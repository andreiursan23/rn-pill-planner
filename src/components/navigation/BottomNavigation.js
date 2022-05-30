import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Medications from '../../screens/Medications';

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Medications':
              iconName = focused ? 'md-medical' : 'md-medical-outline';
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'steelblue',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: 'steelblue',
        },
        headerTitle: '',
      })}
    >
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Medications" component={Medications} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
