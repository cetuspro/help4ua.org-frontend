import { useTranslation } from "react-i18next";
import OfferItem from "./OfferItem";

const PriceFree = ({ className, ...props }) => {
  const { t } = useTranslation()
  console.log({props})

  return <OfferItem className={className} {...props} label={`${t('common.price')}:`} value={t('common.priceFree')}/>
}

export default PriceFree;