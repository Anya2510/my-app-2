import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import AppHeader from './components/AppHeader';
import DiagnosisScreen from './screens/DiagnosisScreen'
import InformationScreen from './screens/InformationScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HighRiskScreen from './screens/HighRiskScreen';
import LowRiskScreen from './screens/LowRiskScreen';
import MediumRiskScreen from './screens/MediumRiskScreen';

export default class App extends React.Component{
render(){
    return(
     <AppContainer/>
    )
}
}
const switchNavigator=createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Information:{screen:InformationScreen},
  SignUp:{screen:SignUpScreen},
  Diagnosis:{screen:DiagnosisScreen},
  HighRisk:{screen:HighRiskScreen},
  LowRisk:{screen:LowRiskScreen},
  MediumRisk:{screen:MediumRiskScreen},
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

