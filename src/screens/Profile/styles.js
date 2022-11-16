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
});

export default styles;