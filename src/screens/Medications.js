// React navigation imports
import { createStackNavigator } from '@react-navigation/stack';
// Component imports
import { AddMedicationBtn } from './MedicationScreen/AddMedicationBtn';

const Stack = createStackNavigator();

export const Medications = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Add Medication Button" component={AddMedicationBtn} />
    </Stack.Navigator>
  );
};
