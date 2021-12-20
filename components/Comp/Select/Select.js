import React,{useState} from 'react'
import {StyleSheet, Text, View, StatusBar,Dimensions,Image,TouchableOpacity,button } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';


const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height


const serve =async ()=>{
 await fetch('/port',{ 
      headers:{
          "Content-Type":"application/json",
            }
          })
          .then(result=>{
             console.log(result)
          }).catch(err=>{
              console.log(err)
          })
      }

const Select =( props)=>{
  
    return(
      <View>
      
          <button onClick={serve}>Recive</button>
          <button>Connect</button>
      </View>
    )
  }
export default Select

const styles = StyleSheet.create({
   btn:{
     width:wi-150,
     height:hi/10
   }
  })