import { QueryIsSuccess } from '@/app/context/queries/QueryIsSuccess'
import { QueryProvider } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useParams } from 'react-router-dom'
import { useGetNotice } from '../../../app/CRUD/notices/getNotice'
import { useModal } from '@/app/hooks/useModal'
import Button from '../../../components/common/Button'
import MarkInactiveModal from '@/views/notices/View_Notice/modal/markaAsInactive'
import { useTranslation } from 'react-i18next'
import HelpOfferCard from './cards/Card_HelpOffer'
import ShelterOfferCard from './cards/Card_ShelterOffer'
import ShelterSearchCard from './cards/Card_ShelterSearch'
import TransportOfferCard from './cards/Card_transportOffer'
import TransportSearchCard from './cards/Card_TransportSearch'

const noticeTypes = {
  1: ShelterOfferCard,
  10: ShelterSearchCard,
  20: TransportOfferCard,
  22: TransportSearchCard,
  30: HelpOfferCard.apply,
  50: HelpOfferCard,
}

const breadcrumbItems = (title) => [
  {
    url: route['notices.list'],
    label: 'Ogłoszenia',
  },
  {
    label: title,
  },
]

const ViewNotice = () => {
  const { noticeId } = useParams()
  const query = useGetNotice(noticeId)
  const {isOpen, open, close} = useModal();
  const {t} = useTranslation();
  const CardComponent = query?.data?.type in noticeTypes ? noticeTypes[query?.data?.type] : noticeTypes[1]

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
                <CardComponent/>
              </div>
            </>
          )}
        </QueryIsSuccess>
      </QueryProvider>
    </>
  )
}

export default ViewNotice
