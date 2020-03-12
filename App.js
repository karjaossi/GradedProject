import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as SecureStore from 'expo-secure-store'
import NotLoggedContainer from './components/NotLoggedComponents/NotLoggedContainer';
import LoggedInContainer from './components/LoginComponents/LoggedInContainer';
import Header from './components/Header';

const Stack = createStackNavigator();
const secureStoreTokenName = "loginToken";

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeJWT: null
    };
  }
  componentDidMount() {
    SecureStore.deleteItemAsync(secureStoreTokenName);
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

  onLoginReceiveJWT = (responseJWT) => {
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT })
      })    
  }

  onLogout = () => {
    console.log("Logout Clicked");
    this.setState({ activeJWT: null })
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

 /* authentication = () => {
    const notLogged = (
      <Stack.Screen name="NotLogged" options={{headerShown: false}}>
        { props => <NotLoggedContainer 
                      {...props} 
                      onLoginReceiveJWT={ this.onLoginReceiveJWT }
                    ></NotLoggedContainer>}
      </Stack.Screen>
    );

    const loggedIn = (
      <Stack.Screen name="LoggedIn" options={{headerShown: false}}>
         { props => <LoggedInContainer 
                      {...props} 
                      activeJWT={ this.state.activeJWT } 
                      apiURI={ this.props.apiURI }
                      onLogout={ this.onLogout }
                    ></LoggedInContainer>}
    </Stack.Screen>
    );*/
    render(){
    if (this.state.activeJWT == null)  { 
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
              <LoggedInContainer onLogout={ this.onLogout } activeJWT={ this.state.activeJWT }></LoggedInContainer>
            </View>
        </View>
      );

     /* return notLogged;
    }
    else{
        return loggedIn;
 master
    }*/
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
