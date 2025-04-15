import { View, Text, StyleSheet, imageSource, textdescription} from "react-native";

export default function Cards() {
    return(
       <View style={styles.cards}>
        <View style={styles.img}>
            <Image>{imageSource}</Image>
        </View>
        <Text style={styles.text}>{textdescription}</Text>
       </View>
    );
};

const styles = StyleSheet.create({
    cards: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        height: 105,
        borderRadius: 10,
    }
})

