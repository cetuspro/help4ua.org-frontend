import {
  NoticeLayout,
  ParentRowLayout,
  ChildrenLayout,
  BottomChildrenLayout,
} from '../../components/common/Layouts'
import Address from '../../components/common/Address'
import Name from '../../components/common/Name'
import PhoneNumber from '../../components/common/PhoneNumber'
import Description from '../../components/common/Description'
import Period from '../../components/common/Period'
import AccommodationPlaces from '../../components/common/AccommodationPlaces'
import BedCount from '../../components/common/BedCount'
import UniqueLink from '../../components/common/UniqueLink'
import Children from '../../components/common/Children'
import Animals from '../../components/common/Animals'
import WashingMachine from '../../components/common/WashingMachine'
import Food from '../../components/common/Food'
import Transport from '../../components/common/Transport'
import Language from '../../components/common/Language'
import FreePrice from '../../components/common/FreePrice'
import CreatedAt from '../../components/common/CreatedAt'
import NoticeId from '../../components/common/NoticeId'

export const ShelterOfferExpandedComponent = ({
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
          {!!descriptionUA && <Description description={descriptionUA} />}
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
          <FreePrice />
        </ChildrenLayout>
      </ParentRowLayout>

      <BottomChildrenLayout>
        {!!createdAt && <CreatedAt createdAt={createdAt} />}
        {!!id && <NoticeId id={id} />}
      </BottomChildrenLayout>
    </NoticeLayout>
  )
}
