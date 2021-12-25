import React,{useState,useEffect,useRef} from 'react'
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Button,
  Linking,
  AppState,
  Dimensions
} from 'react-native';
import * as Location from 'expo-location';
//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import Modal from 'react-native-modal';

const LOCATION_TRACKING = 'background-location-tracking';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [regions, setRegions] = useState('')
  const [subregion,setSubregion] = useState('')

  const [lan,setLan] = useState(8.1447079)
  const [lon,setLon] = useState(77.3308348)
  const [time,setTime] = useState(0)

  const [data,setData] = useState([])
  const [app,appState] = useState(AppState.currentState)
  const [error,errmsg] = useState('')
  const [loc,setLoc]   = useState([])
  const [locmodel,setLocmodel] = useState(false)
  const [opse ,opSet] = useState(undefined)

  useEffect(() => {
    (async () => {
      try{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await  Location.watchPositionAsync({
          accuracy: Location.Accuracy.Highest,
          timeInterval: 5000,
          distanceInterval: 0,
        }, location => {
          setLocation(location);
          setLan(location.coords.latitude)
          setLon(location.coords.longitude)
          let latitude = location.coords.latitude
          let longitude = location.coords.longitude
          let response = Location.reverseGeocodeAsync({
            latitude,
            longitude
          })
          .then(data => {
            // setCountry(data.country)
            // setCity(data.city)
            // setRegions(data.region)
            // setSubregion(data.subregion)
            // console.log(data)
            // console.log(data.subregion)
          })
          .catch(err => console.error(err));
        });
      }catch(err){
        let status = Location.getProviderStatusAsync();
        if (!status.locationServicesEnabled) {
          setLocmodel(true);
        }
      } 
    })();

    try{
      fetch('http://192.168.43.20:5000/maps')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        console.log(json)
      })
      .catch((error) => {
        console.error(error);
      });
    }
    catch(err){
      console.log(err)
    } 
  },[]);

  // var myfunc = setInterval(function() {
  //   setTime(time+1)
  //   console.log(time)
  // }, 1000)

  const openSetting = () => {
    if (Platform.OS == 'ios') {
      Linking.openURL('app-settings:');
    } else {
      IntentLauncherAndroid.startActivityAsync(
      IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
   opSet(false);
  };


  const [ pin, setPin ] = React.useState({
    latitude: lan,
    longitude: lon   
  })
  const [ region, setRegion ] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
 
  return (
    <View style={{ marginTop: 50, flex: 1 }}>
     <Modal
          onModalHide={opse ? opse : undefined}
          isVisible={locmodel}
        >
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              onPress={() =>
               { 
                setLocmodel(false)
                opSet(true)
              }
              }
              title="Enable Location Services"
            />
          </View>
        </Modal>

      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider="google"
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={(e) => {

            console.log("Drag start", e.nativeEvent.coordinate)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text>jhffj</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})


// <GooglePlacesAutocomplete
//         placeholder="Search"
//         fetchDetails={true}
//         GooglePlacesSearchQuery={{
//           rankby: "distance"
//         }}
//         onPress={(data, details = null) => {
//           // 'details' is provided when fetchDetails = true
//           console.log(data, details)
//           setRegion({
//             latitude: details.geometry.location.lat,
//             longitude: details.geometry.location.lng,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421
//           })
//         }}
//         query={{
//           key: "AIzaSyA0Z5x-E-Eb9iY14OCaQTpJo3f7biLrNng",        
//           language: "en",
//           components: "country:us",
//           types: "establishment",
//           radius: 30000,
//           location: `${region.latitude}, ${region.longitude}`
//         }}
//         styles={{
//           container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
//           listView: { backgroundColor: "white" }
//         }}
//       />


