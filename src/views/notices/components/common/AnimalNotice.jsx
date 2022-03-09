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
import Period from '@/views/notices/components/common/Fields/Period'
import AccommodationPlaces from '@/views/notices/components/common/Fields/AccommodationPlaces'
import UniqueLink from '@/views/notices/components/common/Fields/UniqueLink'
import CostRefund from '@/views/notices/components/common/Fields/CostRefund'
import AnimalType from '@/views/notices/components/common/Fields/AnimalType'
import Experience from '@/views/notices/components/common/Fields/Experience'
import Transport from '@/views/notices/components/common/Fields/Transport'
import Language from '@/views/notices/components/common/Fields/Language'
import FreePrice from '@/views/notices/components/common/Fields/FreePrice'
import CreatedAt from '@/views/notices/components/common/Fields/CreatedAt'
import NoticeId from '@/views/notices/components/common/Fields/NoticeId'
import Email from '@/views/notices/components/common/Fields/Email'
import ArrivedDate from '@/views/notices/components/common/Fields/ArrivedDate'

const AnimalNotice = ({
  data: {
    descriptionPL,
    descriptionUA,
    descriptionEN,
    description,
    cityName,
    region,
    address,
    email,
    period,
    isDelivery,
    location,
    shouldRefund,
    animalType,
    hasExperience,
    id,
    name,
    accommodationPlacesCount,
    phoneNumber,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
    arrivalDateStr,
  },
  withPriceFree,
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
          {!!email && <Email email={email} />}
        </ChildrenLayout>

        <ChildrenLayout side="right">
        {!!description && <Description descriptionUA={descriptionUA} descriptionPL={descriptionPL} descriptionEN={descriptionEN}/>}
        </ChildrenLayout>
      </ParentRowLayout>

      <ParentRowLayout>
        <ChildrenLayout side="left">
          {!!period && <Period period={period} />}
          {!!accommodationPlacesCount && (
            <AccommodationPlaces accommodationPlacesCount={accommodationPlacesCount} />
          )}
          {!!hasExperience && <Experience hasExperience={hasExperience} />}
          {!!isDelivery && <Transport isDelivery={isDelivery} />}
          <UniqueLink id={id} />
        </ChildrenLayout>

        <ChildrenLayout side="right">
          {!!shouldRefund && <CostRefund shouldRefund={shouldRefund} />}
          {!!animalType && <AnimalType animalType={animalType} />}

          {(ukraineLang || englishLang || germanyLang || polishLang) && (
            <Language
              ukraineLang={ukraineLang}
              englishLang={englishLang}
              germanyLang={germanyLang}
              polishLang={polishLang}
            />
          )}
          {!!arrivalDateStr && <ArrivedDate arrivalDateStr={arrivalDateStr} />}
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

export default memo(AnimalNotice)
