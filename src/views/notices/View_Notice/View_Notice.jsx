import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { useModal } from '@/app/hooks/useModal'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotice } from '@/app/CRUD/notices/getNotice'
import { NOTICE_COMPONENT, NOTICE_TYPE } from '@/views/notices/config'

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

  return (
    <>
      <QueryProvider {...query}>
        <QueryIsSuccess>
          {(data) => (
            <>
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
    </>
  )
}

export default memo(ViewNotice)
