import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { authentication, db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { set } from "firebase/database";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Pressable
        onPress={() => navigation.push("order")}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", padding: 10 }}>Orders</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.push("favorite")}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", padding: 10 }}>
          Favorite
        </Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: { fontSize: 16, fontFamily: "Poppins_300Light" },
});
