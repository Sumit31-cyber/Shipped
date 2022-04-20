import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import HomeScreen from "./homeScreen";
import LikeScreen from "./likeScreen/LikeScreen";
import CustomHeader from "../components/CustomHeader";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <>
      <CustomHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 16,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#FD5100" : "#323232"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={LikeScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign
                name="hearto"
                size={24}
                color={focused ? "#FD5100" : "#323232"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign
                name="user"
                size={24}
                color={focused ? "#FD5100" : "#323232"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
