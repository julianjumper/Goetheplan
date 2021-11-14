import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { itemStyle, newsStyle } from '../style/styles';
import { B, I } from './span';

const { width, height } = Dimensions.get("window");

const calcTileDimensions = (deviceWidth, deviceHeight, tpr) => {
    const padding = 10
    const height = 80 // (deviceHeight / 14)
    const width = (deviceWidth / 1.34)
    return { width, height, padding };
};

const tileDimensions = calcTileDimensions(width, height, 2);

const Item = ({ width, height, padding, text }) => (
    <View style={[itemStyle.item, { width: width, height: height, paddingHorizontal: padding, backgroundColor: "#ffad42" }]}>
        <View style={newsStyle.newsWrapper}>
            <Text style={newsStyle.newsHeader}>Nachricht des Tages:</Text>
            <ScrollView>
                <Text>{text}</Text>
            </ScrollView>
        </View>
    </View>
)

function getTilesSize(text) {
    if (text.length === 0) { return 45; }
    else { return 80; }
}

function getText(text) {
    if (text.length === 0) { return "Keine Nachrichten."; }
    else { return text }
}

const NewsTile = (props) => {

    let _size = tileDimensions.height;
    let _text = props.text;
    try {
        _size = getTilesSize(props.text);
        _text = getText(props.text);
    } catch (err) {
        console.warn(err)
    }

    return (
        <View>
            {Item({ width: tileDimensions.width, height: _size, padding: tileDimensions.padding, text: _text })}
        </View>
    )

}

export default NewsTile

