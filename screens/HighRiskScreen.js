import * as React from 'react';
import {View,Text,StyleSheet,Image,Linking,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class HighRiskScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>High risk</Text>
            </View>
        )
    }
}