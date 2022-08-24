import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};
const Stack = createStackNavigator();

const App = () => {
	
    const [loaded] = useFonts({
        PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
        PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
        PoppinsExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
        PoppinsItalic: require("./assets/fonts/Poppins-Italic.ttf"),
        PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
        PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
        PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
        PoppinsThin: require("./assets/fonts/Poppins-Thin.ttf"),
        PoppinsThinItalic: require("./assets/fonts/Poppins-ThinItalic.ttf"),
        
    });

	if (!loaded) return null;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Messages" component={Details}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
