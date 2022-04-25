import {
  Image,
  Pressable,
  Animated,
  Text,
  View,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  Alert,
} from "react-native";
import { authentication, db } from "../../../firebaseConfig";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { addDoc, collection } from "firebase/firestore";

const DetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState(6);
  const [selectedColor, setSelectedColor] = useState("mud");
  const [liked, setLiked] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [uid, setUid] = useState("");
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    getUserUid();
  }, []);

  const route = useRoute();
  const data = route.params?.item;

  const getUserUid = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  };

  const collectionRef = collection(db, `Cart ${uid}`);
  const likeColRef = collection(db, `Like ${uid}`);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainerView}>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled={true}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            showsHorizontalScrollIndicator={false}
            style={{ height: "100%" }}
          >
            {data.image.map((item, index) => (
              <Image
                resizeMode="contain"
                style={{
                  width: Dimensions.get("window").width,
                  borderRadius: 20,
                }}
                source={{ uri: item }}
              />
            ))}
          </ScrollView>
          <View style={styles.indicator}>
            {data.image.map((item, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const WIDTH = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={index}
                  style={{
                    height: 10,
                    width: WIDTH,
                    backgroundColor: "#C0D8C0",
                    marginLeft: 5,
                    borderRadius: 10,
                  }}
                ></Animated.View>
              );
            })}
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={[styles.brandBadge, { top: 20, left: 10 }]}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={24}
            color="white"
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.brandText}>{data.brand}</Text>
        </Pressable>

        <Pressable
          style={[styles.brandBadge, { top: 20, right: 10 }]}
          onPress={() => {
            addDoc(likeColRef, {
              name: data.name,
              price: data.price,
              image: data.image[0],
              brand: data.brand,
              size: selectedSize,
              color: selectedColor,
              uid: uid,
            })
              .then(() => {
                setLiked(true);
              })
              .catch((error) => console.warn(error.message));
          }}
        >
          <MaterialIcons
            name="favorite"
            size={24}
            color={liked ? "red" : "white"}
          />
        </Pressable>
      </View>
      <View style={styles.detailContainer}>
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
          <Text style={styles.detailText}>Details</Text>

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
            <Text style={styles.sizeText}>Size</Text>
            <View style={{ flexDirection: "row" }}>
              <SizeBadge
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text style={styles.colorText}>Color</Text>
            <View style={{ flexDirection: "row" }}>
              <ColorBadge
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.cartContainer}>
          <Text style={styles.priceText}>{data.price}</Text>
          <Pressable
            onPress={() => {
              addDoc(collectionRef, {
                name: data.name,
                price: data.price,
                image: data.image[0],
                brand: data.brand,
                size: selectedSize,
                color: selectedColor,
                uid: uid,
              })
                .then(() => {
                  navigation.navigate("cart");
                })
                .catch((error) => console.warn(error.message));
            }}
          >
            <View
              style={{
                height: 50,
                width: 200,
                backgroundColor: "black",
                borderRadius: 100,
                justifyContent: "center",
              }}
            >
              <Text style={styles.cartText}>Add to Cart</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const SizeBadge = ({ selectedSize, setSelectedSize, scrollX }) => {
  const size = [6, 7, 8, 9];

  return size.map((item, index) => {
    const onTap = () => {
      setSelectedSize(item);
    };
    return (
      <Pressable
        onPress={onTap}
        style={[
          styles.sizeSelectionBox,
          {
            height: selectedSize === item ? 50 : 40,
            width: selectedSize === item ? 50 : 40,
            backgroundColor:
              selectedSize === item ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)",
          },
        ]}
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
    { name: "mud", color: "#8EA6B4" },
    { name: "grey", color: "#DDDDDD" },
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
        style={[
          styles.colorSelectionBox,
          {
            height: selectedColor === item.name ? 40 : 30,
            width: selectedColor === item.name ? 40 : 30,
            backgroundColor: item.color,
          },
        ]}
      ></Pressable>
    );
  });
};

export default DetailScreen;
