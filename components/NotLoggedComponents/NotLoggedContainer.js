import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Login from '../LoginComponents/Login';
import Search from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();


export default class NotLoggedHeader extends React.Component {

  static navigationOptions = function(props) {
    return {
      title: 'Test',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "PERKKELE" />
    }
  };
  
    render(){

          return(
            <View style={ styles.container }>
            <NavigationContainer>
              <Drawer.Navigator style={ styles.menu }>
                  <Drawer.Screen name="Login" component={Login}/>
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
          
        }
        menu: {
          backgroundColor: 'rgb(15,200,55)',
          textDecorationColor: 'rgb(200,20,15)',
        }
});

