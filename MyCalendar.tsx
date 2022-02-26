import * as React from 'react';
import * as RN from 'react-native';

class MyCalendar extends React.Component {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    weekDays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    state = {
      activeDate: new Date()
    };
    render() {
      let matrix = this.generateMatrix();
      let rows = matrix.map((row, rowIndex) => {
      let rowItems = row.map((item, colIndex) => {
        return (
          <RN.Text style={{
            flex: 1,
            height: 18,
            textAlign: 'center',
            backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
            color: colIndex == 0 ? 'a00' : '000',
            fontWeight: item == state.activeDate.getDate() ? 'bold' : '',
          }}> {item != -1 ? item : ''} </RN.Text>
        )
      })
    })
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>{rowItems}</View>
    )
  }

   generateMatrix() {
    let matrix = []
    let rows = []
    let rowItems = []

    matrix[0] = weekDays
    let year = this.state.activeDate.getFullYear()
    let month = this.state.activeDate.getMonth()

    let firstDay = new Date(year, month, 1).getDay()
    let maxDays = this.nDays[month]
    if (month == 1) { // Feb
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1
      }
    }

    let counter = 1
    for (let row=1; row < 7; row++) {
      matrix[row] = []
      for (let col=0; col < 7; col++) {
        matrix[row][col] = -1
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++
        }
      }
    }
    return matrix

  }

}