import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginScreen';

const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle:{backgroundColor:"orange"}}}  >
        <Stack.Screen options={ {title:"SurveyApp",headerLeft:()=> <Text style={{marginRight:20}} >Login to Continue</Text> } } name='Login' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}