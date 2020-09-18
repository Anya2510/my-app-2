import * as React from 'react';
import {View,Text,StyleSheet,Image,Linking,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class SignUpScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
            confirmPassword:""
        }
    }
        userSignup=(emailId, password, confirmPassword)=>{
            if(password!==confirmPassword){
                return Alert.alert('Password doesnt match')
            }else{
                firebase.auth().createUserWithEmailAndPassword(emailId,password)
                .then(response=>{
                    return Alert.alert('user added successfully')
                }).catch(error=>{
            var errorCode=error.code
            var errorMessage=error.message
            return Alert.alert(errorMessage)
                })
                db.collection('users').add({
                    first_name:this.state.name,
                    email_id:this.state.emailId
                })
            }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.inputBox}
                placeholder={'email id'}
                onChangeText={(text)=>{
this.setState({
    emailId:text,
})
                }}
/>
<TextInput
                style={styles.inputBox}
                placeholder={'password'}
                secureTextEntry={true}
                onChangeText={(text)=>{
this.setState({
   password:text,
})
                }}
/>
<TextInput
                style={styles.inputBox}
                placeholder={'confirm password'}
                secureTextEntry={true}
                onChangeText={(text)=>{
this.setState({
   confirmPassword:text,
})
                }}
/>
<TouchableOpacity style={styles.button}
onPress={()=>{
    this.userSignup(this.state.emailId,this.state.password,this.state.confirmPassword)
    this.props.navigation.navigate('Information')
}}
>
    <Text style={styles.buttonText}>Create account</Text>
</TouchableOpacity>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:"70%",
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#000",
        color:'#fff'
    },
    buttonText:{
        fontSize:15,
        fontWeight:"bold",
        color:"white",
    },
    inputBox:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:20,
        color:'#fff'
    }
})