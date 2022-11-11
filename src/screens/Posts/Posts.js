import React, { useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { HomeHeader } from "../../components";
import Card from "./components/Card";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../../actions/posts";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    useEffect(() => {
        dispatch(getPosts());
    }, []);

	return (
		<LinearGradient colors={[COLORS.background, COLORS.background]}>
			<SafeAreaView>
				<ScrollView style={styles.mainContent}>
					<HomeHeader />
					
				</ScrollView>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Posts;
