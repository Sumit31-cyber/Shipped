import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const OnBoarding = () => {
  let [loadFonts] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!loadFonts) {
    return <AppLoading />;
  }
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
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: "#9AD4DA" }]}
        >
          <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: "#EDB8CC" }]}
        >
          <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
