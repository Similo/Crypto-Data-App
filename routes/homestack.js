import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createAppContainer} from "@react-navigation/native";
import  Loginscreen from "../screens/Loginscreen";
import Homescreen from "../screens/Homescreen";


const screens = {
    Loginscreen : {
        screen : Loginscreen ,
        navigationOptions : {
         title : ' Login',
         headerStyle:{backgroundColor: 'green'}    
        },},

        Homescreen : {
            screen : Homescreen , 
            navigationOptions : {
             title : ' Login',
             headerStyle:{backgroundColor: 'green'}    
            } },
}

const HomeStack = createNativeStackNavigator(screens,{
    defaultNavigationOptions :{
     headerTintColor: 'lightgreen',
     headerStyle : {backgroundColor: 'green', height : 60}

    }
})
export default createAppContainer;