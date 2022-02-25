import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetLanguage } from '../../store/language/languageActions'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

import en from '../../assets/img/flags/en.svg'
import pl from '../../assets/img/flags/pl.svg'
import ua from '../../assets/img/flags/ua.svg'
import { useTranslation } from 'react-i18next'


const languages = [{ lng: 'ua', flag: ua }, { lng: 'pl', flag: pl }, { lng: 'en', flag: en }]
const getCurrentLanguage = (lng) => languages.find(item => item.lng === lng)

const LanguageSwitcher = () => {
  const { language } = useSelector(state => state?.language)
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const setLanguage = language => () => {
    dispatch(actionSetLanguage({ language }))
  }

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className='bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700 flex items-center gap-4 ring-offset-4 focus:ring ring-primary-dark text-sm font-semibold text-center rounded-lg outline-none transition-all duration-200 px-4 py-2'>
          <div className="flex items-center gap-4">  
            <img  className="h-6" src={getCurrentLanguage(language)?.flag || pl} alt={getCurrentLanguage(language)?.lng || 'pl'} />
            <HiChevronDown />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items
          className='absolute bg-gray-200 z-50 right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-2 py-2 cursor-pointer items-center gap-4 bg-gray-200 Zrounded-md'>
            {languages
              .filter(
                item => item.lng !== language,
              )
              .map(({ lng, flag }) => (
                <Menu.Item
                  as={'div'}
                  className='px-2 py-2 cursor-pointer flex items-center gap-4 bg-gray-200 hover:bg-gray-300 rounded-md'
                  onClick={setLanguage(lng)}
                  key={lng}
                >
                  <img className="h-6 flex-1" src={flag} alt={lng} />
                </Menu.Item>
              ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSwitcher
