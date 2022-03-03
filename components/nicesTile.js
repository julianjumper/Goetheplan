import React from "react";
import {
  Text,
  View,
  Dimensions,
  Platform,
  PixelRatio,
  Pressable,
} from "react-native";
import { stylesTile } from "../style/stylesTile";
import { B, I } from "./span";
import OmaScreen from "../screens/omaSheet";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const calcTileDimensions = (deviceWidth, deviceHeight, tpr) => {
  const padding = 10;
  const height = 67; // (deviceHeight / 14)
  // const width = (deviceWidth / 1.34)
  const width = deviceWidth / 1.2;
  return { width, height, padding };
};

const tileDimensions = calcTileDimensions(SCREEN_WIDTH, SCREEN_HEIGHT, 2);

function getType(type) {
  let _type = type;
  switch (type) {
    case "Unterricht geändert":
      return (_type = "Änderung");
    default:
      return _type;
  }
}

function getColor(kind) {
  let color = "orange";
  console.log(kind);
  switch (kind) {
    case "Entfall":
    case "EVA":
      return (color = "#F15141");
    case "Änderung":
    case "Sondereins.":
      return (color = "#FFED51");
    case "Vertr.": 
    case "S. Vertr.":
    case  "Mitbetr.":
      return (color = "#5BEC57");
    case "Veranst.": 
    case "Tausch":
    case "Verlegung":
      return (color = "#3C8CED");
    case "Raumänd.":
      return (color = "#FDA435");
    default:
      return (color = "orange");
  }
}

function normalizeFontSize(size) {
    return size * scale;
}

const Item = ({ width, height, padding, teacher, klasse, type, color, lessons }) => (
  <View
    style={[stylesTile.tile, { backgroundColor: color }]}
    width={width}
    height={height}
  >
    <View style={stylesTile.leftSection}>
      <View style={stylesTile.circle}>
        <Text style={{fontSize: normalizeFontSize(15), fontWeight: "bold"}}>{lessons}</Text>
      </View>
    </View>
    <View style={stylesTile.centerSection}>
      <Text>{type}</Text>
    </View>
    <View style={stylesTile.rightSection}></View>
  </View>
);

const Tile_ = (props) => {
  const kind = props.kind;
  const navigation = props.navigation;
  const klasse = props.class;
  const type = getType(props.kind);
  const color = getColor(type);
  const lessons = props.lessons;

  return (
    <TouchableOpacity
      onPress={() => navigation.push("OmaScreen", { class: props.class })}
    >
      {Item({
        ...tileDimensions,
        teacher: "Lehrer",
        klasse: klasse,
        type: type,
        color: color,
        lessons: lessons,
      })}
    </TouchableOpacity>
  );
};

export default Tile_;
