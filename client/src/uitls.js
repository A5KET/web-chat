/**
 * 
 * @param {Array} collection 
 * @param {Function} predicate 
 * @returns 
 */
export function minBy(collection, predicate) {
  if (!collection || collection.length < 1) {
    return undefined
  }

  return collection.reduce((min, cur) => {
    return predicate(cur) < predicate(min) ? cur : min
  }, collection[0])
}


/**
 * 
 * @param {Date} date 
 * @returns 
 */
export function formatDateAsHoursMinutes(date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const timeString = `${(hours < 10) ? '0' + hours : hours}:${(minutes < 10) ? '0' + minutes : minutes}`

  return timeString
}


export function getCurrentTime() {
  return new Date()
}
