import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { modalStyle, stylesSettings } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

export default function Settings({ navigation }) {

    function savePicker (value) {
        try {
            AsyncStorage.setItem('class', value);
        } catch (err) { console.warn("in savePicker - error when saving: ", err) }
    }

    return (
        <View style={stylesSettings.container}>
            <View style={stylesSettings.headerWrapper}>
                <Text style={stylesSettings.header}>Einstellungen</Text>
            </View>
            <View style={stylesSettings.headerWrapperWrapper}>
                <View style={stylesSettings.headerWrapper2}>
                    <Text style={stylesSettings.header2}>Anmeldenamen des Vertretungsplans:</Text>
                    <TextInput placeholder="Nutzername" />
                    <TextInput placeholder="Passwort" />
                </View>
                <View>
                    <Text style={stylesSettings.header2}>Wähle deine Klasse: </Text>
                </View>
            </View>
            <View style={stylesSettings.pickerWrapper}>
                <RNPickerSelect
                    placeholder={{ label: 'Klasse...', value: null }}
                    style={stylesSettings.picker}
                    onValueChange={(value) => { console.log(value); savePicker(value); }}
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

