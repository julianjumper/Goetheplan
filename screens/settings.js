import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { modalStyle, styles } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Settings({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={modalStyle.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.container}>
                    <View style={modalStyle.modalView}>
                        <Text style={modalStyle.modalText}>Hello World!</Text>
                        <Pressable
                            style={[modalStyle.button, modalStyle.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={modalStyle.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[modalStyle.button, modalStyle.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={modalStyle.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}

