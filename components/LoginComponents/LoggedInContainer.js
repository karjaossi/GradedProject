import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllListings from '../ListingComponents/AllListings';
import MyListings from '../ListingComponents/MyListings';
import AddListing from '../ListingComponents/AddListing'
import Logout from '../LoginComponents/Logout'
import Header from '../Header';

const Drawer = createDrawerNavigator();


export default class LoggedInContainer extends React.Component {


    onListingAdd = (title, description, category, location, images, priceString, delivery) => {
        var price = parseInt(priceString);
        console.log("JWT " + this.props.activeJWT);
        console.log(JSON.stringify({ title, description, category, location, images, price, delivery }));
        fetch(this.props.APIuri + '/listings', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.props.activeJWT,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, category, location, images, price, delivery })
            })
            .then(response => {
            if (response.ok == false) {
                throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
            }
            return response.json();
            })
            .then(json => {
            console.log("Listing POST successful")
            console.log("Received following JSON");
            console.log(json);
            Alert.alert(
              'You have added a new posting!'
           );
            })
            .catch(error => {
            console.log("Error message:")
            console.log(error.message)
            });
    }
    //Were trying to build a button so that drawer opens from left without swipe as the gestures are pretty bad.
  static navigationOptions = function(props) {
    return {
      title: 'Test',
      headerLeft: <Button onPress={() => navigation.openDrawer()} title= "Ei toimi" />
    }
  };
    //Drawer menu for the view when you are logged in
    //Props are also passed here.
    render(){
          return(
            <View style={ styles.container }>
            <NavigationContainer>
              <Drawer.Navigator style={ styles.menu }>
                <Drawer.Screen name="Listings">{ props => <AllListings {...props} APIuri={ this.props.APIuri }></AllListings>}</Drawer.Screen>
                <Drawer.Screen name="Search">{ props => <Search {...props} APIuri={ this.props.APIuri }></Search>}</Drawer.Screen>
                <Drawer.Screen name="My Listings">{ props => <MyListings {...props} activeJWT={ this.props.activeJWT } onListingDelete={this.onListingDelete} APIuri={ this.props.APIuri }></MyListings>}</Drawer.Screen>
                <Drawer.Screen name="Add Listing">{ props => <AddListing {...props} activeJWT={ this.props.activeJWT } onListingAdd={this.onListingAdd} APIuri={ this.props.APIuri }></AddListing>}</Drawer.Screen>
                <Drawer.Screen name="Logout" component={Logout}></Drawer.Screen>            
              </Drawer.Navigator>
            </NavigationContainer>
            </View>
          );
      }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(0, 55, 5, 1.0)',
            width: '100%'
        },
        header: {
          
        },
        menu: {
          backgroundColor: 'rgba(0, 5, 5, 1.0)'
        }
});




/* render(){
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native';
import AddListing from '../ListingComponents/AddListing'
import LoggedInHeader from './LoggedInHeader'

const Stack = createStackNavigator();

export default class LoggedInContainer extends React.Component {

    onListingAdd = (title, description, category, location, price, delivery) => {
        console.log(JSON.stringify({ title, description, category, location, price, delivery }));
        fetch('http://192.168.43.102:3000' + '/listings', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.props.activeJWT,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, category, location, price, delivery })
            })
            .then(response => {
            if (response.ok == false) {
                throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
            }
            return response.json();
            })
            .then(json => {
            console.log("Listing POST successful")
            console.log("Received following JSON");
            console.log(json);
            })
            .catch(error => {
            console.log("Error message:")
            console.log(error.message)
        });
    }
    
    render() {
        return (
            <Stack.Navigator>
            <Stack.Screen name="LoggedInHeader" options={{headerShown: false}}>
                { props => <LoggedInHeader {...props} onLogout={ this.props.onLogout }/>}
            </Stack.Screen>
            <Stack.Screen name="AddListing" options={{headerShown: false}}>
                { props => <AddListing {...props} onListingAdd={ this.onListingAdd }/>}
            </Stack.Screen>
            </Stack.Navigator>
        )
    }
}*/