import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Welcome extends Component {
      
  render() {
    const onPressHome = () => {
      Actions.home();
    }
    
    const onPressSignUp = () => {
      Actions.signUp();
    }

    const onPressEmail = () => {
      Actions.email();
    }
    return (
      <View style={styles.container}>
      <View style={{flex: 6}} >
        <Image source={require('./../assets/logo-short.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          Make Banking Better
        </Text>

        <Text style={styles.label}>
          Email address
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="mail@mail.com"
            type="email"
        />
        <Text style={styles.label}>
          Password
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="****************"
        />
        <TouchableOpacity onPress={onPressEmail} >
        <Text style={styles.forgot}>
          Forgot password
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{ flex:1, flexDirection: 'row'}} >
        <TouchableOpacity onPress={onPressHome} style={styles.signBtn1}>
        <Text style={styles.textBtn} >
          SIGN IN
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUp} style={styles.signBtn2} >
        <Text style={styles.textBtn}>
          SIGN UP
        </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#a6a6a6',
    margin: 15,
    fontFamily: 'lucida grande',
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 40,
  },
  label: {
    fontSize: 17,
    color: '#a6a6a6',
    fontFamily: 'lucida grande',
    marginHorizontal: 50,
    marginTop: 25,
  },
  myInput: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginHorizontal: 50,
    fontSize: 17,
    marginTop: 10,
  },
  forgot: {
    fontSize: 14,
    color: '#595959',
    fontFamily: 'lucida grande',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  signBtn1: {
    backgroundColor: '#110B64',
    flex:1,
  },
  signBtn2: {
    backgroundColor: '#a6a6a6',
    flex:1,
  },
  textBtn: {
    color: '#ffffff',
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 30
  }
});
