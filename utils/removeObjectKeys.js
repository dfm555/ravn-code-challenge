const removeObjectKeys = (object, keys = []) =>
  Object.keys(object)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key]
      return obj
    }, {})

export default removeObjectKeys
