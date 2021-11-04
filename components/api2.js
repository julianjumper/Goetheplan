import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, View, FlatList } from 'react-native';

const baseUrl = 'http://192.168.2.104:8080';
const url = `${baseUrl}/timetables?username=311441&password=schuleisttoll`;

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

export { fetchData_tomorrow };