import { AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
    SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React, {Component} from "react";
import styles from "./styles";

const FocusedStatusBar = (props) => {
	// const isFocused = useIsFocused();
	// return isFocused ? <StatusBar animated={true} translucent backgroundColor={props.backgroundColor} {...props} /> : null;
	<View style={styles.statusBar}>
		<SafeAreaView>
			<StatusBar
				translucent
				backgroundColor={props.backgroundColor}
				{...props}
			/>
		</SafeAreaView>
	</View>;
};

export default FocusedStatusBar;