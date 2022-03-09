import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import DayView from '../components/DayView';
import Screen from '../components/Screen';

import { getEvents } from '../fakeBackend/fakeCalendar';

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



function CalendarScreen(props) {
    const events = getEvents();
    const days = [{
        day: 1,
        calendarItems: events,
    }]
    return (
        <Screen>
            <View style={styles.container}>
                <FlatList 
                    data={days}
                    numColumns={3}
                    keyExtractor={item => item.day.toString()}
                    renderItem={({ item }) => 
                        <DayView
                            calendarItems={item.calendarItems}
                            day={item.day}
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