import { View,Text,Button, TouchableOpacity,Image } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

//importing stylesheet here
import homeStyle from "../stylesheet/homeStyle";

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

    async function signoutHandler(){
        await AsyncStorage.removeItem("email")
        navigation.navigate("Login")
    }
    function homeHandler(){
        navigation.navigate("Home")
    }
    function formHandler(){
        navigation.navigate("Form")
    }
    return(
        <>
            <View>
            </View>
            <View style={homeStyle.bottomcontainer}>
                <View style={homeStyle.bottomsubcontainer}>
                    <TouchableOpacity onPress={homeHandler} >
                        <Image source={require("./home.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={formHandler} >
                        <Image source={require("./form.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}