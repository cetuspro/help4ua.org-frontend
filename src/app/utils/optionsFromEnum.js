export const optionsFromEnum = (options, defaultLabel) => {
  if(!options || !options?.length) return [];
  return options.reduce((prev, item) => defaultLabel && item.id === 0 ? prev : [...prev, {value: item.id, label: item?.name}],
  defaultLabel ? [{value: 0, label: defaultLabel}] : [])
}