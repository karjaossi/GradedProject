import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'

const Login = (props) => {
    const [userName, setUserName] = useState("tester");
    const [password, setPassword] = useState("testpw");

    function loginClick() {
        fetch(props.APIuri + '/login', {
          method: 'GET',
          headers: {
            "Authorization": "Basic " + Base64.encode(userName + ":" + password)
          }
        })
        .then(response => {
          if (response.ok == false) {
            throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
          }
          return response.json();
        })
        .then(json => {
          console.log("Login successful")
          console.log("Received following JSON");
          console.log(json);
    
          props.onLoginReceiveJWT(json.token);
        })
        .catch(error => {
          console.log("Error message:")
          console.log(error.message)
        });
      }
    
      return (
        <View style={ styles.screen }>
          <Text style={ styles.header }>Login to Marketplace</Text>
          <Text style={ styles.text }>Username</Text>
          <TextInput
            style={ styles.input }
            value={ userName }
            placeholder="userdude"
            onChangeText={ value => setUserName(value)}
          />
          <Text style={ styles.text }>Password</Text>
          <TextInput
            style={ styles.input }
            value={ password }
            placeholder="password"
            onChangeText={ value => setPassword(value)}
          />
          <TouchableHighlight onPress={ () => loginClick() }>
            <View style={ styles.primaryButton }>
              <Text style={ styles.primaryButtonText }>Login</Text>
            </View>
          </TouchableHighlight>
          <Button title="Sign up" color="#000000" onPress={ () => props.navigation.navigate('Search') } />
        </View>
      )
    }

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgba(5, 5, 5, 0.85 )',
        flex: 1,
        justifyContent: 'center',
        width: '100%',        
        alignItems: 'center'
    },
    header: {
        fontSize: 35,
        marginBottom: 20,
        color: 'red'
    },
    text: {
        fontSize: 20,
        color: 'red'
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.6 )',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 20
    },
    primaryButton: {
        backgroundColor: 'red',
        height: 60,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 10
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 20
    
    }
    });

export default Login