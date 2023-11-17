import { StyleSheet } from "react-native";

const Backgroundcolor="#7727C8"

const loginStyle=StyleSheet.create(
    {

        container:{
            flex:1,
            flexDirection:"column",
            width:"100%",
            height:"100%",
            justifyContent:"start",
            alignItems:"center",
            backgroundColor:"white"
        },
        firstsubcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"start",
            width:"100%",
            height:"20%",
            
        },
        firstsubtext:{
            marginLeft:"10%",
            fontSize:40,
            fontWeight:"300"
        },
        secondsubcontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"start",
            height:"50%",
            width:"80%",
        },
        logincontainer:{
            display:"flex",
            justifyContent:"start",
            alignItems:"center",
            height:"100%",
            width:"80%",
            
        },
        textcontainer:{
            display:"flex",
            width:"100%",
            marginTop:20
        },
        textinput:{
            borderStyle:"solid",
            borderBottomColor:"black",
            borderBottomWidth:1,
            width:"100%",
            height:"20%"
        },
        loginbutton:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:10,
            width:"100%",
            height:"10%",
            backgroundColor:Backgroundcolor,
        },
        logintext:{
            color:"white"
        },
        thirdsubcontainer:{

            display:"flex",
            width:"100%",
            height:"25%",
            justifyContent:"flex-end",
            alignItems:"center"
        },
        createaccountbutton:{
            marginBottom:20,
            color:Backgroundcolor
        }


    }
)
export default loginStyle