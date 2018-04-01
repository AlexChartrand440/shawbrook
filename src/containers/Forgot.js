import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Forgot extends Component {

  render() {
    const onPressLogin = () => {
        Actions.welcome();
      } 
    return (
        <View style={styles.container}>
        <Image source={require('./../assets/logo-short.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          Create new password 
        </Text>

        <Text style={styles.label}>
          New Password
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="**************"
            type="password"
        />
        <Text style={styles.label}>
          Confirm Password
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="**************"
            type="password"
        />

        <TouchableOpacity style={styles.signBtn} onPress={onPressLogin} >
            <Text style={{ color: '#fff' }}>SET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin} >
            <Text style={styles.forgot}>
            Go back to Login
            </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default Forgot;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      color: '#595959',
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
      marginTop: 10,
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
      fontSize: 18,
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
  