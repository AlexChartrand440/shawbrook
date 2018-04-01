import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Email extends Component {

      
  render() {
    const onPressSendCode = () => {
        Actions.code();
      }
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/logo-short.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          A code will be sent to your email 
        </Text>

        <Text style={styles.label}>
          Email address
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="mail@mail.com"
            type="email"
        />

        <Text style={styles.forgot}>
          Back to Login
        </Text>
        <TouchableOpacity style={styles.signBtn} onPress={onPressSendCode} >
            <Text style={{ color: '#fff' }}>SEND</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Email;

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
    marginTop: 50,
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
  signBtn: {
    marginLeft: 70,
    marginRight: 70,
    marginTop: 15,
    backgroundColor: '#110B64',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
