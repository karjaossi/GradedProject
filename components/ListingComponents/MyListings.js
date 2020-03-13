import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AddListing from '../ListingComponents/AddListing'

const Stack = createStackNavigator();

export default class MyListings extends React.Component {

    onListingAdd = (title, description, category, location, price, delivery) => {
        console.log(JSON.stringify({ title, description, category, location, price, delivery }));
        fetch('http://87.92.78.131:3000' + '/listings', {
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
        const { navigate } = this.props.navigation;
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>test</Text>
                <Button title="Add a listing" onPress={() => navigate('AddListing')}></Button>
                        <NavigationContainer independent={true}>
                            <Stack.Navigator>
                                <Stack.Screen name="AddListing" component={AddListing} />
                            </Stack.Navigator> 
                        </NavigationContainer>       
                </View>
            );  
    }
}
