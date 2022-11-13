import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import Heart from "../../../assets/icons/heart";
import Comment from "../../../assets/icons/message";
import Share from "../../../assets/icons/share";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";
import Liked from "../../../assets/icons/liked";
import React, { useState } from "react";
// const icon = {
//     "evento": <Evento />,
//     "pregunta": <Pregunta />,
//     "ayuda": <Ayuda />
// }

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

const Card = ({
    content,
    tipoPost,
    title,
    image,
    idPost,
    userName,
    userInfo,
    useData
}) => {


    const [liked, setLiked] = useState();

    const [likedData, setlikedData] = useState({
        idPost: idPost,
        idUsuario: "",
    });

    const toggleIcon = () => {
        setLiked(!liked);
        if (liked === true) {
            setlikedData({ ...likedData, idPost: idPost });
        } else {
            setlikedData({ ...likedData, idPost: "" });
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Profile />
                        <View style={styles.wrapperTittle}>
                            <Text style={styles.cardTitle}>{userName}</Text>
                            <Text style={styles.cardSubtitle}>{userInfo}</Text>
                        </View>
                        {icon(tipoPost)}
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardBodyTitle}>{title}</Text>
                        <Text style={styles.cardBodyText}>{content}</Text>
                        <View style={styles.image}>
                            <Image
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                                source={{ uri: image }}
                            />
                        </View>
                        <View style={styles.actionsContainer}>
                            <Pressable onPress={() => toggleIcon()}>
                                {liked ? <Liked /> : <Heart />}
                            </Pressable>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Comment />
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
