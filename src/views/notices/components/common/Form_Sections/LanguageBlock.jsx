import { InputCheckbox } from '../../../../../components/form/Input_Checkbox'
import { useTranslation } from 'react-i18next'
import { FormSectionHeader } from './FormSectionHeader'

export const LanguageBlock = () => {
  const { t } = useTranslation()

  return (
    <>
      <FormSectionHeader sectionTitle={t('form.language')} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div>
          <InputCheckbox name="ukraineLang" label={t('form.speakUkrainian')} />
        </div>
        <div>
          <InputCheckbox name="englishLang" label={t('form.speakEnglish')} />
        </div>
        <div>
          <InputCheckbox name="polishLang" label={t('form.speakPolish')} />
        </div>
        <div>
          <InputCheckbox name="germanyLang" label={t('form.speakGerman')} />
        </div>
      </div>
    </>
  )
}
