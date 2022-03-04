import { InputCheckbox } from './Input_Checkbox'
import { useTranslation } from 'react-i18next'

export const InputVoluntary = () => {
  const {t} = useTranslation();
  return (
    <div className="mb-4">
      <InputCheckbox
        name="isOfferFreeFlag"
        required
        label={t('common.voluntaryHelp')}
      />
    </div>
  )
}
