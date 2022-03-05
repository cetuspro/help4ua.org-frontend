import Button from '@/components/common/Button'
import { useTranslation } from 'react-i18next'

const ActionDetailsItem = ({ label, labelClassName, value, valueClassName, onAction }) => {
  const { t } = useTranslation()
  const handleClick = (e) => {
    onAction && onAction(e)
  }
  return (
    <div className="mb-2 flex gap-2 relative">
      <span className={labelClassName}>{label}:</span>
      <span className={`font-bold ${valueClassName}`}>{value}</span>
      <Button
        className="text-xs mb-1 absolute left-48 ring-transparent bg-blue-600 active:bg-blue-700 hover:bg-blue-700"
        style={{
          bottom: '-10px',
          padding: '5px',
        }}
        onClick={handleClick}>
        {t('common.show')}
      </Button>
    </div>
  )
}

export default ActionDetailsItem
