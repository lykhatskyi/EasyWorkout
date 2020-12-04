import React from 'react';
import { View, Text } from 'react-native';
import CameraPage from './src/camera.page';

export default class App extends React.Component {
  render() {
    return (
        <View>
          <CameraPage />
        </View>

    );
  };
};











/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import React, { Component }  from 'react';
// import {
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   TouchableOpacity
// } from 'react-native';
//
// import Icon from 'react-native-vector-icons/MaterialIcons';
//
// export default class App extends Component  {
//   render(){
//     return (
//         <View style={styles.container}>
//
//           <View style={styles.navBar}>
//             <Text style={styles.sectionTitle}>Scan the simulator</Text>
//
//           </View>
//
//           <View style={styles.body}>
//             { /*<Image source={require('./images/train.JPG')} style={{ width: 98, height: 22 }}/>*/ }
//           </View>
//
//           <View style={styles.tabBar}>
//             <TouchableOpacity style={styles.tabItem}>
//               <Icon name="menu" size={35} color="white"/>
//             </TouchableOpacity>
//
//             <TouchableOpacity style={styles.tabItem}>
//               <Icon name="camera" size={40} color="#a4a2aa" />
//             </TouchableOpacity>
//
//             <TouchableOpacity style={styles.tabItem}>
//               <Icon name="menu" size={35} color="#a4a2aa"/>
//             </TouchableOpacity>
//
//           </View>
//
//         </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//
//   },
//   navBar: {
//     height: 90,
//     backgroundColor: '#b72a2a',
//     elevation: 3,
//     paddingHorizontal: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     display: 'flex',
//     justifyContent: 'center'
//     //justifyContent: 'space-around'
//   },
//
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '100',
//     color: 'white',
//     alignSelf: 'center'
//   },
//
//   body:{
//     flex: 1
//   },
//
//   tabBar: {
//     backgroundColor: 'white',
//     height: 73,
//     borderTopWidth: 0.5,
//     borderColor: '#E5E5E5',
//     paddingHorizontal: 25,
//     flexDirection: 'row',
//     //alignItems: 'flex-end',
//     // display: 'flex',
//     justifyContent: 'space-around'
//   },
//   tabItem: {
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   rightNav: {
//     flexDirection: 'row'
//   }
//
// });
//






























// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     width: 500,
//     height: 800,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'flex-start',
//    flexWrap: 'wrap',
//   },
//   sectionTop: {
//     flex: 2,
//     width: 500,
//     height: 500,
//     backgroundColor: '#EE4733',
//   },
//   sectionCamera: {
//     flex: 2,
//     width: 500,
//     height: 110,
//     backgroundColor: 'white',
//   },
//   sectionLow: {
//     flex: 1,
//     width: 500,
//     height: 100,
//     backgroundColor: '#EE4733',
//   },

// });
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>

//                  Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
