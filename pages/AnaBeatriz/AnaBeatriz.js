import React from 'react';
import { View, StyleSheet, SafeAreaView,  ScrollView, FlatList, SectionList, Dimensions  } from 'react-native';
import HeaderSouza from '../../components/HeaderSouza';
import CardsAna from '../../components/CardsAna';

export default function AnaBeatriz() {
    const foods = [
        {id: '1', image:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg",},
        {id: '1', image:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg"},
        {id: '1', image:"https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg"}
    ]

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <View styles={styles.allpage}>
            <HeaderSouza />
        <SafeAreaView style={styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        paddingTop: 20,
        width:2
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: 'rgb(183, 252, 99)',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    horizontalList: {
        paddingBottom: 30,
    }
})