import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddMedicineModal from './src/screens/AddMedicineModal';
import BottomNavigation from './src/components/navigation/BottomNavigation';
// Redux
import { Provider } from 'react-redux';
import store from './context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="Bottom Navigation"
              component={BottomNavigation}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{ presentation: 'modal', gestureEnabled: false }}
          >
            <Stack.Screen
              name="Add Medicine Modal"
              component={AddMedicineModal}
            />
          </Stack.Group>
        </Stack.Navigator>

        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
