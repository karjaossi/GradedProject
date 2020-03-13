import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Listing = (props) => {
  return (
    <View style={ styles.container }>
      <Entypo name="price-tag" size={100} color="red"></Entypo>
            <Text style={ styles.titleName}>{ props.title}</Text>
            <Text style={ styles.descriptionName}>{ props.description}{'\n'}</Text>
            <Text style={ styles.descriptionName}>{ props.category}</Text>
            <Text style={ styles.descriptionName}>{ props.location}</Text>
            <Text style={ styles.descriptionName}>{ props.seller}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    width: "90%",
    flex: 1,
    flexWrap: 'wrap'
  },
  titleName: {
    color: 'red',
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold'
  },
  descriptionName: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    flexWrap: 'wrap'
  }
  
})

export default Listing