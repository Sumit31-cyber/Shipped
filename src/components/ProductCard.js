import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    Alert,
    View,
} from "react-native";
import { db } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";


import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const ProductCard = ({
    quantity,
    setQuantity,
    size,
    color,
    name,
    price,
    image,
    uid,
    brand,
}) => {
    const collectionRef = collection(db, `Order ${uid}`);
    const navigation = useNavigation();
    return (
        <View
            style={{
                height: 130,
                backgroundColor: "rgba(0,0,0,0.1)",
                flexDirection: "row",
                alignItem: "center",
                padding: 12,
                borderRadius: 20,
                marginBottom: 20,
                marginHorizontal: 5,
                marginTop: 5,
            }}
        >
            <View
                style={{
                    height: "100%",
                    width: 100,
                    alignSelf: "center",
                    marginRight: 15,
                }}
            >
                <Image
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 20,
                        alignSelf: "center",
                    }}
                    source={{
                        uri: image,
                    }}
                />
            </View>
            <View
                style={{
                    height: "100%",
                    width: 150,
                    paddingVertical: 5,
                    justifyContent: "center",
                }}
            >
                <Text
                    numberOfLines={2}
                    style={{ fontSize: 15, fontFamily: "Poppins_500Medium" }}
                >
                    {name}
                </Text>
                <Text style={{ color: "grey", fontSize: 18 }}>{price}</Text>
            </View>
            <View style={{ justifyContent: "space-evenly" }}>
                <Pressable
                    onPress={() => {
                        addDoc(collectionRef, {
                            name: name,
                            price: price,
                            image: image,
                            brand: brand,
                            size: size,
                            color: color,
                            quantity: quantity,
                        })
                            .then(() => {
                                navigation.navigate("Tabs");
                            })
                            .catch((error) => console.warn(error.message));
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "rgba(0,0,0,0.4)",
                            height: 30,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 30,
                            marginTop: 20,
                        }}
                    >
                        <Text style={{ color: "#fff" }}> Buy Now</Text>
                    </View>
                </Pressable>
                <View
                    style={{
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <Pressable
                        onPress={() => (quantity === 1 ? null : setQuantity(quantity - 1))}
                    >
                        <AntDesign name="minuscircleo" size={20} color="rgba(0,0,0,0.4)" />
                    </Pressable>
                    <Text
                        style={{
                            marginHorizontal: 15,
                            fontSize: 15,
                            color: "rgba(0,0,0,0.4)",
                            fontFamily: "Poppins_500Medium",
                        }}
                    >
                        {quantity}
                    </Text>
                    <Pressable onPress={() => setQuantity(quantity + 1)}>
                        <AntDesign name="pluscircleo" size={20} color="rgba(0,0,0,0.4)" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};