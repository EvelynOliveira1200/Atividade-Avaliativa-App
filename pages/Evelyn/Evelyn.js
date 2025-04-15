import { Image } from "react-native";
import { SafeAreaView, ScrollView, View, TextInput } from "react-native";
import { Search } from "lucide-react";
import Cards from "../../components/CardsEvelyn";

export default function Evelyn() {
  const categorias = [
    {
      id: 1,
      image: require("../../assets/img.jpg"),
      textdescription: "Doces",
    },
    {
      id: 2,
      image: require("../../assets/img.jpg"),
      textdescription: "Doces",
    },
    {
      id: 3,
      image: require("../../assets/img.jpg"),
      textdescription: "Doces",
    },
    {
      id: 4,
      image: require("../../assets/img.jpg"),
      textdescription: "Doces",
    },
  ];

  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Header>
          <TextInput>
            style={style.input}
            placeholder={"Pesquisar"}
            placeholderTextColor="#747474" value={search}
          </TextInput>

          <Search color="rgb(94, 94, 94)" size={48} />
        </Header>

        <ScrollView>
          <FlatList
            data={categorias}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardsContainer}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  imageStyle={{ borderRadius: 10 }}
                />
              </View>
            )}
            style={styles.horizontalList}
          />
        </ScrollView>

        <Cards />


      </View>
    </SafeAreaView>
  );
}
