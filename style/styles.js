import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    },
    wrapper: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollWrapper: {
        marginTop: 20,
        marginBottom: 180,
    },
    textDay: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
});

const itemStyle = StyleSheet.create({
    item: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        borderRadius: 15,
        flexDirection: 'row',
    },
    itemText: {
        // color: "white",
        fontSize: 12,
    },
    itemTeacher: {
        // justifyContent: 'flex-start',
        justifyContent: 'center',
        marginRight: 0,
        marginTop: 0,
    },
    itemCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        marginRight: 0,
    },
    lessonText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    kindContainer: {
        backgroundColor: 'white',
        width: 50,
        height: 25,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    kindText: {
        fontWeight: 'bold',
    }
});

const stylesSettings = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    },
    headerWrapper: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header2: {
        fontWeight: "bold",
        fontSize: 20,
    },
    headerWrapper2: {
        marginBottom: 50,
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    headerWrapperWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    pickerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        marginLeft: 50,
    }
});

export { styles, itemStyle, stylesSettings };