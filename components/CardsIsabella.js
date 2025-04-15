import { TouchableOpacity, StyleSheet, Image } from "react-native";

export default function CardsIsabella({ local, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} >
        <Image source={local ? candy.local : "local"}/>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#D4B2A7",
        color: "#DACEC2",
        width: "auto",
        margin: 10,
        padding: 10,
        height: 50,
        alignItems: "center",
        border: "1px solid black",
    },
})