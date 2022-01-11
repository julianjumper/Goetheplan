import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import NewsTile from '../components/NewsTile';
import { useInternetStatus } from '../components/internetStatus';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { _url } from '../components/api';

const { width, height } = Dimensions.get("window");

export default function Home_Today({ navigation }) {

    const url = _url // 'http://192.168.178.23:8080';

    const [_value, setValue] = useState({});
    // const isConnected = useNetInfo().isConnected;
    // const [isConnected, setConnected] = useState();
    const isConnected = useInternetStatus();

    const [isModal, setModal] = useState(false);
    const [whichModal, setWhichModal] = useState(null);

    const [apiData, setApiData] = useState({});
    const [update, setUpdate] = useState(0);
    const [classes, setClasses] = useState('---');
    const [day, setDay] = useState("-");
    const [date, setDate] = useState("xx.xx.xxxx");
    const [news, setNews] = useState("Keine Nachrichten.");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        startUp();
        const willFocusSubscription = navigation.addListener('focus', () => {
            startUp();

        });
        return willFocusSubscription;

    }, [update, password, uname, isConnected, isModal]);

    function startUp() {
        getSavedLogin();
        if (uname === "" && password === "") return;
        fetchEverything();
        getData();
        getSavedClass();
        initialiseTiles();
    }

    function fetchEverything() {
        fetch(`${url}/timetables?username=${uname}&password=${password}`)
            .then(data => data.json()
                .then(json => { // .then( () => {} )
                    setApiData(json.today.information);
                    setDay(json.today.day);
                    setDate(json.today.date);
                    setNews(json.today.news);
                    const jsonData = JSON.stringify(json.today.information);
                    try {
                        AsyncStorage.setItem('@storage_Key', jsonData);
                    } catch (err) { console.warn("in asycn set: ", err) }
                })).catch(err => { console.log("Catched in fetchEverything:", err); }) // TODO: fix that it works wihtout restart    navigation.navigate("Landing")
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key');
            if ((value !== null && typeof value !== 'undefined')) {
                setValue(() => JSON.parse(value));
            } else { return {} }
        } catch (e) {
            console.warn("e:", e);
        }
    }

    async function getSavedLogin() {
        try {
            const value_uname = await AsyncStorage.getItem('username');
            const value_password = await AsyncStorage.getItem('password');
            if (value_uname !== null) {
                setApiData({});
                setUname(() => value_uname);
            } else { navigation.navigate("Landing"); return {} }

            if (value_password !== null) {
                setPassword(() => value_password);
            } else { navigation.navigate("Landing"); return {} }

            fetch(`${url}/timetables?username=${value_uname}&password=${value_password}`)
                .then(data => data.json()
                    .then(json => { // .then( () => {} )
                        if (json.today.information === null && isConnected) {
                            navigation.navigate("Landing");
                        }
                    })).catch(err => { console.log("Catched:", err); if (isConnected) { navigation.navigate("Landing") } }) // TODO: fix that it works wihtout restart



        } catch (e) {
            console.warn("e:", e);
        }
    }

    const getSavedClass = async () => {
        try {
            const value = await AsyncStorage.getItem('class');
            if (value !== null) {
                setClasses(() => value);
            } else { return {} }
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
            if (_data[i]["classes"] === classes || classes === '---')
                tiles_array_today.push(
                    <TouchableOpacity key={i + 1} onPress={() => {
                        // navigation.navigate("Information", { informations: _data[i], number: i });
                        if (_data[i]["comments"] !== "") {alert("Bemerkung:", _data[i]["comments"] )}
                    }} >
                        <Tile
                            key={i + 1}
                            text={_data[i]["absent"]}
                            lessons={_data[i]["lessons"]}
                            kind={_data[i]["type"]}
                            room={_data[i]["newRoom"]}
                            comment={_data[i]["comments"]}
                            class={_data[i]["classes"]}
                            subject={_data[i]["subject"]}
                        />
                    </TouchableOpacity>
                );
        };
        if (tiles_array_today === undefined || tiles_array_today.length == 0) tiles_array_today.push(<Text key={1}>Keine Einträge unter diesem Filter.</Text>)
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
                        <Text style={styles.textDay}>{"Heute - "}{day}{","} {date}{":"}</Text>
                        <NewsTile text={news} style={styles.news} />
                        <ScrollView>
                            {load ? <ActivityIndicator /> : tiles_array_today}
                        </ScrollView>

                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
}
