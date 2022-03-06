import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import CalendarItem from '../components/CalendarItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';

function CalendarScreen(props) {
    const calendarItems = [
        {
            _id: 1,
            event: "Go to work",
            time: "10:10",
            description: "Get to work...,"
        },
        {
            _id: 2,
            event: "Go to bed",
            time: "20:00",
            description: "Get to bed...,"
        },
    ]
    return (
        <Screen>
            <View style={styles.container}>
                <FlatList 
                    data={calendarItems}
                    keyExtractor={calendarItem => calendarItem._id.toString()}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                    <CalendarItem
                        title={item.event}
                        time={item.time}
                        subTitle={item.description}

                    />}
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