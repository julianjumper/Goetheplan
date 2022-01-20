import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

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
    news: {
        marginRight: (width / 5)
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
    itemLarge: {
        // alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 8,
        borderRadius: 15,
        // flexDirection: 'row',
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
    itemCenter: {
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
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
    chooseClass: {
        fontSize: 15,
        paddingBottom: 5,
    },
    classWrapper: {
        alignItems: 'center',
    },
    headerWrapper2: {
        marginBottom: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrapperWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
    },
    pickerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width/3,
    },
    picker: {
        marginLeft: 50,
    },
    inputStyle: {
        width: width / 2,
    },
    button: {
        width: width / 4,
    },
    aboutPage: {
        position: 'absolute',
        bottom: height/20,
    },
});


const stylesLanding = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: height / 10
        // justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    },
    headerWrapper: {
        // marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header2: {
        fontWeight: "bold",
        fontSize: 20,
    },
    headerWrapper2: {
        marginBottom: 50,
        marginTop: height / 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrapperWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
    },
    pickerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        marginLeft: 50,
    },
    inputStyle: {
        width: width / 1.3,
    },
    button: {
        width: width / 4,
    },
    aboutPage: {
        position: 'absolute',
        top: height/10,
        right: width /10
    },
});

const stylesAbout = StyleSheet.create({
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
        marginTop: height/100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBody: {
        marginHorizontal: width/15,
    },
    bodyText: {
     //   textAlign: 'justify',
    },
    footer: {
        position: 'absolute',
        bottom: height/20,
    },
    footerText: {
        color: 'rgb(168,168,168)',
    },
    scroller: {
        marginBottom: height/6,
    }
});

const newsStyle = StyleSheet.create({
    newsWrapper: {
        justifyContent: 'center',
        margin: 5,
    },
    newsHeader: {
        fontWeight: 'bold',
    }
});


const largeTileStyle = StyleSheet.create({
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



export { styles, itemStyle, stylesSettings, newsStyle, stylesLanding, stylesAbout };