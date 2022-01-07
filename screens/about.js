import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { stylesAbout } from '../style/styles'
import { B, I } from '../components/span'
import { WebView } from 'react-native-webview';

const About = () => {
    return (
        <View style={stylesAbout.container}>
            <View style={stylesAbout.headerWrapper}>
                <Text style={stylesAbout.header}>Über uns</Text>
            </View>
            <View style={{ flex: 1 }}>
            </View>
            <View style={stylesAbout.textBody}>
                <ScrollView style={stylesAbout.scroller}>

                    <Text style={stylesAbout.bodyText}>
                        Ausgelöst durch regelmäßige Genervtheit bei der Nutzung der ursprünglichen Vertretungsplan-App, kam uns -
                        Fredrik Borck und Julian Springer - die Idee ganz schnell, eine eigene, bessere Alternative zu entwickeln
                        und den Schülerinnen und Schüler bzw. den Lehrerinnen und Lehrer des Goethe-Gymnsiums zur Verfügung zu stellen,
                        damit nicht auch ihr das gleiche Leiden durchleben müsst, wie wir es tagtäglich taten.
                        {'\n'}
                        Die App brachte viele Herausforderungen mit sich; daher teilten wir uns auf: {"\n"}
                        Fredrik entwickelte die nötige Programmierschnittstelle, die alle nötigen Informationen aus dem originalen Vertretungsplan
                        ausließt. Er kümmerte sich also darum, dass alle wichtigen Informationen zur Verfügung stehen und dann in der App angezeigt werden können.
                        Die App selbst wurde dann von Julian entwickelt. Die App liest die von Fredrik bearbeiteten Daten ein und präsentiert diese dann.
                        {'\n'}
                        Fredrik und Julian waren bis Abitur 2022 Schüler des Goehte-Gymnasiums.
                        {'\n'}
                        {'\n'}

                        <B>Wichtig:</B> Diese App fungiert als eine Art "Reader" der für DSB-Mobile® gespeicherten Daten. Auf diesen Daten besteht kein Urheberrecht, da sie für jeden Nutzer frei einsehbar sind.
                        {'\n'}

                        <B>Danke an alle Beteiligten</B> für die Untersützung. Wer hätte jemals erwarten können, dass eine deutsche Schule, so digital fähig sein kann.😘
                    </Text>
                </ScrollView>
            </View>
            <View style={stylesAbout.footer}>
                <Text style={stylesAbout.footerText}>© Fredrik Borck & Julian Springer</Text>
            </View>
        </View>

    )
}

export default About
