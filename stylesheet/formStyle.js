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
            height:"80%",
            width:"90%",
        },
        text:{
            fontWeight:"900",
            fontSize:20,
            marginTop:10
        },
        keyboardview:{
            display:"flex",
            width:"100%",
            height:"100%"
        }
    }
)
export default formStyle