import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	wrapperSearchBar: {
        width: "100%",
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingTop: 5,
        marginBottom: 20,
    },
    statusBar: {
        width: 100,
        backgroundColor: "red",
    },
})

export default styles; 