import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Listings from './Listings';

export default class AllListings extends React.Component {

    constructor(props) {
    super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        console.log('Getting all listings!')
        fetch(this.props.APIuri + '/listings',{
            method: 'GET'
        } )
            .then( response => response.json() )
            .then( json =>{console.log(json.everylisting.map(x => x.userId)); this.setState({items: json.everylisting })})
            ; 
    }
    

  render() {
    return (
      <View style={styles.listingsContainer}>
        <ScrollView>
          <Listings items={ this.state.items }></Listings>
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