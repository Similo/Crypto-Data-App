import { StyleSheet, TouchableOpacity, TextInput, Text, SafeAreaView,View , Image} from 'react-native'; 




 export default function Loginscreen({ navigation }) {
    return (


          


        

        < SafeAreaView style={styles.container}>

            <View style={styles.container2}>
              <Image style={styles.img} source={require('../assets/Cryptodataapplogo.png')}></Image>
            
            </View>

           <Text style={styles.text}> Email / Phone No: </Text>

            <TextInput style={styles.input} placeholder="Email Address">  </TextInput>
            <Text style={styles.text}>Password</Text>

            <TextInput style={styles.input} placeholder=" Password ">  </TextInput>


            <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.push('Home') }
            >
                <Text> Submit</Text>
            </TouchableOpacity>

            <Text style={styles.text2 }>If you are not a member of this app press the button below to:</Text>
            <TouchableOpacity
                style={styles.button2}
                onPress={() =>  navigation.push('Signup') }
            >
                <Text> Signup</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
    },


    container2: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 8,
        height: 150,
        width: 300,
        borderRadius: 10,

    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 6,

    }
    ,
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

    },

    button2: {
        backgroundColor: 'yellow',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        width: 300,
        alignItems: 'center',
        opacity: 0.8,
        borderRadius: 6,
        borderWidth: 0,

    },

    text :{
        paddingTop: 15,
        paddingBottom: 5,
        borderRadius: 6,
    
    },

    text2 :{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
        fontSize: 9,
    },
    img:{
        height: 100,
        width: 250,
        borderRadius: 20,
        borderWidth: 8,
    
    }
})
