import React from 'react';
import { View, Button, Text } from 'react-native';

const LoggedInHeader = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Logged in!</Text>
            <Button title="Add a listing" onPress={() => props.navigation.navigate('AddListing')}></Button>
            <Button title="Show all listings"></Button>
            <Button title="Logout" onPress={ props.onLogout }/>
        </View>
    );  
}

export default LoggedInHeader
