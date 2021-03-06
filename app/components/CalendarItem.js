import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function CalendarItem({title, time, subTitle: description, onPress, color = "primary"}){
    console.log("CI: " + title + description + time);
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <View style={{flexDirection: "row"}} >
                <Text style={styles.time}>{time}</Text>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        marginVertical: 1,
        padding: 5,
    },
    title: {
        color: colors.black,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    time: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 5,
    },
    description: {
        color: colors.white,
        fontSize: 10,
    }
})

export default CalendarItem;