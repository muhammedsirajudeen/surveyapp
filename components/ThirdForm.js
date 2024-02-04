import { Text,TextInput,TouchableOpacity } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import Spinner from 'react-native-loading-spinner-overlay';

//style
import formStyle from "../stylesheet/formStyle";
export default function ThirdForm({submitHandler,pleasefill,price,setPrice,setParceltype,
    fuelcharge,setFuelcharge,docketcharge,setDocketcharge,odacharge,setOdacharge,
    handlingcharge,setHandlingcharge,chargeweight,setChargeweight,chargerate,
    setChargerate,insurance,setInsurance,cft,setCft,loading,setLoading,thirdpagepreviousHandler
}){
    const parceltypelist=["volumetric"]
    const insurancelist=["YES","NO"]
    return(
        <>
        <Text style={{margin:10,fontWeight:"900"}}>Sales Feedback</Text>
        <Text style={{margin:10}}>1. price expectation of client * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="price" value={price} onChangeText={(text)=>setPrice(text)}  ></TextInput>
        <Text style={{margin:10}}>2. parcel type * </Text>
        <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={parceltypelist}
                onSelect={(selectedItem, index) => {
                    setParceltype(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
        <Text style={{margin:10}}>3. fuel surcharge * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="fuel surcharge" value={fuelcharge} onChangeText={(text)=>setFuelcharge(text)}  ></TextInput>
        <Text style={{margin:10}}>4. docket charge * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="docket charge" value={docketcharge} onChangeText={(text)=>setDocketcharge(text)}  ></TextInput>

        <Text style={{margin:10}}>5. ODA charge * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="ODA charge" value={odacharge} onChangeText={(text)=>setOdacharge(text)}  ></TextInput>

        <Text style={{margin:10}}>6. Handling charge * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="Handling charge" value={handlingcharge} onChangeText={(text)=>setHandlingcharge(text)}  ></TextInput>

        <Text style={{margin:10}}>7. minimum charge weight * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="minimum charge weight" value={chargeweight} onChangeText={(text)=>setChargeweight(text)}  ></TextInput>

        <Text style={{margin:10}}>8. minimum charge rate * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="minimum charge rate" value={chargerate} onChangeText={(text)=>setChargerate(text)}  ></TextInput>

        <Text style={{margin:10}}>9. Insurance * </Text>
        <SelectDropdown
                buttonStyle={formStyle.dropdownstyle}
                data={insurancelist}
                onSelect={(selectedItem, index) => {
                    setInsurance(selectedItem)
                    console.log(selectedItem, index)
                }}
            />
        <Text style={{margin:10}}>10. CFT * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="CFT" value={cft} onChangeText={(text)=>setCft(text)}  ></TextInput>

        <Text style={{margin:10,color:"red"}}>{pleasefill}</Text>

        <TouchableOpacity onPress={thirdpagepreviousHandler}><Text style={{fontWeight:"500",padding:8,borderRadius:7,margin:20,color:"white",backgroundColor:"black"}} >previous</Text></TouchableOpacity>
        <TouchableOpacity onPress={submitHandler}><Text style={{fontWeight:"500",padding:8,borderRadius:7,margin:20,color:"white",backgroundColor:"black"}} >submit</Text></TouchableOpacity>
        
        <Spinner
        visible={loading}
        textContent={'submitting...'}
        textStyle={{ color: '#FFF' }}
        animation='fade'
      />

        </>
    )
}