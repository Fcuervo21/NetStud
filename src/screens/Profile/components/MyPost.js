import { SafeAreaView, View, Text, Image } from "react-native";
import styles from "../styles";
import Evento from "../../../assets/icons/evento";
import Pregunta from "../../../assets/icons/pregunta";
import Ayuda from "../../../assets/icons/ayuda";
import React, { useState, useEffect } from "react";

const MyPost = ({ postData }) => {

    const {title, type, content, selectedFile} = postData;

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

    return (
        <SafeAreaView>
            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>

                        {icon(type)}

                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardBodyTitle}>{title}</Text>
                        <Text style={styles.cardBodyText}>{content}</Text>

                        <View style={styles.image}>
                            <Image
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                                source={{ uri: selectedFile }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MyPost;
