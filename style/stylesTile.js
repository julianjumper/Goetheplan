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
        width: width/7,
        height: width/7,
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
        flex: 3,
    },
    rightSection: {
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
       // backgroundColor: "black",
    },
 });

 export { stylesTile };