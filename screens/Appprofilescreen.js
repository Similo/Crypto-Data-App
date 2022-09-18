import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ScrollView, TouchableOpacity} from 'react-native';

export default function Appprofilescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} > Profile</Text>
      <StatusBar style="auto" />

      <Image></Image>

      <ScrollView>
      <Text style={styles.Text2} > Name</Text>
      <Text style={styles.Text2} > Username</Text>
      <Text style={styles.Text2} > Email Address</Text>
      <Text style={styles.Text2} > Phone Number</Text>
    


       
      <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.push('Signup') }
            >
                <Text> Edit your Profile </Text>
            </TouchableOpacity>
      </ScrollView>


    </View>

    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  Text: {
 fontSize: 20 ,
  borderWidth: 5,
  width: 300,
  paddingBottom: 20,
  paddingTop: 20,
  paddingLeft: 65,
  backgroundColor: 'limegreen'



  } ,
  Text2: {
    fontSize: 20 ,
     borderWidth: 5,
     width: 300,
     paddingBottom: 20,
     paddingTop: 20,
     paddingLeft: 5,
     borderRadius: 10,
     backgroundColor: 'yellow'
   
   
   
     },
     button: {
      backgroundColor: 'limegreen',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      paddingBottom: 20,
      width: 300,
      alignItems: 'center',
      opacity: 0.8,
      borderRadius: 6,
      borderWidth: 0,

     }
  
});
