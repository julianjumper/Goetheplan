// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI
// Well, not at that second: A dummy object is  initialized as 'plan'.
import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, View, FlatList } from 'react-native';
import { checkConnection } from './checkInternet';
import DefaultPreference from 'react-native-default-preference';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://192.168.2.104:8080';
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
                }catch (err) { console.warn (err)}
                
            })
            .catch((err) => alert(err))
    }, []);
    
    return data;
};

const plan = require("./plan.json");


export { fetchData_today, plan };
