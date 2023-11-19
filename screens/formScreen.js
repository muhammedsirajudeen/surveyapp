import { View,Text, ScrollView, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity,Alert } from "react-native";
import formStyle from "../stylesheet/formStyle";
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from "react";

//forms here
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";

export default function FormScreen(){
    const [businesstype,setBusinesstype]=useState("")
    const [competitortype,setCompetitortype]=useState("")
    const [volume,setVolume]=useState("")
    const [servicetype,setServicetype]=useState("")
    const [dispatchlocation,setDispatchlocation]=useState("")
    const [materialvalue,setMaterialvalue]=useState("")
    const [deliveryarea,setDeliveryarea]=useState("")
    const [loadfrequency,setLoadfrequency]=useState("")

    const businesstypelist=["manufacture","CF agent","service etc"]
    const competitortypelist=["DTDC","Safe Express"]
    const servicetypelist=["courier","cargo","COD","PRO"]
    const dispatchlocationlist=["local","south","north","international","all"]
    const deliveryarealist=["city","village","ODA"]
    const loadfrequencylist=["daily","weekly","etc"]

    const [firstpage,setFirstpage]=useState(true)
    const [secondpage,setSecondpage]=useState(false)
    const [thirdpage,setThirdpage]=useState(false)

    function firstpageHandler(){
        Alert.alert("ensure you have written ")
        setFirstpage(false)
        setSecondpage(true)
    }

    return(
        <View style={formStyle.maincontainer} >
            <Text style={formStyle.text} >FORM</Text>
            <KeyboardAvoidingView style={formStyle.keyboardview} behavior="height" height={500}>
                    <ScrollView contentContainerStyle={formStyle.subcontainer} scrollEnabled={true} >
                        {
                            (()=>{
                                if(firstpage){
                                    return(
                                        <FirstForm businesstypelist={businesstypelist} setBusinesstype={setBusinesstype}
                                        competitortypelist={competitortypelist} setCompetitortype={setCompetitortype}
                                        volume={volume} setVolume={setVolume}
                                        servicetypelist={servicetypelist} setServicetype={setServicetype}
                                        dispatchlocationlist={dispatchlocationlist} setDispatchlocation={setDispatchlocation}
                                        materialvalue={materialvalue} setMaterialvalue={setMaterialvalue}
                                        deliveryarealist={deliveryarealist} setDeliveryarea={setDeliveryarea}
                                        loadfrequencylist={loadfrequencylist} setLoadfrequency={setLoadfrequency}
                                        firstpageHandler={firstpageHandler}
                                        /> 
                                    )
                                    
                                }else if(secondpage){
                                    return(
                                        <SecondForm  />
                                    )
                                }else if(thirdpage){
                                    return(
                                        <></>
                                    )
                                }
                            })()
                        }

 
                    </ScrollView>   
            </KeyboardAvoidingView>

        </View>
    )
}