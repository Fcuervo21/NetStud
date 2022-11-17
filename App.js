import { React } from "react";
import { useFonts } from "expo-font";

import { Router } from "./src/routes/Router";
import { AuthProvider } from "./src/contexts/Auth";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./src/reducers";
import thunk from "redux-thunk";
import { LogBox } from 'react-native';

// Ignore log notification by message:
// LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const App = () => {
	const store = createStore(
		reducers,
		composeWithDevTools(applyMiddleware(thunk))
	);
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
		<AuthProvider>
			<Provider store={store}>
				<Router />
			</Provider>
		</AuthProvider>
	);
};

export default App;
