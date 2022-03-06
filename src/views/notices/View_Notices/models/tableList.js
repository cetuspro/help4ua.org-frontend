import { useTranslation } from "react-i18next"
import { animalsEnum } from "@/app/config/enum/animals"
import { isBool } from "@/app/utils/isBool"
import { periodsEnum } from "@/app/config/enum/periods"

export const getAnimal = (t, value) => {
  return animalsEnum(t).find((element) => element.value === value)?.label ?? 'Brak danych'
}

export const getValue = (val) => {
  const { t } = useTranslation()

  return isBool(val) ? (val ? t('common.tak') : t('common.nie')) : t('common.noData')
}

export const getPeriod = (t, val) =>
  periodsEnum(t).find((item) => item.value === val)?.label ?? 'Brak danych'

export const getLanguagesValue = (t, values) => {
  const languagesMap = {
    "ukraineLang": t('language.ukrainian'),
    "englishLang": t('language.english'),
    "germanyLang": t('language.germany'),
    "polishLang": t('language.polish'),
  }
  return Object.keys(languagesMap).reduce((acc, langKey) => {
    if (values[langKey]) {
      acc.push(languagesMap[langKey])
    }
    return acc
  }, []).join(', ')
}