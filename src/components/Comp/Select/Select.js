import React,{useState} from 'react'
import {StyleSheet, TextInput,Alert, Modal,Pressable,Text, View, StatusBar,Dimensions,Image,TouchableOpacity } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import Button from 'components/Button'

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height

const Select =()=>{
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const  [text,onChangeText]=useState('')
  const  [pwd,onpwd]=useState('')
  
  let imglink= 'https://www.w3schools.com/images/w3schools_green.jpg'
  
  let all ='Alljwiiwhw uwh3hue euwuwineeuejje sjeuhehejeie euen3 eie wiebe eiebe wjeneueneijwhehneieneuebuenejrikekrij4urjrkjrn4jrnnejrj4m5k4i4mrkeijek4i3keoekkroe9rkrkdikddkisjeudjdidkmejeenijddjien amayroney'
  let dot = '.....';
  let data = all.substring(0,50)
  
    return(
    <View style={styles.rowstyle}>
      <Row size={12}>
        <Col style={styles.alignh} sm={4} md={6} lg={3}>
          <Image  source={{uri:imglink}} style={styles.imgs} />
        </Col>
        <Col style={styles.alignvi} sm={8} md={6} lg={3}>
          <TouchableOpacity onPress={() => {
              console.log('presed') }}>
            <Text>title of the day </Text>
            <Text style={styles.vicolor}>
              {data}{dot}
            </Text>
          </TouchableOpacity>
        </Col>
       <Row style={styles.btnrow} size={12}>
          <Col style={styles.catcolor} sm={6} md={6} lg={3}>
            <Button style={styles.btnn}
              title="Login"
              color="white"
              backgroundColor="#d10808"
               onPress={() => setModalVisible(true)}
            />
          </Col>
          <Col style={styles.btnop} sm={6} md={6} lg={3}>
            <Button style={styles.btnn}
              title="Register"
              color="white"
              backgroundColor="#d10808"
               onPress={() => setModalVisible2(true)}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible); }}>
              <View style={styles.centeredView}>
                <Pressable
                  style={{color:'black'}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>close</Text>
                </Pressable>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Login</Text>
                    <Text>Mail Id</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text} />
                  <Text>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text} />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                </View>
              </View>
      </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Register</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2 (!modalVisible2)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        </Col>
      </Row>
      </Row>
      </View>
    )
  }
export default Select

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
      marginTop:20,
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    rowstyle:{
      width:wi-15,
      height:hi-133,
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
    btnrow:{
      marginTop:20,
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    btnop:{
      marginTop:'auto',
      marginRight:'auto',
      marginBottom:'auto',
      marginLeft:'auto',
    },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    paddingTop:20,
    paddingBottom:30,
    backgroundColor: 'white',
    borderRadius: 20,
    width:wi-30,
    height:hi-300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnn:{
      width:100,
      marginTop:"auto",
      marginBottom:"auto",
      marginRight:"auto",
      marginLeft:"auto"
    }
  })