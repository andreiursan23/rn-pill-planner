// React navigation imports
import { View, Text, StyleSheet } from 'react-native';
// Component imports
import AddMedicationBtn from '../components/ui/AddMedicationBtn';

const Medications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{ fontSize: 30 }}>Medications</Text>
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

export default Medications;
