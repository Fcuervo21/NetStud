import { Text, Pressable, View, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import styles from "../styles";
import BottomPart from "./BottomPart";
import CloseForm from "../../../assets/icons/closeForm";

const Login = () => {
    return (
        <View style={styles.backgroundCard}>

            <View style={styles.wrapperTop}>
                <View>
                    <Text style={styles.textBienvenido}>Bienvenido</Text>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                
                <View style={styles.closeForm}>
                    <CloseForm />
                </View>
            </View>

            <View>
                <TextInput style={styles.LoginInputs} placeholder="Usuario" />
                <TextInput style={styles.LoginInputs} placeholder="Password" />
            </View>

            <Text style={styles.noPassword}>¿Olvidaste tu contraseña?</Text>

            <BottomPart />

        </View>
    );
};

export default Login;