import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar, Image, Button as But } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { modalStyle, styles, stylesLanding } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';
import { useInternetStatus } from '../components/internetStatus';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { _url } from '../components/api';

const url = _url;

export default function landingScreen({ navigation }) {

    const [classes, setClasses] = useState('Klasse...');
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isConnected = useInternetStatus();

    useEffect(() => {
        getSavedClass();
        // getSavedLogin();
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

    async function getSavedLogin() {
        try {
            const value_uname = await AsyncStorage.getItem('username');
            const value_password = await AsyncStorage.getItem('password');

            if (value_uname !== null) {
                setUsername(() => value_uname);
            } else { console.log("If nicht erfüllt"); return {} }

            if (value_password !== null) {
                setPassword(() => value_password);
            } else { console.log("If nicht erfüllt"); return {} }

        } catch (e) {
            console.warn("e:", e);
        }
    }

    function savePicker(value) {
        try {
            AsyncStorage.setItem('class', value);
        } catch (err) { console.warn("in savePicker - error when saving: ", err) }
    }

    function savePassword_Username() {
        try {
            AsyncStorage.setItem('password', password);
            AsyncStorage.setItem('username', username);
        } catch (err) { console.warn("in savePass... - error when saving: ", err) }
    }

    function navigate() {
        if (isConnected) {
            savePassword_Username();
            navigation.navigate("Home");
        }
        else
            Alert.alert("Keine Internetverbindung", "Bitte überprüfe deine Internetverbindnug.")
    }

    return (
        <View style={stylesLanding.container}>
            <StatusBar style='light' />
            <View style={stylesLanding.headerWrapper}>
                <Image source={require('../assets/favicon.png')} />
                <Text style={stylesLanding.header}>Vertretungsplan</Text>
            </View>
            <View style={stylesLanding.headerWrapperWrapper}>
                <View style={stylesLanding.headerWrapper2}>
                    <Text style={stylesLanding.header2}>Anmeldedaten:</Text>
                    <View style={stylesLanding.inputStyle}>
                        <Input
                            placeholder='Anmeldename'
                            type='email'
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            placeholder='Passwort'
                            secureTextEntry={true}
                            type='password'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <Button style={stylesLanding.button} title="Login" onPress={() => { navigate() }} />
                </View>
                <View>
                    <Text style={stylesLanding.header2}>Wähle deine Klasse (aktuell: {classes})</Text>
                </View>
            </View>
            <View style={stylesLanding.pickerWrapper}>
                <RNPickerSelect
                    placeholder={{ label: 'Wähle Klasse...', value: '---' }}
                    style={stylesLanding.picker}
                    onValueChange={(value) => { console.log(value); savePicker(value); setCounter(() => counter + 1) }}
                    items={[
                        { label: '---', value: '---' },
                        { label: '7a', value: '7a' },
                        { label: '7b', value: '7b' },
                        { label: '7c', value: '7c' },
                        { label: '7d', value: '7d' },
                        { label: '7e', value: '7e' },
                        { label: '8a', value: '8a' },
                        { label: '8b', value: '8b' },
                        { label: '8c', value: '8c' },
                        { label: '8d', value: '8d' },
                        { label: '8e', value: '8e' },
                        { label: '9a', value: '9a' },
                        { label: '9b', value: '9b' },
                        { label: '9c', value: '9c' },
                        { label: '9d', value: '9d' },
                        { label: '9e', value: '9e' },
                        { label: '10a', value: '10a' },
                        { label: '10b', value: '10b' },
                        { label: '10c', value: '10c' },
                        { label: '10d', value: '10d' },
                        { label: '10e', value: '10e' },
                        { label: '11', value: '11' },
                        { label: '12', value: '12' },
                        { label: 'Team', value: 'Team' },
                    ]}
                    pickerProps={{ style: { height: 214, overflow: 'hidden' } }}
                />
            </View>
            <View style={stylesLanding.aboutPage} >
                <Icon name='help' onPress={() => navigation.navigate("About")} color='grey' />
            </View>
        </View>
    )
}
