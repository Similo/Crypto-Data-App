import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,TextInput , TouchableOpacity } from 'react-native';

export default function Signupscreen() {
  return (
    < SafeAreaView style={styles.container}>

            <TextInput style={styles.input} placeholder="Email Address">  </TextInput>


            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>


            <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.push('Homescreen') }
            >
                <Text> Login</Text>
            </TouchableOpacity>

            <Text>If you are not a member of this app press the button below</Text>
           
        </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
