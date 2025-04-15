import { StyleSheet, Image, Text, View } from "react-native";

export default function Card({image, text}) {
    return (
        <View style={styles.card}>
            <Image style={styles.imageCard}>{image}</Image>
            <Text style={styles.textCard}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#A38F85",
        justifyContent: "center",
        flexDirection: "column",
        height: 27,
        width: 15,
        padding: 5,
    },
    image: {
        width: 100,
        height: "15rem",
        borderRadius: "10px 10px 0 0",
        objectFit: "cover"
    }
})