import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Welcome from "./src/screens/Welcome/Welcome";
import Posts from "./src/screens/Posts/Posts";


import reducers from "./src/reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

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
		PoppinsBlack: require("./src/assets/fonts/Poppins-Black.ttf"),
		PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
		PoppinsExtraLight: require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
		PoppinsItalic: require("./src/assets/fonts/Poppins-Italic.ttf"),
		PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
		PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
		PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
		PoppinsThin: require("./src/assets/fonts/Poppins-Thin.ttf"),
		PoppinsThinItalic: require("./src/assets/fonts/Poppins-ThinItalic.ttf"),
	});

	if (!loaded) return null;

	return (
        <Provider store={store}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Welcome"
                >
                    <Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Post" component={Posts} />
                    {/* <Stack.Screen name="Messages" component={Details}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
	);
};

export default App;
