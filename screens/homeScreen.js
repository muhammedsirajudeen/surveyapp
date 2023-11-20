import { View,Text,Button, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

export default function HomeScreen({navigation}){
    useEffect(()=>{
        async function getEmail(){
            let email=await AsyncStorage.getItem("email")
            console.log(email)
            if(!email){
                navigation.navigate("Login")
            }
        }
        getEmail()
    },[])
    function navigationHandler(){
        navigation.navigate("Form")
    }
    async function signoutHandler(){
        await AsyncStorage.removeItem("email")
        navigation.navigate("Login")
    }
    return(
        <View>
            <View style={{margin:10,width:"100%",height:100}} >
            <TouchableOpacity onPress={signoutHandler} style={{margin:10,display:"flex",justifyContent:"center",alignItems:"center"}} ><Text style={{backgroundColor:"blue",color:"white",height:50,width:200,borderRadius:10,textAlign:"center",verticalAlign:"middle"}} >Signout</Text></TouchableOpacity>
                <TouchableOpacity onPress={navigationHandler} style={{margin:10,display:"flex",justifyContent:"center",alignItems:"center"}} ><Text style={{backgroundColor:"blue",color:"white",height:50,width:200,borderRadius:10,textAlign:"center",verticalAlign:"middle"}} >marketing survey form</Text></TouchableOpacity>
            </View>
        </View>
    )
}