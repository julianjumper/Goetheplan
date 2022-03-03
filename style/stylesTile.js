import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const stylesTile = StyleSheet.create({
  tile: {
    borderRadius: 20,
    marginBottom: 7,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  circle: {
    borderRadius: 100,
    backgroundColor: "white",
    width: width / 7,
    height: width / 7,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  leftSection: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  centerSection: {
    justifyContent: "center",
    alignContent: "center",
    //  backgroundColor: "gray",
    flex: 2.3,
  },
  centerSectionBox: {
      marginRight: width / 30
  },
  centerSectionText: {
    fontWeight: "bold",
  },
  centerSectionTextSecond: {
    fontWeight: "400",
  },
  rightSection: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "black",
  },
  rightSectionSubView: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeBox: {
    borderRadius: 100,
    backgroundColor: "white",
    width: width / 7,
    height: height / 35,
    // marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  typeBoxTextBox: {
    width: width / 9,
    height: height / 38,
    // marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  notificationDot: {
    borderRadius: 100,
    backgroundColor: "#FF9900",
    width: width / 50,
    height: width / 50,
    marginLeft: width / 100,
  },
});

export { stylesTile };
