import React, { useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Pressable,
	Image,
    Button
} from "react-native";
import styles from "../styles";
import Profile from "../../../assets/icons/profile";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";
import { COLORS } from "../../../constants";
import * as ImagePicker from "expo-image-picker";

const TYPES = ["evento", "pregunta", "ayuda"];

const icon = (type) => {
	switch (type) {
		case "evento":
			return <Evento />;
		case "pregunta":
			return <Pregunta />;
		case "ayuda":
			return <Ayuda />;
		default:
			break;
	}
};

const NewCard = () => {
	const [image, setImage] = useState(null);
	const [postData, setPostData] = useState({
		title: "",
		description: "",
		image: "",
		postype: TYPES[0],
	});

	function obtainCurrentPost() {
		return postData;
	}

	const changeTipoPost = () => {
		const index = TYPES.indexOf(postData.postype) + 1;
		if (index === TYPES.length) {
			setPostData({ ...postData, postype: TYPES[0] });
		} else {
			setPostData({ ...postData, postype: TYPES[index] });
		}
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<SafeAreaView>
			<View style={styles.cardWrapper}>
				<View style={styles.cardContainer}>
					<View style={styles.cardHeader}>
						<Profile />

						<View style={styles.wrapperTittle}>
							<Text style={styles.cardTitle}>User Name</Text>
							<Text style={styles.cardSubtitle}>
								User description
							</Text>
						</View>
						<Pressable onPress={changeTipoPost}>
							{icon(postData.postype)}
						</Pressable>
					</View>

					<View style={styles.cardBody}>
						<TextInput
							multiline={true}
							numberOfLines={4}
							onChangeText={(descripcion) =>
								setPostData({
									...postData,
									descripcion: descripcion,
								})
							}
							style={styles.input}
							placeholder="Escribe algo..."
						/>
						<View style={styles.image}>
							{/* <Pressable onPress={pickImage}>
								{postData.image === "" ? (
									<Text style={styles.textInImage}>
										Presiona para agregar una foto
									</Text>
								) : (
									<Image
										style={{
											alingSelf: "center",
											width: 200,
											height: 200,
										}}
										source={{ uri: postData.image }}
									/>
								)}
							</Pressable> */}
							<Button
								title="Pick an image from camera roll"
								onPress={pickImage}
							/>
							{image && (
								<Image
									source={{ uri: image }}
									style={{ width: 200, height: 200 }}
								/>
							)}
						</View>
					</View>
					<Pressable
						onPress={() => {
							console.log(postData);
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
						<Text style={styles.textButton}>Crear post</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default NewCard;
