import * as React from 'react';
import {View,Text,StyleSheet,Image,Linking,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class DiagnosisScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
           <View>
               <Text style={styles.buttonText}>Are you having chills?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity >
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you having high fever?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you having sweating?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you having headache?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you vomiting?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you having muscle pain?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Are you having nausea?</Text>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
           </View>
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
})