import {
    Share,
    SafeAreaView,
    View,
    Text,
    Pressable,
    ScrollView,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import MyPost from "./MyPost";
import { useDispatch, useSelector } from "react-redux";

const ProfileInfo = ({ userData, numberOfLikes }) => {
    
    const { name, image, id, likedPosts } = userData;
    const posts = useSelector((state) => state.posts.allMyPosts);
    const numPosts = posts!= undefined ? posts.length : 0;
    // const numLikes = posts!= undefined ? posts.length : 0;
    // const numLikes = likedPosts.length;

    return (
        <SafeAreaView>
            <View style={styles.topWrapper}>
                <View style={styles.profileWrapper}>
                    <View style={styles.profilePhoto}>
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                            }}
                            source={{ uri: image }}
                        />
                    </View>
                    <Text style={styles.profileText}>{name}</Text>
                </View>
                <View style={styles.statsUser}>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsNumber}>{numPosts}</Text>
                        <Text style={styles.statsText}>Posts</Text>
                    </View>
                    <View style={styles.separatorVertical}></View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsNumber}>{numberOfLikes}</Text>
                        <Text style={styles.statsText}>Liked Posts</Text>
                    </View>
                </View>
                <View style={styles.separatorHorizontal}></View>
            </View>
            <SafeAreaView>
                <ScrollView style={{ marginBottom: 50 }}>
                    {posts != undefined ? (
                        posts.map((post) => (
                            <MyPost key={post._id} postData={post} />
                        ))
                    ) : (
                        <View style={styles.messageContainer}>
                            <Text style={styles.statsNumber}> No Tienes ningun Post </Text>
                        </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ProfileInfo;
