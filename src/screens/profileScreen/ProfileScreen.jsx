import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Pressable
        onPress={() => navigation.push("order")}
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            padding: 10,
            fontFamily: "Poppins_300Light",
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Orders
        </Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
          style={{ alignSelf: "center" }}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.push("favorite")}
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            padding: 10,
            fontFamily: "Poppins_300Light",
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Favorite
        </Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
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
