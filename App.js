import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import AppHeader from './components/AppHeader';
import InformationScreen from './screens/InformationScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component{
render(){
    return(
     <AppContainer/>
    )
}
}
const switchNavigator=createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Information:{screen:InformationScreen}
})
const AppContainer=createAppContainer(switchNavigator)
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
}
})

