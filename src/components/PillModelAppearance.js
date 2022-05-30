import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const PillModelAppearance = ({ pillShape }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        {pillShape.iconsLibrary === 'Fontisto' && (
          <Fontisto name={pillShape.name} size={22} color="black" />
        )}
        {pillShape.iconsLibrary === 'MaterialCommunityIcons' && (
          <MaterialCommunityIcons
            name={pillShape.name}
            size={30}
            color="black"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
});

export default PillModelAppearance;
