import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { allMedications } from '../../database/pills-db';

export const SearchMedication = () => {
  const [searchedMedicine, setSearchedMedicine] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <MaterialCommunityIcons
          name="pill"
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
          onChangeText={(inputText) => setSearchedMedicine(inputText)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  imageStyle: {
    padding: 10,
  },
});
