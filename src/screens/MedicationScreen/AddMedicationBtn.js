// React Native imports
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const AddMedicationBtn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Add Medicine')}
        >
          <Text style={styles.addMed}>Add a med</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: 'steelblue',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  addMed: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
