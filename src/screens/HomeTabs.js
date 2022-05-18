import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from './HomeScreen/Home';
import { Medications } from './Medications';

const BottomTabs = createBottomTabNavigator();

export const HomeTabs = () => {
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
        headerShown: false,
      })}
    >
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Medications" component={Medications} />
    </BottomTabs.Navigator>
  );
};
