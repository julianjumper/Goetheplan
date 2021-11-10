import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { plan } from '../components/api';
import { fetchData_tomorrow } from '../components/api';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';

export default function Home_Tomorrow({ navigation }) {

    const tiles_array_tomorrow = []

    let load = true;

    const fetchData = () => {
        load = true;
        const _data = fetchData_tomorrow();
        return _data;
    };

    const createTiles = (_data) => {
        try {
            const data = fetchData();
            for (let i = 0; i < data.length; i++) {
                if (data[i]["classes"] === "12" || data[i]["classes"] === "11, 12") {
                    tiles_array_tomorrow.push(<Tile
                        key={i + 1}
                        text={data[i]["absent"]}
                        lessons={data[i]["lessons"]}
                        kind={data[i]["type"]}
                        room={data[i]["newRoom"]}
                        comment={data[i]["comments"]}
                        class={data[i]["classes"]}
                        subject={data[i]["subject"]}
                    />);
                }
            };
        } catch (err) {
            alert("Der Vertretungsplan konnte nicht geladen werden. Überprüfen Sie Ihre Netzwerkverbindung.");
        }
        load = false;
    };

    createTiles();


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

                        <Text style={styles.textDay}>Morgen:</Text>
                        <ScrollView>
                            {load ? <ActivityIndicator /> : tiles_array_tomorrow}
                        </ScrollView>

                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

