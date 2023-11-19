import { View,Text, ScrollView, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity,Alert } from "react-native";
import formStyle from "../stylesheet/formStyle";
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from "react";

//forms here
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";
export default function FormScreen(){
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
    function submitHandler(){
        //here we submit the data to the server all the data and we set loading to false 
        if(price.length<1 || parceltype.length<1 || fuelcharge.length<1 || docketcharge.length<1 ||
           odacharge.length<1 || handlingcharge.length<1 || chargeweight.length<1 || chargerate.length<1 ||
           insurance.length<1 || cft.length<1){
            setPleasefill("please enter all required details before proceeding")
           }else{
            setLoading(true)

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