import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderCancel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Cancel"
        color="white"
        onPress={navigation.navigate('Home Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
});

export default HeaderCancel;
