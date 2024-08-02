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
 * @param {Date} time 
 * @returns 
 */
export function formatDateAsHoursMinutes(time) {
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const timeString = `${(hours < 10) ? '0' + hours : hours}:${(minutes < 10) ? '0' + minutes : minutes}`

  return timeString
}


export function getCurrentTime() {
  return new Date()
}
