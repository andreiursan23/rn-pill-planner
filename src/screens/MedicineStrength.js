import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { treatmentActions } from '../../context/treatments-slice';

const MedicineStrength = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [medicineStrength, setMedicineStrength] = useState(null);

  const currentTreatment = useSelector(
    (state) => state.userTreatments.newAddedTreatment,
  );

  useEffect(() => {
    if (!isNaN(medicineStrength) && medicineStrength >= 0) {
      dispatch(
        treatmentActions.createNewTreatment({
          ...currentTreatment,
          strengthValue: medicineStrength,
        }),
      );
    }
  }, [medicineStrength]);

  console.log(medicineStrength);
  console.log(currentTreatment);

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <View style={styles.inputContainer}>
          <Text style={{ flex: 0.3, fontSize: 18 }}>Strength</Text>
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              textAlign: 'right',
            }}
            keyboardType="number-pad"
            autoFocus={!currentTreatment.strengthValue ? true : false}
            onChangeText={(inputValue) => setMedicineStrength(inputValue)}
          />
        </View>
      </View>

      <View style={[styles.sectionStyle, styles.sectionMarginTop]}>
        <TouchableOpacity
          style={styles.unitRootContainer}
          onPress={() => {
            navigation.navigate('Select Units');
          }}
        >
          <View style={styles.unitContainer}>
            <Text
              style={[
                styles.unitText,
                currentTreatment.strengthUnit && styles.unitTextSelected,
              ]}
            >
              Unit
            </Text>
            {currentTreatment.strengthUnit && (
              <Text style={styles.unitSubtitle}>
                {currentTreatment.strengthUnit}
              </Text>
            )}
          </View>
          <Entypo
            name="chevron-small-right"
            size={25}
            color="lightgray"
            style={{ alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#D0D0D0',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingHorizontal: 10,
  },
  unitContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  unitText: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  unitTextSelected: {
    marginBottom: 8,
  },
  unitSubtitle: {
    flex: 0.5,
    fontSize: 10,
    position: 'absolute',
    bottom: 6,
    left: 10,
    color: 'gray',
  },
  sectionMarginTop: {
    marginTop: 30,
  },
  unitRootContainer: {
    flexDirection: 'row',
  },
});

export default MedicineStrength;
