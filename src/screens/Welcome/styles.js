import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
	linearGradient: {
		height: "100%",
		width: "100%",
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingTop: 25,
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
	textLogin: {
		color: COLORS.dark,
		// fontFamily: "PoopinsBold",
		fontSize: 30,
		fontWeight: "bold",
		paddingBottom: 10,
		justifyContent: "left",
		alignItems: "left",
	},

	textBienvenido: {
		color: "rgba(14, 42, 85, 1)",
		fontFamily: "PoppinsRegular",
		fontSize: 20,
		justifyContent: "left",
		alignItems: "left",
	},

	LoginInputs: {
		width: "100%",
		height: 60,
		borderColor: "rgba(52, 75, 110, 1)",
		borderWidth: 2,
		borderRadius: 15,
		padding: 15,
		fontSize: 16,
		marginBottom: 20
	},

	backgroundCard: {
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 25,
		borderTopLeftRadius: '40px',
		borderTopRightRadius: '40px',
		backgroundColor: COLORS.navback,
        zIndex: 1, // works on ios
        elevation: 1, // works on android
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
	

	noPassword: {
		fontSize: 14,
		marginBottom: 20,
		color: "rgba(14, 42, 85, 1)",
	},
    containerAvoiding: {
        flex: 1,
    },
	wrapperTop:{
		display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
	},
    closeForm:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles; 