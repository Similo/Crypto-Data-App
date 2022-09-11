import * as React from "react";
import { StyleSheet, TouchableOpacity, TextInput, Text, SafeAreaView ,} from 'react-native';

 export default function Loginscreen() {
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
            <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.push('Signupscreen') }

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
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,

    }
    ,
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
})
