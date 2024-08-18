function collection(schema) {
  return function(value) {
    value.forEach(entity => deserialize(schema, entity))

    return value
  }
}


/**
 * 
 * @param {Object} schema 
 * @param {Object} object 
 */
export function deserialize(schema, object) {
  for (const [key, value] of Object.entries(schema)) {
    let deserializedValue
    if (typeof value == 'object') {
      deserializedValue = deserialize(value, object[key])
    } else {
      deserializedValue = value(object[key], object)
    }

    object[key] = deserializedValue
  }

  return object
}


export const messageSchema = {
  date: value => new Date(value)  
}


export const chatSchema = {
  messages: collection(messageSchema)
}
