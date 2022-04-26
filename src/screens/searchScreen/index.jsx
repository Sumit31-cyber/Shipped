import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { shoesData } from "../../../assets/data";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const SearchScreen = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const filterByBrand = (value) => {
    if (!value.length) {
      setData(null);
    }

    const filterData = shoesData.filter((item) => item.brand.includes(value));
    if (filterData.length) {
      setData(filterData);
    } else {
      Alert.alert("No Item Found");
      setData(null);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textImputStyle}
          value={search}
          placeholder="Search"
          onChangeText={(value) => setSearch(value)}
        />
        <Pressable
          onPress={() => filterByBrand(search)}
          style={styles.searchIconContainer}
        >
          <AntDesign
            name="search1"
            size={18}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </Pressable>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignSelf: "center",
        }}
        style={{
          marginBottom: 70,
        }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("detail", { item })}>
            <View style={[styles.cardContainer, { width: width / 2.3 }]}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image[0],
                }}
                resizeMode="cover"
              />
              <View style={styles.detailContainer}>
                <Text numberOfLines={1} style={styles.brandTextStyle}>
                  {item.brand}
                </Text>
                <Text style={styles.priceTextStyle}>{item.price}</Text>
              </View>
              <Text numberOfLines={1} style={styles.nameTextStyle}>
                {item.name}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default SearchScreen;
