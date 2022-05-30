import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import PillModelAppearance from '../components/PillModelAppearance';

import { allPillShapes } from '../database/pill-shapes-db';

const MedicineAppearance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SHAPE & COLOR</Text>
      </View>

      <View>
        <FlatList
          data={allPillShapes}
          keyExtractor={(item) => item?.id}
          horizontal={true}
          renderItem={({ item }) => <PillModelAppearance pillShape={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
});

export default MedicineAppearance;
