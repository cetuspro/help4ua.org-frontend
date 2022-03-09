import { useEffect, useState } from 'react'
import { useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaFlag, FaMapPin, FaUser } from 'react-icons/fa'

import { getCountriesHelper } from '@/CRUD/region/getCountries'

import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { DEFAULT_COUNTRY } from '@/app/config/countryConfig'
import { capitalizeString } from '@/app/utils/textTransform'

import InputLocationAutocomplete from '@/components/form/InputLocationAutocomplete'
import { InputAsyncSelect } from '@/components/form/Input_AsyncSelect'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'
import { InputSelect } from '@/components/form/Input_Select'
import { InputText } from '@/components/form/Input_Text'

import { FormSectionHeader } from './FormSectionHeader'
import { FormSectionLayout } from './FormSectionLayout'

export const FormPersonalData = ({ methods }) => {
  const { t } = useTranslation()
  const [showRegion, setShowRegion] = useState(false)

  const watched = useWatch({
    control: methods.control,
    name: 'countryId',
    phoneNumber: '+48',
  })

  useEffect(() => {
    const countryId = methods.getValues()?.countryId
    setShowRegion(countryId === DEFAULT_COUNTRY)
  }, [watched])

  return (
    <>
      <FormSectionHeader sectionTitle={t('form.personalInfo')} />
      <FormSectionLayout>
        <div>
          <InputText
            name="name"
            label={t('form.nameLabel')}
            placeholder={t('form.name')}
            icon={FaUser}
            required
          />
        </div>
        <div>
          <InputPhoneNumber label={t('form.phoneNumber')} name="phoneNumber" required={true} />
        </div>
        <div>
          <InputAsyncSelect
            {...getCountriesHelper}
            name="countryId"
            icon={FaFlag}
            label={t('form.country')}
            isLabelVisible
            transform={({ name, value }) => ({
              value: value,
              label: name,
            })}
            required
          />
        </div>
        <div>
          <InputText
            name="email"
            label={
              <span className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                {t('form.email')}
              </span>
            }
            placeholder={t('form.email')}
            icon={FaEnvelope}
          />
        </div>
        <div>
          <InputLocationAutocomplete
            name="location"
            label={t('form.locationLabel')}
            placeholder={t('form.location')}
            required
            icon={FaMapPin}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          />
        </div>
        <div>
          <InputSelect
            name="region"
            label={t('form.voivodeship')}
            options={voivodeshipsEnum((a) => capitalizeString(a))}
            hidden={!showRegion}
            disabled={!showRegion}
            required={showRegion}
          />
        </div>
      </FormSectionLayout>
    </>
  )
}
