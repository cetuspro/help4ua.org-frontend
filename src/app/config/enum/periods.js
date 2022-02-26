export const periodsEnum = t => [
  {value: 1, label: t('periods.negotiable')},
  {value: 2, label: t('periods.lessThanThreeDays')},
  {value: 3, label: t('periods.threeDays')},
  {value: 5, label: t('periods.fiveDays')},
  {value: 10, label: t('periods.oneWeek')},
  {value: 11, label: t('periods.twoWeeks')},
  {value: 12, label: t('periods.threeWeeks')},
  {value: 13, label: t('periods.oneMonth')},
  {value: 14, label: t('periods.twoMonths')},
  {value: 15, label: t('periods.threeMonths')},
  {value: 60, label: t('periods.over3Months')},
]