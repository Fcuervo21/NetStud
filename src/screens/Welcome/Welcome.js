import { SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FocusedStatusBar } from "../../components";
import { COLORS } from "../../constants";
import styles from "./styles";
import TopPart from "./components/TopPart";
import BottomPart from "./components/BottomPart";

const Home = () => {
	return (
		<LinearGradient
			colors={["#0E2A55", "#F9F3EC"]}
			style={styles.linearGradient}
		>
			<SafeAreaView
				style={{
					flex: 1,
				}}
			>
				<FocusedStatusBar background={COLORS.primary} />
				<View style={styles.container}>
					<TopPart />

					<BottomPart />
				</View>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Home;
