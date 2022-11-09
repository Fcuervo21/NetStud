import { SafeAreaView, View, Text } from "react-native";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import Heart from "../../../assets/icons/heart";
import Comment from "../../../assets/icons/message";
import Share from "../../../assets/icons/share";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";

const icon = (type) => {
    switch (type) {
        case "evento":
            return <Evento />;
        case "pregunta":
            return <Pregunta />;
        case "ayuda":
            return <Ayuda />;
        default:
            break;
    }
};

const NewCard = ({ tipoPost }) => {
    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Profile />
                        <View style={styles.wrapperTittle}>
                            <Text style={styles.cardTitle}>User Name</Text>
                            <Text style={styles.cardSubtitle}>
                                User description
                            </Text>
                        </View>
                        {icon(tipoPost)}
                    </View>

                    <View style={styles.cardBody}>
                        <Text style={styles.cardBodyText}>Escribe algo...</Text>
                        <View style={styles.image}>
                            <Text style={styles.textInImage}>
                                Presiona para agregar una foto
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NewCard;
