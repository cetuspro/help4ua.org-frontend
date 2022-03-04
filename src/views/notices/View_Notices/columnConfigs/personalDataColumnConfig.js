import { useTranslation } from 'react-i18next'

export const personalDataColumnConfig = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.miasto'),
      selector: ({ cityName }) => cityName,
    },
    {
      name: t('common.imie'),
      selector: ({ name }) => name,
    },
    {
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => phoneNumber,
    },
    {
      name: t('common.email'),
      selector: ({ email }) => email,
    },
    {
      name: t('common.opis'),
      selector: ({ description }) => description?.slice(0, 100)
    },
  ]
}