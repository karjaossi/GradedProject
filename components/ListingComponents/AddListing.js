import React, { useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, Button } from 'react-native'

const AddListing = (props) => {

  const [title, setTitle] = useState("Example title");
  const [description, setDescription] = useState("Example description");  
  const [category, setCategory] = useState("Example category");  
  const [location, setLocation] = useState("Example location");   
  const [price, setPrice] = useState(21);  
  const [delivery, setDelivery] = useState("Example delivery"); 
  
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-start', marginTop: 30}}>        
        <Text >Add a new listing</Text>

        <View style={{ flexDirection: 'row', height: 40, width: '90%', justifyContent: 'center', marginBottom: 40}}>
            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setTitle(value) }
                value={ title }>
            </TextInput>         

            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setDescription(value) }
                value={ description }>
            </TextInput>  
            
            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setCategory(value) }
                value={ category }>
            </TextInput>  

            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setLocation(value) }
                value={ location }>
            </TextInput>  

            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setPrice(value) }
                value={ price }
                keyboardType='numeric'>
            </TextInput>

            <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
                onChangeText={ value => setDelivery(value) }
                value={ delivery }>
            </TextInput>    


          <TouchableHighlight onPress={ () => props.onListingAdd(title, description, category, location, price, delivery) }>
            <View style={ { flex: 1, backgroundColor: 'blue',} }>
              <Text style={{ color: 'white', padding: 10 }}>Add listing!</Text>
            </View>
          </TouchableHighlight>
        </View>   
      </View>
  )
}

export default AddListing