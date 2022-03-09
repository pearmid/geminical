const events = [
    {   day: 1,
        calendarItems: [
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
            {
                _id: 3,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 4,
                event: "Go to work",
                time: "07:00",
                description: "Get to work..,",
                color: 'secondary'
            },
        ]
    },
    {   day: 2,
        calendarItems: [
            {
                _id: 5,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 6,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 7,
                event: "Go to work",
                time: "07:00",
                description: "Get to work..,",
                color: 'secondary'
            },
        ]
    },
    {   day: 3,
        calendarItems: [
            {
                _id: 8,
                event: "Go to work",
                time: "10:10",
                description: "Get to work...,",
                color: 'primary'
            },
            {
                _id: 9,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 10,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 11,
                event: "Go to work",
                time: "07:00",
                description: "Get to work..,",
                color: 'secondary'
            },
        ]
    },
    {   day: 4,
        calendarItems: [
            {
                _id: 12,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 13,
                event: "Go to bed",
                time: "20:00",
                description: "Get to bed...,",
                color: 'secondary'
            },
            {
                _id: 14,
                event: "Go to work",
                time: "07:00",
                description: "Get to work..,",
                color: 'secondary'
            },
        ]
    },
    {   day: 5,
        calendarItems: [
            {
                _id: 15,
                event: "Go to work",
                time: "10:10",
                description: "Get to work...,",
                color: 'primary'
            },
        ]
    }
]

