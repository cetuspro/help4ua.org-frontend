import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import { FaComment, FaEnvelope, FaCheck } from 'react-icons/fa'
import { InputText } from '@/components/form/Input_Text'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { useHookFormMutation } from '@/app/hooks/useHookFormMutation'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import { useTranslation } from 'react-i18next'
import { postNoticeInactive } from '@/app/CRUD/notices/postNoticeInactive'
import Button from '@/components/common/Button'
import InputPhoneNumber from '@/components/form/Input_PhoneNumber'

const schema = yup.object().shape({
  phoneNumber: yup.string().required(),
  email: yup.string().email().nullable(),
  reason: yup.string().nullable(),
})

const FormMarkInactive = ({ onSuccess, onCancel, noticeId }) => {
  const handleCancel = (e) => {
    e.preventDefault()
    onCancel()
  }

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: '+48',
    },
  })

  const handleSuccess = ({ data }) => {
    onSuccess(data)
  }

  const { t } = useTranslation()

  const mutation = useHookFormMutation(methods, postNoticeInactive(noticeId), {
    handleSuccess,
    onCancel,
  })

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal p-5">
        <div className="justify-start content-start text-left">
          <FormProvider {...methods}>
            <form onSubmit={mutation.mutate}>
              <HookFormError />
              <div className="flex-grow  border-gray-300 mb-4" />
              <div>
                <InputPhoneNumber
                  label={t('form.phoneNumber')}
                  name="phoneNumber"
                  required={true}
                />
              </div>
              <div>
                <InputText name="email" label={t('form.email')} icon={FaEnvelope} />
              </div>
              <div>
                <InputTextarea name="reason" label={t('form.reason')} icon={FaComment} />
              </div>
              <div className="flex justify-end pt-5">
                <Button
                  onClick={handleCancel}
                  className="mr-5 inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Cancel
                </Button>
                <InputSubmit icon={<FaCheck />} value={t('form.send')} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default FormMarkInactive
