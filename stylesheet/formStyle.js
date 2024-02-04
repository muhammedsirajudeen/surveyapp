import { StyleSheet } from "react-native";


const formStyle=StyleSheet.create(
    {
        maincontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100%",
            width:"100%",
            backgroundColor:'white'
        },
        subcontainer:{
            flexGrow:1,
            justifyContent:"center",
            alignItems:"center",
            width:400,
            // maxHeight:""
        },
        text:{
            fontWeight:"900",
            fontSize:20,
            marginTop:10
        },
        keyboardview:{
            flex:1
        },
        dropdownstyle:{
            height:40,
            fontSize:10,
            borderRadius:10            
        },
    }
)
export default formStyle