import { Image } from 'expo-image'
import { SafeAreaView, View, Text, TextInput, SectionList } from 'react-native'
import { Search } from "lucide-react";
import CardLaura from "../../components/CardLaura"
import ItensLaura from "../../components/ItensLaura"

export default function Laura() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.texts}>
                <Text style={styles.title}>La Douceur</Text>
                <Text style={styles.subtitle}>A melhor doceria do país!</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "center", gap: 10}}>
                <CardLaura image={(require('../../assets/macaron.jpg'))} />
                <CardLaura image={(require('../../assets/cremeBrulee.jpg'))} />
            </View>

            <View style={{flexDirection: "row", justifyContent: "center", gap: 20}}>
                <TextInput style={styles.input} placeholder='Pesquise aqui'></TextInput>
                <Text style={styles.iconSearch}><Search /></Text>
            </View>

            <View style={{flexDirection: "column", justifyContent: "center", gap: 20}}>
                <SectionList>
                    <ItensLaura image={(require('../../assets/milkshakePistache.jpg'))} title='Milkshake de Pistache' price='R$18,00' />
                    <ItensLaura image={(require('../../assets/brownie.jpg'))} title='Brownie' price='R$15,00' />
                    <ItensLaura image={(require('../../assets/cookie.jpg'))} title='Cookie com gotas de chocolate' price='R$8,00' />
                </SectionList>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: 'white',
    },
    texts:{
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

