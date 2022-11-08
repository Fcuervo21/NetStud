import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Posts from "../screens/Posts/Posts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

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
                    } else if (route.name === "Settings") {
                        iconName = focused ? "ios-list" : "ios-list-outline";
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
                component={Posts}
            />
            <Tab.Screen name="Settings" component={Posts} />
        </Tab.Navigator>
    );
};
