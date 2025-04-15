import React from 'react';
import { View, Text, TextInput, SectionList, FlatList } from 'react-native'
import CardLaura from "../../components/CardLaura"
import ItensLaura from "../../components/ItensLaura"

const icons = ['🍦', '🍪', '🍫', '🧁', '☕']

export default function Laura({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.texts}>
                <Text style={styles.title}>La Douceur</Text>
                <Text style={styles.subtitle}>A melhor doceria do país!</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                <CardLaura image={(require('../../assets/macaron.jpg'))} />
                <CardLaura image={(require('../../assets/cremeBrulee.jpg'))} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                <TextInput style={styles.input} placeholder='Pesquise aqui'></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate("LauraProfile")} >
                <Text style={styles.search}>Navegar</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column", justifyContent: "center", gap: 10 }}>
                <SectionList>
                    <ItensLaura image={(require('../../assets/milkshakePistache.jpg'))} title='Milkshake de Pistache' price='R$18,00' />
                    <ItensLaura image={(require('../../assets/brownie.jpg'))} title='Brownie' price='R$15,00' />
                    <ItensLaura image={(require('../../assets/cookie.jpg'))} title='Cookie com gotas de chocolate' price='R$8,00' />
                </SectionList>
            </View>

            <View style={{ flexDirection: "column", justifyContent: "center", gap: 10 }}>
                <FlatList
                    data={icons}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: 'white',
    },
    texts: {
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5e3a27',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#5e3a27',
    }
})

