import { View,Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import formStyle from "../stylesheet/formStyle";
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from "react";
export default function FormScreen(){
    const [businesstype,setBusinesstype]=useState("")
    const [competitortype,setCompetitortype]=useState("")
    const [volume,setVolume]=useState("")
    const [servicetype,setServicetype]=useState("")
    const [dispatchlocation,setDispatchlocation]=useState("")
    const [materialvalue,setMaterialvalue]=useState("")

    const businesstypelist=["manufacture","CF agent","service etc"]
    const competitortypelist=["DTDC","Safe Express"]
    const servicetypelist=["courier","cargo","COD","PRO"]
    const dispatchlocationlist=["local","south","north","international","all"]
    return(
        <View style={formStyle.maincontainer} >
            <Text style={formStyle.text} >FORM</Text>
            <KeyboardAvoidingView style={formStyle.keyboardview} behavior="height" height={500}>
                    <ScrollView contentContainerStyle={formStyle.subcontainer}>

                        <Text style={{margin:10}} >1. type of business</Text>
                        <SelectDropdown
                            data={businesstypelist}
                            onSelect={(selectedItem, index) => {
                                setBusinesstype(selectedItem)
                                console.log(selectedItem, index)
                            }}
                        />
                        <Text style={{margin:10}} >2. competitor</Text>
                        <SelectDropdown
                            data={competitortypelist}
                            onSelect={(selectedItem, index) => {
                                setCompetitortype(selectedItem)
                                console.log(selectedItem, index)
                            }}
                        />
                        <Text style={{margin:10}} >3. volume of business expected</Text>
                        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="enter volume" value={volume} onChangeText={(text)=>setVolume(text)}  ></TextInput>
                        <Text style={{margin:10}} >4. service type</Text>
                        <SelectDropdown
                            data={servicetypelist}
                            onSelect={(selectedItem, index) => {
                                setServicetype(selectedItem)
                                console.log(selectedItem, index)
                            }}
                        />
                        <Text style={{margin:10}}>5. dispatch location</Text>
                        <SelectDropdown
                            data={dispatchlocationlist}
                            onSelect={(selectedItem, index) => {
                                setDispatchlocation(selectedItem)
                                console.log(selectedItem, index)
                            }}
                        />
                        <Text style={{margin:10}}>5. material value</Text>
                        <TextInput  style={{borderStyle:"solid",borderBottomWidth:2,height:50,width:200}} keyboardType="numeric" placeholder="enter material value" value={materialvalue} onChangeText={(text)=>setMaterialvalue(text)}  ></TextInput>
                    </ScrollView>   
            </KeyboardAvoidingView>

        </View>
    )
}