import React from 'react'
import HomeHeader from '../../Comp/HomeHeader'
import {
  StyleSheet, Text, View,ScrollView 
} from 'react-native'
import {
  wrapScrollView,
  useScrollIntoView,
} from 'react-native-scroll-into-view';

const Home = ()=>{
  const CustomScrollView = wrapScrollView(ScrollView);
  
  return(
    <>
      <CustomScrollView >
        <HomeHeader />
        <HomeHeader />
        <HomeHeader />
        <HomeHeader />
        <HomeHeader />
        <HomeHeader />
        <HomeHeader />
      </CustomScrollView >
    </>
    )
}

export default Home