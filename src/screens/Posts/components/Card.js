import { SafeAreaView, View, Text } from "react-native";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import Heart from "../../../assets/icons/heart";
import Comment from "../../../assets/icons/message";
import Share from "../../../assets/icons/share";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";

// const icon = {
//     "evento": <Evento />,
//     "pregunta": <Pregunta />,
//     "ayuda": <Ayuda />
// }

const icon = (type) =>{
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
}

const Card = ({tipoPost}) => {
    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Profile />
                        <View style={styles.wrapperTittle}>
                            <Text style={styles.cardTitle}>Card Title</Text>
                            <Text style={styles.cardSubtitle}>Card Subtitle</Text>
                        </View>
                        {icon(tipoPost)}
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardBodyText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        </Text>
                        <View style={styles.image}></View>
                        <View style={styles.actionsContainer}>
                            <Heart />
                            <View style={{paddingHorizontal: 20}}>
                                <Comment/>
                            </View>
                            <Share />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Card;