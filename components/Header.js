import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}></Text>
            </View>
        </View>
    );
}

const HomeStack