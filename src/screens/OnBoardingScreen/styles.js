import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        borderRadius: 30,
    },
    imageContainer: {
        height: '50%',
        width: '100%',
        paddingVertical: StatusBar.currentHeight,
        paddingHorizontal: 10
    },
    headerText: {
        fontSize: 35,
        textAlign: 'center',
        color: '#10122D'
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingVertical: 30,
        color: '#DFDFDE',
        letterSpacing: 2
    },
    text: {
        fontSize: 15,
        color: 'white',
        padding: 20,
        textAlign: 'center'
    },
    buttonStyle: {
        borderRadius: 20,
        flex: 1,
        margin: 3

    }
})