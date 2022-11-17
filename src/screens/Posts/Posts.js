import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView, View, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loader from "../../assets/loader.json";
import { changeLike } from "../../actions/posts";
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Posts = ({ setCurrentId }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.allPosts);
    const idUser = useSelector((state) => state.auth);
    const [userImage, setUserImage] = useState("");
    const [likedPost, setLikedPost] = useState();
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@AuthData");
            const newValue = JSON.parse(value);
            if (newValue !== null) {
                // We have data!!
                const ayuda = {};

                const id = newValue.id;
                const image = newValue.image;
                const name = newValue.name;
                const likedPosts = newValue.likedPost;
                dispatch({
                    type: "LOGGED_INFO",
                    payload: { id, name, image, likedPosts },
                });
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        getData();
        // dispatch({type: 'LOGGED_INFO', payload: {id, image}})
    }, []);

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
                <ScrollView
                    style={{ marginBottom: 50 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <HomeHeader />
                    {posts != undefined ? (
                        posts.map((post) => (
                            <Card
                                key={post.postMessages._id}
                                post={post}
                                idUser={idUser}
                                setCurrentId={setCurrentId}
                            />
                        ))
                    ) : (
                        <Text
                            style={{
                                fontSize: 17,
                                fontFamily: "PoppinsMedium",
                                color: COLORS.dark,
                            }}
                        >
                            No hay posts
                        </Text>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    };

    return <>{posts != undefined ? renderPosts() : loadingAnimation()}</>;
};

export default Posts;
