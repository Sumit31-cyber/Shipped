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
import { useRoute } from "@react-navigation/native";

const DetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState(6);
  const [selectedColor, setSelectedColor] = useState("skyblue");
  const route = useRoute();
  const data = route.params?.item;
  return (
    <View style={styles.container}>
      <View style={{ height: "55%" }}>
        <Image
          resizeMode="cover"
          style={{
            height: "90%",
          }}
          source={{
            uri: data.image,
          }}
        />
        <View
          style={{
            backgroundColor: "#C0D8C0",
            // position: "absolute",
            height: "200%",
            top: -50,
            width: "230%",
            alignSelf: "center",
            borderTopLeftRadius: 500,
            borderTopRightRadius: 500,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "#C0D8C0",
          position: "absolute",
          height: "55%",
          width: "100%",
          bottom: -40,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
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
            fontSize: 14,
            width: 120,
            textAlign: "center",
            borderRadius: 50,
            backgroundColor: "rgba(0,0,0,0.3)",
            paddingHorizontal: 12,
            paddingVertical: 8,
            fontFamily: "Poppins_500Medium",
            letterSpacing: 2,
            marginBottom: 12,
            color: "white",
          }}
        >
          {data.brand}
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
        <View style={{ flexDirection: "row", marginTop: 25 }}>
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

  return size.map((item) => {
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

  return size.map((item) => {
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
