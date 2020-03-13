import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../Header';
import AllListings from '../ListingComponents/AllListings';
import Signup from './Signup';


const Drawer = createDrawerNavigator();


export default class NotLoggedContainer extends React.Component {

  static navigationOptions = function(props) {
    return {
      title: 'Test',
      headerLeft: <Button onPress={() => navigation.openDrawer()} title= "PERKKELE" />
    }
  };
  
    render(){
          return(
            <View style={ styles.container }>
            <NavigationContainer>
              <Drawer.Navigator style={ styles.menu }>
                  <Drawer.Screen name="Listings">{ props => <AllListings {...props} APIuri={ this.props.APIuri }></AllListings>}</Drawer.Screen>
                  <Drawer.Screen name="Login">{ props => <Login {...props} APIuri={ this.props.APIuri } onLoginReceiveJWT={ this.props.onLoginReceiveJWT }></Login>}</Drawer.Screen>
                  <Drawer.Screen name="Search">{ props => <Search {...props} APIuri={ this.props.APIuri }></Search>}</Drawer.Screen>
                  <Drawer.Screen name="Sign Up">{ props => <Signup {...props} APIuri={ this.props.APIuri } onLoginReceiveJWT={ this.props.onLoginReceiveJWT }></Signup>}</Drawer.Screen>
              </Drawer.Navigator>
            </NavigationContainer>
            </View>
          );
      }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            width: '100%'
        },
        header: {
          
        },
        menu: {
          backgroundColor: 'rgb(15,200,55)',
          textDecorationColor: 'rgb(200,20,15)',
        }
});

