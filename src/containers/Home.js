import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Home extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/profile.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          @esambe
        </Text>
        <View
            style={{
                borderBottomColor: '#a6a6a6',
                borderBottomWidth: 1,
                marginHorizontal: 30,
                marginTop: 10,
            }}
        />
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
        </View>
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
        </View>
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <Image source={require('./../assets/balance.png')} />
                <Text style={styles.balance}>
                    Account Balance
                </Text>
            </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontSize: 25,
    color: '#595959',
    fontFamily: 'lucida grande',
    alignSelf: 'center',
    marginTop: 7,
    fontWeight: 'bold',
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 40,
    borderColor: '#a6a6a6',
    borderWidth: 1,
  },
  outerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 10,
  },
  innerContainer: {
    borderRadius: 5,
    borderColor: '#a6a6a6',
    borderWidth: 1,
    width: 160,
    alignItems: 'center',
  },
  balance: {
      fontSize: 18,
      marginVertical: 10,
  }
});
