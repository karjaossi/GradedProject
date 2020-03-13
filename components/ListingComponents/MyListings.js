import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AddListing from '../ListingComponents/AddListing'
import DeleteListings from '../ListingComponents/DeleteListings'
import { Base64 } from 'js-base64';

const Stack = createStackNavigator();

// We were trying to make a page where you can delete and modify postings
// But at the end we can just list them all here but can't do those tasks.

// In the future we need to build better features for API aswell.

export default class MyListings extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                myitems: []
            };
        }

    componentDidMount() {
        console.log('Getting all listings!')
        fetch(this.props.APIuri + '/listings',{
            method: 'GET'
        } )
            .then( response => response.json() )
            .then( json =>{console.log(json.everylisting.map(x => x.userId));console.log(Base64.decode(this.props.activeJWT)); this.setState({myitems: json.everylisting })}); 
    }

    onListingAdd = (title, description, category, location, price, delivery) => {
        console.log(JSON.stringify({ title, description, category, location, price, delivery }));
        fetch(this.props.APIuri + '/listings', {
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
                <View style={styles.listingsContainer}>
                    <ScrollView>
                        <DeleteListings items={ this.state.myitems } ></DeleteListings>   
                    </ScrollView> 
                </View>
            );  
    }
}

const styles = StyleSheet.create({
    listingsContainer: {
       backgroundColor: 'rgba(5, 5, 5, 0.85 )',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
  })
