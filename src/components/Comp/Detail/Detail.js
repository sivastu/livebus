import React,{useState} from 'react'
import {StyleSheet, Text, View, StatusBar,Dimensions,Image,TouchableOpacity } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import PropTypes from 'prop-types'
import Button from 'components/Button'

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height

const Detail =({ navigation })=>{
  
  
  let imglink= 'https://www.w3schools.com/images/w3schools_green.jpg'
  
  let all ='Alljwiiwhw uwh3hue euwuwineeuejje sjeuhehejeie euen3 eie wiebe eiebe wjeneueneijwhehneieneue buenejrikekrij4urjrkj rn4jrnne jrj4m5k4i4mrke ijek4i3keoekkroe9rk rkdikddkisjeudjd idkmejeenijddji en amayroney'
  
    return(
      <View>
      <View style={styles.rowstyle}>
        <View style={styles.alignh} >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', { from: 'Home' })
              console.log('presed') }} >
            <Image source={{uri:imglink}} style={styles.imgs} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignvi} >
          <TouchableOpacity
             onPress={() => {
             navigation.navigate('Details', { from: 'Home' })
            }} >
            <Text style={styles.title}>title of the day </Text>
            <Text style={styles.vicolor}>
            {all}
            </Text>
          </TouchableOpacity>
        </View>
        <Button style={styles.btnn}
        title="Go Back"
        color="white"
        backgroundColor="#d10808"
        onPress={navigation.goBack}
      />
      </View>
    </View>
    )
 
  }

  Detail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Detail.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Detail

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
      marginBottom:20,
      color:'#000',
      marginTop:5,
      marginRight:2
    },
    alignh:{
      marginTop:20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rowstyle:{
      width:wi-15,
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
      marginTop:10,
      marginBottom:10,
      fontSize: 14,
      fontWeight: "bold"
    },
    subtitle:{
      fontSize: 10,
    },
    btnn:{
      width:100,
      marginTop:"auto",
      marginBottom:20,
      marginRight:"auto",
      marginLeft:10
    }
  })