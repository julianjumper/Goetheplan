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
import { normalizeFontSize } from "./normalizeFont";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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
  switch (kind) {
    case "Entfall":
    case "EVA":
      return (color = "#F15141");
    case "Änderung":
    case "Sondereins.":
      return (color = "#FFED51");
    case "Vertr.":
    case "S. Vertr.":
    case "Mitbetr.":
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

function generateCenteredContent(
  klasse,
  subject,
  newRoom,
  replacementTeacher,
  type,
  absentTeacher
) {
  switch (type) {
    case "Entfall":
    case "EVA":
      return (
        <View style={stylesTile.centerSectionBox}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionText,
              { fontSize: normalizeFontSize(15) },
            ]}
          >
            {klasse} - {subject}
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionTextSecond,
              { fontSize: normalizeFontSize(13) },
            ]}
          >
            <B>Abwesend:</B> {absentTeacher}
          </Text>
        </View>
      );
    case "Änderung":
    case "Sondereins.":
      return (
        <View style={stylesTile.centerSectionBox}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionText,
              { fontSize: normalizeFontSize(15) },
            ]}
          >
            {klasse} - {subject}
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionTextSecond,
              { fontSize: normalizeFontSize(13) },
            ]}
          >
            Siehe Bemerkung
          </Text>
        </View>
      );
    case "Vertr.":
    case "S. Vertr.":
    case "Mitbetr.":
      return (
        <View style={stylesTile.centerSectionBox}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionText,
              { fontSize: normalizeFontSize(15) },
            ]}
          >
            {klasse} - {subject}
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionTextSecond,
              { fontSize: normalizeFontSize(13) },
            ]}
          >
            <B>Vertretung:</B> {replacementTeacher}
          </Text>
        </View>
      );
    case "Veranst.":
    case "Tausch":
    case "Verlegung":
      return (
        <View style={stylesTile.centerSectionBox}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionText,
              { fontSize: normalizeFontSize(15) },
            ]}
          >
            Klasse: {klasse}
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionTextSecond,
              { fontSize: normalizeFontSize(13) },
            ]}
          >
            <B>Fach:</B> {subject}
          </Text>
        </View>
      );
    case "Raumänd.":
      return (
        <View style={stylesTile.centerSectionBox}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionText,
              { fontSize: normalizeFontSize(15) },
            ]}
          >
            {klasse} - {subject}
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              stylesTile.centerSectionTextSecond,
              { fontSize: normalizeFontSize(13) },
            ]}
          >
            <B>neuer Raum:</B> {newRoom}
          </Text>
        </View>
      );
    default:
      return <View></View>;
  }
}

const Item = ({
  width,
  height,
  padding,
  replacementTeacher,
  klasse,
  type,
  color,
  lessons,
  comment,
  subject,
  newRoom,
  absentTeacher,
}) => (
  <View
    style={[stylesTile.tile, { backgroundColor: color }]}
    width={width}
    height={height}
  >
    <View style={stylesTile.leftSection}>
      <View style={stylesTile.circle}>
        <Text style={{ fontSize: normalizeFontSize(15), fontWeight: "bold" }}>
          {lessons}
        </Text>
      </View>
    </View>
    <View style={stylesTile.centerSection}>
      {generateCenteredContent(
        klasse,
        subject,
        newRoom,
        replacementTeacher,
        type,
        absentTeacher
      )}
    </View>
    <View style={stylesTile.rightSection}>
      <View style={stylesTile.rightSectionSubView}>
        <View style={stylesTile.typeBox}>
          <View style={stylesTile.typeBoxTextBox}>
            <Text
              adjustsFontSizeToFit={true}
              allowFontScaling={true}
              numberOfLines={1}
              style={{ fontWeight: "bold" }}
            >
              {type}
            </Text>
          </View>
        </View>
        {comment.length > 0 ? (
          <View style={stylesTile.notificationDot}></View>
        ) : null}
      </View>
    </View>
  </View>
);

const Tile_ = (props) => {
  const navigation = props.navigation;
  const klasse = props.class; // Jahrgang / Klasse
  const type = getType(props.kind); // Art des Eintrags
  const color = getColor(type);
  const lessons = props.lessons; // Stunde (zeitlich)
  const comment = props.comment; // Bemerkungen
  const newRoom = props.room; // neuer Raum
  const subject = props.subject; // Fach
  const absentTeacher = props.text; // Abwesender Lehrer
  const replacementTeacher = props.replacement; // Vertretungslehrer

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("OmaScreen", {
          klasse: klasse,
          color: color,
          type: type,
          lessons: lessons,
          comment: comment,
          newRoom: newRoom,
          subject: subject,
          absentTeacher: absentTeacher,
          replacementTeacher: replacementTeacher,
        })
      }
    >
      {Item({
        ...tileDimensions,
        replacementTeacher: replacementTeacher,
        klasse: klasse,
        type: type,
        color: color,
        lessons: lessons,
        comment: comment,
        subject: subject,
        newRoom: newRoom,
        absentTeacher: absentTeacher,
      })}
    </TouchableOpacity>
  );
};

export default Tile_;
