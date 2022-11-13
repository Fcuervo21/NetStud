import React, { useEffect } from "react";
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

// const array = [
// 	{
// 		id: 1,
// 		title: "The best way to learn React Native",
// 		description: "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It’s based on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.",
// 	},
// 	{
// 		id: 2,
// 		title: "The best way to learn React Native",
// 		description: "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It’s based on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.",
// 	},
// 	{
// 		id: 3,
// 		title: "The best way to learn React Native",
// 		description: "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It’s based on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.",
// 	}
// ]
const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchAllPosts);
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@AuthData");
            if (value !== null) {
                // We have data!!
                // return value;
				console.log(value.id);
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    
	const userLogged = getData();
	// console.log(userLogged);

    useEffect(() => {
        dispatch(getPosts());
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
									userData={userLogged}
                                />
                            );
                        })
                    ) : (
                        <AnimatedLoader
                            visible={true}
                            overlayColor="rgba(255,255,255,0.75)"
                            animationStyle={styles.lottie}
                            speed={1}
                        >
                            <Text>Loading...</Text>
                        </AnimatedLoader>
                    )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Posts;
