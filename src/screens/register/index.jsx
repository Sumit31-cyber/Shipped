import { Image, Pressable, Alert, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles.";
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

import { authentication, db } from "../../../firebaseConfig";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const getRandomUserImage = async () => {
    const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        const docRef = addDoc(collection(db, "users"), {
          email: email,
          userName: name,
          userId: result.user.uid,
        });
        navigation.navigate("signin");
      })
      .catch((error) => Alert.alert(error.message));
    Alert.alert("user created Successfully");
  };

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
        Hi, Welcome
      </Text>
      <Text style={[styles.subTitle, { fontFamily: "Poppins_400Regular" }]}>
        Please Register Yourself
      </Text>
      <View style={styles.textInput}>
        <TextInput
          style={{ width: "100%" }}
          value={name}
          onChangeText={(name) => setName(name)}
          placeholder="User Name"
        />
      </View>
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
      <Pressable onPress={registerUser} style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
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
          Already registered?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("signin")}>
          <Text style={{ color: "#5EAAA8", fontFamily: "Poppins_300Light" }}>
            Signin
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;
