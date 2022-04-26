import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  Dimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { shoesData } from "../../../assets/data";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("All");
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  const [data, setData] = useState(shoesData);

  const filterByBrand = (value) => {
    if (!value.length) setData(shoesData);

    const filterData = shoesData.filter((item) => item.brand.includes(value));
    if (filterData.length) {
      setData(filterData);
    } else {
      setData(shoesData);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollView}
      >
        <BrandTag
          onfilter={() => filterByBrand("₹")}
          name={"All"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Puma")}
          name={"Puma"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Jordan")}
          name={"Jordan"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Nike")}
          name={"Nike"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Adidas")}
          name={"Adidas"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Balenciaga")}
          name={"Balenciaga"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          onfilter={() => filterByBrand("Bata")}
          name={"Bata"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ScrollView>

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
                style={styles.imageContainer}
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
    // </View>
  );
};

const BrandTag = ({ name, onfilter, setActiveTab, activeTab }) => {
  const onTap = () => {
    setActiveTab(name);
    onfilter();
  };
  return (
    <Pressable onPress={onTap}>
      <View
        style={[
          styles.brandTagConatiner,
          { backgroundColor: activeTab === name ? "#F60400" : "#FD5100" },
        ]}
      >
        <Text style={styles.brandTagText}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default HomeScreen;
