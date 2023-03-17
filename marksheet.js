import { useState } from "react";
import { View,Table, Text, TextInput, StyleSheet, Button } from "react-native";

export default function marksheet()
{
    const[number1,setNumber1]=useState(0);
    const[number2,setNumber2]=useState(0);
    const[number3,setNumber3]=useState(0);
    const[number4,setNumber4]=useState(0);
    const[number5,setNumber5]=useState(0);
    const[key1,setKey1]=useState("");
    const[per,setPer]=useState((number1+number2+number3+number4+number5)/5);
    function percantage(){
        const newper=(number1+number2+number3+number4+number5)/5;
        setPer(newper);
        setKey1(newper+"%")
    }

    return(
        <View style={{flex:1}}>

            <Text style={{fontSize:30, padding:10,textAlign:"center"}}> marksheet</Text>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>Subject Name</Text>
                <Text style={styles.a}>Subject Id</Text>
                <Text style={styles.a}>Total Marks</Text>
                <Text style={styles.a}>Marks <Text style={{fontSize:13}}>(Enter Marks)</Text></Text>
                <Text style={styles.a}>Remarks</Text>
            </View>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>Hindi</Text>
                <Text style={styles.a}>1001</Text>
                <Text style={styles.a}>100</Text>
                <TextInput style={styles.a} onChangeText={h=>{setNumber1(Number.parseInt(h));}} />
                <Text style={styles.a}></Text>
            </View>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>English</Text>
                <Text style={styles.a}>1002</Text>
                <Text style={styles.a}>100</Text>
                <TextInput style={styles.a} onChangeText={e=>{setNumber2(Number.parseInt(e));}}/>
                <Text style={styles.a}></Text>
            </View>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>Maths</Text>
                <Text style={styles.a}>1003</Text>
                <Text style={styles.a}>100</Text>
                <TextInput style={styles.a} onChangeText={m=>{setNumber3(Number.parseInt(m));}} />
                <Text style={styles.a}></Text>
            </View>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>Science</Text>
                <Text style={styles.a}>1004</Text>
                <Text style={styles.a}>100</Text>
                <TextInput style={styles.a} onChangeText={sc=>{setNumber4(Number.parseInt(sc));}}/>
                <Text style={styles.a}></Text>
            </View>
            <View style={{flexDirection:"row"}}> 
                <Text style={styles.a}>Social sc.</Text>
                <Text style={styles.a}>1005</Text>
                <Text style={styles.a}>100</Text>
                <TextInput style={styles.a} onChangeText={ssc=>{setNumber5(Number.parseInt(ssc));}}/>
                <Text style={styles.a}></Text>
            </View>
            <View style={{flexDirection:"row",margin:10}}>
                <Button title="Get Result" onPress={percantage}></Button>
                <Text>Result{key1}</Text>
                
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    a:{
        borderWidth:1, padding:10,flex:.30
    }
})