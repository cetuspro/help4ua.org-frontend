import axios from 'axios'

import { normalizeNoticeData } from '@/app/models/notice'
import { API_URL } from '@/app/config/env'
import useQuery2 from '@/hooks/useQuery2'

const getNoticesStats = () =>
  axios({
    method: 'GET',
    url: `${API_URL}/notices/stats`,
  }).then(({ data }) => (data.length && normalizeNoticeData(data)) || {})

export const useGetNoticesStats = () =>
  useQuery2({
    queryKey: ['app.noticesStats'],
    queryFn: getNoticesStats,
    config: {
      refetchOnWindowFocus: false,
    },
  })
