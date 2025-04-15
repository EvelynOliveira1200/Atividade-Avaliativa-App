import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderSouza from '../../components/HeaderSouza';
import CardsAna from '../../components/CardsAna';

export default function AnaBeatriz() {
    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <HeaderSouza/>
            <CardsAna image="https://www.southernliving.com/thmb/dnsycw_-mf35yKRkq3cBsThVzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg" text="Macarons" />
        </View>
    )
}

const styles = StyleSheet.create({
    teste: {
        color: 'blue'
    }
})