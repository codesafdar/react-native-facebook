import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

const Jobs = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                This is Jobs screen
            </Text>
        </View>
    )
}

export default Jobs


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '700'
    }
})