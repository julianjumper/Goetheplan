import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from 'react-native';
import { modalStyle, stylesSettings } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

export default function Settings({ navigation }) {

    const [classes, setClasses] = useState('Klasse...');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getSavedClass();
    }, [counter])

    const getSavedClass = async () => {
        try {
            const value = await AsyncStorage.getItem('class');
            if (value !== null) {
                setClasses(() => value);
            } else { console.log("If nicht erfüllt"); return {} }
        } catch (e) {
            console.warn("e:", e);
        }
    }

    function savePicker (value) {
        try {
            AsyncStorage.setItem('class', value);
        } catch (err) { console.warn("in savePicker - error when saving: ", err) }
    }

    function savePassword_Username (password, username) {
        try {
            AsyncStorage.setItem('password', password);
            AsyncStorage.setItem('username', username);
        } catch (err) { console.warn("in savePass... - error when saving: ", err) }
    }

    return (
        <View style={stylesSettings.container}>
            <View style={stylesSettings.headerWrapper}>
                <Text style={stylesSettings.header}>Einstellungen</Text>
            </View>
            <View style={stylesSettings.headerWrapperWrapper}>
                <View>
                    <Text style={stylesSettings.header2}>Wähle deine Klasse (aktuell: {classes})</Text>
                </View>
            </View>
            <View style={stylesSettings.pickerWrapper}>
                <RNPickerSelect
                    placeholder={{ label: 'Wähle Klasse...', value: '---' }}
                    style={stylesSettings.picker}
                    onValueChange={(value) => { console.log(value); savePicker(value); setCounter(() => counter + 1) }}
                    items={[
                        { label: '---', value: '---' },
                        { label: '7a', value: '7a' },
                        { label: '7b', value: '7b' },
                        { label: '7c', value: '7c' },
                        { label: '7d', value: '7d' },
                        { label: '8a', value: '8a' },
                        { label: '8b', value: '8b' },
                        { label: '8c', value: '8c' },
                        { label: '8d', value: '8d' },
                        { label: '9a', value: '9a' },
                        { label: '9b', value: '9b' },
                        { label: '9c', value: '9c' },
                        { label: '9d', value: '9d' },
                        { label: '10a', value: '10a' },
                        { label: '10b', value: '10b' },
                        { label: '10c', value: '10c' },
                        { label: '10d', value: '10d' },
                        { label: '11', value: '11' },
                        { label: '12', value: '12' },
                        { label: 'Team', value: 'Team' },
                    ]}
                />
            </View>
        </View>
    )
}

