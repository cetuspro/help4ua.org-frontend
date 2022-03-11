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
import BedCount from '@/views/notices/components/common/Fields/BedCount'
import UniqueLink from '@/views/notices/components/common/Fields/UniqueLink'
import Children from '@/views/notices/components/common/Fields/Children'
import Animal from '@/views/notices/components/common/Fields/Animal'
import WashingMachine from '@/views/notices/components/common/Fields/WashingMachine'
import Food from '@/views/notices/components/common/Fields/Food'
import Transport from '@/views/notices/components/common/Fields/Transport'
import Language from '@/views/notices/components/common/Fields/Language'
import FreePrice from '@/views/notices/components/common/Fields/FreePrice'
import CreatedAt from '@/views/notices/components/common/Fields/CreatedAt'
import NoticeId from '@/views/notices/components/common/Fields/NoticeId'
import Email from '@/views/notices/components/common/Fields/Email'
import CarNumber from '@/views/notices/components/common/Fields/CarNumber'
import Experience from '@/views/notices/components/common/Fields/Experience'
import CostRefund from '@/views/notices/components/common/Fields/CostRefund'
import AnimalType from '@/views/notices/components/common/Fields/AnimalType'
import { useGetNoticesStats } from '../../../../app/CRUD/notices/getNoticesStats'

const CommonNotice = ({
  data: {
    descriptionPL,
    descriptionUA,
    descriptionEN,
    description,
    cityName,
    region,
    address,
    bedCount,
    isAcceptedChild,
    isAcceptedAnimal,
    hasWashingMachine,
    period,
    isCatering,
    isDelivery,
    location,
    id,
    name,
    email,
    accommodationPlacesCount,
    phoneNumber,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
    transportFromStr,
    transportToStr,
    carRegoNo,
    hasExperience,
    shouldRefund,
    animalType,
    type
  },
  withPriceFree,
  hasLink = true,
}) => {
  const { data } = useGetNoticesStats()
  const noticeTypeLabel = data && Object.values(data).find((item) => item.noticeTypeId === type)?.noticeTypeLabel

  return (
    <NoticeLayout>
      {noticeTypeLabel && <h4 className="font-bold text-left mb-5">{noticeTypeLabel}</h4>}
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
          {!!bedCount && <BedCount bedCount={bedCount} />}
          {!!transportFromStr && <Transport transportFromStr={transportFromStr} />}
          {!!transportToStr && <Transport transportToStr={transportToStr} />}
          {!!carRegoNo && <CarNumber carRegoNo={carRegoNo} />}
          {hasLink && <UniqueLink id={id} />}
        </ChildrenLayout>

        <ChildrenLayout side="right">
          {!!isAcceptedChild && <Children isAcceptedChild={isAcceptedChild} />}
          {!!isAcceptedAnimal && <Animal isAcceptedAnimal={isAcceptedAnimal} />}
          {!!hasWashingMachine && <WashingMachine hasWashingMachine={hasWashingMachine} />}
          {!!isCatering && <Food isCatering={isCatering} />}
          {!!isDelivery && <Transport isDelivery={isDelivery} />}
          {!!hasExperience && <Experience hasExperience={hasExperience} />}
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

export default memo(CommonNotice)
