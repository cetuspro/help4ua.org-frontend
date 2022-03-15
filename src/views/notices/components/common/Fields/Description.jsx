import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '../NoticeDetailsItem'
import Icon, { iconConfig } from '@/assets/img/icons'


const Description = ({ descriptionPL, descriptionUA, descriptionEN }) => {
  const { t } = useTranslation()

  return (
    <>
      {descriptionPL &&
        <NoticeDetailsItem
          label={descriptionPL && t('common.opis')}
          className="flex-col"
          icon={<Icon.MdOutlineTextSnippet {...iconConfig} />}
          value={descriptionPL}
          valueClassName={`text-gray-800 font-normal `}
        />
      }
      {
        descriptionUA &&
          <NoticeDetailsItem
            label={descriptionUA && t('common.opisUA')}
            className="flex-col"
            icon={<Icon.MdOutlineTextSnippet {...iconConfig} />}
            value={descriptionUA}
            valueClassName={`text-gray-800 font-normal `}
          />
      }
      {
        descriptionEN &&
          <NoticeDetailsItem
            label={descriptionEN && t('common.opisEN')}
            className="flex-col"
            icon={<Icon.MdOutlineTextSnippet {...iconConfig} />}
            value={descriptionEN}
            valueClassName={`text-gray-800 font-normal `}
          />
      }
    </>
  )
}

export default memo(Description)
