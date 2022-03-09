export const findOption = (value, options) => {
  let option = null
  const a = options?.forEach((item) => {
    if (option) return
    if (item?.options) findOption(value, item.options)
    if (item?.value?.toString() === value) option = item
  })
  return option
  // return options?.reduce((acc, item) => {
  //   if (acc) return acc;
  //   if (item?.options) return findOption(value, item.options);
  //   return item?.value?.toString() === value ? item : null;
  // }, /*initial value*/ null) || null /*default value*/;
}

export const findMultipleOptions = (values, options) => {
  let selected = []
  const a = options?.forEach((item) => {
    if (item?.options) findOption(values, item.options)
    if (values?.map(({ value }) => value?.toString()).indexOf(item?.value?.toString()) !== -1)
      selected.push(item)
  })
  return selected
}

export const customStyles = ({ hasIcon = true, customFontSize = '0.96rem' } = {}) => ({
  control: (provided, { isFocused }) => ({
    ...provided,
    boxShadow: isFocused ? '0 3px 10px 0 rgba(0, 0, 0, 0.15)' : 'none',
    borderColor: isFocused ? '#b33b43 !important' : provided.borderColor,
    borderRadius: '0.5rem',
    borderWidth: '1px !important',
    outline: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: hasIcon ? '2.3rem' : provided?.paddingLeft,
    fontSize: customFontSize,
  }),
  placeholder: (provided, { isFocused }) => ({
    ...provided,
    paddingLeft: '2.3rem',
    fontSize: '0.85rem',
    color: isFocused ? '#000' : 'rgba(34, 41, 47, 0.4)',
    transition: 'all 0.2s ease',
  }),
  input: (provided) => ({
    ...provided,
    paddingLeft: '2.2rem',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: '5',
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: '100'
  })
})
