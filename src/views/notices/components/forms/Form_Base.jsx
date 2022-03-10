import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { useForm, useWatch, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa'

import { yupResolver } from '@hookform/resolvers/yup'
import { useHookFormMutation } from '@/hooks/useHookFormMutation'

import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'

import { PersonalDataBlock } from '../common/Form_Sections/PersonalDataBlock'
import { LanguageBlock } from '../common/Form_Sections/LanguageBlock'
import { AdditionalInfoBlock } from '../common/Form_Sections/AdditionalInfoBlock'
import { AgreementsBlock } from '../common/Form_Sections/AgreementsBlock'

import { DEFAULT_COUNTRY } from '@/app/config/countryConfig'

const BaseForm = ({ defaultValues = {}, query, onSuccess, type, editMode = false }) => {
  const { language } = useSelector((state) => state?.language)
  const [showRegion, setShowRegion] = useState(false)
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        description: yup.string(),
        cityId: yup.number().nullable(),
        cityName: yup.string(),
        postalCodeId: yup.number().nullable(),
        latitude: yup.number(),
        longitude: yup.number(),
        location: yup.object().required(),
        countryId: yup.number().required(),
        region: showRegion ? yup.number().required() : yup.string().nullable(),
        phoneNumber: yup.string().required(),
        email: yup.string().email().nullable(),
        type: yup.number().required(),
        acceptTerms: yup.string().required(),
        language: yup.string().nullable(),
        isOfferFreeFlag: yup.bool().oneOf([true], 'isOfferFreeFlag is a required field').required(),
        ukraineLang: yup.bool(),
        englishLang: yup.bool(),
        germanyLang: yup.bool(),
        polishLang: yup.bool(),
      }),
    [showRegion],
  )

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...defaultValues,
      language,
      countryId: DEFAULT_COUNTRY,
      phoneNumber: '+48',
      type,
    },
  })

  const watched = useWatch({
    control: methods.control,
    name: 'countryId',
  })

  useEffect(() => {
    const countryId = methods.getValues()?.countryId
    setShowRegion(countryId === DEFAULT_COUNTRY)
  }, [watched])

  useEffect(() => {
    methods.reset(defaultValues)
  }, [defaultValues])

  const { t } = useTranslation()
  const mutation = useHookFormMutation(methods, query, { onSuccess })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate}>
        <HookFormError />
        <PersonalDataBlock showRegion={showRegion} />
        <LanguageBlock />
        <AdditionalInfoBlock />
        <AgreementsBlock />
        <div className="flex justify-end pt-5">
          <InputSubmit icon={<FaCheck />} value={t(editMode ? 'form.save' : 'form.send')} />
        </div>
      </form>
    </FormProvider>
  )
}

export default BaseForm
