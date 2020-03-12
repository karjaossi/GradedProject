import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllListings from '../ListingComponents/AllListings';
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
                <Drawer.Screen name="Login" component={Search}/>
                <Drawer.Screen name="My Listings" component={Search}/>
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
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Logged in!</Text>
            <Button title="Add a listing"></Button>
            <Button title="Show all listings"></Button>
            <Button title="Logout" onPress={ this.props.onLogout }/>
        </View>
        );  
    }
}*/