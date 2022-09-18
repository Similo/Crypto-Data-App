import { StyleSheet, Text, SafeAreaView,TextInput,TouchableOpacity} from 'react-native';



export default function Signupscreen({ navigation }) {
  return (



    < SafeAreaView style={styles.container}>

    <Text style={styles.text}>Name</Text>

            <TextInput style={styles.input} placeholder="Email Address">  </TextInput>
            <Text style={styles.text}> User Name </Text>
            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>
            <Text style={styles.text}>Email Address </Text>
            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>
            <Text style={styles.text}>Phone Number    </Text>
            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>
            <Text style={styles.text}>Create Password</Text>
            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>
            <Text style={styles.text}>Retype Password</Text>

            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>


            <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.push('Home') }

            >
                <Text> Submit</Text>
            </TouchableOpacity>

          
           
        </SafeAreaView>)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 9 ,
  },

  button: {
    backgroundColor: 'green',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    width: 300,
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 6,

},

input: {
  height: 40,
  width: 300,
  margin: 12,
  borderWidth: 2,
  padding: 10,
  borderRadius: 6,
}
,



});
