const normalizeBy = (key) => {
  return (data, item) => {
    data[item[key]] = item
    return data
  }
}

export const normalizeNoticeData = (data) =>
  data
    .map((item) => ({
      noticeTypeLabel: item.noticeType?.split(/(?=[A-Z])/)?.join(' '),
      ...item,
      statusAndAmount: item.statusAndAmount.reduce(normalizeBy('noticeStatus'), {}),
    }))
    .reduce(normalizeBy('noticeType'), {})

export const getNoticeVerifiedAmount = (data, key) =>
  data?.[key]?.statusAndAmount['Verified']?.amount || 0
