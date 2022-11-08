import {React} from "react";
import { useFonts } from "expo-font";

import { Router } from "./src/routes/Router";
import { AuthProvider } from "./src/contexts/Auth";

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
		<AuthProvider>
			<Router/>
		</AuthProvider>
	);
};

export default App;
