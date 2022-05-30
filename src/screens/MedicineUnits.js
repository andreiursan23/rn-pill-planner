import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { allUnits } from '../database/units-db';
import { useSelector, useDispatch } from 'react-redux';
import { treatmentActions } from '../../context/treatments-slice';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MedicineUnits = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentTreatment = useSelector(
    (state) => state.userTreatments.newAddedTreatment,
  );

  const handleSelectMedicineUnit = (unit) => {
    dispatch(
      treatmentActions.createNewTreatment({
        ...currentTreatment,
        strengthUnit: unit.name,
      }),
    );
  };

  console.log(currentTreatment);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={allUnits}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.unitRootContainer}
              onPress={() => handleSelectMedicineUnit(item)}
            >
              <View style={styles.unitContainer}>
                <Text style={styles.unitText}>{item.name}</Text>
              </View>
              {item.name === currentTreatment.strengthUnit && (
                <Ionicons name="checkmark-sharp" size={25} color="steelblue" />
              )}
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  listContainer: {
    borderTopWidth: 1,
    borderTopColor: '#D0D0D0',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    backgroundColor: 'white',
  },
  unitRootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 22,
  },
  unitContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  unitText: {
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    marginLeft: 15,
  },
});

export default MedicineUnits;
