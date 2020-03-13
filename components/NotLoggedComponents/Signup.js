import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet, Alert } from 'react-native'
import { Base64 } from 'js-base64'

const Signup = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function signupClick() {
        fetch(props.APIuri + '/register', {
            method: 'POST',
            body: JSON.stringify({
              username: userName,
              password: password
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
        .then(response => {
          if (response.ok == false) {
            throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
          }
          return response.json();
        })
        .then(json => {
          console.log("Sign up successful")
          console.log("Received following JSON");
          console.log(json);
          Alert.alert(
            'You have created an account! Now please login :-)'
         );
        })
        .catch(error => {
          console.log("Error message:")
          console.log(error.message)
        });
      }
    
      return (
        <View style={ styles.screen }>
          <Text style={ styles.header }>Create an account</Text>
          <Text style={ styles.text }>Choose your username</Text>
          <TextInput
            style={ styles.input }
            value={ userName }
            placeholder="Username"
            onChangeText={ value => setUserName(value)}
          />
          <Text style={ styles.text }>Choose your assword</Text>
          <TextInput
            style={ styles.input }
            value={ password }
            placeholder="Password"
            onChangeText={ value => setPassword(value)}
          />
          <TouchableHighlight onPress={ () => signupClick() }>
            <View style={ styles.primaryButton }>
              <Text style={ styles.primaryButtonText }>Sign up</Text>
            </View>
          </TouchableHighlight>
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

export default Signup