import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { B, I } from "../components/span";
import { normalizeFontSize } from "../components/normalizeFont";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  BigContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  Container: {
    width: width / 1.15,
    height: (2 * height) / 3,
    borderRadius: 25,
    //  alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  subContainer: {
    flex: 0.7,
    justifyContent: "space-between",
  },
  header: {
    //  fontWeight: "bold",
    fontSize: normalizeFontSize(20),
  },
});

const OmaScreen = ({ navigation, route }) => {
  const color = route.params.color; // Farbe
  const klasse = route.params.klasse; // Klasse
  const type = route.params.type; // Art des Eintrags
  const lessons = route.params.lessons; // Stunde (zeitlich)
  const comment = route.params.comment; // Bemerkung
  const newRoom = route.params.newRoom; // neuer Raum
  const subject = route.params.subject; // Fach
  const absentTeacher = route.params.absentTeacher; // abwesender Lehrer
  const replacementTeacher = route.params.replacementTeacher; // Vertretungslehrer

  return (
    <View style={[styles.BigContainer, { backgroundColor: color }]}>
      <View style={styles.Container}>
        <View style={styles.subContainer}>
          <Text style={styles.header}>
            <B>Klasse:</B> {klasse}
          </Text>
          <Text style={styles.header}>
            <B>Stunde:</B> {lessons}
          </Text>
          <Text style={styles.header}>
            <B>Fach: </B>
            {subject}
          </Text>
          <Text style={styles.header}>
            <B>abwesender Lehrer:</B> {absentTeacher}
          </Text>
          <Text style={styles.header}>
            <B>Vertretungslehrer:</B> {replacementTeacher}
          </Text>
          <Text style={styles.header}>
            <B>neuer Raum:</B> {newRoom}
          </Text>
          <Text style={styles.header}>
            <B>Art:</B> {type}
          </Text>
          <Text style={styles.header}>
            <B>Bemerkung:</B> {comment.length > 0 ? comment : "\nkeine Bemerkung"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OmaScreen;
