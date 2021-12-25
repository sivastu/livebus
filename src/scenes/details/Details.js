import React from 'react'
import Detail from '../../components/Comp/Detail' 
import {
  StyleSheet, Text, View,ScrollView 
} from 'react-native'
import {
  wrapScrollView,
  useScrollIntoView,
} from 'react-native-scroll-into-view';

const Details = ({ navigation })=>{
  const CustomScrollView = wrapScrollView(ScrollView);
  
  return(
    <>
      <CustomScrollView >
        <Detail navigation={navigation}/>
      </CustomScrollView >
    </>
    )
}

export default Details