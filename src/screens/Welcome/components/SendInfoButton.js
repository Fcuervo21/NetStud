import { Text, Pressable, View } from "react-native";
import { React, useState } from "react";
import { COLORS } from "../../../constants";
import styles from "../styles";
import { signInApi, signUpApi } from "../../../api";
import { useAuth } from "../../../contexts/Auth";
import { useDispatch, useSelector } from 'react-redux';


const SendInfoButton = ({ login, userData }) => {
    const dispatch = useDispatch()
	
    const [loading, isLoading] = useState(false);
    const auth = useAuth();

    function obtainSignInFormData() {
        return userData;
    }

    function obtainSignUpFormData() {
        return userData;
    }

    return (
        <>
            {login == true ? (
                <View style={styles.wrapper}>
                    <Pressable
                        onPress={() => {
                            signInApi(userData)
                                .then(async (res) => {
									const email = res.data.result.email;
									const token = res.data.token;
                                    console.log(res.data.result.email);
                                    console.log(res.data.token);
                                    
                                    
									auth.signIn(email, token);
									isLoading(true);
                                    
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
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
            ) : (
                <View style={styles.wrapper}>
                    <Pressable
                        onPress={() => {
                            signUp(userData);
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
            )}
        </>
    );
};

export default SendInfoButton;
