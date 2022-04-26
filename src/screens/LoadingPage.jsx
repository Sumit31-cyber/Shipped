import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { authentication } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const LoadingPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Tabs");
      } else {
        navigation.navigate("onBorading");
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        style={{ height: 200, width: 200 }}
        source={require("../../assets/images/logo2.jpg")}
      />
      <LottieView
        source={require("../../assets/loading.json")}
        autoPlay
        loop
        style={{ marginTop: 100 }}
      />
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({});
