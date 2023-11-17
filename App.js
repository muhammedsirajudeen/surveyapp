//all external dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//user defined screens
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';

//creating the stack for navigator
const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={ { headerStyle : { backgroundColor:"white" } } }  >
        <Stack.Screen options={ {title:"" } } name='Login' component={LoginScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Signup' component={SignupScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}