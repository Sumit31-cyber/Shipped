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
} from "react-native";
import React, { useEffect, useState } from "react";
import { shoesData } from "../../../assets/data";

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
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 12,
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          maxHeight: 60,
          marginTop: 10,
          padding: 8,
        }}
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
        {/* <BrandTag
          onfilter={() => filterByBrand("Sketchers")}
          name={"Sketchers"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        <BrandTag
          onfilter={() => filterByBrand("Bata")}
          name={"Bata"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ScrollView>

      {/* <View
        style={{
          alignItems: "center",
          marginBottom: 90,
        }}
      > */}
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
            <View
              style={{
                marginHorizontal: 8,
                marginVertical: 10,
                height: 250,
                width: width / 2.3,
                backgroundColor: "#C8C6C6",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  height: 180,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 23,
                }}
                source={{
                  uri: item.image[0],
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  alignItems: "center",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: "white",
                    maxWidth: "55%",
                    fontSize: 17,
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  {item.brand}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  {item.price}
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  color: "white",
                  marginHorizontal: 5,
                  fontFamily: "Poppins_400Regular",
                  paddingHorizontal: 5,
                  textTransform: "capitalize",
                }}
              >
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
        style={{
          paddingHorizontal: 18,
          paddingVertical: 5,
          borderRadius: 20,
          marginRight: 30,
          backgroundColor: activeTab === name ? "#F60400" : "#FD5100",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins_300Light",
            letterSpacing: 1,
            alignSelf: "center",
            color: "white",
          }}
        >
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default HomeScreen;
