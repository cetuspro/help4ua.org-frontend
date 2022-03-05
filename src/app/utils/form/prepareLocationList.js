export default (locations) => {
  const objectList = locations.reduce((acc, current) => {
    const { name, postalCodeId, latitude, longitude, cityId } = current

    if (latitude && longitude) {
      acc[name] = {
        value: name,
        label: name,
        cityName: name,
        postalCodeId,
        latitude,
        longitude,
        cityId,
      }
    }

    return acc
  }, {})

  return Object.values(objectList)
}
