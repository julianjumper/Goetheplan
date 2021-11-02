import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { modalStyle, styles } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Settings({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text>TODO :: {"\n"}- Eingabe des Nutzernamens/Passworts des Plans {"\n"}- Einstellung der Klasse/Stufe</Text>
        </View>
    )
}

