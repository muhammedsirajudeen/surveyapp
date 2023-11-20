import { View,Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

export default function HomeScreen({navigation}){
    useEffect(()=>{
        async function getEmail(){
            let email=await AsyncStorage.getItem("email")
            console.log(email)
        }
        getEmail()
    })
    return(
        <View>
            <Text>home page here</Text>
        </View>
    )
}