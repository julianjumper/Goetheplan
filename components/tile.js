import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { itemStyle } from '../style/styles';
import { B, I } from './span';

const { width, height } = Dimensions.get("window");

const calcTileDimensions = (deviceWidth, deviceHeight, tpr) => {
    const padding = 10
    const height = (deviceHeight / 15)
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
        room = "---";
        return <Text style={itemStyle.itemText}><B>neuer Raum:</B> {room} </Text>
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

const Item = ({ width, height, padding, text, lessons, kind, kind_text_size, room, comment, _class }) => (
    <View style={[itemStyle.item, { width: width, height: height, paddingHorizontal: padding }]}>
        <View style={{ justifyContent: "center" }}>
            <View style={[itemStyle.itemCircle, { width: height - 10, height: height - 10 }]}>
                <Text style={itemStyle.lessonText}>{lessons}</Text>
            </View>
        </View>
        <View style={[itemStyle.itemTeacher, { width: width / 1.9 },]}>
            <Text style={itemStyle.itemText}><B>Klasse:</B> {_class}</Text>
            <Text style={itemStyle.itemText}><B>Lehrer:</B> {text}</Text>
            {room}
        </View>
        <View style={{ justifyContent: "center" }}>
            <View style={itemStyle.kindContainer}>
                <Text style={[itemStyle.kindText], { fontSize: kind_text_size, fontWeight: 'bold', }}>{kind}</Text>
            </View>
        </View>
    </View>
)

const Tile = (props) => {
    let _kind = props.kind;
    if (props.kind === "Unterricht geändert") {
        _kind = "Änderung";
    }
    let _comment = getCommentText(props.comment);
    let _room = getOnlyOneRoom(props.room);
    _room = getRoomText(_room);
    const kind_text_size = measureSize(_kind);
    let _teacher = getOnlyOneTeacher(props.text);

    return (
        <View>
            {Item({ ...tileDimensions, text: _teacher, lessons: props.lessons, kind: _kind, kind_text_size: kind_text_size, room: _room, comment: _comment, _class: props.class })}
        </View>
    )
}

export default Tile

