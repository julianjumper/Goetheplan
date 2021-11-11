import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from "@react-native-community/netinfo";
const { width, height } = Dimensions.get("window");

export default function Home_Today({ navigation }) {

    const url = 'http://localhost:8080';

    const [_value, setValue] = useState({});
    const isConnected = useNetInfo().isConnected;
    const [apiData, setApiData] = useState({});
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(`${url}/timetables?username=311441&password=schuleisttoll`)
            .then(data => data.json()
                .then(json => {
                    setApiData(json.today.information);
                    const jsonData = JSON.stringify(json.today.information);
                    try {
                        AsyncStorage.setItem('@storage_Key', jsonData);
                    } catch (err) { console.warn("in asycn set: ", err) }
                })).catch(err => console.log("Catched:", err))

        getData();

    }, [update]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key');
            if (value !== null && typeof value !== 'undefined' && !isConnected) {
                setValue(() => JSON.parse(value));
            } else { console.log("If nicht erfüllt"); return {} }
        } catch (e) {
            console.warn("e:", e);
        }
    }

    let load = true;

    const initialiseTiles = () => {
        try {
            if (isConnected || isConnected === null) {
                createTiles(apiData);
            } else {
                createTiles(_value);
            }
        } catch (err) {
            alert("Der Vertretungsplan konnte nicht geladen werden. Überprüfen Sie Ihre Netzwerkverbindung.");
        };
        load = false;
    };

    let tiles_array_today;

    const createTiles = (_data) => {
        tiles_array_today = [];
        for (let i = 0; i < _data.length; i++) {
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

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }} width={width}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginTop: 60, opacity: 0.8 }}>
                        <Icon style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} name='sync' onPress={() => setUpdate(update + 1)} color='gray' />
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
