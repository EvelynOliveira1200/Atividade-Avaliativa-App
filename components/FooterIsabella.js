import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/Logo.jpg'

export default function FooterIsabella() {
    return (
        <View style={styles.footer}>
            <Image style={styles.logo} source={Logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#5E3A27',
        width: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        padding: "1rem",
        borderRadius: "2rem",
    },
    logo:{
        height: 100,
        width: 100,
        borderRadius: 9
    },
})