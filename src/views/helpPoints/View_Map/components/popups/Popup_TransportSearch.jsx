import { route } from '@/app/router/urls/routes'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import PhoneNumber from '@/views/notices/components/common/Fields/PhoneNumber'

const Item = ({ label, value }) => {
  return (
    <div className="py-1 flex gap-1">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const TransportSearchPopup = ({
  description,
  id,
  name,
  phoneNumber,
  createdAt,
  transportFromStr,
  transportToStr,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {!!description && <Item label={`${t('form.description')}:`} value={description} />}
          {!!name && <Item label={`${t('common.imie')}:`} value={name} />}
          {!!phoneNumber && <PhoneNumber id={id} phoneNumber={phoneNumber} showIcon={false}/>}
          {!!transportFromStr && <Item label={`${t('form.transportFromStr')}:`} value={transportFromStr} />}
          {!!transportToStr && <Item label={`${t('form.transportToStr')}:`} value={transportToStr} />}
          {!!createdAt && (
            <Item label={`${t('common.data')}:`} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label={`${t('common.id')}:`} value={id} />}
        </div>
      </div>
      <Button to={route['notices.view'](id)} className="mt-5 mx-auto w-fit" size="small">
        {t('form.details')}
      </Button>
    </>
  )
}

export default TransportSearchPopup
