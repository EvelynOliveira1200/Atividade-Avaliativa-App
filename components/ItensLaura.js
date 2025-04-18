import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { SquarePlus } from "lucide-react";

export default function ItensLaura({image, text, price}) {
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.text}>{price}</Text>
            <Text style={styles.icon}><SquarePlus/></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        height: 30,
        width: 30,
        borderRadius: 5,
    },
})