import CommentsView from '@/components/reports/CommentsView'
import SingleReportImage from './SingleReportImage'
import { FaRegCommentDots } from 'react-icons/fa'
import RaiseReportButton from '@/components/reports/RaiseReportButton'
import dayjs from 'dayjs'
import { useMapContext } from '@/app/context/MapContext'
import { IoClose } from 'react-icons/io5'
import { HiChevronLeft } from 'react-icons/hi'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import SimpleBar from 'simplebar-react'
import ExpandableContent from '@/components/common/ExpandableContent'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetReport } from '@/app/CRUD/reports/getReport'
import { IoLocateSharp } from 'react-icons/io5'
import Tooltip from '@/components/common/Tooltip'
import { useMap } from 'react-leaflet'
import ReportFeedback from '@/components/reports/ReportFeedback'
import { useWindowSize } from '@/app/hooks/useWindowSize'
import { MENU_REPORT_LIST } from '@/app/config/sidebarMenus'
import UserFullName from '@/components/user/UserFullName'
import UserAvatar from '@/components/common/UserAvatar'
import { route } from '@/app/router/urls/routes'
import { BiDirections } from 'react-icons/bi'
import { useEffect } from 'react'

const SingleReportView = () => {
  const { setIsSidebarOpen, setCurrentMenu } = useMapContext()
  const navigate = useNavigate()
  const map = useMap()
  const { width } = useWindowSize()
  const { reportId } = useParams()

  const queryData = useGetReport(reportId)

  useEffect(() => {
    if (!queryData?.data?.localization) return

    map.flyTo(queryData?.data?.localization, 16)
  }, [map, queryData?.data])

  const handleReturn = () => {
    setCurrentMenu(MENU_REPORT_LIST)
    navigate(route['map'])
  }

  const showOnMap = (location) => () => {
    if (width < 768) setIsSidebarOpen(false)
    map.flyTo(location, 16)
  }

  return (
    <QueryProvider {...queryData}>
      <QueryIsSuccess>
        {(data) => (
          <>
            <Helmet>
              <title>{data?.title} | Connected City</title>
            </Helmet>
            <div className="h-full flex flex-col gap-2 w-full p-4 pt-0">
              <div className="flex justify-between items-center mb-2 overflow-hidden text-ellipsis">
                <h2
                  onClick={handleReturn}
                  className="font-bold text-sm text-gray-400 hover:text-gray-500 transition-colors cursor-pointer flex items-center gap-1">
                  <HiChevronLeft size="1.5em" color="currentColor" />
                  Zgłoszenia
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="appearance-none cursor-pointer text-gray-400 hover:bg-gray-300 rounded-lg transition-colors">
                  <IoClose size={26} color="currentColor" />
                </button>
              </div>
              <SimpleBar style={{ maxHeight: '95%' }} forceVisible="y">
                <div>
                  <small className="text-xs text-gray-500">{data?.reportType?.name}</small>
                  <h3 className="font-bold text-base text-gray-700 mb-4 flex items-center gap-2">
                    {data?.title}
                    <Tooltip value="Pokaż na mapie">
                      <button
                        onClick={showOnMap(data?.localization)}
                        className="appearance-none p-2 rounded-xl hover:bg-gray-300">
                        <IoLocateSharp size={'1em'} color="currentColor" />
                      </button>
                    </Tooltip>
                  </h3>

                  <div className="flex my-4 gap-2 items-center text-sm text-gray-400">
                    <span>
                      <UserAvatar user={data?.user} />
                    </span>
                    <UserFullName user={data?.user} className="text-slate-500" />
                    <span className="border-l border-gray-400 pl-2">
                      {dayjs(data?.reportDate).format('DD.MM.YYYY')}
                    </span>
                  </div>
                  {data?.address?.street && (
                    <div className="flex mt-4 gap-2 items-center text-sm text-gray-500">
                      <BiDirections size={'1.2em'} color="currentColor" />
                      ul. {data?.address?.street} {data?.address?.houseNumber}
                    </div>
                  )}
                  {data?.description && <ExpandableContent text={data?.description} />}
                  {data?.photoUrlList && (
                    <div className="grid grid-cols-6 gap-2 my-4">
                      {data?.photoUrlList.map(({ id, url }) => (
                        <SingleReportImage key={id} src={url} />
                      ))}
                    </div>
                  )}
                  {data?.adminFeedback?.feedback && (
                    <ReportFeedback adminFeedback={data?.adminFeedback} />
                  )}
                  <div className="border-t border-gray-300 border-solid mt-4 pt-4 px-1 flex gap-4 items-center">
                    <div className="inline-flex gap-1 items-center p-1">
                      <FaRegCommentDots size={18} /> {data?.commentsAmount}
                    </div>
                    <RaiseReportButton
                      raisesAmount={data?.raisesAmount}
                      reportId={reportId}
                      isRaised={data?.isRaised}
                    />
                  </div>
                </div>
                <CommentsView reportId={reportId} />
              </SimpleBar>
            </div>
          </>
        )}
      </QueryIsSuccess>
    </QueryProvider>
  )
}

export default SingleReportView
