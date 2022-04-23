import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const DetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState(6);
  const [selectedColor, setSelectedColor] = useState("skyblue");
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.item;
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "50%",

          backgroundColor: "#C0D8C0",
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            borderBottomRightRadius: 80,
            height: "100%",
          }}
          source={{
            uri: data.image,
          }}
        />
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "red",
            position: "absolute",
            paddingHorizontal: 12,
            paddingVertical: 8,
            letterSpacing: 2,
            backgroundColor: "rgba(0,0,0,0.3)",
            position: "absolute",
            top: 20,
            left: 10,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={24}
            color="white"
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "white",
              fontFamily: "Poppins_500Medium",
              marginLeft: 8,
            }}
          >
            {data.brand}
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#C0D8C0",
          flex: 1,
          borderTopLeftRadius: 50,
          paddingLeft: 25,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_500Medium",
              textAlign: "center",
              letterSpacing: 2,
              color: "rgba(256,256,256,0.8)",
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "rgba(256,256,256,0.8)",
              fontFamily: "Poppins_500Medium",
              letterSpacing: 2,
              marginVertical: 10,
            }}
          >
            Details
          </Text>

          <Text
            numberOfLines={3}
            style={{
              fontSize: 13,
              color: "rgba(256,256,256,256)",
              fontFamily: "Poppins_200ExtraLight",
              marginBottom: 10,
            }}
          >
            {data.details}
          </Text>

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_500Medium",
                color: "rgba(256,256,256,0.8)",
                letterSpacing: 2,
                marginVertical: 5,
                marginRight: 40,
              }}
            >
              Size
            </Text>
            <View style={{ flexDirection: "row" }}>
              <SizeBadge
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_500Medium",
                letterSpacing: 2,
                marginVertical: 5,
                color: "rgba(256,256,256,0.8)",
                marginRight: 30,
              }}
            >
              Color
            </Text>
            <View style={{ flexDirection: "row" }}>
              <ColorBadge
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_700Bold",
              letterSpacing: 2,
              marginVertical: 5,
              marginRight: 40,
              alignSelf: "center",
              color: "white",
            }}
          >
            {data.price}
          </Text>
          <View
            style={{
              height: 50,
              width: 200,
              backgroundColor: "black",
              borderRadius: 100,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontFamily: "Poppins_400Regular",
                letterSpacing: 0.5,
              }}
            >
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SizeBadge = ({ selectedSize, setSelectedSize }) => {
  const size = [6, 7, 8, 9];

  return size.map((item, index) => {
    const onTap = () => {
      setSelectedSize(item);
    };
    return (
      <Pressable
        onPress={onTap}
        style={{
          height: selectedSize === item ? 50 : 40,
          width: selectedSize === item ? 50 : 40,
          marginRight: 10,
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 15,
          backgroundColor: selectedSize === item ? "red" : "#FD5100",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          {item}
        </Text>
      </Pressable>
    );
  });
};

const ColorBadge = ({ selectedColor, setSelectedColor }) => {
  const size = [
    { name: "skyblue", color: "#2FA4FF" },
    { name: "green", color: "#B4E197" },
    { name: "white", color: "#fff" },
    { name: "black", color: "black" },
  ];

  return size.map((item, index) => {
    const onTap = () => {
      setSelectedColor(item.name);
    };
    return (
      <Pressable
        onPress={onTap}
        style={{
          height: selectedColor === item.name ? 40 : 30,
          width: selectedColor === item.name ? 40 : 30,
          marginRight: 10,
          borderRadius: 50,
          backgroundColor: item.color,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></Pressable>
    );
  });
};

export default DetailScreen;

// <View
// style={{
//   backgroundColor: "red",
//   position: "absolute",
//   height: "55%",
//   width: "100%",
//   bottom: -40,
//   paddingLeft: 40,
//   paddingRight: 40,
// }}
// >
//
// </View>
