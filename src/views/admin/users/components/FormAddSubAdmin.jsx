import { InputText } from "@/components/form/Input_Text";
import { yupResolver } from "@hookform/resolvers/yup";
import { HookFormError } from "@/components/form/HookFormError";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup'
import { useQueryContext } from "@/app/context/queries/QueryProvider";
import toast from "react-hot-toast";
import { useHookFormMutation } from "../../../../app/hooks/useHookFormMutation";
import { InputSubmit } from "@/components/form/Input_Submit";
import { createSubAdminAccount } from "../../../../app/CRUD/users/createSubAdminAccount";

const schema = yup.object().shape({
  email: yup.string().email().required('Email jest wymagany'),
  firstName: yup.string().required('Imię jest wymagane'),
  lastName: yup.string().required('Nazwisko jest wymagane'),
})

const FormAddSubAdmin = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  })

  const {refetch} = useQueryContext();

  const onSuccess = () => {
    refetch();
    toast.success('Konto zostało utworzone. Dalsze instrukcjo zostały wysłane na podany email.', {duration: 5000})
  }

  const onError = () => {
    toast.error('Wystąpił błąd, nie udało się dodać administratora miasta!', {duration: 4000});
  }

  const mutation = useHookFormMutation(methods, createSubAdminAccount, { onSuccess, onError })

  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate} className="flex flex-col gap-2 mb-6">
        <InputText name="email" type="email" placeholder="Email" />
        <InputText name="firstName" placeholder="Imię" />
        <InputText name="lastName"  placeholder="Nazwisko" />
        <HookFormError />
        <InputSubmit value="Utwórz konto" className="mt-2"/>
      </form>
    </FormProvider>
  )
}

export default FormAddSubAdmin;