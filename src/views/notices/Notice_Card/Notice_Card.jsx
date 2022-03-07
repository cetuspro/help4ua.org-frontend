import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NoticeCard = ({
  title,
  isFetching,
  verifiedAmount = 0,
  description,
  additionalNotes,
  toAdd,
  toView,
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center lg:items-start max-w-[600px] py-8 border-b lg:border-0 ">
      <h3 className="text-xl md:text-2xl font-semibold text-center lg:text-start mb-4">
        {t(title)}
      </h3>

      <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
        <Link
          className="inline-block bg-blue-600 hover:bg-blue-800 focus-visible:ring ring-yellow-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          to={toAdd}>
          {`${t('frontpage.addNotice')}`}
        </Link>
        <Link
          className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          to={toView}>
          {`${t('frontpage.seeNotices')} (${!isFetching ? verifiedAmount : '-'})`}
        </Link>
      </div>
      <p className="max-w-screen-md text-gray-600 mb-2 text-sm mt-6 text-justify mx-auto">
        {t(description)}
      </p>
      {additionalNotes && (
        <p className="max-w-screen-md text-gray-600 mb-2 text-sm mt-6 text-justify mx-auto">
          {t(additionalNotes)}
        </p>
      )}
    </div>
  )
}

export default memo(NoticeCard)
