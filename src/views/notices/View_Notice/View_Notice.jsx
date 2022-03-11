import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { useModal } from '@/app/hooks/useModal'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotice } from '@/app/CRUD/notices/getNotice'
import { NOTICE_COMPONENT, NOTICE_TYPE } from '@/views/notices/config'
import SingleNoticeMap from '@/views/notices/components/SingleNoticeMap'
import Button from '@/components/common/Button'
import { MdArrowBackIosNew } from 'react-icons/md'

const ViewNotice = () => {
  const { noticeId } = useParams()
  const query = useGetNotice(noticeId)
  const { isOpen, open, close } = useModal()
  const { t } = useTranslation()
  const breadcrumbItems = (title) => [
    { url: route['notices.list'], label: t('common.ogloszenia') },
    { label: title },
  ]
  const CardComponent =
    query?.data?.type in NOTICE_COMPONENT
      ? NOTICE_COMPONENT[query?.data?.type]
      : NOTICE_COMPONENT[NOTICE_TYPE.offerShelter]
  const marker =
    query?.data?.latitude && query?.data?.longitude
      ? [query.data.latitude, query.data.longitude]
      : null

  let navigate = useNavigate()

  const goToPreviousPath = () => {
    navigate(-1)
  }

  return (
    <>
      <QueryProvider {...query}>
        <QueryIsSuccess>
          {(data) => (
            <>
              <Button size="small" className="gap-2 mb-2 inline-flex" onClick={goToPreviousPath}>
                <MdArrowBackIosNew />
                {t('common.backToList')}
              </Button>
              <Breadcrumb items={breadcrumbItems(query?.data?.address)}>
                {/*//TODO: uncomment after completing the endpoint*/}
                {/*<Button onClick={open} size="small" className="m-2">*/}
                {/*  {t("notice.markInactive")}*/}
                {/*</Button>*/}
                {/*<MarkInactiveModal open={isOpen} onClose={close} title={t("notice.markInactive")} noticeId={noticeId}/>*/}
              </Breadcrumb>
              <div className="grid gap-8">
                <CardComponent data={data} hasLink={false} />
              </div>
            </>
          )}
        </QueryIsSuccess>
      </QueryProvider>

      {marker && <SingleNoticeMap marker={marker} />}
    </>
  )
}

export default memo(ViewNotice)
