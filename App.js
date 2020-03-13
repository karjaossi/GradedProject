import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import * as SecureStore from 'expo-secure-store'
import NotLoggedContainer from './components/NotLoggedComponents/NotLoggedContainer';
import LoggedInContainer from './components/LoginComponents/LoggedInContainer';
import Header from './components/Header';

const secureStoreTokenName = "loginToken";

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeJWT: null,
      APIuri: 'http://87.92.78.131:3000'
    };
  }

  componentDidMount() {
    SecureStore.deleteItemAsync(secureStoreTokenName);
    //Keeping this^^ here so you could logout since the actual logout button doesnt work
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")        
        this.setState({ activeJWT: response })
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error")
        console.log(error);
      });
  }

  //On login function, sets the jwt token into secure storage
  onLoginReceiveJWT = (responseJWT) => {
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT })
      })    
  }

  //On logout function, clears the secure storage and nullifies active the state
  onLogout = () => {
    console.log("Logout Clicked");
    this.setState({ activeJWT: null })
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  render(){
    //Checking if the user has already logged in (currently unused since the app is set to log users out when refreshing)
    if (this.state.activeJWT == null)  { 
      return (
        <View style={styles.header}>
          <Header></Header>
            <View style={styles.container}>
              <NotLoggedContainer onLoginReceiveJWT={ this.onLoginReceiveJWT } APIuri={ this.state.APIuri }></NotLoggedContainer>
            </View>
        </View>
      );
    }
    else{
      return (
        <View style={styles.header}>
          <Header></Header>
            <View style={styles.container}>
              <LoggedInContainer onLogout={ this.onLogout } activeJWT={ this.state.activeJWT } APIuri={ this.state.APIuri }></LoggedInContainer>
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    paddingTop: 45
  }
});
