import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView, View, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { HomeHeader } from "../../components";
import Card from "../Posts/components/Card";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loader from "../../assets/loader.json";
import { changeLike } from "../../actions/posts";
import { getMyLikedPost } from "../../actions/posts";

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const LikedPost = ({ setCurrentId }) => {
    const dispatch = useDispatch();
    const idUser = useSelector((state) => state.auth);
    const myUserId = idUser.logged[0].id;
    const posts = useSelector((state) => state.posts.allLikePosts);
    // const [likedPost, setLikedPost] = useState();

    

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    // const onRefresh = () => {
    //     setRefreshing(true);
    //     setTimeout(() => {
    //         // dispatch(getMyLikedPost({ id: myUserId }));
    //         setRefreshing(false);
    //     }, 2000);
    // };

    const loadingAnimation = () => {
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ width: "100%" }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <HomeHeader />
                    <View style={styles.NoContent}>
                        <Text style={styles.NoContentText}>
                            No tienes Likes
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };

    const renderPosts = () => {
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ width: "100%" }}
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
                        <>
                            <Text>No hay posts</Text>
                        </>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    };

    useEffect(() => {
        dispatch(getMyLikedPost({ id: myUserId }));
    }, []);

    return <>{posts != undefined ? renderPosts() : loadingAnimation()}</>;
};

export default LikedPost;
