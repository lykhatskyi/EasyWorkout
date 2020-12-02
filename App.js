/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
export default class App extends Component  {
  render(){
    return (
        <View style={styles.container}>

          <View style={styles.navBar}>
            <Text style={styles.sectionTitle}>Scan the simulator</Text>

          </View>

          <View style={styles.body}>

           {/* тут буде камера  */}

            {/* { <Image source={require('./images/train.JPG')} style={{ width: 98, height: 22 }}/> } */}
          </View>

          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="menu" size={35} color="#a4a2aa"/>
            </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  navBar: {
    height: 90,
    backgroundColor: '#EE4733',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
    // justifyContent: 'space-between'
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
    alignSelf: 'center'
  },

  body:{
    flex: 1
  },

  tabBar: {
    backgroundColor: 'white',
    height: 73,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    paddingHorizontal: 25,
    flexDirection: 'column',
    alignItems: 'flex-end',
    // display: 'flex',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  }

});