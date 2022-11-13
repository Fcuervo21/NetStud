import { Share, SafeAreaView, View, Text, Pressable, Image } from "react-native";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import Heart from "../../../assets/icons/heart";
import Comment from "../../../assets/icons/message";
import ShareIcon from "../../../assets/icons/share";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";
import Liked from "../../../assets/icons/liked";
import React, { useState, useEffect } from "react";
import { changeLike } from "../../../actions/posts";
import { useDispatch, useSelector } from "react-redux";

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
    userId,
    likes,
    setLikedPost,
}) => {
    const [liked, setLiked] = useState();
    const dispatch = useDispatch();

    const [likedData, setlikedData] = useState({
        _id: idPost,
        userId: userId,
    });

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Compartir Post",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error);;
        }
    };

    const toggleIcon = (event) => {
        event.preventDefault();
        setLiked(!liked);
        if (liked === true) {
            setlikedData({ ...likedData, _id: idPost });
            setLikedPost(likedData._id);
        } else {
            setlikedData({ ...likedData, _id: "" });
        }
        // useEffect(() => {
        dispatch(changeLike(likedData));
        // }, [liked]);
        // changeLike(likedData);
        // console.log(likedData);
        // likePost(likedData);
        // console.log(idPost);
    };

    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Profile />
                        <View style={styles.wrapperTittle}>
                            <Text style={styles.cardTitle}>{idPost}</Text>
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
                        <View style={styles.bottomPartContainer}>
                            <View style={styles.likesWrapper}>
                                <Text style={styles.likesText}>
                                    {likes.length}
                                </Text>
                                <Pressable
                                    onPress={(event) => toggleIcon(event)}
                                >
                                    {liked ? <Liked /> : <Heart />}
                                </Pressable>
                            </View>
                            <View style={styles.middle}>
                                <Comment />
                            </View>
                            <Pressable onPress={onShare}>
                                <ShareIcon />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Card;
