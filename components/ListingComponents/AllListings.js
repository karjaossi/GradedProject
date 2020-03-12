import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class AllListings extends React.Component {

    constructor(props) {
    super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        console.log('Getting all listings!')
        fetch( 'http://87.92.115.240:3000' + '/listings',{
            method: 'GET'
        } )
            .then( response => response.json() )
            .then( json =>{console.log(json); /*this.setState({items: json.everylisting })*/}); 
    }
    

  render() {
    return (
      <View style={styles.listingsContainer}>
        <Text>Placeholder</Text>
        <Text>{this.state.items}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listingsContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  },
})