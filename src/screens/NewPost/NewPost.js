import {
	SafeAreaView,
	View,
	Text,
    Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { HomeHeader } from "../../components";
import NewCard from "./components/NewCard";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const NewPost = () => {
	return (
		<LinearGradient colors={[COLORS.background, COLORS.background]}>
			<SafeAreaView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView style={styles.mainContent}>
						<HomeHeader />
						<NewCard tipoPost={"evento"} />
					</ScrollView>
				</TouchableWithoutFeedback>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default NewPost;
