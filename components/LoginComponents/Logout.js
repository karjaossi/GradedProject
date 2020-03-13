import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const Logout = (props) =>{
            //THIS 
            // DOES 
            // NOT
            // WORK
            // BLYAT!
   

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

          // The code is absolutely disgusting random gibberish.
          // We tried it "all", but we couldn't finish.
      

}
export default Logout