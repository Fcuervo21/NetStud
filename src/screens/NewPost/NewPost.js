import { SafeAreaView, View, Text } from "react-native";
import { HomeHeader } from "../../components";
import NewCard from "./components/NewCard";
import {COLORS} from "../../constants/theme";
import styles from "./styles";
import {FocusedStatusBar} from "../../components";
import { ScrollView } from "react-native-gesture-handler";

const NewPost = () => {
    return (
        <SafeAreaView>
            <FocusedStatusBar backgroundColor="red"/>
            <ScrollView style={styles.mainContent}>
                <HomeHeader />
                <NewCard tipoPost={"evento"}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewPost;