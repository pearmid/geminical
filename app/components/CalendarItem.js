import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function CalendarItem({title, time, subTitle: description, onPress, color = "primary"}){
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
        borderRadius: 25,
        flex: 1,
        justifyContent: 'center',
        marginVertical: 1,
        padding: 5,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    time: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 15,
        paddingLeft: 25,
    },
    description: {
        color: colors.white,
        fontSize: 10,
    }
})

export default CalendarItem;