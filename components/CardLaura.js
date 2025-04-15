import { View, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export default function CardLaura({image}) {
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={image} />
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