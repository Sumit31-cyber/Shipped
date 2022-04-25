import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Alert,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";

import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { authentication, db } from "../../../firebaseConfig";

const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [uid, setUid] = useState("");
  const [cartItem, setCartItem] = useState([]);

  const getUserUid = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  };

  useEffect(() => {
    getUserUid();
    userData();
  }, [uid]);

  const userData = async () => {
    const colRef = collection(db, `Cart ${uid}`);

    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setCartItem(data);
  };
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartItem}
        renderItem={({ item }) => {
          return (
            <ProductCard
              name={item.name}
              quantity={quantity}
              setQuantity={setQuantity}
              image={item.image}
              price={item.price}
              id={item.id}
              size={item.size}
              color={item.color}
              brand={item.brand}
              uid={uid}
            />
          );
        }}
      />
    </View>
  );
};

export default CartScreen;
