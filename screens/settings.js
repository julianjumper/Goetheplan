import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar, Picker, Button as But } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { modalStyle, styles, stylesSettings } from '../style/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { _url } from '../components/api';

const url = _url;

export default function Settings({ navigation }) {

    const [classes, setClasses] = useState();
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        navigation.setOptions({ headerRight: () => <View style={{ marginRight: 10 }}><Icon name="check-circle" color="#32cd32" onPress={() => { savePicker(classes); navigation.pop(); Alert.alert("Übernommen", "Änderungen wurden übernommen.") }} /></View> });

        if(classes === undefined || classes === null) 
            getSavedClass();
        getSavedLogin();
    }, [counter, classes])

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

    function setPicker(value) {
        setClasses(() => value)
    }

    function savePassword_Username() {
        try {
            AsyncStorage.setItem('password', password);
            AsyncStorage.setItem('username', username);
        } catch (err) { console.warn("in savePass... - error when saving: ", err) }
    }

    return (
        <View style={stylesSettings.container}>
            <StatusBar style='light' />
            <View style={stylesSettings.headerWrapper}>
                <Text style={stylesSettings.header}>Einstellungen</Text>
            </View>
            <View style={stylesSettings.headerWrapperWrapper}>
                <View style={stylesSettings.headerWrapper2}>
                    <Text style={stylesSettings.header2}>Anmeldedaten:</Text>
                    <View style={stylesSettings.inputStyle}>
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
                    <Button style={stylesSettings.button} title="Login" onPress={() => savePassword_Username()} />
                </View>
                <View style={stylesSettings.classWrapper}>
                    <Text style={stylesSettings.header2}>Wähle deine Klasse</Text>
                    <Text style={stylesSettings.chooseClass}>(aktuell: {classes})</Text>
                </View>
            </View>
            <View style={stylesSettings.pickerWrapper}>
                <RNPickerSelect
                    placeholder={{ label: 'Wähle Klasse...', value: classes }}
                    style={stylesSettings.picker}
                    onValueChange={(value) => { console.log(classes); setPicker(value); setCounter(() => counter + 1) }}
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
            <View style={stylesSettings.aboutPage} >
                <But title={"Über"} onPress={() => navigation.navigate("About")} />
            </View>
        </View>
    )
}
