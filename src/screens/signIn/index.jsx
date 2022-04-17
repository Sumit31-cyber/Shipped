import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const SignInScreen = () => {
  const [visible, setVisible] = useState(true);

  let [loadFonts] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { fontFamily: "Poppins_600SemiBold" }]}>
        Hello Again!
      </Text>
      <Text style={[styles.subTitle, { fontFamily: "Poppins_400Regular" }]}>
        Welcome back you've been missed!
      </Text>
      <TextInput style={styles.textInput} placeholder="Email Address" />

      <TextInput
        secureTextEntry={visible}
        style={styles.textInput}
        placeholder="Password"
      />
      <Pressable onPress={() => setVisible(!visible)} style={styles.icon}>
        <FontAwesome5 name="eye-slash" size={20} color="#E6E9F1" />
      </Pressable>
      <Text style={[styles.recoveryPassword, { textAlign: "right" }]}>
        Recovery Password
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <View
        style={{
          justifyContent: "space-evenly",
          marginTop: 55,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.border}></View>
        <Text style={styles.smallText}>or continue with</Text>
        <View style={styles.border}></View>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable>
          <Image
            style={styles.icons}
            source={require("../../../assets/logo/google.png")}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.icons}
            source={require("../../../assets/logo/apple.png")}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.icons}
            source={require("../../../assets/logo/facebook.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.recoveryPassword, { textAlign: "center" }]}>
        Not A Member? <Text style={{ color: "#5EAAA8" }}>Register now</Text>
      </Text>
    </View>
  );
};

export default SignInScreen;
