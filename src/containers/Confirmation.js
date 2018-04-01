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

class Confirmation extends Component {


  render() {
    const onPressForgot = () => {
        Actions.forgot();
      }
      const onPressWelcome = () => {
        Actions.welcome();
      }  
    return (
        <View style={styles.container}>
        <Image source={require('./../assets/logo-short.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          Enter confirmation code
        </Text>
        <View style={styles.codeContainer} >
            <TextInput
                style={styles.myInput}
                placeholder="0"
                type="number"
            />
            <TextInput
            style={styles.myInput}
            placeholder="0"
            type="number"
        />
        <TextInput
            style={styles.myInput}
            placeholder="0"
            type="number"
        />
        </View>
        <TouchableOpacity style={styles.signBtn} onPress={onPressForgot} >
            <Text style={{ color: '#fff' }}>CONFIRM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressWelcome} >
            <Text style={styles.forgot}>
            Go back to Login
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Confirmation;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    welcome: {
      fontSize: 25,
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
    myInput: {
      height: 40,
      borderColor: '#ffffff',
      borderWidth: 1,
      marginHorizontal: 10,
      fontSize: 17,
      marginTop: 10,
      textAlign: 'center',
    },
    forgot: {
      fontSize: 20,
      color: '#595959',
      fontFamily: 'lucida grande',
      alignSelf: 'center',
      marginTop: 10,
      fontWeight: 'bold',
    },
    signBtn: {
      marginLeft: 70,
      marginRight: 70,
      marginTop: 20,
      backgroundColor: '#110B64',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    codeContainer: {
        flexDirection: 'row',
         marginHorizontal: 40,
         justifyContent: 'center',
    },
  });