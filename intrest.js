import { useState } from "react";
import { Button,Text, TextInput, View ,StyleSheet} from "react-native";
export default function Int(){

    const[number1,setNumber1]=useState(0);
    const[number2,setNumber2]=useState(0);
    const[key,setKey]=useState("")
    const[total,setTotal]=useState(number1*number2/100);
    function count(){
        const newTotal=number1*number2/100;
        setTotal(newTotal);
        setKey(newTotal)
        
    }



    return(
        <View>
            <Text style={{margin:10,fontSize:40,color:"white",textAlign:"center",backgroundColor:"red"}}>Intrest Calcultar</Text>
            <TextInput style={styles.a} placeholder="Enter Amount" onChangeText={v=>{setNumber1(Number.parseInt(v));}}/>
            <TextInput style={styles.a} placeholder="Enter Intrest Rate" onChangeText={e=>{setNumber2(Number.parseInt(e));}}/>
            <Button title="Calculate" onPress={count}/>
            <View style={{alignItems:"center"}}>
            <Text style={styles.b}>{key}</Text>
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    a:{
        borderColor:"black",borderWidth:1,margin:10,color:"black"
    },
    b:{
        margin:20,fontSize:50
    }
})