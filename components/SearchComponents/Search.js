import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Listings from '../ListingComponents/Listings';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
        this.state = {
            items: [],
            search: ''
        };
    }

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount() {
    console.log('Getting all listings!')
    fetch(this.props.APIuri + '/listings',{
        method: 'GET'
    } )
        .then( response => response.json() )
        .then( json =>{console.log(json.everylisting); this.setState({items: json.everylisting })}); 
}

  render() {
    const { search } = this.state;

    return (
      <View style={styles.listingsContainer}>
        <SearchBar style={ styles.searchBar }
          placeholder="Search here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView>
          <Listings items={ this.state.items }></Listings>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
      width: '100%',
      height: '100%',
      justifyContent: 'center'
  },
  listingsContainer: {
    backgroundColor: 'rgba(5, 5, 5, 0.85 )',
     width: '100%',
     height: '100%',
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
 }
})