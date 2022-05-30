import { View, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderCancelBtn = () => {
  const navigation = useNavigation();

  const showAlert = () =>
    Alert.alert(
      '',
      "The medication wasn't saved. Are you sure you want to continue?",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showAlert}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
});

export default HeaderCancelBtn;
