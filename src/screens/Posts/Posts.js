import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loader from "../../assets/loader.json";
// import { changeLike } from "../../actions/posts";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchAllPosts);
	const [idUser, setIdUser] = useState();
	const [likedPost, setLikedPost] = useState("");

	// useEffect(() => {
	// 	changeLike(likedPost);
	// }, [likedPost]);
	

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@AuthData");
			const newValue = JSON.parse(value);
            if (newValue !== null) {
                // We have data!!
                // return newValue.id;
				setIdUser(newValue.id)
            }
        } catch (error) {
            // Error retrieving data
        }
    };


	getData();

    useEffect(() => {
        dispatch(getPosts());
		console.log(likedPost);
    }, []);
    //console.log(posts);
    return (
        <LinearGradient colors={[COLORS.background, COLORS.background]}>
            <SafeAreaView>
                <ScrollView style={styles.mainContent}>
                    <HomeHeader />
                    {Array.isArray(posts) ? (
                        posts[0].map((element, index) => {
                            const {
                                _id,
                                title,
                                type,
                                content,
                                selectedFile,
                                creator,
								likes,
                            } = element;
                            return (
                                <Card
                                    key={index}
                                    idPost={_id}
                                    userName={creator}
                                    userInfo={creator}
                                    title={title}
                                    image={selectedFile}
                                    content={content}
                                    tipoPost={type}
									userId={idUser}
									likes={likes}
									setLikedPost={setLikedPost}
                                />
                            );
                        })
                    ) : (
                        <AnimatedLoader
                            visible={true}
                            overlayColor="rgba(255,255,255,0.75)"
							source={loader}
                            animationStyle={styles.lottie}
                            speed={1}
                        >
                        </AnimatedLoader>
                    )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Posts;
