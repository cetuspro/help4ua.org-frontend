import { API_URL } from '@/app/config/env'
import { useGetSensors } from '@/app/CRUD/sensors/getSensors'
import axios from 'axios'
import Spinner from '@/components/common/Spinner'
import { useEffect, useMemo, useState } from 'react'

const postMeasure = (sensorId) =>
  axios({
    method: 'POST',
    url: `${API_URL}/admin/sensors/${sensorId}/measurements`,
  })

const PostMeasurements = () => {
  const { data, isSuccess } = useGetSensors()
  const [isDone, setIsDone] = useState(false)

  const requests = useMemo(
    () => (isSuccess ? data.map(({ id }) => postMeasure(id)) : []),
    [isSuccess],
  )

  useEffect(() => {
    if (requests.length === 0) return

    Promise.all(requests).then((values) => {
      console.log(values)
      setIsDone(true)
    })
  }, [isSuccess])

  if (!isDone) return <Spinner />
  else return <div>Done</div>
}

export default PostMeasurements
