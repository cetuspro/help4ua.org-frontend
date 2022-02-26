import { route } from '@/app/router/urls/routes'
import { InputCheckbox } from './Input_Checkbox'

export const InputRodo = () => {
  return (
    <div>
      <InputCheckbox
        name="acceptTerms"
        required
        label={<>
          Wyrażam zgodę na przetwarzanie moich danych przez Cetuspro Sp. z o.o. z siedzibą w Rzeszowie w celu opublikowania moich danych w ogłoszeniu umieszczonym na portalu uapomoc.pl, skierowanym do osób potrzebujących i udzielającym pomocy Ukrainie. <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" href={route.rodo}>Klauzula</a>
        </>}
      />
    </div>
  )
}
