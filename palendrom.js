import { useState } from "react";
import { Button, Text, TextInput, View} from "react-native";

export default function pelendrom(){
    const[key,setKey]=useState("");
    const[string,setString]=useState(0);
    const[data,setData]=useState(string);
    function palin(){
        const j=string
        var k=0;
        for(var i=0;i<100;i++)
        {
            if(j[i]==null)
            {

                break;
            }
            else
            {k++;}
        }
        var a=0;
        l=k-1;
        for(i=0;i<=k/2;i++)
        {
            if(j[i]==j[l-i])
            {
                a++;
            }
        }
        if(a>=k/2){
            var disp="String Is Palindrome";
        }
        else{
            disp="string Is Not plindrome";
        }
        setKey(disp)
    }
    return(
        <View>
            <Text style={{fontSize:30,textAlign:"center",marginTop:20}}>Palindrome Check</Text>
            <TextInput style={{borderWidth:1,margin:10}} placeholder="Enter String" onChangeText={a=>{setString(a);}}/>
            <Button title="Check" onPress={palin}/>
            <Text>{key}</Text>
        </View>
    )
}