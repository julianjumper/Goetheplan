// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI
// Well, not at that second: A dummy object is  initialized as 'plan'.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const plan = { "today": { "date": "8.10.2021", "day": "Freitag", "information": [{ "absent": "Go", "classes": "12", "comments": "", "lessons": "3 - 4", "newRoom": "021", "replacement": "+", "subject": "Gch2", "type": "EVA" }, { "absent": "Red, Eis, Ro, De, Ben, Bgf", "classes": "12", "comments": "GK Deu Klausur Q3", "lessons": "5", "newRoom": "202, 225, K01, 252, 251, 241", "replacement": "Red, Eis, Ro, De, Ben, Bgf", "subject": "", "type": "Veranst." }, { "absent": "Hz, Ra, Heh, Bal, MK", "classes": "12", "comments": "GK Deu Klausur Q3", "lessons": "6", "newRoom": "202, 225, K01, 252, 251", "replacement": "Hz, Ra, Heh, Bal, MK", "subject": "", "type": "Veranst." }, { "absent": "Fel", "classes": "", "comments": "Nachschreibearbeit Fr 7. Klassen", "lessons": "5", "newRoom": "253", "replacement": "Fel", "subject": "Team", "type": "Unterricht geändert" }, { "absent": "Go", "classes": "12", "comments": "", "lessons": "3 - 4", "newRoom": "021", "replacement": "+", "subject": "Gch2", "type": "EVA" }, { "absent": "Red, Eis, Ro, De, Ben, Bgf", "classes": "12", "comments": "GK Deu Klausur Q3", "lessons": "5", "newRoom": "202, 225, K01, 252, 251, 241", "replacement": "Red, Eis, Ro, De, Ben, Bgf", "subject": "", "type": "Veranst." }, { "absent": "Hz, Ra, Heh, Bal, MK", "classes": "12", "comments": "GK Deu Klausur Q3", "lessons": "6", "newRoom": "202, 225, K01, 252, 251", "replacement": "Hz, Ra, Heh, Bal, MK", "subject": "", "type": "Veranst." }, { "absent": "Fel", "classes": "", "comments": "Nachschreibearbeit Fr 7. Klassen", "lessons": "5", "newRoom": "253", "replacement": "Fel", "subject": "Team", "type": "Unterricht geändert" }], "news": ["Nachtestung: 1. Stunde Raum 133 oder draußen bei Frau Naatz (Na)"] } };
const plan_array_today = [];
const plan_array_today_text = [];

const plan_tomorrow = {"tomorrow":{"date":"25.10.2021","day":"Montag","information":[{"absent":"BW","classes":"8a, 8b,8c, 8d","comments":"","lessons":"6","newRoom":"154","replacement":"BW","subject":"ZesA8","type":"Unterricht geändert"},{"absent":"Bgf","classes":"8a, 8b,8c, 8d","comments":"","lessons":"6","newRoom":"233","replacement":"Bgf","subject":"ZesA8F","type":"Raumänd."},{"absent":"Bre","classes":"8b","comments":"Testung in 2. Stunde","lessons":"1","newRoom":"---","replacement":"---","subject":"Testen","type":"Entfall"},{"absent":"Bgf","classes":"8b","comments":"Testung in 2. Stunde","lessons":"2","newRoom":"101","replacement":"Bgf","subject":"Fr","type":"Raumänd."},{"absent":"Rie","classes":"8b","comments":"","lessons":"5","newRoom":"254","replacement":"Rie","subject":"En","type":"Raumänd."},{"absent":"Gka","classes":"11","comments":"","lessons":"3 - 4","newRoom":"101","replacement":"Gka","subject":"Gde1","type":"Raumänd."},{"absent":"Lu","classes":"11","comments":"","lessons":"5","newRoom":"K02","replacement":"Lu","subject":"LEN3","type":"Raumänd."},{"absent":"Nol","classes":"11, 10b,10a, 10d","comments":"","lessons":"9 - 11","newRoom":"Th","replacement":"Nol","subject":"Gds","type":"Raumänd."},{"absent":"Bal","classes":"11, 12","comments":"","lessons":"9 - 10","newRoom":"Th1","replacement":"Bal","subject":"Tanz","type":"Raumänd."},{"absent":"Kik","classes":"11, 12","comments":"","lessons":"9 - 10","newRoom":"Th2","replacement":"Kik","subject":"Bb","type":"Raumänd."},{"absent":"Frz","classes":"12","comments":"","lessons":"2","newRoom":"K02","replacement":"Frz","subject":"LDE1","type":"Raumänd."},{"absent":"Bre","classes":"12","comments":"","lessons":"3 - 4","newRoom":"252","replacement":"+","subject":"Gen1","type":"EVA"},{"absent":"","classes":"","comments":"Vorbespreung Vorleser des Vorlesetags","lessons":"7","newRoom":"031","replacement":"Gka","subject":"","type":"Sondereins."}],"news":["Vorbesprechung für Vorleser des Vorlesetages: heute 7. Stunde in Raum 031 mit Frau Galka"]}}
const plan_array_tomorrow = [];
const plan_array_tomorrow_text = [];

const createPlanToday = () => {
    for (let i = 0; i < plan.today.information.length; i++) {
        const plan_array = [];
        for (const [key, value] of Object.entries(plan.today.information[i])) {
            plan_array.push(value);
        }
        plan_array_today.push(plan_array);
    }

    for (let i = 0; i < plan.today.information.length; i++) {
        const plan_array_text = [];
        for (const [key, value] of Object.entries(plan.today.information[i])) {
            plan_array_text.push(<Text key={key}>{key} =        {value} </Text>);
        }
        plan_array_today_text.push(plan_array_text);
    }
};

createPlanToday();

const createPlanTomorrow = () => {
    for (let i = 0; i < plan_tomorrow.tomorrow.information.length; i++) {
        const plan_array = [];
        for (const [key, value] of Object.entries(plan_tomorrow.tomorrow.information[i])) {
            plan_array.push(value);
        }
        plan_array_tomorrow.push(plan_array);
    }

    for (let i = 0; i < plan_tomorrow.tomorrow.information.length; i++) {
        const plan_array_text = [];
        for (const [key, value] of Object.entries(plan_tomorrow.tomorrow.information[i])) {
            plan_array_text.push(<Text key={key}>{key} =        {value} </Text>);
        }
        plan_array_tomorrow_text.push(plan_array_text);
    }
};

createPlanTomorrow();

// console.log("LEHRER :: ", plan_array_today)

const plan_length = plan_array_today.length;
const plan_tomorrow_length = plan_array_tomorrow.length;

export { plan, plan_array_today, plan_array_today_text, plan_length, plan_array_tomorrow, plan_tomorrow_length };