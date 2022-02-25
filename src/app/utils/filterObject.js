const hasValue = ([, value]) => value != null

export const filterObject = (object, predicate = hasValue) =>
  Object.entries(object)
    .filter(predicate)
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    )
