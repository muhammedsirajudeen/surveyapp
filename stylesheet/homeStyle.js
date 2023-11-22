import { StyleSheet } from "react-native";

const homeStyle=StyleSheet.create({
    bottomcontainer:{
        
        position:"absolute",
        bottom:0,
        width:"100%",
        height:60
    },
    bottomsubcontainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        borderStyle:"solid",
        borderWidth:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"        
    },
    image:{
        height:30,
        width:30
    }
})
export default homeStyle