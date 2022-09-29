import { Text, View } from "react-native";

import LogoVLight from "../../../assets/logos/logoVLight.js";

import styles from "../styles";

const TopPart = () => {
	return (
		<>
			<View style={styles.wrapper}>
				<LogoVLight />
				<Text style={styles.slogan}>Conecta. Crece. Construye</Text>
			</View>
		</>
	);
};

export default TopPart;
