import { setStatusBarTranslucent, StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  Alert,
  RefreshControl,
  Platform,
} from "react-native";
import { styles } from "../style/styles";
import Tile from "../components/tile";
import Tile_ from "../components/nicesTile";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import NewsTile from "../components/NewsTile";
import { useInternetStatus } from "../components/internetStatus";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _url, fetchEverything } from "../components/api";

const { width, height } = Dimensions.get("window");

export default function Home({ route, navigation }) {
  const url = _url;
  // const DAY = "today";
  const DAY = route.params.day;

  const [_value, setValue] = useState({});
  const isConnected = useInternetStatus();

  const [isModal, setModal] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const [apiData, setApiData] = useState({});
  const [update, setUpdate] = useState(0);
  const [classes, setClasses] = useState("---");
  const [day, setDay] = useState("-");
  const [date, setDate] = useState("xx.xx.xxxx");
  const [news, setNews] = useState("Keine Nachrichten.");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    startUp();
    const willFocusSubscription = navigation.addListener("focus", () => {
      () => setLoad(true);
      startUp();
    });
    return willFocusSubscription;
  }, [update, password, uname, isConnected]);

  function startUp() {
    getSavedLogin();
    if (uname === "" && password === "") return;
    fetchEverything(DAY, uname, password);
    getData();
    getSavedClass();
    initialiseTiles();
  }

  const getData = async () => {
    try {
      const _information = await AsyncStorage.getItem(`${DAY}_info`);
      const _day = await AsyncStorage.getItem(`${DAY}_day`);
      const _date = await AsyncStorage.getItem(`${DAY}_date`);
      const _news = await AsyncStorage.getItem(`${DAY}_news`);

      if (_information !== null && typeof _information !== "undefined") {
        setValue(() => JSON.parse(_information));
      }
      if (_day !== null && typeof _day !== "undefined") {
        setDay(() => JSON.parse(_day));
      }
      if (_date !== null && typeof _date !== "undefined") {
        setDate(() => JSON.parse(_date));
      }
      if (_news !== null && typeof _news !== "undefined") {
        setNews(() => JSON.parse(_news));
      }
    } catch (e) {
      console.warn("in getData:", e);
    }
  };

  async function getSavedLogin() {
    try {
      const value_uname = await AsyncStorage.getItem("username");
      const value_password = await AsyncStorage.getItem("password");
      if (value_uname !== null) {
        setApiData({});
        setUname(() => value_uname);
      } else {
        navigation.navigate("Landing");
        return {};
      }

      if (value_password !== null) {
        setPassword(() => value_password);
      } else {
        navigation.navigate("Landing");
        return {};
      }

      fetch(
        `${url}/timetables?username=${value_uname}&password=${value_password}`
      )
        .then((data) =>
          data.json().then((json) => {
            // .then( () => {} )
            if (json["status"] === false && isConnected) {
              navigation.navigate("Landing");
            }
          })
        )
        .catch((err) => {
          console.log("Catched:", err);
          if (isConnected) {
            Alert.alert(
              "Fehler",
              "Aufgrund eines Fehlers wirst du nun zum Login-Menü weitergeleitet."
            );
            navigation.navigate("Landing");
          }
        });
    } catch (e) {
      console.warn("ein getSavedLogin, line 81", e);
    }
  }

  const getSavedClass = async () => {
    try {
      const value = await AsyncStorage.getItem("class");
      if (value !== null) {
        setClasses(() => value);
      } else {
        return {};
      }
    } catch (e) {
      console.warn("e:", e);
    }
  };

  const initialiseTiles = () => {
    try {
      createTiles(_value);
    } catch (err) {
      alert(
        "Der Vertretungsplan konnte nicht geladen werden. Überprüfen Sie Ihre Netzwerkverbindung."
      );
    }
  };

  let tiles_array;
  let tiles_length;

  const createTiles = (_data) => {
    tiles_array = [];
    for (let i = 0; i < _data.length; i++) {
      if (_data[i]["classes"].includes(classes) || classes === "---")
        tiles_array.push(
          <TouchableOpacity
            key={i + 1}
            onPress={() => {
              // navigation.navigate("Information", { informations: _data[i], number: i });
              if (_data[i]["comments"] !== "") {
                Alert.alert("Bemerkung", _data[i]["comments"]);
              }
            }}
          >
            <Tile_
              key={i + 1}
              text={_data[i]["absent"]} // Abwesender Lehrer
              lessons={_data[i]["lessons"]} // Stunde (zeitlich)
              kind={_data[i]["type"]} // Art des Eintrags
              room={_data[i]["newRoom"]} // neuer Raum
              comment={_data[i]["comments"]} // Bemerkung
              class={_data[i]["classes"]} // Jahrgang / Klasse
              subject={_data[i]["subject"]} // Fach
              replacement={_data[i]["replacement"]} // Vertretung
              navigation={navigation}
            />
          </TouchableOpacity>
        );
    }
    if (
      (_data !== null || _data !== undefined) &&
      _data.length > 0 &&
      tiles_array.length === 0
    )
      tiles_array.push(
        <View key={1} style={{ alignItems: "center" }}>
          <Text key={1}>Keine Einträge für diese Klasse gefunden😓</Text>
        </View> // jaja i know, das mit den unique keys übe ich lieber noch mal.
      );
  };

  initialiseTiles();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
        <View style={[styles.icons, { top: Platform.OS === "android" ? height / 11.5 : height / 13, }]}>
          <Icon
            name="settings"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.header}>Vertretungsplan</Text>
          </View>
          <View style={styles.scrollWrapper}>
            {DAY === "today" ? (
              <Text style={styles.textDay}>
                {"Heute - "}
                {day}
                {","} {date}
                {":"}
              </Text>
            ) : (
              <Text style={styles.textDay}>
                {"Morgen - "}
                {day}
                {","} {date}
                {":"}
              </Text>
            )}
            <NewsTile text={news} style={styles.news} />
            <ScrollView
              refreshControl={
                <RefreshControl
                  tintColor="gray"
                  refreshing={refreshing}
                  onRefresh={() => setUpdate(update + 1)}
                />
              }
            >
              {tiles_array.length === 0 ? (
                <ActivityIndicator color="gray" />
              ) : (
                tiles_array
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
// () => {setUpdate(update + 1);
