import { useMapContext } from '@/app/context/MapContext'
import { IoClose } from 'react-icons/io5'
import { HiChevronLeft } from 'react-icons/hi'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import SimpleBar from 'simplebar-react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { MENU_REPORT_LIST } from '@/app/config/sidebarMenus'
import { useGetSensor } from '@/app/CRUD/sensors/getSensor'
import SensorDustItem from '@/components/map/SensorDustItem'
import PMChart from './PMChart'
import { useNavigate } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { getSensorIcon, getSensorName } from '@/app/utils/getSensorIcon'

const SingleSensorView = () => {
  const { setIsSidebarOpen, setCurrentMenu } = useMapContext()
  const { sensorId } = useParams()
  const navigate = useNavigate()

  const queryData = useGetSensor(sensorId)

  const handleReturn = () => {
    setCurrentMenu(MENU_REPORT_LIST)
    navigate(route['map'])
  }

  return (
    <QueryProvider {...queryData}>
      <QueryIsSuccess>
        {(data) => (
          <>
            <Helmet>
              <title>{data?.name} | Connected City</title>
            </Helmet>
            <div className="h-full flex flex-col gap-2 w-full p-4 pt-0">
              <div className="flex justify-between items-center mb-2 overflow-hidden text-ellipsis">
                <h2
                  onClick={handleReturn}
                  className="font-bold text-sm text-gray-400 hover:text-gray-500 transition-colors cursor-pointer flex items-center gap-1">
                  <HiChevronLeft size="1.5em" color="currentColor" />
                  Powrót
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="appearance-none cursor-pointer text-gray-400 hover:bg-gray-300 rounded-lg transition-colors">
                  <IoClose size={26} color="currentColor" />
                </button>
              </div>
              <SimpleBar style={{ maxHeight: '95%', overflowX: 'hidden' }} forceVisible="y">
                <div>
                  <h3 className="font-bold text-base text-gray-700 inline-flex items-center gap-2 relative">
                    {data?.name}
                    <span className="flex absolute h-3 w-3 top-1/2 -right-6 transform -translate-y-1/2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </h3>

                  {data?.indicators?.weather.length !== 0 && (
                    <div className="my-5">
                      <h4 className="text-[0.7rem] text-gray-500 uppercase">Dane pogodowe</h4>
                      <div className="h-[1px] bg-gray-300 w-full"></div>
                      {data?.indicators?.weather?.map((item) => (
                        <SensorDustItem
                          key={item?.id}
                          icon={getSensorIcon(item?.name)}
                          name={getSensorName(item?.name)}
                          value={item?.lastValue}
                          unit={<span>{item?.unit}</span>}
                        />
                      ))}
                    </div>
                  )}

                  {data?.indicators?.air.length !== 0 && (
                    <div className="my-5">
                      <h4 className="text-[0.7rem] text-gray-500 uppercase">Gazy</h4>
                      <div className="h-[1px] bg-gray-300 w-full"></div>
                      {data?.indicators?.air?.map((item) => (
                        <SensorDustItem
                          key={item?.id}
                          name={item?.name}
                          value={item?.lastValue}
                          unit={<span>{item?.unit}</span>}
                        />
                      ))}
                    </div>
                  )}

                  {data?.indicators?.dust.length !== 0 && (
                    <>
                      <div className="my-5">
                        <h4 className="text-[0.7rem] text-gray-500 uppercase">Pyły</h4>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        {data?.indicators?.dust?.map((item) => (
                          <SensorDustItem
                            key={item?.id}
                            name={item?.name}
                            value={item?.lastValue}
                            unit={<span>{item?.unit}</span>}
                          />
                        ))}
                      </div>
                      <PMChart data={data?.indicators?.dust} />
                    </>
                  )}
                </div>
              </SimpleBar>
            </div>
          </>
        )}
      </QueryIsSuccess>
    </QueryProvider>
  )
}

export default SingleSensorView
