import {
	SafeAreaView,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FocusedStatusBar } from "../../components";
import { COLORS } from "../../constants";
import styles from "./styles";
import TopPart from "./components/TopPart";
import BottomPart from "./components/BottomPart";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";


const LoginForm = (setLogin, login) => {
    if (login){
        return (<Login login={login} setLogin={setLogin}/>)
    }
}

const RegisterForm = (setRegister, register) => {
    if (register){
        return (<Register setRegister={setRegister}/>)
    }
}

const Welcome = () => {
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	return (
		<LinearGradient
			colors={["#0E2A55", "#F9F3EC"]}
			style={styles.linearGradient}
		>
			<SafeAreaView
				style={{
					flex: 1,
				}}
			>
				<FocusedStatusBar background={COLORS.primary} />
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.containerAvoiding}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.container}>
							<TopPart />

                                {LoginForm(setLogin, login)}
                                {RegisterForm(setRegister, register)}
                                {  !login && !register && <BottomPart setLogin={setLogin} setRegister={setRegister} />}

						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Welcome;
