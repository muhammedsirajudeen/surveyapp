import { View,Text, ScrollView, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity,Alert } from "react-native";
import formStyle from "../stylesheet/formStyle";
import SelectDropdown from 'react-native-select-dropdown'
import { useEffect, useState } from "react";
import axios from "axios"
import backendUrl from "../components/backendUri";
import AsyncStorage from '@react-native-async-storage/async-storage';


//forms here
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";
export default function FormScreen({navigation}){
    //we are accessing the current user mail here
    const [currentusermail,setCurrentuseremail]=useState("")
    useEffect(()=>{
        async function getEmail(){
            let email=await AsyncStorage.getItem("email")
            console.log(email)
            setCurrentuseremail(email)
            if(!email){
                navigation.navigate("Login")
            }
        }
        getEmail()

    },[])
    //common in all forms
    const [pleasefill,setPleasefill]=useState("")

    //state in first page
    const [businesstype,setBusinesstype]=useState("")
    const [competitortype,setCompetitortype]=useState("")
    const [volume,setVolume]=useState("")
    const [servicetype,setServicetype]=useState("")
    const [dispatchlocation,setDispatchlocation]=useState("")
    const [materialvalue,setMaterialvalue]=useState("")
    const [deliveryarea,setDeliveryarea]=useState("")
    const [loadfrequency,setLoadfrequency]=useState("")

   //state in second page
    const [companyname,setCompanyname]=useState("")
    const [companyaddress,setCompanyaddress]=useState("")
    const [companycontact,setCompanycontact]=useState("")
    const [companymail,setCompanymail]=useState("")

    const [contactname,setContactname]=useState("")
    const [contactdesignation,setContactdesignation]=useState("")
    const [contactmail,setContactmail]=useState("")
    
    //state in third page
    const [price,setPrice]=useState("")
    const [parceltype,setParceltype]=useState("")
    const [fuelcharge,setFuelcharge]=useState("")
    const [docketcharge,setDocketcharge]=useState("")
    const [odacharge,setOdacharge]=useState("")
    const [handlingcharge,setHandlingcharge]=useState("")
    const [chargeweight,setChargeweight]=useState("")
    const [chargerate,setChargerate]=useState("")
    const [insurance,setInsurance]=useState("")
    const [cft,setCft]=useState("")

    const [loading,setLoading]=useState(false)

    //state to control which page to show
    const [firstpage,setFirstpage]=useState(true)
    const [secondpage,setSecondpage]=useState(false)
    const [thirdpage,setThirdpage]=useState(false)

    function firstpageHandler(){
        if(businesstype.length<1 || competitortype.length<1 || servicetype.length<1 || dispatchlocation.length<1 || materialvalue.length<1 || deliveryarea.length<1 ||loadfrequency.length <1){
            setPleasefill("please enter all required details before moving forward")
        }else{
            setFirstpage(false)
            setSecondpage(true)
    
        }

    }
    function secondpageHandler(){
        
        if(companyname.length<1 || companyaddress.length<1 || companycontact.length<1 || companymail.length<1 || contactname.length<1 || contactdesignation.length<1 ||
            contactmail.length<1 ){
                
                setPleasefill("please enter all required details before proceeding")

        }else{
            setSecondpage(false)
            setThirdpage(true)
        }


    }
    async function submitHandler(){
        if(price.length<1 || parceltype.length<1 || fuelcharge.length<1 || docketcharge.length<1 ||
           odacharge.length<1 || handlingcharge.length<1 || chargeweight.length<1 || chargerate.length<1 ||
           insurance.length<1 || cft.length<1){
            setPleasefill("please enter all required details before proceeding")
           }else{
            setLoading(true)
            //we are giving the details to be submitted to server here
            let response=(await axios.post(backendUrl+"/form/submit",{
                currentusermail:currentusermail,
                //first form details
                businesstype:businesstype,
                competitortype:competitortype,
                volume:parseInt(volume,10),
                servicetype:servicetype,
                dispatchlocation:dispatchlocation,
                materialvalue:parseInt(materialvalue,10),
                deliveryarea:deliveryarea,
                loadfrequency:loadfrequency,
                //we are giving second form details here
                companyname:companyname,
                companyaddress:companyaddress,
                companycontact:companycontact,
                companymail:companymail,
                contactname:contactname,
                contactdesignation:contactdesignation,
                contactmail:contactmail,
                //details of form in third page
                price:parseInt(price,10),
                parceltype:parceltype,
                fuelcharge:parseInt(fuelcharge,10),
                docketcharge:parseInt(docketcharge,10),
                odacharge:parseInt(odacharge,10),
                handlingcharge:parseInt(handlingcharge,10),
                chargeweight:parseInt(chargeweight,10),
                chargerate:parseInt(chargerate,10),
                insurance:parseInt(insurance),
                cft:parseInt(cft,10)

            })).data
            console.log(response)
            if(response.message!=="success"){
                Alert.alert("please resubmit the form")
            }else if(response.message==="success"){
                Alert.alert("form submitted successfully")
                navigation.navigate("Home")
            }
            setLoading(false)
           }
    }

    function secondpagepreviousHandler(){
        setSecondpage(false)
        setFirstpage(true)
    }
    function thirdpagepreviousHandler(){
        setThirdpage(false)
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
                                        <FirstForm  setBusinesstype={setBusinesstype}
                                        setCompetitortype={setCompetitortype}
                                        volume={volume} setVolume={setVolume}
                                        setServicetype={setServicetype}
                                        setDispatchlocation={setDispatchlocation}
                                        materialvalue={materialvalue} setMaterialvalue={setMaterialvalue}
                                        setDeliveryarea={setDeliveryarea}
                                        setLoadfrequency={setLoadfrequency}
                                        firstpageHandler={firstpageHandler}
                                        pleasefill={pleasefill}
                                        /> 
                                    )
                                    
                                }else if(secondpage){
                                    return(
                                        <SecondForm companyname={companyname} setCompanyname={setCompanyname}
                                                    companyaddress={companyaddress} setCompanyaddress={setCompanyaddress}
                                                    companycontact={companycontact} setCompanycontact={setCompanycontact}
                                                    companymail={companymail} setCompanymail={setCompanymail}
                                                    contactname={contactname} setContactname={setContactname}
                                                    contactdesignation={contactdesignation} setContactdesignation={setContactdesignation}
                                                    contactmail={contactmail} setContactmail={setContactmail}
                                                    secondpageHandler={secondpageHandler}
                                                    pleasefill={pleasefill}
                                                    secondpagepreviousHandler={secondpagepreviousHandler}
                                        />
                                    )
                                }else if(thirdpage){
                                    return(
                                        <ThirdForm price={price} setPrice={setPrice}
                                            setParceltype={setParceltype}
                                            fuelcharge={fuelcharge} setFuelcharge={setFuelcharge}
                                            docketcharge={docketcharge} setDocketcharge={setDocketcharge}
                                            odacharge={odacharge} setOdacharge={setOdacharge}
                                            handlingcharge={handlingcharge} setHandlingcharge={setHandlingcharge}
                                            chargeweight={chargeweight} setChargeweight={setChargeweight}
                                            chargerate={chargerate} setChargerate={setChargerate}
                                            insurance={insurance} setInsurance={setInsurance}
                                            cft={cft} setCft={setCft}
                                            pleasefill={pleasefill}
                                            submitHandler={submitHandler}
                                            loading={loading} setLoading={setLoading}
                                            thirdpagepreviousHandler={thirdpagepreviousHandler}
                                        />
                                    )
                                }
                            })()
                        }

 
                    </ScrollView>   
            </KeyboardAvoidingView>

        </View>
    )
}