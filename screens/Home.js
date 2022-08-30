import { useState } from "react";
import { Text, SafeAreaView, FlatList, View } from "react-native";

import { FocusedStatusBar, HomeHeader, PostCard } from "../components";

import { COLORS, NetStudData } from "../constants";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary}/>

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList 
                        data={NetStudData}
                        renderItem={({ item }) => <PostCard data={item} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: '100%', backgroundColor: COLORS.background }} />
                    {/* <View style={{ flex: 1, backgroundColor: COLORS.white }} /> */}
                </View>

            </View>

        </SafeAreaView>
    );
};

export default Home;
