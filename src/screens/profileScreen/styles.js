import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "white" },
    pressableContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: "black",
        padding: 10,
        fontFamily: "Poppins_300Light",
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
})