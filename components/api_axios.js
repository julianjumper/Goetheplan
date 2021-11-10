import React, { useState, useEffect } from 'react';
import axios from 'axios';
// http://localhost:8080/timetables?username=311441&password=schuleisttoll

const baseUrl = 'http:localhost:8080';

const fetchApi = () => {
    console.log("in fetchApi ::")
    const url = `${baseUrl}/timetables?username=311441&password=schuleisttoll`;
    const [data_, setData_] = useState({});
    useEffect(() => {
        axios.get(url).then((res) => {
            setData_(res.data.today);
        });
    }, [url]);
    return data_;
};

export { fetchApi };