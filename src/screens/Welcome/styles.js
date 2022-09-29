import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

const styles = StyleSheet.create({
	linearGradient: {
		height: "100%",
		width: "100%",
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingTop: 50,
		paddingBottom: 50,
	},
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
	},
	slogan: {
		color: "rgba(246, 240, 234, 0.69)",
		fontStyle: "italic",
		fontFamily: "PoppinsRegular",
	},
	button: {
		width: 300,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 45,
		padding: 15,
	},
	textButton: {
		color: COLORS.white,
		fontFamily: "PoppinsRegular",
		fontSize: 16,
	},
	noAccount: {
		marginTop: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	text: {
		fontFamily: "PoppinsRegular",
	},
});

export default styles;