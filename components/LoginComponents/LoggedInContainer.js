import React from 'react';
import { createStackNavigator, View, Button, StyleSheet, Text } from '@react-navigation/stack';

export default class LoggedInContainer extends React.Component {
    render(){
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
            title="Logout"
            onPress={ this.props.onLogout }
            />
        </View>
        );  
    }
}