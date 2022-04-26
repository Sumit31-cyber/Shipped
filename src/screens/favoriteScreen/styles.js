import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 120,
        width: "100%",
        flexDirection: "row",
        borderRadius: 20,
        marginVertical: 10,
    },
    text: { fontSize: 16, fontFamily: "Poppins_300Light" },
    image: {
        height: "100%",
        width: 120,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
    }

})