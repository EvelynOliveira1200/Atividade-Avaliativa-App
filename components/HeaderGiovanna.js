import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Venha conhecer um pouco mais do nosso cardápio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#D4B2A7",
        paddingVertical: 20,
        alignItems: "center"
    },
    titleHeader: {
        fontSize: 25,
        color: "white"
    },
});