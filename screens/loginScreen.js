import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,Keyboard,Image } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";
import axios from "axios"
import backendUrl from "../components/backendUri";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    //form inputs
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    //handling api response here
    const [apiresponse,setApiresponse]=useState("")

    //handling loading animation
    const [loading,setLoading]=useState(false)


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

    const [visibility,setVisibility]=useState(true)
    
    
    
    async function loginHandler(){
      setLoading(true)
      let response=(await axios.post(backendUrl+"/auth/signin",
      {
        email:email,
        password:password
      }
      )).data
      console.log(response)
      if(response.message!=="success"){
        setApiresponse(response.message)
      }else if(response.message==="success") {
        await AsyncStorage.setItem("email",email)
        navigation.navigate("Home")
      }
      setLoading(false)

    }
    function forgotpasswordHandler(){

    }
    function createaccountHandler(){
        navigation.navigate("Signup")
    }

    function passwordvisibleHandler(){
      visibility ? setVisibility(false) : setVisibility(true) 
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

                    <View style={loginStyle.passwordcontainer}>
                      <TextInput style={loginStyle.passwordinput} secureTextEntry={visibility} placeholder="enter password" value={password} onChangeText={(text)=>setPassword(text)} ></TextInput>
                      <TouchableOpacity onPress={passwordvisibleHandler} style={loginStyle.passwordbutton}><Image source={require("../assets/password.png")} style={loginStyle.image} /></TouchableOpacity>
                    </View>

                    <TouchableOpacity style={loginStyle.loginbutton} onPress={loginHandler}><Text style={loginStyle.logintext} >Login</Text></TouchableOpacity>
                    <TouchableOpacity style={loginStyle.forgotpasswordbutton} onPress={forgotpasswordHandler}><Text>Forgot Password</Text></TouchableOpacity>
                    <Text style={{margin:10,color:"red"}}>{apiresponse}</Text>
                        <Spinner
                            visible={loading}
                            textContent={'submitting...'}
                            textStyle={{ color: '#FFF' }}
                            animation='fade'
                        />
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