import { Text,TextInput, TouchableOpacity } from "react-native"
export default function SecondForm({secondpageHandler,companyname,setCompanyname,companyaddress,
    setCompanyaddress,companycontact,setCompanycontact,companymail,setCompanymail,
    contactname,setContactname,contactdesignation,setContactdesignation,contactmail,setContactmail,pleasefill,secondpagepreviousHandler
}){
    return(
        <>
        <Text style={{margin:10,fontWeight:"900"}}>Company Details</Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="company name" value={companyname} onChangeText={(text)=>setCompanyname(text)}  ></TextInput>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="company address" value={companyaddress} onChangeText={(text)=>setCompanyaddress(text)}  ></TextInput>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="numeric" placeholder="company contact" value={companycontact} onChangeText={(text)=>setCompanycontact(text)}  ></TextInput>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="company email" value={companymail} onChangeText={(text)=>setCompanymail(text)}  ></TextInput>
        <Text style={{margin:10,fontWeight:"900"}} > Contact Person Details </Text>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="contact person name" value={contactname} onChangeText={(text)=>setContactname(text)}  ></TextInput>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="contact person designation" value={contactdesignation} onChangeText={(text)=>setContactdesignation(text)}  ></TextInput>
        <TextInput  style={{borderStyle:"solid",borderBottomWidth:1,height:50,width:200}} keyboardType="default" placeholder="contact person email" value={contactmail} onChangeText={(text)=>setContactmail(text)}  ></TextInput>
        <Text style={{margin:10,color:"red"}}>{pleasefill}</Text>
        <TouchableOpacity onPress={secondpagepreviousHandler}><Text style={{fontWeight:"500",padding:8,borderRadius:7,margin:20,color:"white",backgroundColor:"black"}} >previous</Text></TouchableOpacity>

        <TouchableOpacity onPress={secondpageHandler}><Text style={{fontWeight:"500",padding:8,borderRadius:7,margin:20,color:"white",backgroundColor:"black"}} >next</Text></TouchableOpacity>
        </>
    )
}