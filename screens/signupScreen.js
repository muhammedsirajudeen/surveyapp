import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";

export default function SignupScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    
    //handling form input
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
          console.log('Keyboard is now visible');
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
          console.log('Keyboard is now hidden');
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
        navigation.navigate('Login')
    }
    function forgotpasswordHandler(){

    }
    function createaccountHandler(){
        navigation.navigate("Signup")
    }

    return(

        <View style={loginStyle.container}   >
            <View style={loginStyle.firstsubcontainer}>
                <Text style={loginStyle.firstsubtext} >Create Account</Text>
            </View>
                <View style={loginStyle.secondsubcontainer}>
                    <View style={loginStyle.logincontainer}>
                        <View style={loginStyle.textcontainer}>
                            <Text>Name</Text>
                        </View>
                        <TextInput style={loginStyle.textinput} secureTextEntry={visibility} placeholder="enter name" value={name} onChangeText={(text)=>setName(name)}  ></TextInput>
                        <View style={loginStyle.textcontainer}>
                            <Text>Email Address</Text>
                        </View>
                        <TextInput style={loginStyle.textinput} placeholder="enter email address"  value={email} onChangeText={(text)=>setEmail(text)} ></TextInput>
                        <View style={loginStyle.textcontainer}>
                            <Text>Password</Text>
                        </View>
                        <TextInput style={loginStyle.textinput} secureTextEntry={visibility} placeholder="enter password" value={password} onChangeText={(text)=>setPassword(text)} ></TextInput>
                        
                        <TouchableOpacity style={loginStyle.loginbutton} onPress={loginHandler}><Text style={loginStyle.logintext} >Create Account</Text></TouchableOpacity>
                    </View>
                </View>

                {isKeyboardVisible? <></> 
                    :
                    <View style={loginStyle.thirdsubcontainer}>
                        <Text style={{marginBottom:20,fontSize:15}} >Already have an account?</Text>
                        <TouchableOpacity onPress={loginHandler}  style={loginStyle.createaccountbutton}><Text style={{color:"#822AD6",fontWeight:"900"}} >Login</Text></TouchableOpacity>
                    </View>
                }
        </View>



    )
}