import { Image } from "react-native";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput } from "react-native";
import { Icon } from 'lucide-react';
import { Search } from "lucide-react";


export default function HomeScreen({ navigation }) {
    const screenWidth = Dimensions.get("window").width;
    
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Header>
                    <TextInput>
                        style={style.input}
                        placeholder={"Pesquisar"}
                        placeholderTextColor="#747474"
                        value={search}
                    </TextInput>

                    <Search color="rgb(94, 94, 94)" size={48}/>
                </Header>

                <ScrollView>
                    <Text>Teste Evelyn</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

