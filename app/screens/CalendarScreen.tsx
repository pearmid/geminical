import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CalendarItem from '../components/CalendarItem';
import Screen from '../components/Screen';

function CalendarScreen(props) {
    const calendarItems = [
                {
                    _id: 1,
                    event: "Go to work",
                    time: "10:10",
                    description: "Get to work...,",
                    color: 'primary'
                },
                {
                    _id: 2,
                    event: "Go to bed",
                    time: "20:00",
                    description: "Get to bed...,",
                    color: 'secondary'
                },
    ]
    return (
        <Screen>
            <View style={styles.container}>
                <FlatList 
                    data={calendarItems}
                    keyExtractor={item => item._id.toString()}
                    renderItem={({ item }) =>
                    <CalendarItem
                        title={item.event}
                        time={item.time}
                        subTitle={item.description}
                        color={item.color}
                    />
    }
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }    
})
export default CalendarScreen;