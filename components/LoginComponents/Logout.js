import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

export default class Logout extends React.Component{
    onLogout = () => {
        console.log("Logout Clicked");
        this.setState({ activeJWT: null })
        SecureStore.deleteItemAsync(secureStoreTokenName);
      }
}