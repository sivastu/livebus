import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Taps from './components/Navigation'
import io from 'socket.io-client';

export default function App() {
  // useEffect(()=>{
  //   let socket = io('localhost:3000',{jsonp:false})
  //   console.log('connected')
  // })
  return (
      <Taps/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
