import * as React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ScrollView,Modal,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
    super()
    this.state={
        emailId:"",
        password:"",
        modalVisible:false,
        name:"",
        confirmPassword:""
    }
    }
    showModal=()=>{
        return(
            <Modal
             animationType='fade'
             transparent={true}
    visible={this.state.modalVisible}>
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text>Signup form</Text>
                            <TextInput style={styles.inputBox}
                            placeholder={'name'}
                            maxLength={8}
                            onChangeText={(text)=>{
                                this.setState({
                            name:text
                                })
                            }}
                            />
                             <TextInput style={styles.inputBox}
                            placeholder={'abc@example.com'}
                            keyboardType={'email-address'}
                            onChangeText={(text)=>{
                                this.setState({
                            emailId:text
                                })
                            }}
                            />
                             <TextInput style={styles.inputBox}
                            placeholder={'password'}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                            password:text
                                })
                            }}
                            />
                             <TextInput style={styles.inputBox}
                            placeholder={'confirm password'}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                            confirmPassword:text
                                })
                            }}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    userSignup=(username, password, confirmPassword)=>{
if(password!==confirmPassword){
    return Alert.alert('Password doesnt match')
}else{
    firebase.auth().createUserWithEmailAndPassword(username,password)
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

    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Successfully logged in")
        })
        .catch(error=>{
            var errorCode=error.code
            var errorMessage=error.message
            return Alert.alert(errorMessage)
        })
    }
render(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                {this.showModal()}
            </View>
<Text>Welcome Screen</Text>
<View>
    <TextInput style={styles.inputBox}
    placeholder={'abc@something.com'}
    keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })

    }}
    value={this.state.emailId}
    />
    <TextInput style={styles.inputBox}
    placeholder={'password'}
    secureTextEntry={true}
    onChangeText={(text)=>{
        this.setState({
            password:text
        })

    }}
    value={this.state.password}
    />
    
</View>
<View>
    <TouchableOpacity onPress={()=>{
        this.setState({
            modalVisible:true
            
        })
    }}>
        <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} 
    onPress={()=>{
        this.userLogin(this.state.emailId, this.state.password)
        this.props.navigation.navigate('Information')
    }}
    >
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text>Save</Text>
    </TouchableOpacity>
</View>
        </View>
        </ScrollView>
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