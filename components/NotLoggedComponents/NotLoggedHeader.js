import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Login from '../LoginComponents/Login';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class NotLoggedHeader extends React.Component {

    render(){
        return (
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}/>
          <View style={styles.container}>
            <Login apiURI='http://85.23.62.54:3000'></Login>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
});