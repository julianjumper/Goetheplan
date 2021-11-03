// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI
// Well, not at that second: A dummy object is  initialized as 'plan'.
import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, View, FlatList } from 'react-native';

const baseUrl = 'http:localhost:8080';
const url = `${baseUrl}/timetables?username=311441&password=schuleisttoll`;

const fetchData_today = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {setData(json.today.information)})
            .catch((err) => alert(err))
    }, []);

    return data;
};

const fetchData_tomorrow = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setData(json.tomorrow.information))
            .catch((err) => alert(err))
            .finally(() => setLoading(false));
    }, []);

    return data;
};

const plan = require("./plan.json");


export { fetchData_today, fetchData_tomorrow, plan };
