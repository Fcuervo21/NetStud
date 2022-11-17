import {
    Share,
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
} from "react-native";
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

const Card = ({ post, setCurrentId, idUser }) => {
    const likesInPost = post.postMessages.likes;

    const myUserId = idUser != undefined && idUser.logged[0].id;
    const {
        _id,
        title,
        type,
        creator,
        content,
        selectedFile,
        likes,
        createdAt,
    } = post.postMessages;
    const { image, name } = post.user;
    const dispatch = useDispatch();
    
    // const [likedData, setlikedData] = useState({
    //     _id: _id,
    //     userId: creator,
    // });
    
    const likedData = { _id: _id, userId: creator };
    const inLikes = likesInPost.includes(myUserId);
    const [liked, setLiked] = useState(inLikes);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: name + " " + content,
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
            console.log(error);
        }
    };


    const Toggle = () => {
        setLiked(!liked);
        dispatch(changeLike(likedData));
    };

    // const Likes = () => {
    //     if (likes.length >0) {
    //         return likes.find((like) => like === myUserId)
    //         ? (
    //             <Liked />
    //         ) : (
    //             <Heart />
    //         );
    //     }
    //     return <><Liked /></>;
    // };

    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <View style={styles.profilePhoto}>
                            <Image
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                source={{ uri: image }}
                            />
                        </View>
                        <View style={styles.wrapperTittle}>
                            <Text style={styles.cardTitle}>{name}</Text>
                            {/* <Text style={styles.cardSubtitle}>{creator}</Text> */}
                        </View>
                        {icon(type)}
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
                                source={{ uri: selectedFile }}
                            />
                        </View>
                        <View style={styles.bottomPartContainer}>
                            <View style={styles.likesWrapper}>
                                <Pressable
                                    onPress={() => {
                                        Toggle();
                                    }}
                                >
                                    {
                                        //inLikes ? <Liked /> : <Heart />
                                        liked ? <Liked /> : <Heart />
                                    }
                                </Pressable>
                            </View>
                            {/* <View style={styles.middle}>
                                <Comment />
                            </View> */}
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
