import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { authentication, db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { set } from "firebase/database";

const OrderScreen = () => {
  const [uid, setUid] = useState("");
  const [orders, setOrders] = useState([]);

  const getUserUid = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  };
  const colRef = collection(db, `Order ${uid}`);
  const userData = async () => {
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setOrders(data);
  };

  useEffect(() => {
    getUserUid();
    userData();
  }, [uid]);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
      }}
    >
      <FlatList
        data={orders}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 120,
                width: "100%",
                flexDirection: "row",
                borderRadius: 20,
                marginVertical: 10,
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: 120,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
                resizeMode="cover"
                source={{
                  uri: item.image,
                }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  marginHorizontal: 20,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={styles.text}
                >{`Product: ${item.name}`}</Text>
                <Text style={styles.text}>{`Quantity: ${item.quantity}`}</Text>
                <Text style={styles.text}>{`Color: ${item.color}`}</Text>
                <Text style={styles.text}>{`Price: ${item.price}`}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  text: { fontSize: 16, fontFamily: "Poppins_300Light" },
});
