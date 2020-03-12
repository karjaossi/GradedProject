import React from 'react';
import { View, Text, Button } from 'react-native';

export default class LoggedInContainer extends React.Component {
    render(){
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Logged in!</Text>
            <Button title="Add a listing"></Button>
            <Button title="Show all listings"></Button>
            <Button title="Logout" onPress={ this.props.onLogout }/>
        </View>
        );  
    }
}