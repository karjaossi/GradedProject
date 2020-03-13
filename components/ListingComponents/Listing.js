import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Listing = (props) => {
  return (
    <View style={ styles.container }>
      <Entypo name="price-tag" size={40} color="pink"></Entypo>
        <Text style={ styles.titleName}>{ props.title}</Text>
        <Text style={ styles.titleName}>{ props.title}</Text>
        <Text style={ styles.titleName}>{ props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 100,
    width: "100%",
    flex: 1
  },
  titleName: {
    color: 'black',
    fontSize: 25
  },
  artistName: {
    color: 'gray'
  }
})

export default Listing