import { StyleSheet, View, Text } from 'react-native';
import AddMedicationBtn from '../components/ui/AddMedicationBtn';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{ fontSize: 30 }}>Home</Text>
      </View>
      <AddMedicationBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
