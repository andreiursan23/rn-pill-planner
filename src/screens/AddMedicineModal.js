import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AddAndSearchMedicine from '../components/AddAndSearchMedicine';
import MedicineSchedule from '../components/MedicineSchedule';
import MedicineMoreDetails from '../components/MedicineMoreDetails';
import HeaderCancelBtn from '../components/ui/HeaderCancelBtn';
import MedicineStrength from './MedicineStrength';
import HeaderBackBtn from '../components/ui/HeaderBackBtn';
import MedicineUnits from './MedicineUnits';
import MedicineAppearance from './MedicineAppearance';

const Stack = createStackNavigator();

const AddMedicineModal = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: 'steelblue',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '400',
        },
        headerLeft: () => {
          if (route.name === 'Add and Search Medicine') {
            return <HeaderCancelBtn />;
          } else {
            return <HeaderBackBtn />;
          }
        },
      })}
    >
      <Stack.Screen
        name="Add and Search Medicine"
        component={AddAndSearchMedicine}
        options={{
          title: 'Add Medicine',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Select Strength"
        component={MedicineStrength}
        options={{
          title: 'Strength',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Select Units"
        component={MedicineUnits}
        options={{
          title: 'Units',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Select Appearance"
        component={MedicineAppearance}
        options={{
          title: 'Appearance',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Medicine Schedule" component={MedicineSchedule} />
      <Stack.Screen
        name="Medicine More Details"
        component={MedicineMoreDetails}
      />
    </Stack.Navigator>
  );
};

export default AddMedicineModal;
