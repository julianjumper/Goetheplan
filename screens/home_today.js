import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { plan } from '../components/api';
import { styles } from '../style/styles';
import Tile from '../components/tile';
import { Icon } from 'react-native-elements';

export default function Home_Today({ navigation }) {

    const tiles_array_today = []

    const createTiles = () => {
        const planInfo = plan.today.information;
        for (let i = 0; i < planInfo.length; i++) {
            if (planInfo[i]["classes"] === "12" || planInfo[i]["classes"] === "11, 12")
            tiles_array_today.push(<Tile 
                key={i + 1} 
                text={planInfo[i]["replacement"]} 
                lessons={planInfo[i]["lessons"]} 
                kind={planInfo[i]["type"]}
                room={planInfo[i]["newRoom"]}
                comment={planInfo[i]["comments"]}
                class={planInfo[i]["classes"]}
                subject={planInfo[i]["subject"]}
            />);
        };
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
                    <Text style={styles.header}>GoethePlan</Text>
                    <View style={styles.scrollWrapper}>

                        <Text style={styles.textDay}>Heute:</Text>
                        <ScrollView>
                            {tiles_array_today}
                        </ScrollView>

                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

