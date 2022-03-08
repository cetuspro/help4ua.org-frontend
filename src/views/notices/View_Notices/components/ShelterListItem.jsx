import { memo } from 'react'
import {
  NoticeLayout,
  ParentRowLayout,
  ChildrenLayout,
  BottomChildrenLayout,
} from '../../components/common/Layouts'
import Address from '../../components/common/Fields/Address'
import Name from '../../components/common/Fields/Name'
import PhoneNumber from '../../components/common/Fields/PhoneNumber'
import Description from '../../components/common/Fields/Description'
import Period from '../../components/common/Fields/Period'
import AccommodationPlaces from '../../components/common/Fields/AccommodationPlaces'
import BedCount from '../../components/common/Fields/BedCount'
import UniqueLink from '../../components/common/Fields/UniqueLink'
import Children from '../../components/common/Fields/Children'
import Animals from '../../components/common/Fields/Animals'
import WashingMachine from '../../components/common/Fields/WashingMachine'
import Food from '../../components/common/Fields/Food'
import Transport from '../../components/common/Fields/Transport'
import Language from '../../components/common/Fields/Language'
import FreePrice from '../../components/common/Fields/FreePrice'
import CreatedAt from '../../components/common/Fields/CreatedAt'
import NoticeId from '../../components/common/Fields/NoticeId'

const ShelterListItem = ({
  data: {
    description,
    descriptionUA,
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
    accommodationPlacesCount,
    phoneNumber,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
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
        </ChildrenLayout>

        <ChildrenLayout side="right">
          {!!description && <Description description={description} />}
          {!!descriptionUA && <Description descriptionUA={descriptionUA} />}
        </ChildrenLayout>
      </ParentRowLayout>

      <ParentRowLayout>
        <ChildrenLayout side="left">
          {!!period && <Period period={period} />}
          {!!accommodationPlacesCount && (
            <AccommodationPlaces accommodationPlacesCount={accommodationPlacesCount} />
          )}
          {!!bedCount && <BedCount bedCount={bedCount} />}
          <UniqueLink id={id} />
        </ChildrenLayout>

        <ChildrenLayout side="right">
          {!!isAcceptedChild && <Children isAcceptedChild={isAcceptedChild} />}
          {!!isAcceptedAnimal && <Animals isAcceptedAnimal={isAcceptedAnimal} />}
          {!!hasWashingMachine && <WashingMachine hasWashingMachine={hasWashingMachine} />}
          {!!isCatering && <Food isCatering={isCatering} />}
          {!!isDelivery && <Transport isDelivery={isDelivery} />}
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

export default memo(ShelterListItem)
