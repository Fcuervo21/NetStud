import { Text, Pressable, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import CloseForm from "../../../assets/icons/closeForm";
import { COLORS } from "../../../constants";
import SendInfoButton from "./SendInfoButton";

const Login = ({ login, setLogin }) => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	return (
		<View style={styles.backgroundCard}>
			<View style={styles.wrapperTop}>
				<View>
					<Text style={styles.textBienvenido}>Bienvenido</Text>
					<Text style={styles.textLogin}>Inicia sesión</Text>
				</View>

				<View style={styles.closeForm}>
					<Pressable
						onPress={() => {
							setLogin(false);
						}}
					>
						<CloseForm />
					</Pressable>
				</View>
			</View>

			<View>
				<TextInput
					onChangeText={(email) =>
						setUserData({ ...userData, email: email })
					}
					style={styles.LoginInputs}
					placeholder="Usuario"
				/>
				<TextInput
					onChangeText={(password) =>
						setUserData({ ...userData, password: password })
					}
					style={styles.LoginInputs}
					placeholder="Password"
                    secureTextEntry={true}
				/>
			</View>

			<Text style={styles.noPassword}>¿Olvidaste tu contraseña?</Text>

			<SendInfoButton login={true} userData={userData}/>
		</View>
	);
};

export default Login;
