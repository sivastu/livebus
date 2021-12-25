// import React from 'react'
// import PropTypes from 'prop-types'
// import {
//   StyleSheet, Text, View, StatusBar,
// } from 'react-native'
// import Button from 'components/Button'
// import { colors } from 'theme'

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.lightGrayPurple,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// })

// const Home = ({ navigation }) => (
//   <View style={styles.root}>
//     <StatusBar barStyle="light-content" />
//     <Text style={styles.title}>Home</Text>
//     <Button
//       title="Go to Details"
//       color="white"
//       backgroundColor={colors.lightPurple}
//       onPress={() => {
//         navigation.navigate('Details', { from: 'Home' })
//       }}
//     />
//   </View>
// )

// Home.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }),
// }

// Home.defaultProps = {
//   navigation: { navigate: () => null },
// }

// export default Home


import React from 'react'
import HomeHeader from '../../components/Comp/HomeHeader' 
import {
  StyleSheet, Text, View,ScrollView 
} from 'react-native'
import {
  wrapScrollView,
  useScrollIntoView,
} from 'react-native-scroll-into-view';

const Home = ({ navigation })=>{
  const CustomScrollView = wrapScrollView(ScrollView);
  
  return(
    <>
      <CustomScrollView >
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
        <HomeHeader navigation={ navigation } />
      </CustomScrollView >
    </>
    )
}

export default Home