const gevents = [
{
  kind: 'calendar#event',
  etag: '"3176492647334000"',
  id: '6cpjid3470om8b9mcgq66b9k6lhm4bb2cphjabb464p30pb4cpgm6p36cc',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NmNwamlkMzQ3MG9tOGI5bWNncTY2YjlrNmxobTRiYjJjcGhqYWJiNDY0cDMwcGI0Y3BnbTZwMzZjY18yMDIwMDQyOVQxMTMwMDBaIGlhdW1kZ2llcmJyNmcwY2s4Nmw3aG1ucWk0QGc',
  created: '2020-04-30T11:32:03.000Z',
  updated: '2020-04-30T11:32:03.709Z',
  summary: 'Recycling',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2020-04-29T07:30:00-04:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2020-04-29T08:30:00-04:00',
    timeZone: 'America/New_York'
  },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=WE' ],
  iCalUID: '6cpjid3470om8b9mcgq66b9k6lhm4bb2cphjabb464p30pb4cpgm6p36cc@google.com',   
  sequence: 0,
  reminders: { useDefault: false, overrides: [ [Object] ] },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3176492762984000"',
  id: '6cp38c1l75gj6b9ocdi3ib9kc8pmab9o68pmcbb3c4sjid1h61h62dr260',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NmNwMzhjMWw3NWdqNmI5b2NkaTNpYjlrYzhwbWFiOW82OHBtY2JiM2M0c2ppZDFoNjFoNjJkcjI2MF8yMDIwMDQyN1QxMjAxMDBaIGlhdW1kZ2llcmJyNmcwY2s4Nmw3aG1ucWk0QGc',
  created: '2020-04-30T11:33:01.000Z',
  updated: '2020-04-30T11:33:01.531Z',
  summary: 'Take trash out',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2020-04-27T08:01:00-04:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2020-04-27T09:01:00-04:00',
    timeZone: 'America/New_York'
  },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=MO' ],
  iCalUID: '6cp38c1l75gj6b9ocdi3ib9kc8pmab9o68pmcbb3c4sjid1h61h62dr260@google.com',   
  sequence: 0,
  reminders: { useDefault: false, overrides: [ [Object] ] },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3257241455118000"',
  id: 'rga5jp04j0c78ings92961tv1g',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=cmdhNWpwMDRqMGM3OGluZ3M5Mjk2MXR2MWdfMjAyMTEwMDRUMjIwMDAwWiBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2021-08-10T18:38:47.000Z',
  updated: '2021-08-10T18:38:47.559Z',
  summary: 'PVWC Board Meeting',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2021-10-04T18:00:00-04:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2021-10-04T19:00:00-04:00',
    timeZone: 'America/New_York'
  },
  recurrence: [ 'RRULE:FREQ=MONTHLY;BYDAY=1MO' ],
  iCalUID: 'rga5jp04j0c78ings92961tv1g@google.com',
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3261003323268000"',
  id: 'cgs30phg6di34b9n6so3eb9kcgs38b9oclh34bb2cgq6cd1j65ij6dppc8',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=Y2dzMzBwaGc2ZGkzNGI5bjZzbzNlYjlrY2dzMzhiOW9jbGgzNGJiMmNncTZjZDFqNjVpajZkcHBjOCBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2021-09-01T13:07:41.000Z',
  updated: '2021-09-01T13:07:41.634Z',
  summary: 'Dr pubi',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-02T08:45:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-02T09:45:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: 'cgs30phg6di34b9n6so3eb9kcgs38b9oclh34bb2cgq6cd1j65ij6dppc8@google.com',   
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3275870738594000"',
  id: '3p1026srev0h5q7g36iui65orc',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=M3AxMDI2c3JldjBoNXE3ZzM2aXVpNjVvcmNfMjAyMTExMTkgaWF1bWRnaWVyYnI2ZzBjazg2bDdobW5xaTRAZw',
  created: '2021-11-15T18:51:01.000Z',
  updated: '2021-11-26T14:02:49.297Z',
  summary: 'Wegovy',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: { date: '2021-11-19' },
  end: { date: '2021-11-20' },
  recurrence: [ 'RRULE:FREQ=WEEKLY' ],
  transparency: 'transparent',
  iCalUID: '3p1026srev0h5q7g36iui65orc@google.com',
  sequence: 0,
  reminders: { useDefault: false },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3276239570786000"',
  id: '6cr6cdr2cpj3ib9h6kr30b9k61j32b9p69hjib9j68p34d36c9i64d1gck',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NmNyNmNkcjJjcGozaWI5aDZrcjMwYjlrNjFqMzJiOXA2OWhqaWI5ajY4cDM0ZDM2YzlpNjRkMWdja18yMDIxMTEyOFQxODAwMDBaIGlhdW1kZ2llcmJyNmcwY2s4Nmw3aG1ucWk0QGc',
  created: '2021-11-28T17:16:25.000Z',
  updated: '2021-11-28T17:16:25.393Z',
  summary: 'Skype arik',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: { dateTime: '2021-11-28T13:00:00-05:00', timeZone: 'Europe/London' },        
  end: { dateTime: '2021-11-28T14:00:00-05:00', timeZone: 'Europe/London' },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SU' ],
  iCalUID: '6cr6cdr2cpj3ib9h6kr30b9k61j32b9p69hjib9j68p34d36c9i64d1gck@google.com',   
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3276239695508000"',
  id: '6oqjic9o75i38b9p60r68b9k75gm6b9p75hj4b9h70qm8d9j6lgjad1ncc',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=Nm9xamljOW83NWkzOGI5cDYwcjY4YjlrNzVnbTZiOXA3NWhqNGI5aDcwcW04ZDlqNmxnamFkMW5jY18yMDIxMTEzMFQxODMwMDBaIGlhdW1kZ2llcmJyNmcwY2s4Nmw3aG1ucWk0QGc',
  created: '2021-11-28T17:16:25.000Z',
  updated: '2021-11-28T17:17:27.754Z',
  summary: 'Skype arik',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: { dateTime: '2021-11-30T13:30:00-05:00', timeZone: 'Europe/London' },        
  end: { dateTime: '2021-11-30T14:30:00-05:00', timeZone: 'Europe/London' },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=TU' ],
  iCalUID: '6oqjic9o75i38b9p60r68b9k75gm6b9p75hj4b9h70qm8d9j6lgjad1ncc@google.com',   
  sequence: 1,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3276239697180000"',
  id: '68qm6cb36oq6cb9n6ssjeb9k6sp68bb2coqm8b9hc9h3icho68qj8p3368',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NjhxbTZjYjM2b3E2Y2I5bjZzc2plYjlrNnNwNjhiYjJjb3FtOGI5aGM5aDNpY2hvNjhxajhwMzM2OF8yMDIxMTIwMlQxODMwMDBaIGlhdW1kZ2llcmJyNmcwY2s4Nmw3aG1ucWk0QGc',
  created: '2021-11-28T17:17:28.000Z',
  updated: '2021-11-28T17:17:28.590Z',
  summary: 'Skype arik',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: { dateTime: '2021-12-02T13:30:00-05:00', timeZone: 'Europe/London' },        
  end: { dateTime: '2021-12-02T14:30:00-05:00', timeZone: 'Europe/London' },
  recurrence: [ 'RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=TH' ],
  iCalUID: '68qm6cb36oq6cb9n6ssjeb9k6sp68bb2coqm8b9hc9h3icho68qj8p3368@google.com',   
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3283836478252000"',
  id: '8og2sgdkuv0ulcj29o3mm5cnf8',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=OG9nMnNnZGt1djB1bGNqMjlvM21tNWNuZjhfMjAyMjAyMjVUMTQwMDAwWiBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2022-01-11T16:23:31.000Z',
  updated: '2022-01-11T16:23:59.126Z',
  summary: 'Massage',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-02-25T09:00:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-02-25T10:30:00-05:00',
    timeZone: 'America/New_York'
  },
  recurrence: [ 'RRULE:FREQ=WEEKLY;COUNT=3' ],
  iCalUID: '8og2sgdkuv0ulcj29o3mm5cnf8@google.com',
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3288683025510000"',
  id: '8og2sgdkuv0ulcj29o3mm5cnf8_20220304T140000Z',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=OG9nMnNnZGt1djB1bGNqMjlvM21tNWNuZjhfMjAyMjAzMDRUMTQwMDAwWiBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2022-01-11T16:23:31.000Z',
  updated: '2022-02-08T17:31:52.755Z',
  summary: 'I- Massage',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-04T10:00:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-04T11:30:00-05:00',
    timeZone: 'America/New_York'
  },
  recurringEventId: '8og2sgdkuv0ulcj29o3mm5cnf8',
  originalStartTime: {
    dateTime: '2022-03-04T09:00:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: '8og2sgdkuv0ulcj29o3mm5cnf8@google.com',
  sequence: 1,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3290975970234000"',
  id: '60o66c9m6lgm6b9kcopm2b9k68pm8b9pchhjcb9ic5i34phg69hjid3474',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NjBvNjZjOW02bGdtNmI5a2NvcG0yYjlrNjhwbThiOXBjaGhqY2I5aWM1aTM0cGhnNjloamlkMzQ3NCBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2022-02-21T23:59:45.000Z',
  updated: '2022-02-21T23:59:45.117Z',
  summary: 'Therapy Dr kate',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-10T18:00:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-10T19:00:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: '60o66c9m6lgm6b9kcopm2b9k68pm8b9pchhjcb9ic5i34phg69hjid3474@google.com',   
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3292282746640000"',
  id: 'njvg3b8r0quh0ae53sgd8gpvug',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=bmp2ZzNiOHIwcXVoMGFlNTNzZ2Q4Z3B2dWcgaWF1bWRnaWVyYnI2ZzBjazg2bDdobW5xaTRAZw',
  created: '2022-03-01T13:29:33.000Z',
  updated: '2022-03-01T13:29:33.320Z',
  summary: 'Embellishment',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-05T16:00:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-05T17:00:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: 'njvg3b8r0quh0ae53sgd8gpvug@google.com',
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3292462797552000"',
  id: 'c9gj6p336ko68b9h6cr6ab9kc4s62bb1c9h6cbb470oj8dj6cdj64ob56o',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=YzlnajZwMzM2a282OGI5aDZjcjZhYjlrYzRzNjJiYjFjOWg2Y2JiNDcwb2o4ZGo2Y2RqNjRvYjU2byBpYXVtZGdpZXJicjZnMGNrODZsN2htbnFpNEBn',
  created: '2022-03-02T14:29:58.000Z',
  updated: '2022-03-02T14:29:58.776Z',
  summary: 'Dr pubbi',
  creator: { email: 'jody.pearson@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-08T09:30:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-08T10:30:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: 'c9gj6p336ko68b9h6cr6ab9kc4s62bb1c9h6cbb470oj8dj6cdj64ob56o@google.com',   
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3293007516830000"',
  id: 'tj26t8kvbgclg51mgg1pq1bmq8',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=dGoyNnQ4a3ZiZ2NsZzUxbWdnMXBxMWJtcThfMjAyMjAzMDUgaWF1bWRnaWVyYnI2ZzBjazg2bDdobW5xaTRAZw',
  created: '2022-03-05T18:09:18.000Z',
  updated: '2022-03-05T18:09:18.415Z',
  summary: 'Los’ Bday',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: { date: '2022-03-05' },
  end: { date: '2022-03-06' },
  recurrence: [ 'RRULE:FREQ=YEARLY' ],
  transparency: 'transparent',
  iCalUID: 'tj26t8kvbgclg51mgg1pq1bmq8@google.com',
  sequence: 0,
  reminders: { useDefault: false },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3293007543124000"',
  id: '403abbotttfc1ak49a0il15avo',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=NDAzYWJib3R0dGZjMWFrNDlhMGlsMTVhdm8gaWF1bWRnaWVyYnI2ZzBjazg2bDdobW5xaTRAZw',
  created: '2022-03-03T20:57:10.000Z',
  updated: '2022-03-05T18:09:31.562Z',
  summary: 'Taco Tuesday at Jen’s',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-08T18:00:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-08T21:00:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: '403abbotttfc1ak49a0il15avo@google.com',
  sequence: 1,
  reminders: { useDefault: true },
  eventType: 'default'
},
{
  kind: 'calendar#event',
  etag: '"3293552455908000"',
  id: 'gumhg81qln45n3jigrdqs4g00k',
  status: 'confirmed',
  htmlLink: 'https://www.google.com/calendar/event?eid=Z3VtaGc4MXFsbjQ1bjNqaWdyZHFzNGcwMGsgaWF1bWRnaWVyYnI2ZzBjazg2bDdobW5xaTRAZw',
  created: '2022-03-08T21:50:27.000Z',
  updated: '2022-03-08T21:50:27.954Z',
  summary: 'Carlos and Heather',
  creator: { email: 'jmidiri@gmail.com' },
  organizer: {
    email: 'iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com',
    displayName: 'Y and I',
    self: true
  },
  start: {
    dateTime: '2022-03-09T17:30:00-05:00',
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: '2022-03-09T18:30:00-05:00',
    timeZone: 'America/New_York'
  },
  iCalUID: 'gumhg81qln45n3jigrdqs4g00k@google.com',
  sequence: 0,
  reminders: { useDefault: true },
  eventType: 'default'
}
]

export function getEvents() {
    //return events;
    return gevents;
}