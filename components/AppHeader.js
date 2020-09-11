import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
render(){
    return(
        <View  style={StyleSheet.container}>
<Text style={styles.text}>Malaria app</Text>
        </View>
    )
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        color:"#16f9f2",
        backgroundColor:'black',
        alignItems:'center',
    },
})