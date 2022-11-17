import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    mainContent: {
        backgroundColor: COLORS.background,
        height: "100%",
    },
    NoContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    NoContentText: {
        fontSize: 17,
        fontFamily: "PoppinsMedium",
        color: COLORS.dark,
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
    lottie: {
        width: 100,
        height: 100,
    },
});

export default styles;
