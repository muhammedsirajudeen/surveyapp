import { View,Text, TextInput, Button, Touchable, TouchableOpacity } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
export default function LoginScreen(){
    
    function loginHandler(){
        console.log("hey")
    }
    return(
        <View style={loginStyle.container}  >
            <View style={loginStyle.subcontainer}>
                <TextInput style={loginStyle.inputbox}  placeholder="enter your username"></TextInput>
                <TextInput style={loginStyle.inputbox} placeholder="enter your password"></TextInput>
                <TouchableOpacity style={loginStyle.loginbutton} onPress={loginHandler}><Text style={loginStyle.logintext} >LOGIN</Text></TouchableOpacity>
            </View>
        </View>
    )
}