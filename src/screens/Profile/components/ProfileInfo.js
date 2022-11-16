import {
    Share,
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../../assets/icons/profile";
import Card from "../../Posts/components/Card";

const ProfileInfo = ({ post, navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.topWrapper}>
                <View style={styles.profileWrapper}>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                        }}
                        source={{ uri: "" }}
                    />
                    <Text style={styles.profileText}>username</Text>
                </View>
                <View style={styles.statsUser}>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsNumber}>1532</Text>
                        <Text style={styles.statsText}>Posts</Text>
                    </View>
                    <View style={styles.separatorVertical}></View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsNumber}>4310</Text>
                        <Text style={styles.statsText}>Likes</Text>
                    </View>
                </View>
                <View style={styles.separatorHorizontal}></View>
            </View>
            {/* <Card/> */}
        </SafeAreaView>
    );
};

export default ProfileInfo;
