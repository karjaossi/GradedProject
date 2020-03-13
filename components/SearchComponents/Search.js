import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount() {
    console.log('Getting all listings!')
    fetch(this.props.APIuri + '/listings',{
        method: 'GET'
    } )
        .then( response => response.json() )
        .then( json =>{console.log(json.everylisting); this.setState({search: json.everylisting })}); 
}

  render() {
    const { search } = this.state;

    return (
      <View>
      <SearchBar style={ styles.searchBar }
        placeholder="Search here..."
        onChangeText={this.updateSearch}
        value={search}
      />
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
})