import { InputRodo } from '@/components/form/Input_RODO'
import { InputVoluntary } from '@/components/form/Input_Voluntary'

export const AgreementsBlock = () => {
  return (
    <div className="flex ">
      <div className="w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mt-8">
        <InputVoluntary />
        <InputRodo />
      </div>
    </div>
  )
}
