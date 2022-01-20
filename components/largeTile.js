import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { itemStyle } from '../style/styles';
import { B, I } from './span';

const { width, height } = Dimensions.get("window");

const calcTileDimensions = (deviceWidth, deviceHeight, tpr) => {
    const padding = 10
    const height = deviceHeight / 2 // (deviceHeight / 14)
    const width = (deviceWidth / 1.34)
    return { width, height, padding };
};

const tileDimensions = calcTileDimensions(width, height, 2);

function getCommentText(comment) {
    let placeholder = "";
    if (comment != "") {
        return (
            <Text style={itemStyle.itemText}><B>Bemerkung:</B> {comment} </Text>
        );
    } else {
        <Text style={itemStyle.itemText}> {comment} </Text>
    }
}



function getRoomText(room) {
    if (typeof room != 'undefined') {
        return (
            <Text style={itemStyle.itemText}><B>neuer Raum:</B> {room} </Text>
        );
    } else {
        if (room = "---") {
            return <Text style={itemStyle.itemText}><B>neuer Raum:</B> {room} </Text>
        } else {
            return <Text style={itemStyle.itemText}><B>neuer Raum:</B> {room} </Text>
        }
    }
}

function getOnlyOneTeacher(teacher) {
    if (teacher.search(",") > 0) {
        teacher = teacher.split(",");
        // return teacher[0] + " und weitere";
        return teacher[0] + ", ...";
    }
    return teacher;
}

function getOnlyOneRoom(room) {
    if (room.search(",") > 0) {
        room = room.split(",");
        return room[0] + ", ...";
    } else {
        return room;
    }
}

function getSubject(subject) {
    if (subject == "") {
        return "geändert"
    } else {
        return subject;
    }
}

function getColor(kind) {
    let color = "orange";
    switch (kind) {
        case "EVA":
            return color = "#FF6262";
        case "Änderung":
            return color = "#A6A3A3";
        case "Vertretung":
            return color = "#4DB2F5";
        case "Veranst.":
            return color = "pink";
        case "Raumänd.":
            return color = "#4DB2F5";
        case "Sondereins.":
            return color = "#FFFF89";
        case "Entfall":
            return color = "#FF6262";
        case "Vertr.":
            return color = "#8DFF89";
        default:
            return color = "orange";
    }
}

function measureSize(kind) {
    let fontSize;
    switch (kind) {
        case "EVA":
            fontSize = 14;
            break;
        case "Änderung":
            fontSize = 9;
            break;
        case "Vertretung":
            fontSize = 9;
            break;
        case "Veranst.":
            fontSize = 11;
            break;
        case "Raumänd.":
            fontSize = 9;
            break;
        case "Sondereins.":
            fontSize = 7;
            break;
        default:
            fontSize = 12;
    }
    return fontSize
}

const Item = ({ width, height, padding, text, lessons, kind, kind_text_size, room, comment, _class, subject, color }) => (
    <View style={[itemStyle.itemLarge, { width: width, height: height, paddingHorizontal: padding, backgroundColor: color }]}>

        <View style={{ marginTop: height / 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <View style={[itemStyle.itemCircle, { width: height / 7, height: height / 13 }]}>
                    <Text style={itemStyle.lessonText}>{lessons}</Text>
                </View>
                <View style={[itemStyle.itemCircle, { width: height / 5, height: height / 13 }]}>
                    <Text style={itemStyle.lessonText}>{subject}</Text>
                </View>
                <View style={itemStyle.kindContainer}>
                    <Text style={[itemStyle.kindText], { fontSize: kind_text_size, fontWeight: 'bold', }}>{kind}</Text>
                </View>
            </View>



        </View>
        <View style={[itemStyle.itemCenter, { width: width / 2.3 },]}>
            <Text style={itemStyle.itemText}><B>Klasse:</B> {_class}</Text>
            <Text style={itemStyle.itemText}><B>Fach:</B> {subject}</Text>
            <Text style={itemStyle.itemText}><B>Lehrer:</B> {text}</Text>
            {room}
            <Text style={itemStyle.itemText}><B>Bemerkung:</B> {comment}</Text>
        </View>
    </View>
)

const LargeTile = (props) => {
    let _kind = props.kind;
    if (props.kind === "Unterricht geändert") {
        _kind = "Änderung";
    }
    let _comment = getCommentText(props.comment);
    let _room = getOnlyOneRoom(props.room);
    _room = getRoomText(_room);
    const kind_text_size = measureSize(_kind);
    let _teacher = getOnlyOneTeacher(props.text);
    let _subject = getSubject(props.subject);
    let _color = getColor(_kind);

    return (
        <View>
            {Item({ ...tileDimensions, text: _teacher, lessons: props.lessons, kind: _kind, kind_text_size: kind_text_size, room: _room, comment: _comment, _class: props.class, subject: _subject, color: _color })}
        </View>
    )
}

export default LargeTile

