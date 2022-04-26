import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.push("Order")}
        style={styles.pressableContainer}
      >
        <Text style={styles.text}>Orders</Text>
        <Feather
          name="check-circle"
          size={24}
          color="rgba(0,0,0,0.5)"
          style={{ alignSelf: "center" }}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.push("Favorite")}
        style={styles.pressableContainer}
      >
        <Text style={styles.text}>Favorite</Text>
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="favorite"
          size={24}
          color="rgba(0,0,0,0.5)"
        />
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
