import { SafeAreaView, View, Text } from "react-native";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
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
                <Card tipoPost={"evento"}/>
                <Card tipoPost={"pregunta"}/>
                <Card tipoPost={"pregunta"}/>
                <Card tipoPost={"evento"}/>
                <Card tipoPost={"evento"}/>
                <Card tipoPost={"ayuda"}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewPost;