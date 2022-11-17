import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import LogoHDark from "../assets/logos/logoHDark";
import Search from "../assets/icons/search";
import LogOut from "../assets/icons/logOut";
import styles from "./styles";
import { COLORS } from "../constants/theme";
import { StatusBar } from "react-native";
import {useAuth} from '../contexts/Auth';


const HomeHeader = () => {
    const auth = useAuth();
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View style={styles.wrapperSearchBar}>
                <LogoHDark />
                <Pressable
                    onPress={() => {
                        auth.signOut();
                    }}
                >
					<View><LogOut /></View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default HomeHeader;
