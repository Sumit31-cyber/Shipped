import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    imageContainerView: {
        height: "50%",
        backgroundColor: "#C0D8C0",
    },
    imageContainer: {
        height: "100%",
        borderBottomRightRadius: 80,
        backgroundColor: "#F6F6F6",
    },
    indicator: {
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    brandBadge: {
        position: "absolute",
        paddingHorizontal: 12,
        paddingVertical: 8,
        letterSpacing: 2,
        backgroundColor: "rgba(0,0,0,0.3)",
        position: "absolute",

        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    brandText: {
        fontSize: 14,
        textAlign: "center",
        color: "white",
        fontFamily: "Poppins_500Medium",
        marginLeft: 8,
    },
    detailContainer: {
        backgroundColor: "#C0D8C0",
        flex: 1,
        borderTopLeftRadius: 50,
        paddingLeft: 25,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    detailText: {
        fontSize: 18,
        color: "rgba(256,256,256,0.8)",
        fontFamily: "Poppins_500Medium",
        letterSpacing: 2,
        marginVertical: 10,
    },
    sizeText: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        color: "rgba(256,256,256,0.8)",
        letterSpacing: 2,
        marginVertical: 5,
        alignSelf: 'center',
        marginRight: 40,
    },
    colorText: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        letterSpacing: 2,
        marginVertical: 5,
        color: "rgba(256,256,256,0.8)",
        marginRight: 30,
    },
    cartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-end",
        marginTop: "auto",
    },
    priceText: {
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
        letterSpacing: 2,
        marginVertical: 5,
        marginRight: 40,
        alignSelf: "center",
        color: "white",
    },
    cartText: {
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins_400Regular",
        letterSpacing: 0.5,
    },
    sizeSelectionBox: {

        marginRight: 10,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 15,
        justifyContent: "center",
    },
    colorSelectionBox: {
        marginRight: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignSelf: "center",
    }

})