// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI
// Well, not at that second: A dummy object is  initialized as 'plan'.
import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, View, FlatList } from 'react-native';
import { checkConnection } from './checkInternet';
import DefaultPreference from 'react-native-default-preference';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://localhost:8080';
// const baseUrl = 'http://192.168.178.174:8080';
// const baseUrl = 'http://192.168.8.154:8080';
const _url = 'http://192.168.178.48:8080';
const url = `${baseUrl}/timetables?username=311441&password=schuleisttoll`;

const fetchData_today = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json.today.information);
                const jsonData = JSON.stringify(data);
                try {
                    AsyncStorage.setItem('@storage_Key', jsonData);
                } catch (err) { console.warn("in asycn set: ", err) }

            })
            .catch((err) => { 
                console.warn("API gecatcht. Vermutlich kein Internet."); 
                alert("1"); 
            });
    }, []);

    return data;
};

const fetchData_tomorrow = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json.tomorrow.information);
                const jsonData = JSON.stringify(data);
                try {
                    AsyncStorage.setItem('@storage_Key_tomorrow', jsonData);
                } catch (err) { console.warn("in asycn set: ", err) }

            })
            .catch((err) => { 
                console.warn("API gecatcht. Vermutlich kein Internet."); 
                alert("1"); 
            });
    }, []);

    return data;
};


const plan = require("./plan.json");


export { fetchData_today, fetchData_tomorrow, plan, baseUrl, _url };
