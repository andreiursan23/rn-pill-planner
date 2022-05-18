// Expo imports
import { StatusBar } from 'expo-status-bar';
// React Native imports
import { Text, View } from 'react-native';
// React Navigation imports
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Components imports
import { AddMedicine } from './src/screens/MedicationScreen/AddMedicine';
import { HomeTabs } from './src/screens/HomeTabs';

const Stack = createStackNavigator();

import HeaderCancel from './src/components/HeaderCancel';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: 'steelblue',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: '400',
          },
          headerShown: () => {
            route.name !== 'Add Medicine' ? false : true;
          },
          headerLeft: () => {
            if (route.name === 'Add Medicine') {
              return <HeaderCancel />;
            }
          },
        })}
      >
        <Stack.Screen
          name="Home Tabs"
          component={HomeTabs}
          options={{ title: null }}
        />
        <Stack.Screen
          name="Add Medicine"
          component={AddMedicine}
          options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
        />
      </Stack.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
