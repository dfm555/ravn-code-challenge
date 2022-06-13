const capitalizeFirstLetter = str =>
  str
    .toString()
    .split('_')
    .map(value => value.charAt(0).toUpperCase() + value.slice(1))
    .join(' ')

export default capitalizeFirstLetter
