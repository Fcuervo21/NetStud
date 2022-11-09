import { SafeAreaView, View, Text } from "react-native";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Posts = () => {
	return (
		<LinearGradient colors={[COLORS.background, COLORS.background]}>
			<SafeAreaView>
				<ScrollView style={styles.mainContent}>
					<HomeHeader />
					<Card tipoPost={"evento"} />
					<Card tipoPost={"pregunta"} />
					<Card tipoPost={"pregunta"} />
					<Card tipoPost={"evento"} />
					<Card tipoPost={"evento"} />
					<Card tipoPost={"ayuda"} />
				</ScrollView>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Posts;
