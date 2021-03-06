import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 12,
    },
    scrollView: {
        maxHeight: 60,
        marginTop: 10,
        padding: 8,
    },
    cardContainer: {
        marginHorizontal: 8,
        marginVertical: 10,
        height: 250,

        backgroundColor: "#C8C6C6",
        borderRadius: 12,
    },
    imageContainer: {
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 23,
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
    },
    brandTextStyle: {
        color: "white",
        maxWidth: "55%",
        fontSize: 17,
        fontFamily: "Poppins_500Medium",
    },
    priceTextStyle: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
    },
    nameTextStyle: {
        color: "white",
        marginHorizontal: 5,
        fontFamily: "Poppins_400Regular",
        paddingHorizontal: 5,
        textTransform: "capitalize",
    },
    brandTagConatiner: {
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 30,

    },
    brandTagText: {
        fontSize: 15,
        fontFamily: "Poppins_300Light",
        letterSpacing: 1,
        alignSelf: "center",
        color: "white",
    }
})