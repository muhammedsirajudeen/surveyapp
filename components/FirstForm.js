import { Text,TextInput,TouchableOpacity } from "react-native"
import SelectDropdown from 'react-native-select-dropdown'

export default function FirstForm({businesstypelist,setBusinesstype,competitortypelist,setCompetitortype,
    volume,setVolume,servicetypelist,setServicetype,dispatchlocationlist,setDispatchlocation,materialvalue,setMaterialvalue,
    deliveryarealist,setDeliveryarea,loadfrequencylist,setLoadfrequency,firstpageHandler
}){
    return(
        <>
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
            <Text style={{margin:10}} >6. Delivery areas mostly</Text>
            <SelectDropdown
                data={deliveryarealist}
                onSelect={(selectedItem, index) => {
                    setDeliveryarea(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <Text style={{margin:10}} >7. load frequency</Text>
            <SelectDropdown
                data={loadfrequencylist}
                onSelect={(selectedItem, index) => {
                    setLoadfrequency(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
            <TouchableOpacity onPress={firstpageHandler}><Text style={{margin:20,backgroundColor:"black",color:"white",height:30}} >next</Text></TouchableOpacity>
        </>
    )
}