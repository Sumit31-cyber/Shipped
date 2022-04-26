import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 12,
    },
    searchContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        height: 60,
        borderRadius: 50,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flexDirection: "row",
        marginBottom: 20,
    },
    textImputStyle: {
        fontSize: 18,
        fontFamily: "Poppins_300Light",
        flex: 1,
    },
    searchIconContainer: {
        alignSelf: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
    },
    cardContainer: {
        marginHorizontal: 8,
        marginVertical: 10,
        height: 250,
        backgroundColor: "#C8C6C6",
        borderRadius: 12,
    },
    image: {
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
})