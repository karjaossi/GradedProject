import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeleteListing from './DeleteListing';

const DeleteListings = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.items.map(x => <DeleteListing 
        key={x.id} 
        title={x.title}
        >
        </DeleteListing>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default DeleteListings