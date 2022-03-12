import { memo } from 'react'
import {
  NoticeLayout,
  ParentRowLayout,
  ChildrenLayout,
  BottomChildrenLayout,
} from '@/views/notices/components/common/Layouts'
import Address from '@/views/notices/components/common/Fields/Address'
import Name from '@/views/notices/components/common/Fields/Name'
import PhoneNumber from '@/views/notices/components/common/Fields/PhoneNumber'
import Description from '@/views/notices/components/common/Fields/Description'
import UniqueLink from '@/views/notices/components/common/Fields/UniqueLink'
import Transport from '@/views/notices/components/common/Fields/Transport'
import Language from '@/views/notices/components/common/Fields/Language'
import FreePrice from '@/views/notices/components/common/Fields/FreePrice'
import CreatedAt from '@/views/notices/components/common/Fields/CreatedAt'
import NoticeId from '@/views/notices/components/common/Fields/NoticeId'
import CarNumber from '@/views/notices/components/common/Fields/CarNumber'

const TransportNotice = ({
  data: {
    descriptionPL,
    descriptionUA,
    descriptionEN,
    description,
    cityName,
    region,
    address,
    id,
    name,
    phoneNumber,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
    transportFromStr,
    transportToStr,
    carRegoNo,
  },
  withPriceFree,
  hasLink = true,
}) => {
  return (
    <NoticeLayout>
      <ParentRowLayout>
        <ChildrenLayout side="left">
          {(cityName || region || address) && (
            <Address cityName={cityName} region={region} address={address} location={location} />
          )}
          {!!name && <Name name={name} />}
          {!!phoneNumber && <PhoneNumber id={id} phoneNumber={phoneNumber} />}
        </ChildrenLayout>

        <ChildrenLayout side="right">
        {!!description && <Description descriptionUA={descriptionUA} descriptionPL={descriptionPL} descriptionEN={descriptionEN}/>}
        </ChildrenLayout>
      </ParentRowLayout>

      <ParentRowLayout>
        <ChildrenLayout side="left">
          {!!transportFromStr && <Transport transportFromStr={transportFromStr} />}
          {!!transportToStr && <Transport transportFromStr={transportToStr} />}
          {!!carRegoNo && <CarNumber carRegoNo={carRegoNo} />}
          {hasLink && <UniqueLink id={id} />}
        </ChildrenLayout>

        <ChildrenLayout side="right">
          {(ukraineLang || englishLang || germanyLang || polishLang) && (
            <Language
              ukraineLang={ukraineLang}
              englishLang={englishLang}
              germanyLang={germanyLang}
              polishLang={polishLang}
            />
          )}
          {withPriceFree && <FreePrice />}
        </ChildrenLayout>
      </ParentRowLayout>

      <BottomChildrenLayout>
        {!!createdAt && <CreatedAt createdAt={createdAt} />}
        {!!id && <NoticeId id={id} />}
      </BottomChildrenLayout>
    </NoticeLayout>
  )
}

export default memo(TransportNotice)
