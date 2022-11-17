import { StyleSheet } from "react-native";
import {COLORS} from "../../constants/theme";

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
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
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
    profilePhoto:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        width: 40,
        height: 40,
        backgroundColor: COLORS.secondary,
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
    cardBody:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10,
        gap: 100,
    },
    cardBodyText: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: "PoppinsLight",
    },
    image:{
        // backgroundColor: "rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginVertical: 20,
    },
    textInImage: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: "PoppinsLight",
        textAlign: "center",
    },
    input:{
        // backgroundColor: "red",
        padding: 10,
        fontStyle: "italic",
    },
    inputTitle:{
        // backgroundColor: "red",
        padding: 10,
        fontFamily: "PoppinsBold",
    },
    button: {
		width: 300,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 45,
		padding: 15,
	},
    textButton:{
        color: "white",
        fontFamily: "PoppinsRegular",
    }
})

export default styles; 