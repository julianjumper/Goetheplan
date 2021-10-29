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
        marginBottom: 160,
    },
    textDay: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
});

const itemStyle = StyleSheet.create({
    item: {
        backgroundColor: 'orange',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    itemText: {
        fontSize: 12,
    },
    itemTeacher: {
        justifyContent: 'flex-start',
        marginRight: 0,
        marginTop: 5,
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

const modalStyle = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})


export { styles, itemStyle, modalStyle };