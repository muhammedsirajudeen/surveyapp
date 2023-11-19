import { Text,TextInput,TouchableOpacity } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import Spinner from 'react-native-loading-spinner-overlay';

export default function ThirdForm({submitHandler,pleasefill,price,setPrice,setParceltype,
    fuelcharge,setFuelcharge,docketcharge,setDocketcharge,odacharge,setOdacharge,
    handlingcharge,setHandlingcharge,chargeweight,setChargeweight,chargerate,
    setChargerate,insurance,setInsurance,cft,setCft,loading,setLoading,thirdpagepreviousHandler
}){
    const parceltypelist=["volumetric"]
    return(
        <>
        <Text style={{margin:10,fontWeight:"900"}}>Sales Feedback</Text>
        <Text style={{margin:10}}>1. price expectation of client * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="price" value={price} onChangeText={(text)=>setPrice(text)}  ></TextInput>
        <Text style={{margin:10}}>2. parcel type * </Text>
        <SelectDropdown
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
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="Insurance" value={insurance} onChangeText={(text)=>setInsurance(text)}  ></TextInput>

        <Text style={{margin:10}}>10. CFT * </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="CFT" value={cft} onChangeText={(text)=>setCft(text)}  ></TextInput>

        <Text style={{margin:10,color:"red"}}>{pleasefill}</Text>

        <TouchableOpacity onPress={thirdpagepreviousHandler}><Text style={{margin:20,backgroundColor:"black",color:"white",height:30}} >previous</Text></TouchableOpacity>
        <TouchableOpacity onPress={submitHandler}><Text style={{margin:20,backgroundColor:"black",color:"white",height:30}} >submit</Text></TouchableOpacity>
        
        <Spinner
        visible={loading}
        textContent={'submitting...'}
        textStyle={{ color: '#FFF' }}
        animation='fade'
      />

        </>
    )
}