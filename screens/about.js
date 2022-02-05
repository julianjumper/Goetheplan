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
                        und den Schülerinnen und Schülern bzw. den Lehrerinnen und Lehrern des Goethe-Gymnsiums zur Verfügung zu stellen,
                        damit nicht auch ihr das gleiche Leiden durchleben müsst, wie wir es tagtäglich taten.
                        {'\n'}
                        Die App brachte viele Herausforderungen mit sich; daher teilten wir uns auf: {"\n"}
                        Fredrik entwickelte die nötige Programmierschnittstelle, die alle nötigen Informationen aus dem originalen Vertretungsplan ausließt. Er kümmerte sich also um das sogenannte "Backend" - also darum, dass alle wichtigen Informationen zur Verfügung stehen und dann in der App angezeigt werden können. 
                        {'\n'}

                        Die App selbst - das sogenannte "Frontend", also das was ihr benutzen könnt und auf eurem Handy installiert habt - wurde dann von Julian entwickelt. Die App liest die von Fredrik bearbeiteten Daten ein und präsentiert diese dann.
                        {'\n'}
                        Fredrik und Julian waren bis Abitur 2022 Schüler des Goethe-Gymnasiums.
                        {'\n'}
                        {'\n'}



                        <B>Danke an alle Beteiligten</B> für die Untersützung. Insbesondere Gordana Skoric-Knabe (Unterstützung bürokratischer Seite; die Kommunikation mit den IT-Unternehmen tut sich nicht jeder freiwillig an...), Johannes Foltin (Schüler unseres Jahrgangs; Verfügungstellung eines Servers für Testzwecke) und nicht zuletzt die Schulleitung Eva Frederichs. Wer hätte jemals erwarten können, dass eine deutsche Schule, so digital fähig sein kann.❤️

                        {'\n'}
                        {'\n'}{'\n'}{'\n'}

                        <B>Datenschutzerklärung gemäß §13, TMG</B>
                        {'\n'}
                        Bei der gesamten Nutzung der 'GoehteVertretungsplan'-Anwendung werden zu keinem Zeitpunkt etwaige personenbezogene Daten erhoben.
                        {'\n'}
                       
                        <B>Wichtig:</B> Auf keinerlei Daten besteht ein etwaiges Urheberrecht, da sie für jeden Nutzer frei einsehbar sind. Das gilt insbesondere auf die durch die API gewonnenen Daten.

                        {'\n'}{'\n'}

                        <B>Impressum</B>{'\n'}

                        Angaben gemäß § 5 TMG{'\n'}
                        {'\n'}
                        Julian Springer & Fredrik Borck{'\n'}
                        Drakestraße 72{'\n'}
                        12205 Berlin{'\n'}
                        (Adresse des Goethe-Gymnasiums){'\n'}{'\n'}
                        Kontakt:{'\n'}
                        Telefon: +49 15161495657{'\n'}
                        E-Mail: goethevertretungsplan@gmail.com{'\n'}

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
