import { Text, Pressable, View, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import CloseForm from "../../../assets/icons/closeForm";
import SendInfoButton from "./SendInfoButton";

const Register = ({ setRegister }) => {
	const [userData, setUserData] = useState({
		email: "",
		nombre: "",
		apellidos: "",
		contra: "",
		retryContra: "",
	});

	return (
		<View style={styles.backgroundCard}>
			<View style={styles.wrapperTop}>
				<View>
					<Text style={styles.textBienvenido}>Hola</Text>
					<Text style={styles.textLogin}>Registrate...</Text>
				</View>

				<View style={styles.closeForm}>
					<Pressable
						onPress={() => {
							setRegister(false);
						}}
					>
						<CloseForm />
					</Pressable>
				</View>
			</View>

			<ScrollView style={styles.scrollView}>
				<TextInput
					onChangeText={(email) =>
						setUserData({ ...userData, email: email })
					}
					style={styles.LoginInputs}
					placeholder="Correo"
				/>
				<TextInput
					onChangeText={(nombre) =>
						setUserData({ ...userData, nombre: nombre })
					}
					style={styles.LoginInputs}
					placeholder="Nombre"
				/>
				<TextInput
					onChangeText={(apellidos) =>
						setUserData({ ...userData, apellidos: apellidos })
					}
					style={styles.LoginInputs}
					placeholder="Apellido"
				/>
				<TextInput
					onChangeText={(contra) =>
						setUserData({ ...userData, contra: contra })
					}
					secureTextEntry={true}
					style={styles.LoginInputs}
					placeholder="Password"
				/>
				<TextInput
					onChangeText={(retryContra) =>
						setUserData({ ...userData, retryContra: retryContra })
					}
					secureTextEntry={true}
					style={styles.LoginInputs}
					placeholder="Confirmar contraseña"
				/>
			</ScrollView>
			<SendInfoButton login={false} userData={userData} />
		</View>
	);
};

export default Register;
