/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Splash from './src/containers/Splash';
import Welcome from './src/containers/Welcome';
import Email from './src/containers/Email';
import SignUp from './src/containers/SignUp';
import Confirmation from './src/containers/Confirmation';
import Forgot from './src/containers/Forgot';
import Home from './src/containers/Home';

import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <Router 
      navigationBarStyle={{ backgroundColor: '#110B64' }} 
      titleStyle={{color: '#ffffff'}}
      >
        <Scene key='root'>
        <Scene key="splash" component={Splash}  initial />
        <Scene 
          key="welcome" 
          component={Welcome}
          leftButtonIconStyle={{tintColor: '#ffffff'}} 
          title="Getting started" />
        <Scene 
          key="signUp" 
          component={SignUp} 
          title="Sign Up" />
        <Scene 
          key="welcome" 
          component={Welcome} 
          title="Getting started" />
          <Scene 
          key="email" 
          component={Email} 
          title="Verify Email" />
          <Scene 
          key="code" 
          component={Confirmation} 
          title="Confirm Code" />
          <Scene 
          key="forgot" 
          component={Forgot} 
          title="Forgot Password" />
          <Scene 
          key="home" 
          component={Home} />
          </Scene>
      </Router>
    );
  }
}

