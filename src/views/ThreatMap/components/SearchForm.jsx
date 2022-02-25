import InputText from '@/components/form/InputText'
import InputSelect from '@/components/form/InputSelect'
import { BiSearchAlt } from 'react-icons/bi'

const dangersOptions = [
  {
    id: 1,
    label: 'Wszystkie zagrożenia',
    value: 'Wszystkie zagrożenia',
  },
  {
    id: 2,
    label: 'Podtopienia',
    value: 'Podtopienia',
  },
  {
    id: 3,
    label: 'Smog',
    value: 'Smog',
  },
]
const sortingOptions = [
  {
    id: 1,
    label: 'Odległość: najbliżej',
    value: 'distanceASC',
  },
  {
    id: 2,
    label: 'Liczba głosów: najwięcej',
    value: 'votesDESC',
  },
]

const SearchForm = () => {
  return (
    <form>
      <div className="flex gap-4 justify-between mb-4">
        <InputText />
        <button
          type="button"
          className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-yellow-300">
          <BiSearchAlt color="white" size={24} />
        </button>
      </div>
      {/* <div className="flex gap-4 justify-between my-4">
        <InputSelect options={dangersOptions} />
        <InputSelect options={sortingOptions} />
      </div> */}
    </form>
  )
}

export default SearchForm
