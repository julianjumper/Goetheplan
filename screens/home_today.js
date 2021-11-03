import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { plan, fetchData_today } from '../components/api';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';

export default function Home_Today({ navigation }) {

    const tiles_array_today = []
    let data = 0;

    const [isLoading, setLoading] = useState(true);
    let load = true;

    const fetchData = () => {
        useEffect(() => {
            data = fetchData_today();
            console.log("bisschen fetchpen");
            () => setLoading(false);
        }, []);
    };

    const fetchData2 = () => {
        load = true;
        const _data = fetchData_today();
        return _data;
    };

    const createTiles2 = () => {
        // data = fetchData_today();
        data = fetchData2();
        for (let i = 0; i < data.length; i++) {
            if (data[i]["classes"] === "12" || data[i]["classes"] === "11, 12")
                tiles_array_today.push(<Tile
                    key={i + 1}
                    text={data[i]["replacement"]}
                    lessons={data[i]["lessons"]}
                    kind={data[i]["type"]}
                    room={data[i]["newRoom"]}
                    comment={data[i]["comments"]}
                    class={data[i]["classes"]}
                    subject={data[i]["subject"]}
                />);
        };
        console.warn("TYPE OF tiles_array_today", typeof tiles_array_today);
    };

    createTiles2();

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
                            { tiles_array_today }
                        </ScrollView>

                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
}

// {isLoading ? (<ActivityIndicator />) : ({ tiles_array_today })}
