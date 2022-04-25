import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../../firebaseConfig';
const CustomHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={{ height: 60, backgroundColor: 'white', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
            <Pressable
                onPress={() => authentication.signOut().then(() => navigation.navigate('onBorading'))}
            >
                <AntDesign name="logout" size={24} color="black" style={{ alignSelf: 'center' }} />
            </Pressable>
            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'row', }}>
                <Image source={require('../../assets/images/logo.jpg')} style={{ height: 100, width: 130 }} />
            </View>
            <Pressable onPress={() => navigation.navigate("cart")}>

                <MaterialCommunityIcons name="cart-minus" size={28} color="black" style={{ alignSelf: 'center' }} />
            </Pressable>

        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})