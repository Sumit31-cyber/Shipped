import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 20,
        backgroundColor: '#E6E9F1'
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
        paddingVertical: 20,
        color: 'black',
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
    },
    textInput: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 30,
        padding: 18,
        fontSize: 15,
        fontFamily: 'Poppins_300Light',
        borderRadius: 20,
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 50,
    },
    recoveryPassword: {

        marginTop: 20,
        color: 'grey',
        fontFamily: 'Poppins_300Light',
    },
    button: {
        backgroundColor: '#93CCD1',
        padding: 18,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        letterSpacing: 1.5,
        fontFamily: 'Poppins_300Light',
    },
    smallText: {
        color: '#334257',
        fontFamily: 'Poppins_100Thin'
    },
    border: { backgroundColor: "#787A91", width: 100, height: 0.5 },
    icons: {
        height: 40,
        width: 40
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
        marginBottom: 15,
        marginTop: 5
    }
})