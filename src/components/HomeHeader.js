import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LogoHDark from "../assets/logos/logoHDark";
import Search from "../assets/icons/search";
import styles from "./styles";
import { COLORS } from "../constants/theme";
import { StatusBar } from "react-native";

const HomeHeader = () => {
	return (
		<SafeAreaView>
			{/* <FocusedStatusBar /> */}
			<StatusBar
				barStyle="dark-content"
			/>
			<View style={styles.wrapperSearchBar}>
				<LogoHDark />
				<Search />
			</View>
		</SafeAreaView>
	);
};

export default HomeHeader;
