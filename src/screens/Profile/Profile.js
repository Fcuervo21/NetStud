import {
	SafeAreaView,
	View,
	Text,
    Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { HomeHeader } from "../../components";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import ProfileInfo  from "./components/ProfileInfo";

const NewPost = () => {
	return (
		<LinearGradient colors={[COLORS.background, COLORS.background]}>
			<SafeAreaView>
                <ScrollView style={styles.mainContent}>
                    <HomeHeader />
                    <ProfileInfo />
                </ScrollView>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default NewPost;
