import { Text, Pressable, View } from "react-native";
import {React, useState} from "react";
import { COLORS } from "../../../constants";
import styles from "../styles";
import { signIn, signUp } from "../../../api";

const SendInfoButton = ({ login, userData }) => {

	return (
		<>
        {login==true?
        
			<View style={styles.wrapper}>
				<Pressable
					onPress={() => {
					    signIn(userData)
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed
								? COLORS.dark
								: COLORS.primary,
						},
						styles.button,
					]}
				>
					<Text style={styles.textButton}>Inicia sesión</Text>
				</Pressable>

				<View style={styles.noAccount}>
					<Text
						style={[
							{ color: COLORS.secondary, marginRight: 5 },
							styles.text,
						]}
					>
						¿No tienes cuenta?
					</Text>
					<Pressable
					//     onPress={() => {
					// 	setRegister(true);
					//     setLogin(true);
					// }}
					>
						{({ pressed }) => (
							<Text
								style={[
									{
										color: pressed
											? COLORS.secondary
											: COLORS.primary,
									},
									styles.text,
								]}
							>
								Registrate
							</Text>
						)}
					</Pressable>
				</View>
			</View>
            :
            <View style={styles.wrapper}>
				<Pressable
					onPress={() => {
					    signUp(userData)
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed
								? COLORS.dark
								: COLORS.primary,
						},
						styles.button,
					]}
				>
					<Text style={styles.textButton}>Registrate</Text>
				</Pressable>

				<View style={styles.noAccount}>
					<Text
						style={[
							{ color: COLORS.secondary, marginRight: 5 },
							styles.text,
						]}
					>
						¿Ya tienes cuenta?
					</Text>
					<Pressable
					//     onPress={() => {
					// 	setRegister(true);
					//     setLogin(true);
					// }}
					>
						{({ pressed }) => (
							<Text
								style={[
									{
										color: pressed
											? COLORS.secondary
											: COLORS.primary,
									},
									styles.text,
								]}
							>
								Inicia sesión
							</Text>
						)}
					</Pressable>
				</View>
			</View>
        }
		</>
	);
};

export default SendInfoButton;
