// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI

import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://localhost:8080';
// const _url = 'http://localhost:8080'; // localhost 🏠
// const _url = 'http://192.168.178.23:8080' // Julians Mac 💻
const _url = 'http://xh41egfbstut8yca.myfritz.net:8080' // Johannes Pi 🍓
const url = `${baseUrl}/timetables?username=311441&password=schuleisttoll`;

function fetchEverything(day, uname, password) {
    if (uname === "" || password === "") return;
    fetch(`${_url}/timetables?username=${uname}&password=${password}`)
        .then(data => data.json()
            .then(json => { // .then( () => {} )
                // console.log("json:", json.today.day);
                //console.log("json:", json[day]["information"]);
                const information = json[day]["information"];
                const apiInfo = JSON.stringify(information);
                const apiDay = JSON.stringify(json[day]["day"]);
                const apiDate = JSON.stringify(json[day]["date"]);
                const apiNews = JSON.stringify(json[day]["news"]);
                try {
                    AsyncStorage.setItem(`${day}_info`, apiInfo);
                    AsyncStorage.setItem(`${day}_day`, apiDay);
                    AsyncStorage.setItem(`${day}_date`, apiDate);
                    AsyncStorage.setItem(`${day}_news`, apiNews);
                } catch (err) { console.warn("in asycn set: ", err) }
            })).catch(err => { console.log("Catched in fetchEverything:", err); }) // TODO: fix that it works wihtout restart    navigation.navigate("Landing")
}

export { baseUrl, _url, fetchEverything };
