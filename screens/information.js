import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import LargeTile from '../components/largeTile'
import { styles } from '../style/styles'

const Information = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({ title: route.params.informations['subject'] })
    }, [navigation])

    return (
        <View style={styles.container}>
            <LargeTile
                key={route.params.number + 1}
                text={route.params.informations["absent"]}
                lessons={route.params.informations["lessons"]}
                kind={route.params.informations["type"]}
                room={route.params.informations["newRoom"]}
                comment={route.params.informations["comments"]}
                class={route.params.informations["classes"]}
                subject={route.params.informations["subject"]}
            />
        </View>
    )
}

export default Information
