import { InputCheckbox } from '../components/form/Input_Checkbox'
import { useTranslation } from 'react-i18next'

export const LanguageBlock = () => {
  const {t} = useTranslation();

  return (
    <>
    <h4 className="font-bold mt-8">{t("form.language")}</h4>
      <div className="flex-grow border-t border-gray-300 mb-4"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div>
          <InputCheckbox
            name="ukraineLang"
            label={t("form.speakUkrainian")}
          />
        </div>
        <div>
          <InputCheckbox
            name="englishLang"
            label={t("form.speakEnglish")}
          />
        </div>
        <div>
          <InputCheckbox
            name="polishLang"
            label={t("form.speakPolish")}
          />
        </div>
        <div>
          <InputCheckbox
            name="germanyLang"
            label={t("form.speakGerman")}
          />
        </div>
      </div>
    </>
  )
}