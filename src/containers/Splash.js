import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';


class Splash extends Component {

  componentDidMount() {
    setTimeout(() => Actions.welcome(), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          WELCOME
        </Text>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#110B64'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    margin: 15,
    fontFamily: 'lucida grande',
  },
  logo: {
    height: 80,
    width: 350,
    // marginHorizontal: 30,
  },
});
