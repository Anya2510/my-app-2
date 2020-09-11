import * as React from 'react';
import {View,Text,StyleSheet,Image,Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class InformationScreen extends React.Component{
render(){
    return(
        <View style={styles.container}>
          <TouchableOpacity style={{paddingBottom:100, paddingRight:70, width:15, height:15}}
          onPress={()=>{
              Linking.openURL('https://www.dettol.co.in/en/illness-prevention/illnesses/everything-you-need-to-know-about-dengue/?gclid=EAIaIQobChMIk4Ksiqbh6wIVRw4rCh2_GgSiEAAYASAAEgL7KvD_BwE&gclsrc=aw.ds')
          }}
          >
              
              <Image 
              source={require('../assets/dengue.jpg')}
              style={{width:100,height:100}}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
              Linking.openURL('https://www.goodknight.in/all-you-need-to-know-about-malaria/?utm_source=Google&utm_medium=CPC&utm_campaign=GK_Search_Malaria&gclid=EAIaIQobChMItPDF96Xh6wIV8oJLBR06CgdGEAAYASAAEgJLqPD_BwE')
          }}
          >
             
              <Image 
              source={require('../assets/malaria.jpg')}
              style={{width:100,height:100}}
              />
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
    width:"75%",
    height:35,
    alignSelf:'center',
    padding:20,
    color:'#fff'
}
})
