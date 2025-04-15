import { TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Card({ foods, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} >
        <Image source={foods ? foods.foods : "foods"}/>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#A38F85",
        width: "auto",
        margin: 10,
        padding: 10,
        height: 50,
        alignItems: "center",
    },
})