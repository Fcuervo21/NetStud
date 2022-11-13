import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    mainContent: {
        backgroundColor: COLORS.background,
        height: "100%",
    },
    wrapperSearchBar: {
        width: "100%",
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingTop: 5,
    },

    // Card styles
    cardWrapper: {
        width: "100%",
        display: "flex",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
    cardContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    cardHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    wrapperTittle: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },

    cardTitle: {
        fontSize: 16,
        color: COLORS.text,
        fontFamily: "PoppinsMedium",
    },
    cardSubtitle: {
        fontSize: 12,
        color: COLORS.secondary,
        fontFamily: "PoppinsRegular",
    },
    cardBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10,
        // gap: 100,
    },
    cardBodyText: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: "PoppinsRegular",
    },
    cardBodyTitle: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: "PoppinsBold",
    },
    image: {
        // backgroundColor: COLORS.secondary,
        width: "100%",
        height: 200,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    bottomPartContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        // paddingRight: 20,
    },
    actionsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        // alignItems: "flex-start",
        justifyContent: "space-evenly",
    },
    // middle:{
    //     paddingHorizontal: 20,
    // },
    likesWrapper: { 
        height: "100%",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    likesText: {
        fontSize: 10,
        color: COLORS.secondary,
        fontFamily: "PoppinsBold",
        paddingRight: 5,
    },
    lottie: {
        width: 100,
        height: 100,
    },
});

export default styles;
