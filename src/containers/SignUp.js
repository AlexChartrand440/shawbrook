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

class SignUp extends Component {
      
  render() {
    const onPressWelcome = () => {
      Actions.welcome();
    }
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/logo-short.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          Make Banking Better
        </Text>

        <Text style={styles.label}>
          First Name
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="Esambe"
        />
        <Text style={styles.label}>
          Last Name
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="Elvis"
        />
        <Text style={styles.label}>
          Email address
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="mail@mail.com"
        />
        <Text style={styles.label}>
          Password
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="****************"
            type="password"
        />
        <Text style={styles.label}>
          Confirm Password
        </Text>
        <TextInput
            style={styles.myInput}
            placeholder="****************"
            type="password"
        />
        <TouchableOpacity style={styles.signBtn} onPress={onPressWelcome} >
            <Text style={{ color: '#fff' }}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>
          Already have an account. Login
        </Text>
      </View>
    );
  }
}

export default SignUp;

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
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 17,
    color: '#a6a6a6',
    fontFamily: 'lucida grande',
    marginHorizontal: 50,
    marginTop: 7,
  },
  forgot: {
    fontSize: 14,
    color: '#595959',
    fontFamily: 'lucida grande',
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  myInput: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginHorizontal: 50,
    fontSize: 17,
    // marginTop: 6,
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
