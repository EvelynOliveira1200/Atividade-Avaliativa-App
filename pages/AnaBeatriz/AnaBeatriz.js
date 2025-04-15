import React from 'react';
import { View, StyleSheet, SafeAreaView,  ScrollView, FlatList, SectionList, Dimensions  } from 'react-native';
import HeaderSouza from '../../components/HeaderSouza';
import CardsAna from '../../components/CardsAna';
import Section from '../../components/SectionAna'

export default function AnaBeatriz() {
    const foods = [
        {id: '1', foods:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg",},
        {id: '2', foods:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg"},
        {id: '3', foods:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg"}
    ]

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <View styles={styles.container}>
            <HeaderSouza />
        <SafeAreaView>
            <ScrollView style={styles.scrollContainer}>
                <FlatList
                style={styles.horizontalList}
                data={foods}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>(
                    <View style={[styles.cardContainer, {width: cardWidth}]}>
                       <CardsAna foods={item} onPress={() => navigation.navigate("foods", { foods: item })} />
                    </View>
                )}
                />
            </ScrollView>
        </SafeAreaView>
        <Section text="Seja bem vindo a nossa confeitaria! Esteja pronto para apreciar os melhores doces de toda região, venha conhecer um pedacinho do paraíso de Paris!"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        
    },
    image: {
        width: "2rem",
        height: "2rem",
        borderRadius: "100%",
    },
    title: {
        color: "black",
    },
    cardContainer: {
        backgroundColor: '#D4B2A7',
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
        maxWidth: "10rem",
        height: "12rem"
    },
})