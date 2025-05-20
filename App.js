import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import InputFields from './inputfields';
import Images from './profilepic';
import ProfileButtons from './button';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
      <Images/>
      <InputFields/>
      <ProfileButtons/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:50,
   backgroundColor: '#fff',
  alignItems: 'center',
   justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
  }
});
