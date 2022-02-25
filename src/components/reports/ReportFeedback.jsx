import Card from '@/components/common/Card'
import { useMemo } from 'react'
import dayjs from 'dayjs'

const ReportFeedback = ({ adminFeedback }) => {
  const adminDisplayName = useMemo(
    () =>
      adminFeedback?.firstName && adminFeedback?.lastName
        ? `${adminFeedback.firstName} ${adminFeedback.lastName}`
        : 'Administrator',
    [adminFeedback],
  )

  return (
    <Card>
      <p className="text-gray-400 text-xs mb-1">
        Dnia {dayjs(adminFeedback.createDate).format('DD.MM.YYYY')}, {adminDisplayName}{' '}
        odpowiedział:
      </p>
      <p className="max-w-prose text-gray-500 text-sm">{adminFeedback.feedback}</p>
    </Card>
  )
}

export default ReportFeedback
