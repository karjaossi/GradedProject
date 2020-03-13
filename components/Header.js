import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';



export default function Header(){
    
    return(
        <View >
            <View style={styles.header}>
                <Text style={styles.headerText}>MARKETPLACE</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        letterSpacing: 4
    }
})