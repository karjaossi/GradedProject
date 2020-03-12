import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native';
import AddListing from '../ListingComponents/AddListing'
import LoggedInHeader from './LoggedInHeader'

const Stack = createStackNavigator();

export default class LoggedInContainer extends React.Component {

    onListingAdd = (title, description, category, location, price, delivery) => {
        console.log(JSON.stringify({ title, description, category, location, price, delivery }));
        fetch('http://192.168.43.102:3000' + '/listings', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.props.activeJWT,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, category, location, price, delivery })
            })
            .then(response => {
            if (response.ok == false) {
                throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
            }
            return response.json();
            })
            .then(json => {
            console.log("Listing POST successful")
            console.log("Received following JSON");
            console.log(json);
            })
            .catch(error => {
            console.log("Error message:")
            console.log(error.message)
        });
    }
    
    render() {
        return (
            <Stack.Navigator>
            <Stack.Screen name="LoggedInHeader" options={{headerShown: false}}>
                { props => <LoggedInHeader {...props} onLogout={ this.props.onLogout }/>}
            </Stack.Screen>
            <Stack.Screen name="AddListing" options={{headerShown: false}}>
                { props => <AddListing {...props} onListingAdd={ this.onListingAdd }/>}
            </Stack.Screen>
            </Stack.Navigator>
        )
    }
}