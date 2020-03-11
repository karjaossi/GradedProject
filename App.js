import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import * as SecureStore from 'expo-secure-store'
import NotLoggedHeader from './components/NotLoggedComponents/NotLoggedHeader';

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
 
    render(){
      if (this.state.activeJWT == null)  { 
      return (
        <View style={styles.container}>
          <NotLoggedHeader></NotLoggedHeader>
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
});
