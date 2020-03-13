import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllListings from '../ListingComponents/AllListings';
import MyListings from '../ListingComponents/MyListings';
import AddListing from '../ListingComponents/AddListing'
import Header from '../Header';


const Drawer = createDrawerNavigator();


export default class LoggedInContainer extends React.Component {

  static navigationOptions = function(props) {
    return {
      title: 'Test',
      headerLeft: <Button onPress={() => navigation.openDrawer()} title= "PERKKELE" />
    }
  };
  
    render(){
          console.log(this.props.onLoginReceiveJWT)
          return(
            <View style={ styles.container }>
            <NavigationContainer>
              <Drawer.Navigator style={ styles.menu }>
                <Drawer.Screen name="Listings" component={AllListings}/>
                <Drawer.Screen name="Search" component={Search}/>
                <Drawer.Screen name="My Listings" component={MyListings}/>
                <Drawer.Screen name="Add Listing" component={AddListing}/>
                <Drawer.Screen name="Logout">{this.props.onLogout}</Drawer.Screen>            
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