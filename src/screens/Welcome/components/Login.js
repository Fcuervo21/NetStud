import { Text, Pressable, View, form, input, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import styles from "../styles";
import BottomPart from "./BottomPart";
import CloseForm from "../../../assets/icons/closeForm";

const Login = () => {
    return (
        <View style={styles.backgroundCard}>

            <Text style={styles.textBienvenido}>Bienvenido</Text>
            <View style={styles.closeForm}>
                <Pressable 
                onPress={() => {
                    const [login, setLogin] = useState(false)
                  }}
                  >
                <CloseForm />
                </Pressable>
            </View>
            <Text style={styles.textLogin}>Login</Text>

            <form>
                <input style={styles.LoginInputs} placeholder="Usuario" />
                <input style={styles.LoginInputs} placeholder="Password" />
            </form>

            <Text style={styles.noPassword}>¿Olvidaste tu contraseña?</Text>

            <BottomPart />

        </View>
    );
};

export default Login;