import { StyleSheet, View, Image, Text,  } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/profileAlba.jpg")} />
            <Text style={styles.title}>Giovanna Alba Gomes, olá!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        color: "white"
    }
})