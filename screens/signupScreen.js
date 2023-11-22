import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,KeyboardAvoidingView, ScrollView, Keyboard,Image } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";
import axios from "axios"
//importing url here
import backendUrl from "../components/backendUri";

import Spinner from 'react-native-loading-spinner-overlay';

export default function SignupScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    
    //handling form input
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    
    //handling api response
    const [apiresponse,setApiresponse]=useState("")

    //loading animation
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
  
    function loginHandler(){
        console.log("hey")
    }
    const [visibility,setVisibility]=useState(true)
    function loginHandler(){
        navigation.navigate('Login')
    }
    function forgotpasswordHandler(){

    }
    async function createaccountHandler(){
        setApiresponse("")
        setLoading(true)
        try{
            let response=(await axios.post(backendUrl+"/auth/signup",
            {
                name:name,
                password:password,
                email:email
            }
        )).data
        console.log(response)
      
        if(response.message!=="success"){
            setApiresponse(response.message)
            setLoading(false)
        }else if(response.message==="success"){
            console.log("reached here")
            setLoading(false)
            navigation.navigate("Login")


        }

        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    function passwordvisibleHandler(){
        visibility ? setVisibility(false) : setVisibility(true) 
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
                        <TextInput style={loginStyle.textinput}  placeholder="enter name" value={name} onChangeText={(text)=>setName(text)}  ></TextInput>
                        <View style={loginStyle.textcontainer}>
                            <Text>Email Address</Text>
                        </View>
                        <TextInput style={loginStyle.textinput} placeholder="enter email address"  value={email} onChangeText={(text)=>setEmail(text)} ></TextInput>
                        
                        <View style={loginStyle.textcontainer}>
                            <Text>Password</Text>
                        </View>
                        <View style={loginStyle.passwordcontainer}>
                             <TextInput style={loginStyle.passwordinput} secureTextEntry={visibility} placeholder="enter password" value={password} onChangeText={(text)=>setPassword(text)} ></TextInput>
                            <TouchableOpacity onPress={passwordvisibleHandler} style={loginStyle.passwordbutton}><Image source={require("../assets/password.png")} style={loginStyle.image} /></TouchableOpacity>
                        </View>
                        {/* <TextInput style={loginStyle.textinput} secureTextEntry={visibility} placeholder="enter password" value={password} onChangeText={(text)=>setPassword(text)} ></TextInput> */}
                        
                        <TouchableOpacity style={loginStyle.loginbutton} onPress={createaccountHandler}><Text style={loginStyle.logintext} >Create Account</Text></TouchableOpacity>
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
                        <Text style={{marginBottom:20,fontSize:15}} >Already have an account?</Text>
                        <TouchableOpacity onPress={loginHandler}  style={loginStyle.createaccountbutton}><Text style={{color:"#822AD6",fontWeight:"900"}} >Login</Text></TouchableOpacity>
                    </View>
                }
        </View>



    )
}