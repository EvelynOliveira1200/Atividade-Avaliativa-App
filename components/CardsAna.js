import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function Card({image, name}){
    return(
        <TouchableOpacity styles={styles.card}>
            <Image styles={styles.image} source={image} />
            <Text styles={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet({
    card:{
        margin: 20,
        padding: "10rem",
        borderRadius: "2rem",
        backgroundColor: '#b07a7f',
        alignItems: 'center',
        width: "5rem",
    },
    image:{
        width: "3rem",
        height: "2rem"
    }
})

