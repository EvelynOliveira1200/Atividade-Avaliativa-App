import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Card({foods, onPress}){
    return(
        <TouchableOpacity styles={styles.card}  onPress={onPress}>
            <Image styles={styles.image} source={foods ? foods.foods : "foods"} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet({
    card:{
        borderWidth: 1,
        borderRadius:8,
        padding:10,
        margin:10,
        height:60,
        alignItems: "center",
    },
    foods:{
        width: "3rem",
        height: "2rem"
    }
})

