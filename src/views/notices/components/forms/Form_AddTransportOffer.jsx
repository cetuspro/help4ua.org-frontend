import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import { FaUser, FaComment, FaUsers, FaEnvelope, FaCheck } from 'react-icons/fa'
import { InputText } from '@/components/form/Input_Text'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { useHookFormMutation } from '../../../../app/hooks/useHookFormMutation'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import { useTranslation } from 'react-i18next'
import { InputRodo } from '@/components/form/Input_RODO'
import { useEffect, useMemo } from 'react'
import { InputVoluntary } from '@/components/form/Input_Voluntary'
import { LanguageBlock } from '../../../../ua/LanguageBlock'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'

const FormAddTransportOffer = ({ defaultValues, query, onSuccess, editMode = false }) => {
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        description: yup.string().nullable(),
        accommodationPlacesCount: yup.number().default(0),
        phoneNumber: yup.string().required(),
        email: yup.string().email().nullable(),
        type: yup.number().default(20),
        acceptTerms: editMode ? yup.string() : yup.string().required(),
        language: yup.string().nullable(),
        transportFromStr: yup.string().required(),
        transportToStr: yup.string().required(),
        carRegoNo: yup.string().required(),
        isOfferFreeFlag: editMode
          ? yup.string()
          : yup.bool().oneOf([true], 'isOfferFreeFlag is a required field').required(),
        ukraineLang: yup.bool(),
        englishLang: yup.bool(),
        germanyLang: yup.bool(),
        polishLang: yup.bool(),
      }),
    [editMode],
  )

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  })

  useEffect(() => {
    methods.reset(defaultValues)
  }, [defaultValues])

  const { t } = useTranslation()

  const mutation = useHookFormMutation(methods, query, { onSuccess })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate}>
        <HookFormError />
        <h4 className="font-bold">{t('form.personalInfo')}</h4>
        <div className="flex-grow border-t border-gray-300 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
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
            <InputText name="email" label={t('form.email')} icon={FaEnvelope} />
          </div>
          <div>
            <InputText
              name="accommodationPlacesCount"
              type="number"
              min={0}
              label={t('form.accommodationPlacesCount')}
              icon={FaUsers}
            />
          </div>
          <div>
            <InputText
              name="transportFromStr"
              label={t('form.transportFromStr')}
              icon={FaUser}
              required
            />
          </div>
          <div>
            <InputText
              name="transportToStr"
              label={t('form.transportToStr')}
              icon={FaUser}
              required
            />
          </div>
          <div>
            <InputText name="carRegoNo" label={t('form.carRegoNo')} icon={FaUser} required />
          </div>
        </div>
        <LanguageBlock />
        <div>
          <InputTextarea name="description" label={t('form.description')} icon={FaComment} />
        </div>
        {!editMode && (
          <div className="flex justify-end">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mt-8">
              <InputVoluntary />
              <InputRodo />
            </div>
          </div>
        )}
        <div className="flex justify-end pt-5">
          <InputSubmit icon={<FaCheck />} value={t(editMode ? 'form.save' : 'form.send')} />
        </div>
      </form>
    </FormProvider>
  )
}

export default FormAddTransportOffer
