import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { HomeHeader } from "../../components";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import ProfileInfo from "./components/ProfileInfo";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../actions/posts";
import { numberOfLikesInUser } from "../../actions/posts";
import AnimatedLoader from "react-native-animated-loader";
import loader from "../../assets/loader.json";

const Profile = () => {
    const dispatch = useDispatch();
    const idUser = useSelector((state) => state.auth);
    const numberOfLikes = useSelector((state) => state.posts.numberOfLikes);

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
            <LinearGradient colors={[COLORS.background, COLORS.background]}>
            <SafeAreaView>
                <ScrollView style={styles.mainContent}>
                    <HomeHeader />
                    <ProfileInfo userData={idUser.logged[0]} numberOfLikes={numberOfLikes} />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
        );
    };
    const [userData, setUserData] = useState({
        name: "",
        id: "",
        image: "",
    });

    useEffect(() => {
        dispatch(getMyPosts({ id: idUser.logged[0].id }));
        dispatch(numberOfLikesInUser({ id: idUser.logged[0].id }));
    }, []);

    return (
        <>
            {
                idUser != undefined ? renderPosts() : loadingAnimation()
            }
        </>
    );
};

export default Profile;
