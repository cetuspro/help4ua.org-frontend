import { useTranslation } from 'react-i18next'
import Button from '@/components/common/Button'

const ActionDetailsItem = ({ label, labelClassName, value, valueClassName, icon, onAction }) => {
  const { t } = useTranslation()

  const handleClick = (e) => {
    onAction && onAction(e)
  }
  return (
    <div className="mb-2 flex gap-2 items-center">
      <span className={`flex items-center ${labelClassName}`}>
        { icon && <span className="mr-2.5">{icon}</span> }
        {label}:
      </span>
      <span className={`font-bold ${valueClassName}`}>{value}</span>
      <Button
        className="font-normal text-xs mb-1 left-48 ring-transparent bg-blue-600 active:bg-blue-700 hover:bg-blue-700 px-5 py-1"
        size="small"
        onClick={handleClick}>
        {t('common.show')}
      </Button>
    </div>
  )
}

export default ActionDetailsItem
