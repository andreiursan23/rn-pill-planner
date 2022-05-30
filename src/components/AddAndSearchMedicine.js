import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { allMedications } from '../database/pills-db';
import { useDispatch, useSelector } from 'react-redux';
import { treatmentActions } from '../../context/treatments-slice';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddAndSearchMedicine = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchedMedicine, setSearchedMedicine] = useState(null);
  const [showMedicineList, setShowMedicineList] = useState(false);
  const [isMedicineSelected, setIsMedicineSelected] = useState(false);

  const dispatch = useDispatch();
  const currentTreatment = useSelector(
    (state) => state.userTreatments.newAddedTreatment,
  );

  const navigation = useNavigation();

  console.log(currentTreatment);

  useEffect(() => {
    if (
      currentTreatment.name !== searchedMedicine ||
      currentTreatment.name === null
    ) {
      const results = allMedications.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchedMedicine?.toLowerCase()),
      );
      results && setSearchResults(results);
      searchedMedicine && setShowMedicineList(true);
      setIsMedicineSelected(false);
      dispatch(treatmentActions.createNewTreatment({ name: null }));
    } else {
      setShowMedicineList(false);
      setIsMedicineSelected(true);
    }
  }, [searchedMedicine]);

  const handleSelectMedicineFromList = (medicine) => {
    setSearchedMedicine(medicine.name);
    Keyboard.dismiss();
    setIsMedicineSelected(true);

    dispatch(
      treatmentActions.createNewTreatment({
        ...currentTreatment,
        name: medicine.name,
      }),
    );
  };

  const handleCreateNewMedicineName = (medicineName) => {
    dispatch(
      treatmentActions.createNewTreatment({
        ...currentTreatment,
        name: medicineName,
      }),
    );
    setIsMedicineSelected(true);
    setShowMedicineList(false);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MED INFO</Text>
      </View>
      {/* Search bar */}
      <View style={styles.sectionStyle}>
        <Foundation
          name="clipboard-notes"
          size={25}
          color="steelblue"
          style={styles.imageStyle}
        />
        <TextInput
          style={{ flex: 1, fontSize: 18 }}
          placeholder="Medication Name"
          underlineColorAndroid="transparent"
          autoFocus={true}
          defaultValue={searchedMedicine}
          returnKeyType="done"
          onChangeText={(inputText) => setSearchedMedicine(inputText)}
          onSubmitEditing={({ nativeEvent: { text } }) =>
            handleCreateNewMedicineName(text)
          }
        />
      </View>

      {/* Search results list */}
      {showMedicineList ? (
        <View>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectMedicineFromList(item)}
              >
                <View style={styles.medicineContainer}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => (
              <View style={styles.medicineContainer}>
                <Text>No results</Text>
              </View>
            )}
            keyboardShouldPersistTaps="always"
          />
        </View>
      ) : null}

      {isMedicineSelected && (
        <>
          {/* Strength */}
          <View style={[styles.sectionStyle, styles.sectionMarginTop]}>
            <TouchableOpacity
              style={styles.strengthContainer}
              onPress={() => {
                navigation.navigate('Select Strength');
              }}
            >
              <MaterialCommunityIcons
                name="spirit-level"
                size={25}
                color="steelblue"
                style={styles.imageStyleLandscape}
              />
              <Text style={{ flex: 1, fontSize: 18, alignSelf: 'center' }}>
                Strength
              </Text>
              <Entypo
                style={styles.arrowRightIcon}
                name="chevron-small-right"
                size={25}
                color="lightgray"
              />
            </TouchableOpacity>
          </View>
          {/* Appearance */}
          <View style={[styles.sectionStyle, styles.sectionMarginTop]}>
            <TouchableOpacity
              style={styles.strengthContainer}
              onPress={() => {
                navigation.navigate('Select Appearance');
              }}
            >
              <MaterialCommunityIcons
                name="pill"
                size={25}
                color="steelblue"
                style={styles.imageStyleLandscape}
              />
              <Text style={{ flex: 1, fontSize: 18, alignSelf: 'center' }}>
                Appearance
              </Text>
              {/* Appearance icon preview */}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 12,
  },
  title: {
    color: '#808080',
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
  sectionMarginTop: {
    marginTop: 30,
  },
  imageStyle: {
    padding: 12,
  },
  imageStyleLandscape: {
    paddingHorizontal: 8,
    paddingVertical: 11,
  },
  arrowRightIcon: {
    paddingVertical: 12,
    paddingRight: 6,
  },
  medicineContainer: {
    padding: 12,
    backgroundColor: 'white',
  },
  strengthContainer: {
    flexDirection: 'row',
  },
});

export default AddAndSearchMedicine;
