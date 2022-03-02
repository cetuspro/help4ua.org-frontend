import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'react-hook-form'
import {
  FaUser,
  FaComment,
  FaMapPin,
  FaCheck,
} from 'react-icons/fa'
import { InputText } from '@/components/form/Input_Text'
import { InputSelect } from '@/components/form/Input_Select'
import { InputTextarea } from '@/components/form/Input_Textarea'
import { useHookFormMutation } from '../../../../app/hooks/useHookFormMutation'
import { InputSubmit } from '@/components/form/Input_Submit'
import { HookFormError } from '@/components/form/HookFormError'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { useTranslation } from 'react-i18next'
import { useEffect, useMemo } from 'react'
import { helpPointTypesEnum } from '@/app/config/enum/helpPointTypes'

const FormAddHelpPoint = ({defaultValues, query, onSuccess, editMode=false}) => {
  const schema = useMemo(() => yup.object().shape({
    name: yup.string().required(),
    description: yup.string().nullable(),
    region: yup.number().required(),
    cityName: yup.string().required(),
    type: yup.number().default(0),
    localization: yup
    .object()
    .required('Lokalizacja jest wymagana')
    .shape({
      latitude: yup.number().default(0).min(-90).max(90),
      longitude: yup.number().default(0).min(-180).max(80),
    }),
    language: yup.string().nullable(),
  }), [editMode]);

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues]);

  const {t} = useTranslation();
  
  const mutation = useHookFormMutation(methods, query, {onSuccess});
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate}>
        <HookFormError/>
        <h4 className="font-bold">{t("form.helpPointInfo")}</h4>
        <div className="flex-grow border-t border-gray-300 mb-4"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <InputText
              name="name"
              label={t("form.name")}
              icon={FaUser}
              required
            />
          </div>
          <div>
            <InputSelect
              name="region"
              label={t("form.voivodeship")}
              options={voivodeshipsEnum(a => a)}
              required
            />
          </div>
          <div>
            <InputText
              name="cityName"
              label={t("form.cityName")}
              icon={FaMapPin}
              required
            />
          </div>
          <div>
            <InputSelect
              name="type"
              label={t("form.type")}
              options={helpPointTypesEnum(t)}
              required
            />
          </div>
          <div>
            <InputText
              name="localization.latitude"
              label={t("form.latitude")}
              icon={FaMapPin}
            />
          </div>
          <div>
            <InputText
              name="localization.longitude"
              label={t("form.longitude")}
              icon={FaMapPin}
            />
          </div>
        </div>
        <div>
          <InputTextarea
            name="description"
            label={t("form.description")}
            icon={FaComment}
          />
        </div>
        <div className="flex justify-end pt-5">
          <InputSubmit
            icon={<FaCheck/>}
            value={t(editMode ? "form.save" : "form.send")}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormAddHelpPoint;