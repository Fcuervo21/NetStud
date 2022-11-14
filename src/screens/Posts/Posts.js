import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loader from "../../assets/loader.json";
import { changeLike } from "../../actions/posts";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    const [idUser, setIdUser] = useState();
    const [likedPost, setLikedPost] = useState();
    //console.log(posts);

    // function sendLike (e, data) {
    // 	e.preventDefault();
    // 	setLikedPost(data);
    // 	dispatch(changeLike(likedPost));
    // 	console.log("liked", likedPost);
    // };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@AuthData");
            const newValue = JSON.parse(value);
            if (newValue !== null) {
                // We have data!!
                // return newValue.id;
                setIdUser(newValue.id);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    getData();

    const loadingAnimation = () => {
        return (
            <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={loader}
                animationStyle={styles.lottie}
                speed={1}
            />
        );
    };

    const renderPosts = () => {
        return (
            <SafeAreaView>
            <ScrollView>
                {posts.map((post) => (
                    <Card
                        key={post._id}
                        post={post}
                        idUser={idUser}
                        setCurrentId={setCurrentId}
                    />
                ))}
            </ScrollView>
            </SafeAreaView>
        );
    };
    

    return(
        <>
            {
                posts?.length ? renderPosts() : loadingAnimation()
            }
        </>
    )
};

export default Posts;
