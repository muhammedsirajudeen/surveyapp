import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from "react-native";
export default function BlankScreen({navigation}){
    useEffect(()=>{
        async function getEmail(){
            let email=await AsyncStorage.getItem("email")
            console.log(email)
            if(!email){
                navigation.navigate("Login")
            }else{
                navigation.navigate("Home")
            }
        }
        getEmail()
    },[])
    return(
        <View>

        </View>
    )
}