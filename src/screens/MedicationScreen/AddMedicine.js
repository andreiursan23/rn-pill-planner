// React navigation imports
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { SearchMedication } from './SearchMedication';

const Stack = createStackNavigator();

export const AddMedicine = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#F0F0F0',
        },
        headerTitleStyle: {
          color: 'dimgray',
          fontWeight: '300',
          fontSize: 14,
        },
        headerLeft: null,
        headerTitleAlign: 'left',
      }}
    >
      <Stack.Screen
        name="Search Medication"
        component={SearchMedication}
        options={{ title: 'MED INFO' }}
      />
    </Stack.Navigator>
  );
};
