import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../Header';


const Drawer = createDrawerNavigator();


export default class NotLoggedContainer extends React.Component {

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
            <NavigationContainer independent={true}>
              <Drawer.Navigator style={ styles.menu }>
                  <Drawer.Screen name="Login">{ props => <Login {...props} onLoginReceiveJWT={ this.props.onLoginReceiveJWT }></Login>}</Drawer.Screen>
                  <Drawer.Screen name="Search" component={Search}/>
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

