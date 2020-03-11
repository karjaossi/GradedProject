import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Login from '../LoginComponents/Login';
import Searchi from '../SearchComponents/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class NotLoggedHeader extends React.Component {

    render(){
        return (
          <View style={ styles.container }>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Searchi" component={Searchi}/>
                </Stack.Navigator>
            </NavigationContainer>
          </View>
           // <Login apiURI='http://85.23.62.54:3000'></Login>
          
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            width: '100%'
        },
});