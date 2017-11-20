import moment from 'moment'

export function getRelativeDate (startTime) {
  if (moment(startTime).year() < moment().year()) {
    return moment(startTime).format('D [de] MMMM [del] YYYY')
  } else {
    return moment(startTime).calendar(null, {
      sameDay: '[Hoy]',
      nextDay: '[Mañana]',
      nextWeek: 'dddd',
      lastDay: '[Ayer]',
      lastWeek: '[Last] dddd',
      sameElse: 'D [de] MMMM'
    })
  }
}

export function getTime (startTime) {
  return moment(startTime).format('HH:mm')
}
