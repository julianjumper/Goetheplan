import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, Button, ActivityIndicator } from 'react-native';
import { fetchData_today } from '../components/api';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';
import DefaultPreference from 'react-native-default-preference';
import { checkConnection } from '../components/checkInternet';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home_Today({ navigation }) {

    const tiles_array_today = []

    let load = true;

    const fetchData = () => {
        load = true;
        const _data = 0;
        return _data;
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                console.log("hier_", value);
            }
        } catch (e) {
            console.warn("e", e);
        }
    }

    const initialiseTiles = () => {
        let data = 0;
        try {
            data = fetchData_today();
        } catch (err) { console.log(err) }
        try {
            const isConnected = checkConnection();
            console.log(isConnected);
            if (isConnected) {
                createTiles(data);
            } else {
                let value = 0;
                try {
                    getData()
                } catch (err) { console.log(err) }
                createTiles(value);
            }
        } catch (err) {
            console.warn(err);
            alert("Der Vertretungsplan konnte nicht geladen werden. Überprüfen Sie Ihre Netzwerkverbindung.");
        };
        load = false;
    };

    const createTiles = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i]["classes"] === "12" || data[i]["classes"] === "11, 12")
                tiles_array_today.push(<Tile
                    key={i + 1}
                    text={data[i]["absent"]}
                    lessons={data[i]["lessons"]}
                    kind={data[i]["type"]}
                    room={data[i]["newRoom"]}
                    comment={data[i]["comments"]}
                    class={data[i]["classes"]}
                    subject={data[i]["subject"]}
                />);
        };
    }
    initialiseTiles();

    const getLoad = () => {
        return load;
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ alignItems: 'flex-end', marginLeft: 300, marginTop: 60, opacity: 0.8 }}>
                    <Icon name='settings' onPress={() => navigation.navigate("Settings")} />
                </View>
                <StatusBar style="auto" />
                <View style={styles.wrapper}>
                    <Text style={styles.header}>Vertretungsplan</Text>

                    <View style={styles.scrollWrapper}>
                        <Text style={styles.textDay}>Heute:</Text>
                        <ScrollView>
                            {load ? <ActivityIndicator /> : tiles_array_today}
                        </ScrollView>

                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
}

// {isLoading ? (<ActivityIndicator />) : ({ tiles_array_today })}
