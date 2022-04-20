import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import CustomHeader from "../../components/CustomHeader";

const data = [
  {
    id: "1",
    name: "Jorden",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
    desc: "Russell Westbrook is fast. The Jordan Why Not .5 helps keep him contained with updated cushioning, data-informed traction and a full-foot fit system that keeps him in control. It has the rugged utility look of a trail running shoe combined with the on-purpose clash of colours and materials at the core of Why Not?",
    price: "$200",
  },
];

const HomeScreen = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const myDoc = doc(db, "shoes", "Nike");
  //   getDoc(myDoc).then((doc) => {
  //     setData(doc.data());
  //     console.log(data);
  //   });
  // }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          maxHeight: 60,
          marginTop: 10,
          padding: 8,
        }}
      >
        <BrandTag name={"Nike"} />
        <BrandTag name={"Adidas"} />
        <BrandTag name={"Balenciaga"} />
        <BrandTag name={"Sketchers"} />
        <BrandTag name={"Bata"} />
        <BrandTag name={"Puma"} />
      </ScrollView>
    </View>
  );
};

const BrandTag = ({ name }) => {
  return (
    <Text
      style={{
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 20,
        fontSize: 15,
        backgroundColor: "#FD5100",
        marginRight: 30,
        alignSelf: "center",
        fontFamily: "Poppins_300Light",
        letterSpacing: 1,
        color: "white",
      }}
    >
      {name}
    </Text>
  );
};

export default HomeScreen;
