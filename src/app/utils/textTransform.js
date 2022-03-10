export const truncateText = (text, characters = 150) =>
  text ? text.substring(0, characters) + (text.length < characters ? '' : '...') : ''

export const capitalizeString = (string = '') => string.charAt(0).toUpperCase() + string.slice(1)
