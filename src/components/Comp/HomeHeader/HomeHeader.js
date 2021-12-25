import React,{useState} from 'react'
import {StyleSheet, Text, View, StatusBar,Dimensions,Image,TouchableOpacity } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import PropTypes from 'prop-types'

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height

const Categories =({ navigation })=>{
  
  
  let imglink= 'https://www.w3schools.com/images/w3schools_green.jpg'
  
  let all ='Alljwiiwhw uwh3hue euwuwineeuejje sjeuhehejeie euen3 eie wiebe eiebe wjeneueneijwhehneieneuebuenejrikekrij4urjrkjrn4jrnnejrj4m5k4i4mrkeijek4i3keoekkroe9rkrkdikddkisjeudjdidkmejeenijddjien amayroney'
  let dot = '.....';
  let data = all.substring(0,50)
  
    return(
      <Row style={styles.rowstyle} size={12}>
        <Col style={styles.alignh} sm={4} md={6} lg={3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', { from: 'Home' })
              console.log('presed') }} >
            <Image source={{uri:imglink}} style={styles.imgs} />
          </TouchableOpacity>
        </Col>
        <Col style={styles.alignvi} sm={8} md={6} lg={3}>
          <TouchableOpacity
             onPress={() => {
             navigation.navigate('Details', { from: 'Home' })
            }} >
            <Text style={styles.title}>title of the day </Text>
            <Text style={styles.vicolor}>
            {data}{dot}
            </Text>
          </TouchableOpacity>
        </Col>
      </Row>
    )
 
  }

export default Categories

const styles = StyleSheet.create({
    imgs:{
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center'
    },
    alignvi:{
      paddingLeft:5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    catcolor:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    vicolor:{
      color:'#000',
      marginTop:5,
      marginRight:2
    },
    alignh:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    rowstyle:{
      width:wi-15,
      height:hi/7,
      marginTop:10,
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
      borderRadius:10,
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      backgroundColor:'#fff'
      },
    title:{
      fontSize: 14,
      fontWeight: "bold"
    },
    subtitle:{
      fontSize: 10,
    }
  })