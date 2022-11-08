import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/Welcome/Welcome";

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Welcome"
            >
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
    );
};
