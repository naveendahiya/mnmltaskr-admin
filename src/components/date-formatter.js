const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default class DateFormatter {
  formatISODate (oldDate) {    
    const date = new Date(oldDate)
    const stringified = date.toString()
    const time = stringified.substring(16, 24)
    
    const formatted =
      months[date.getMonth()] 
      + ' ' + date.getDate()
      + ', ' + date.getFullYear()
      + ' // ' + time
  
    return formatted
  }

  formatMonth (monthNumber) {
    return months[monthNumber]
  }
}
