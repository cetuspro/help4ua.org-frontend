import { route } from '@/app/router/urls/routes'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useHookFormMutation } from '../../../app/hooks/useHookFormMutation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { InputText } from '@/components/form/Input_Text'
import { HookFormError } from '@/components/form/HookFormError'
import { InputSubmit } from '@/components/form/Input_Submit'
import { FaPen } from 'react-icons/fa'
import * as yup from 'yup'
import { MdPassword } from 'react-icons/md'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useMemo } from 'react'
import HelpOfferForm from './forms/Form_HelpOffer'
import { usePureMutation } from '../../../app/hooks/usePureMutation'
import useObjectState from '../../../app/hooks/useObjectState'
import { getNoticeToEdit } from '../../../app/CRUD/notices/getNoticeToEdit'
import { updateNoticeStatus } from '../../../app/CRUD/notices/updateNoticeStatus'
import Button from '@/components/common/Button'
import FormAddShelterOffer from '../components/forms/Form_AddShelterOffer'
import Card from '@/components/common/Card'
import { editNotice } from '../../../app/CRUD/notices/editNotice'
import FormAddFindShelter from '../components/forms/Form_AddFindShelter'
import FormAddTransportOffer from '../components/forms/Form_AddTransportOffer'
import FormAddFindTransportOffer from '../components/forms/Form_AddFindTransportOffer'
import FormAddTranslationOffer from '../components/forms/Form_AddTranslationOffer'

const noticeTypes = {
  1: FormAddShelterOffer,
  10: FormAddFindShelter,
  20: FormAddTransportOffer,
  22: FormAddFindTransportOffer,
  30: FormAddTranslationOffer,
  32: HelpOfferForm,
  50: HelpOfferForm,
  52: HelpOfferForm,
}

const breadcrumbItems = (title) => [
  {
    url: route['notices.list'],
    label: 'Ogłoszenia',
  },
  {
    label: title,
  },
]

const schema = yup.object().shape({
  smsToken: yup.string().required(),
});

const ViewEditNotice = () => {
  const { id: noticeId, token: urlToken } = useParams()
  const {t} = useTranslation();
  const [state, setState] = useObjectState({
    notice: null,
    smsToken: null,
  });
  const CardComponent = useMemo(() => !state.notice ? null : state.notice?.type in noticeTypes ? noticeTypes[state.notice?.type] : noticeTypes[30]);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const handleGetNoticeSuccess = ({data, config: {params}}) => {
    setState({
      notice: data,
      smsToken: params.smsToken,
      error: null,
    })
  }

  const getNoticeMutation = useHookFormMutation(methods, getNoticeToEdit(noticeId, urlToken), {handleSuccess: handleGetNoticeSuccess});

  const updateSuccess = () => {
    getNoticeToEdit(noticeId, urlToken)({smsToken: state.smsToken}).then(data => {
      setState({notice: data.data});
    })
  }
  
  const changeStatusMutation = usePureMutation(updateNoticeStatus(noticeId, urlToken), {onSuccess: updateSuccess});

  const changeNoticeStatus = () => {
    changeStatusMutation.mutate({
      smsToken: state.smsToken,
      data: {
        status: state.notice.status === 2 ? 'OUTOFDATE' : 'VERIFIED'
      }
    })
  }

  return (
    <>
      <div className="container mx-auto py-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-center pb-5 sm:py-1">
        <Breadcrumb items={breadcrumbItems(`Ogłoszenie nr ${noticeId}`)}/>
        {!!state.notice && (
          [2, 20].includes(state.notice.status) ? (
            <Button onClick={changeNoticeStatus} className="w-fit" size="small" color={state.notice?.status === 2 ? 'danger' : 'success'}>
              {state.notice?.status === 2 ? 'Oznacz jako nieaktualne' : 'Oznacz jako aktualne'}
            </Button>
          ) : (
            <div className="text-gray-400">Ogłoszenie oczekuje na akceptację</div>
          )
        )}
      </div>
      {!!state.notice ? <>
        <Card>
          {!!CardComponent && <CardComponent
            notice={state.notice} // Remove after forms refactor
            defaultValues={state.notice}
            editMode
            query={editNotice(noticeId, urlToken, state.smsToken)}
            onSuccess={updateSuccess}
          />}
        </Card>
      </> : <>
        <p className="mb-4 ml-2 text-gray-500">{t("formDescription.editNotice")}</p>
        <div className="bg-white rounded-2xl flex flex-col justify-between leading-normal p-5">
          <div className="justify-start content-start text-left">
            <FormProvider {...methods}>
              <form onSubmit={getNoticeMutation.mutate}>
                <HookFormError/>
                {!!state.error && <div className="">{state.error}</div>}
                <div>
                  <InputText
                    name="smsToken"
                    label={t('form.pin')}
                    type="number"
                    icon={MdPassword}
                  />
                </div>
                <div className="flex justify-end pt-5">
                  <InputSubmit
                    icon={<FaPen/>}
                    value={t('form.editNotice')}
                  />
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </>}
    </div>
    </>
  )
}

export default ViewEditNotice
