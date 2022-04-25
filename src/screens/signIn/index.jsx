import { Image, Pressable, Text, TextInput, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

// import {
//   Poppins_100Thin,
//   Poppins_200ExtraLight,
//   Poppins_300Light,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";

import { useNavigation } from "@react-navigation/native";

// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../firebaseConfig";

const SignInScreen = () => {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let [loadFonts] = useFonts({
  //   Poppins_100Thin,
  //   Poppins_200ExtraLight,
  //   Poppins_300Light,
  //   Poppins_400Regular,
  //   Poppins_500Medium,
  //   Poppins_600SemiBold,
  //   Poppins_700Bold,
  // });

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        console.log("Successful");
        navigation.navigate("Tabs");
      })
      .catch((error) => Alert.alert(error.message));
  };

  const navigation = useNavigation();

  // if (!loadFonts) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { fontFamily: "Poppins_600SemiBold" }]}>
        Hello Again!
      </Text>
      <Text style={[styles.subTitle, { fontFamily: "Poppins_400Regular" }]}>
        Welcome back you've been missed!
      </Text>
      <View style={styles.textInput}>
        <TextInput
          style={{ width: "100%" }}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email Address"
        />
      </View>

      <View
        style={[
          styles.textInput,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <TextInput
          style={{ width: "90%" }}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={visible}
          placeholder="Password"
        />
        <Pressable onPress={() => setVisible(!visible)} style={{}}>
          <FontAwesome5 name="eye-slash" size={20} color="grey" />
        </Pressable>
      </View>

      <Text style={[styles.recoveryPassword, { textAlign: "right" }]}>
        Recovery Password
      </Text>
      <Pressable onPress={signInUser} style={styles.button}>
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
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "grey", fontFamily: "Poppins_300Light" }}>
          Not a member?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#5EAAA8", fontFamily: "Poppins_300Light" }}>
            Register Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
