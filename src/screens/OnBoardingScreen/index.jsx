import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { authentication } from "../../../firebaseConfig";

import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://i.pinimg.com/originals/64/00/89/640089d1f35ec8f57b5178d0238588b5.png",
          }}
        />
      </View>
      <Text style={[styles.headerText, { fontFamily: "Poppins_500Medium" }]}>
        Discover Trendy New Shoes.
      </Text>
      <Text style={[styles.subTitle, { fontFamily: "Poppins_300Light" }]}>
        All Brands Available Find What Suites You Best. Confort Your Foor With
        Our Shoes
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          padding: 10,
          paddingBottom: 30,
          marginTop: "auto",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("register");
          }}
          style={[styles.buttonStyle, { backgroundColor: "#9AD4DA" }]}
        >
          <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("signin");
          }}
          style={[styles.buttonStyle, { backgroundColor: "#EDB8CC" }]}
        >
          <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoarding;
