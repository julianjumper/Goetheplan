import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { plan_array_today, plan_length } from './components/api';
import { styles } from './style/styles';
import Tile from './components/tile';
import { Icon } from 'react-native-elements';

export default function App() {

  const tiles_array_today = []
  const tiles_array_tomorrow = []

  const getPlans = () => {
    for (let i = 0; i < plan_length; i++) {
      tiles_array_today.push(<Tile key={i + 1} text={plan_array_today[i][0]} lessons={plan_array_today[i][3]} kind={plan_array_today[i][7]} room={plan_array_today[i][4]} comment={plan_array_today[i][2]}></Tile>)
    }

    for (let i = 0; i < plan_length; i++) {
      tiles_array_tomorrow.push(<Tile key={i + 1} text={plan_array_today[i][0]} lessons={plan_array_today[i][3]} kind={plan_array_today[i][7]} room={plan_array_today[i][4]} comment={plan_array_today[i][2]}></Tile>) // props needs to be changed to plan_array_tomorrow, as soon as it is available
    }
  };

  getPlans();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: 'flex-end', marginLeft: 300, marginTop: 60, opacity: 0.8 }}>
          <Icon name='settings' />
        </View>
        <StatusBar style="auto" />
        <View style={styles.wrapper}>
          <Text style={styles.header}>Vertretungsplan</Text>
          <View style={styles.scrollWrapper}>

            <Text style={styles.textDay}>Heute:</Text>
            <ScrollView>
              {tiles_array_today}
            </ScrollView>

            <Text style={styles.textDay}>Morgen:</Text>
            <ScrollView>
              {tiles_array_tomorrow}
            </ScrollView>

          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

