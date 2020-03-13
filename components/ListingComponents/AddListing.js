import React, { useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

const AddListing = (props) => {

  const [title, setTitle] = useState("Set title");
  const [description, setDescription] = useState("Set description");  
  const [category, setCategory] = useState("Set your category");  
  const [location, setLocation] = useState("Set your location");   
  const [priceString, setPrice] = useState("Set Price here");  
  const [delivery, setDelivery] = useState("Shipping or Pick-up?");
  const [images, setImages] = useState("null"); 
  
  return (
    <View style={ styles.screen }>        
        <Text style={styles.text}>Add a new listing</Text>

        <View style={ styles.inputView }>
            <TextInput style={ styles.input }
                onChangeText={ value => setTitle(value) }
                value={ title }>
            </TextInput>         

            <TextInput style={styles.input}
                onChangeText={ value => setDescription(value) }
                value={ description }>
            </TextInput>  
            
            <TextInput style={styles.input}
                onChangeText={ value => setCategory(value) }
                value={ category }>
            </TextInput>  

            <TextInput style={styles.input}
                onChangeText={ value => setLocation(value) }
                value={ location }>
            </TextInput>  

            <TextInput style={styles.input}
                onChangeText={ value => setPrice(value) }
                value={ priceString }
                keyboardType='numeric'>
            </TextInput>

            <TextInput style={styles.input}
                onChangeText={ value => setDelivery(value) }
                value={ delivery }>
            </TextInput>    


          <TouchableHighlight onPress={ () => props.onListingAdd(title, description, category, location, images, priceString, delivery) }>
            <View style={styles.add}>
              <Text style={styles.text}>ADD</Text>
            </View>
          </TouchableHighlight>
        </View>   
      </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      backgroundColor: 'rgba(5, 5, 5, 0.85 )',
      flex: 1,
      justifyContent: 'center',
      width: '100%',        
      alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'red'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.6 )',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  add: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 5, 5, 1.0)'
  },
  inputView: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center"
  }
});

export default AddListing