import {
	Text,
	Pressable,
	View,
	TextInput,
    ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import BottomPart from "./BottomPart";
import CloseForm from "../../../assets/icons/closeForm";

const Register = ({ setRegister }) => {
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

				<TextInput style={styles.LoginInputs} placeholder="Correo" />
				<TextInput style={styles.LoginInputs} placeholder="Nombre" />
				<TextInput style={styles.LoginInputs} placeholder="Apellido" />
				<TextInput style={styles.LoginInputs} placeholder="Password" />
				<TextInput style={styles.LoginInputs} placeholder="Confirmar contraseña" />

            </ScrollView>

			<BottomPart />
		</View>
	);
};

export default Register;
