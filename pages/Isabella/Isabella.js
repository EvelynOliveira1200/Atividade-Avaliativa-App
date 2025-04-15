import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from "react-native";

import User from "../../assets/User.jpg"
import CardsIsabella from "../../components/CardsIsabella";
import ProfileIsabella from "./ProfileIsabella";
import FooterIsabella from "../../components/FooterIsabella";

export default function Isabella() {
    const local = [
        { id: "1", local: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQF48sbpNK4_ygNpvdbkM7vk3Uf8VDvD3CA&s"},
        { id: "2", local: "https://www.viajoteca.com/wp-content/uploads/2020/11/RUE-CREMIEUX-2.jpg"},
        { id: "3", local: "https://parisdomeujeito.com/wp-content/uploads/2024/04/img_3048.jpg"},
        { id: "4", local: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkmfpK3zyTRUHwnebe58sD3WdGIUfcg_Oag&s"},
        { id: "5", local: "https://30joursaparis.com.br/wp-content/uploads/2018/03/Novos-angulos-torre-eiffel-champ-de-mars-30jursaparis772-e1520953606265.jpg"},
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={User}></Image>
            <SafeAreaView>
            <ScrollView style={styles.scrollContainer}>
            <FlatList
                style={styles.horizontalList}
                data={local}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { width: cardWidth }]}>
                        <CardsIsabella local={item} onPress={() => navigation.navigate("local", { local: item })} />
                    </View>
                )}
                />
                </ScrollView>
            </SafeAreaView>
            <Text style={styles.containerText}>La Douceur de Paris é uma confeitaria com o foco em doces e comidas tradicionais da França. Revestido e pensado na estética francesa, com o seu aroma de café e doces, acolhe quaquel um que pela porta passar. La Douceur de Paris é um cantinho especial para as almas que desejam descansar, trabalhar com tranquilidade ou ler acompanhado de lanches deliciosos. Aqui você é sempre bem-vindo! 🧁🥐 </Text>
        <TouchableOpacity style={styles.buttonPage} source={ProfileIsabella}>
            <Text style={styles.textButton} onPress={() => navigation.navigate("Isabella")}>Veja o perfil da Dev!</Text>
        </TouchableOpacity>
        <FooterIsabella />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        display: "flex",
        width: "2rem",
        height: "2rem",
        borderRadius: "100%",
        left: 160,
        marginVertical: "0.5rem",
    },
    cardContainer: {
        backgroundColor: '#5E3A27',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    horizontalList: {
        paddingBottom: 30,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    containerText: {
        textAlign: "justify",
        maxWidth: "15rem",
        height: "12rem",
    },
    buttonPage: {
        backgroundColor: "#D4AF9D",
        width: "15rem",
        borderRadius: "1rem",
        marginHorizontal: "5rem",
        marginVertical: "4rem",
        padding: "2rem",
    },
    textButton: {
        textAlign: "center",
    }
})