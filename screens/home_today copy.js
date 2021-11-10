import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { fetchData_today } from '../components/api';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';
import { checkConnection } from '../components/checkInternet';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get("window");

export default function Home_Today({ navigation }) {

    let tiles_array_today = []
    let isConnected = false;
    let data = 0;

    let load = true;

    const fetchData = () => {
        load = true;
        const _data = 0;
        return _data;
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key');
            // console.warn("value is:", value);
            if (value !== null) {
                createTiles(JSON.parse(value));
            } else { console.log("If nicht erfüllt"); }
        } catch (e) {
            console.warn("e:", e);
        }
    }

    const initialiseTiles = () => {
        // let data = 0;

        try {
            data = fetchData_today();
        } catch (err) { console.warn('data did not fetch:', err) }

        try {
            isConnected = checkConnection();
        } catch (err) { console.log('coudl not check internet connection') }
        try {
            // isConnected = false;0
            console.log("hab ich internet?:", isConnected);
            if (isConnected || isConnected === null) {
                console.log("wirklcih internet: ", isConnected)
                createTiles(data);
            } else {
                console.log("else");
                try {
                    getData();
                    // createTiles(value);
                } catch (err) { console.log(err) }
            }
        } catch (err) {
            console.warn('second in intialisetIles', err);
            alert("Der Vertretungsplan konnte nicht geladen werden. Überprüfen Sie Ihre Netzwerkverbindung.");
        };
        load = false;
    };

    const createTiles = (_data) => {
        console.log("_data length ::", _data.length)
        tiles_array_today = [];
        for (let i = 0; i < _data.length; i++) {
            //if (_data[i]["classes"] === "12" || _data[i]["classes"] === "11, 12")
            tiles_array_today.push(<Tile
                key={i + 1}
                text={_data[i]["absent"]}
                lessons={_data[i]["lessons"]}
                kind={_data[i]["type"]}
                room={_data[i]["newRoom"]}
                comment={_data[i]["comments"]}
                class={_data[i]["classes"]}
                subject={_data[i]["subject"]}
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
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }} width={width}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginTop: 60, opacity: 0.8 }}>
                        <Icon style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} name='sync' onPress={() => initialiseTiles()} color='gray' />
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginLeft: 0, marginTop: 60, opacity: 0.8 }}>
                        <Icon style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} name='settings' onPress={() => navigation.navigate("Settings")} />
                    </View>
                </View>
                <StatusBar style="auto" />
                <View style={styles.wrapper}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text style={styles.header}>Vertretungsplan</Text>
                    </View>
                    <View style={styles.scrollWrapper}>
                        <Text style={styles.textDay}>{"Heute:"}</Text>
                        <ScrollView>
                            {load ? <ActivityIndicator /> : tiles_array_today}
                        </ScrollView>

                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
}
