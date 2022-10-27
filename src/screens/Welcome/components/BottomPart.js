import { Text, Pressable, View } from "react-native";
import { COLORS } from "../../../constants";
import styles from "../styles";

const BottomPart = ({ setLogin, setRegister }) => {
	return (
		<>
			<View style={styles.wrapper}>
				<Pressable
					onPress={() => {
						setLogin(true);
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
                        onPress={() => {
						setRegister(true);
					}}
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
		</>
	);
};

export default BottomPart;
