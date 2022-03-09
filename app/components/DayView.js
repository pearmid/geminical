import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppText from './AppText';

import CalendarItem from './CalendarItem';
import colors from '../config/colors';

/*
{
  id: '6cpjid3470om8b9mcgq66b9k6lhm4bb2cphjabb464p30pb4cpgm6p36cc',
  status: 'confirmed',
  created: '2020-04-30T11:32:03.000Z',
  updated: '2020-04-30T11:32:03.709Z',
  summary: 'Recycling',
  creator: { email: 'jody.pearson@gmail.com' },
  start: {
    dateTime: '2020-04-29T07:30:00-04:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2020-04-29T08:30:00-04:00',
    timeZone: 'America/New_York'
  },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=WE' ],
  reminders: { useDefault: false, overrides: [ [Object] ] },
  eventType: 'default'
}
*/


function DayView({calendarItems, day, numColumns}) {
    console.log(calendarItems[0]);
    return (
        <View style={styles.container}>
            <AppText style={styles.dayText}>{day}</AppText>

            <FlatList 
                data={calendarItems}
                listKey={day}
                numColumns={numColumns}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                <CalendarItem
                    title={item.summary}
                    time={item.start.dateTime}
                    subTitle={item.creator.email}
                    color={colors.primary}
                />
                }
            />
         </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }, 
    dayText: {
        fontSize: 10,
        color: "black",
        backgroundColor: colors.light,
    }
})
export default DayView;