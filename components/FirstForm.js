import { Text,TextInput,TouchableOpacity, View } from "react-native"
import SelectDropdown from 'react-native-select-dropdown'

//importing style
import formStyle from "../stylesheet/formStyle"
import { useEffect } from "react"

export default function FirstForm({setBusinesstype,setCompetitortype,
    volume,setVolume,setServicetype,setDispatchlocation,materialvalue,setMaterialvalue
    ,setDeliveryarea,setLoadfrequency,firstpageHandler,pleasefill
}){
    const businesstypelist=["manufacture","CF agent","service etc"]
    const competitortypelist=["DTDC","Safe Express"]
    const servicetypelist=["courier","cargo","COD","PRO"]
    const dispatchlocationlist=["local","south","north","international","all"]
    const deliveryarealist=["city","village","ODA"]
    const loadfrequencylist=["daily","weekly","etc"]
    
    return(
        <>
            <Text style={{margin:10}} >1. type of business*</Text>
            <View style={formStyle.dropdowncontainer}>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={businesstypelist}
                onSelect={(selectedItem, index) => {
                    setBusinesstype(selectedItem)
                    console.log(selectedItem, index)
                }}
            />

            </View>
            <Text style={{margin:10}} >2. competitor*</Text>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={competitortypelist}
                onSelect={(selectedItem, index) => {
                    setCompetitortype(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10}} >3. volume of business expected*  </Text>
            <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="enter volume" value={volume} onChangeText={(text)=>setVolume(text)}  ></TextInput>
            <Text style={{margin:10}} >4. service type*</Text>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={servicetypelist}
                onSelect={(selectedItem, index) => {
                    setServicetype(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10}}>5. dispatch location*  </Text>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={dispatchlocationlist}
                onSelect={(selectedItem, index) => {
                    setDispatchlocation(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10}}>5. material value*  </Text>
            <TextInput  style={{borderStyle:"solid",borderBottomWidth:2,height:50,width:200}} keyboardType="numeric" placeholder="enter material value" value={materialvalue} onChangeText={(text)=>setMaterialvalue(text)}  ></TextInput>
            <Text style={{margin:10}} >6. Delivery areas mostly* </Text>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}

                data={deliveryarealist}
                onSelect={(selectedItem, index) => {
                    setDeliveryarea(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10}} >7. load frequency*  </Text>
            <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={loadfrequencylist}
                onSelect={(selectedItem, index) => {
                    setLoadfrequency(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10,color:"red"}}>{pleasefill}</Text>

            <TouchableOpacity onPress={firstpageHandler}><Text style={{fontWeight:"500",padding:8,borderRadius:7,margin:20,color:"white",backgroundColor:"black"}} >next</Text></TouchableOpacity>
        </>
    )
}