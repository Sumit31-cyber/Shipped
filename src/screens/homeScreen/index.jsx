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
import { data } from "../../../assets/data";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Nike");
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const myDoc = doc(db, "shoes", "Nike");
  //   getDoc(myDoc).then((doc) => {
  //     setData(doc.data());
  //     console.log(data);
  //   });
  // }, []);

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
          name={"Nike"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          name={"Adidas"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          name={"Balenciaga"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          name={"Sketchers"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          name={"Bata"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <BrandTag
          name={"Puma"}
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
                uri: item.image,
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
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Poppins_500Medium",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                {item.price}
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginHorizontal: 5,
                fontFamily: "Poppins_400Regular",
                paddingHorizontal: 5,
              }}
            >
              {item.desc}
            </Text>
          </View>
        )}
      />
    </View>
    // </View>
  );
};

const BrandTag = ({ name, setActiveTab, activeTab }) => {
  return (
    <Pressable onPress={() => setActiveTab(name)}>
      <View
        style={{
          paddingHorizontal: 18,
          paddingVertical: 5,
          borderRadius: 20,
          marginRight: 30,
          backgroundColor: activeTab === name ? "#F60400" : "#FD5100",
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            // alignSelf: "center",
            fontFamily: "Poppins_300Light",
            letterSpacing: 1,
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
