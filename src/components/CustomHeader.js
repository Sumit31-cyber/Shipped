import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
const CustomHeader = () => {
    return (
        <View style={{ height: 60, backgroundColor: 'white', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15 }}>
            <Feather name="more-vertical" size={28} color="black" style={{ alignSelf: 'center' }} />
            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'row', }}>
                <Image source={require('../../assets/images/logo.jpg')} style={{ height: 100, width: 130 }} />
            </View>
            <MaterialCommunityIcons name="cart-minus" size={28} color="black" style={{ alignSelf: 'center' }} />

        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})