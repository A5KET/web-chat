export function getCurrentTime() {
  return new Date()
}


/**
 * 
 * @param {Date} time 
 */
export function getTimeStringAsHoursMinutes(time) {
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const timeString = `${(hours < 10) ? '0' + hours : hours}:${(minutes < 10) ? '0' + minutes : minutes}`

  return timeString
}