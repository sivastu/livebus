import React,{useState} from 'react'
import {StyleSheet, Text, View, StatusBar,Dimensions,Image,TouchableOpacity } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height

const Categories =( props)=>{
  
  
  let imglink= 'https://www.w3schools.com/images/w3schools_green.jpg'
  
  let all ='Alljwiiwhw uwh3hue euwuwineeuejje sjeuhehejeie euen3 eie wiebe eiebe wjeneueneijwhehneieneuebuenejrikekrij4urjrkjrn4jrnnejrj4m5k4i4mrkeijek4i3keoekkroe9rkrkdikddkisjeudjdidkmejeenijddjien amayroney'
  let dot = '.....';
  let data = all.substring(0,50)
  
    return(
      <Row style={styles.rowstyle} size={12}>
        <Col style={styles.alignh} sm={4} md={6} lg={3}>
          <Image  source={imglink} style={styles.imgs} />
        </Col>
        <Col style={styles.alignvi} sm={8} md={6} lg={3}>
          <TouchableOpacity
            onPress={() => {
              console.log('presed')
            }} >
            <h6>title of the day </h6>
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
      marginTop:'auto',
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    alignvi:{
      paddingLeft:5,
      marginTop:0,
      marginRight:'auto',
      marginBottom:'auto',
    },
    catcolor:{
      marginTop:'auto',
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    vicolor:{
      color:'#000',
      marginTop:-5,
      marginRight:5
    },
    alignh:{
      marginTop:'auto',
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    rowstyle:{
      width:wi-15,
      height:hi/5,
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
      }
    
  })