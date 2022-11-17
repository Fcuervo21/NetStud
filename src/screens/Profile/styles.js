import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    mainContent: {
        backgroundColor: COLORS.background,
        height: "100%",
    },
    topWrapper:{
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    profileWrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    profilePhoto:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        width: 40,
        height: 40,
        backgroundColor: COLORS.secondary,
    },
    profileText:{
        fontSize: 20,
        fontFamily: "PoppinsMedium",
        marginLeft: 10,
    },
    statsUser:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 20,
    },
    statsContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    statsNumber:{
        fontSize: 17,
        fontFamily: "PoppinsMedium",
        color: COLORS.dark,
    },
    statsText:{
        fontSize: 15,
        fontFamily: "PoppinsMedium",
        color: COLORS.secondary,
    },
    separatorVertical:{
        width: 0.3,
        height: 30,
        backgroundColor: "gray"
    },
    separatorHorizontal:{
        width: "100%",
        height: 0.3,
        backgroundColor: "gray",
        marginVertical: 20,

    },
    lottie: {
        width: 100,
        height: 100,
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
        justifyContent: "center",
        alignItems: "center",
    },
    cardBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10,
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
        width: "100%",
        height: 200,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    messageContainer:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    
});

export default styles;