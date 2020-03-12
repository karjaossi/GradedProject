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
      isCheckingTokenStorage: true,
      activeJWT: null
    };
  }
  componentDidMount() {
    SecureStore.deleteItemAsync(secureStoreTokenName);
    //Remember to delete this!!!!!^^^^^^^^^^^^^^^^^^^^^^^^
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")        
        this.setState({ activeJWT: response, isCheckingTokenStorage: false })
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error")
        console.log(error);
      });
  }

  onLoginReceiveJWT = (responseJWT) => {
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT, isCheckingTokenStorage: false })
      })    
  }

  onLogout = () => {
    console.log("Logout Clicked");
    this.setState({ activeJWT: null })
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  authentication = () => {
    if (this.state.activeJWT == null)  { 
      console.log(this.state.activeJWT)
      return (
        <View style={styles.header}>
          <Header></Header>
            <View style={styles.container}>
              <NotLoggedContainer onLoginReceiveJWT={ this.onLoginReceiveJWT }></NotLoggedContainer>
            </View>
        </View>
      );
    }
    else{
      return (
        <View style={styles.header}>
          <Header></Header>
            <View style={styles.container}>
              <LoggedInContainer onLogout={ this.onLogout }></LoggedInContainer>
            </View>
        </View>
      );
    }
  }
 
  render(){
    return(
      <View style={{flex : 1}}>
        {this.authentication()}
      </View>
    );
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
