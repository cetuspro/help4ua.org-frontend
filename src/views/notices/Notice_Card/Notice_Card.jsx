import { memo } from "react";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NoticeCard = ({
  icon:Icon,
  title,
  isFetching,
  verifiedAmount=0,
  description,
  toAdd,
  toView
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center p-8 shadow-md rounded-3xl">
    <div className="w-16 h-16 md:h-24 md:w-24 flex justify-center items-center text-yellow-400 mb-2 sm:mb-4">
      <Icon size={100} color="currentColor" />
    </div>

    <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
      {t(title)}
    </h3>

    <p className={'italic mb-4'}>
      {t('frontpage.activeAds')}: {!isFetching ? verifiedAmount : '-'}
    </p>
    <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
      <Link
        className="inline-block bg-blue-600 hover:bg-blue-800 focus-visible:ring ring-yellow-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        to={toAdd}
      >  
        {`${t('frontpage.addNotice')}`}
      </Link>
      <Link
        className="inline-block bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        to={toView}
      >  
        {`${t('frontpage.seeNotices')} (${
          !isFetching ? verifiedAmount : '-'
        })`}
      </Link>
    </div>
    <p className="max-w-screen-md text-gray-600 mb-2 text-sm mt-6 text-center mx-auto">
      {t(description)}
    </p>
  </div>
  );
};

export default memo(NoticeCard);
