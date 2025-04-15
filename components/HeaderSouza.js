
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/Logo.jpg'

export default function HeaderSouza() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={Logo}/>
            <Text style={styles.title}>La Douceur</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E7D7C9',

    },
    logo:{
        height: 100,
        width: 100,
        borderRadius: 9
    },
    title:{
        color: '#A38F85'
    }
})