import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from "./screens/Loginscreen";
import Homescreen from "./screens/Homescreen";
import Signupscreen from "./screens/Signupcreen"
import Appprofilescreen from './screens/Appprofilescreen';



const Stack = createNativeStackNavigator();

export default function App() { 
  return (
     <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false,}}  />
     <Stack.Screen name="Home" component={Homescreen} options={{headerShadowVisible:true,}}  />
     <Stack.Screen name="Signup" component={Signupscreen}  />
     <Stack.Screen name="Appprofile" component={Appprofilescreen}  />
    </Stack.Navigator>
     </NavigationContainer>

  );
}
;
