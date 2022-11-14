import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "../screens/Home/Home";
import Posts from "../screens/Posts/Posts";
import NewPost from "../screens/NewPost/NewPost";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons/";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                            ? "md-home-sharp"
                            : "md-home-outline";
                    } 
                    else if (route.name === "Settings") {
                        iconName = focused ? "ios-list" : "ios-list-outline";
                    } 
                    else if (route.name === "New") {
                        iconName = focused
                            ? "add-circle"
                            : "add-circle-outline";
                    } 
                    // else if (route.name === "Message") {
                    //     iconName = focused
                    //         ? "chatbubble-ellipses"
                    //         : "chatbubble-ellipses-outline";
                    // } 
                    else if (route.name === "Liked") {
                        iconName = focused ? "ios-heart" : "heart-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused
                            ? "ios-person-circle"
                            : "ios-person-circle-outline";
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="Home"
                options={{ headerShown: false }}
                component={Home}
            />
            {/* <Tab.Screen
                name="Message"
                options={{ headerShown: false }}
                component={Posts}
            /> */}
            <Tab.Screen
                name="New"
                options={{ headerShown: false }}
                component={NewPost}
            />
            <Tab.Screen
                name="Liked"
                options={{ headerShown: false }}
                component={Posts}
            />
            <Tab.Screen
                name="Profile"
                options={{ headerShown: false }}
                component={Posts}
            />
        </Tab.Navigator>
    );
};
