import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions, SafeAreaView } from "react-native";
import Header from "../../components/HeaderGiovanna";
import Card from "../../components/CardsGiovanna";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2;

const banner = [
    { id: 1, image: require('../../assets/doce1.jpg') },
    { id: 2, image: require('../../assets/doce2.jpg') },
    { id: 3, image: require('../../assets/doce3.jpg') },
];

export default function App() {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                
            </ScrollView>

            <Text style={styles.title}>Conheça alguns dos nossos pratos! 🧁</Text>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})