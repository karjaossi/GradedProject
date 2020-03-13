import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Listing from './Listing';

const Listings = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.items.map(x => <Listing key={x.id} title={x.title}></Listing>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default Listings