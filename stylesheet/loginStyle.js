import { StyleSheet } from "react-native";

const loginStyle=StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:"column",
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        },
        subcontainer:{
            flex:0,
            width:"70%",
            height:"50%",
            justifyContent:"space-evenly",
            alignItems:"center",
            backgroundColor:"orange",
            borderRadius:10
        },
        inputbox:{
            backgroundColor:"white",
            color:"black",
            fontWeight:"900",
            width:"80%"
        },
        loginbutton:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"black",
            backgroundColor:"white",
            width:"20%",
            height:"10%",
            fontWeight:"900"
        },
        logintext:{
            fontWeight:"900"
        }

    }
)
export default loginStyle