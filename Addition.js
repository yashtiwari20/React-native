import { Component } from "react";
import { TextInput, StyleSheet, View, Button,Image, Text} from "react-native";

export default class sum extends Component{


    state = {key:"",num1:0,num2:0}  //state declaration
  
    changeState=()=>
    {
        // this.setState({key:(parseInt(this.state.num1) + parseInt(this.state.num2))})
       const n=parseInt(this.state.num1)
       let flag=0
        for(i = 2; i <=n-1; i++){
				if (n % i == 0) {
					flag = 1
					break;
				}
            }
			if (flag == 0)
				alert(n + " is prime")
			else
				alert(n + " is not prime")
		
    }
    render(){
        
        return(
            <View>
                 <Image source={{uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'}}
                     style={{width: 100, height: 100, alignContent:"center"}} />
                <TextInput style={styles.a}  placeholder="enter  number" onChangeText={v=>{this.setState({num1:v})}}/>
                {/* <TextInput style={styles.a}  placeholder="enter second number" onChangeText={v=>{this.setState({num2:v})}}/> */}
                <Button title="Click" color={"red"} onPress={this.changeState}/>
                <Text>{this.state.key}</Text>
               
            </View>
        )
    }
}

const styles=StyleSheet.create({
    a:{
        borderColor:"black",borderWidth:1,margin:10
    }
})