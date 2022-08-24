import React, { useState } from "react";
import { Text, SafeAreaView, FlatList, View } from "react-native";

import { FocusedStatusBar, HomeHeader, PostCard } from "../components";

import { COLORS } from "../constants";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary}/>
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
