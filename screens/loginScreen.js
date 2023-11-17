import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,Keyboard } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";
export default function LoginScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    //form inputs
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        }
      );
  
      // Cleanup listeners when the component unmounts
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
    function loginHandler(){
        console.log("hey")
    }
    const [visibility,setVisibility]=useState(true)
    function loginHandler(){

    }
    function forgotpasswordHandler(){

    }
    function createaccountHandler(){
        navigation.navigate("Signup")
    }

    return(
        <View style={loginStyle.container}  >
            <View style={loginStyle.firstsubcontainer}>
                <Text style={loginStyle.firstsubtext} >Login</Text>
            </View>
            <View style={loginStyle.secondsubcontainer}>
                <View style={loginStyle.logincontainer}>
                    <View style={loginStyle.textcontainer}>
                        <Text>Email Address</Text>
                    </View>
                    <TextInput style={loginStyle.textinput} placeholder="enter email address" value={email} onChangeText={(text)=>setEmail(text)}  ></TextInput>
                    <View style={loginStyle.textcontainer}>
                        <Text>Password</Text>
                    </View>
                    <TextInput style={loginStyle.textinput} secureTextEntry={visibility} placeholder="enter password" value={password} onChangeText={(text)=>setPassword(text)} ></TextInput>
                    <TouchableOpacity style={loginStyle.loginbutton} onPress={loginHandler}><Text style={loginStyle.logintext} >Login</Text></TouchableOpacity>
                    <TouchableOpacity style={loginStyle.forgotpasswordbutton} onPress={forgotpasswordHandler}><Text>Forgot Password</Text></TouchableOpacity>
                </View>
            </View>
            {isKeyboardVisible? <></> 
            :
            <View style={loginStyle.thirdsubcontainer}>
                <Text style={{marginBottom:20,fontSize:15}} >Dont have an account?</Text>
                <TouchableOpacity onPress={createaccountHandler}  style={loginStyle.createaccountbutton}><Text style={{color:"#822AD6",fontWeight:"900"}} >Create Account</Text></TouchableOpacity>
            </View>
            }
        </View>
    )
}