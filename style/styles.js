import { StyleSheet } from "react-native";

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


export { styles, itemStyle };