import { useState } from 'react'
import { horizontalNavigationConfig } from '@/app/config/navigationConfig'
import { route } from '@/app/router/urls/routes'
import { useAuth } from '../../app/hooks/useAuth'
import UserDropdown from './UserDropdown'

import NavItem from './NavItem'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

import li from "../../assets/img/social/li.png"
import ig from "../../assets/img/social/ig.png"
import fb from "../../assets/img/social/fb.png"
import gh from "../../assets/img/social/gh.png"

const HorizontalNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, roles } = useAuth()
  const { t } = useTranslation();
  return (
    <>
      <nav
        className={`main-nav ml-auto flex gap-4 lg:gap-8 items-center px-4 ${isMenuOpen ? 'active' : ''}`}>
        {horizontalNavigationConfig(t)
          .filter(
            (item) =>
              item?.permissions === undefined ||
              item?.permissions.some((permission) => roles.includes(permission)),
          )
          .map((item) => (
            <NavItem key={item.id} to={item.route} label={item.label} icon={item.icon} />
          ))}
        {/*<UserDropdown />*/}

        <div className='hidden sm:flex justify-center items-center gap-x-3'>
          <p className='font-semibold'>{t('header.supportUs') + ':'}</p>
          {/* <a href='https://www.instagram.com/uapomoc.pl' target={"_blank"} rel={'noreferrer'}> 
            <img src={li} alt={'UApomoc Linkedin'}></img>
          </a> */}
          <a href='https://www.instagram.com/uapomoc.pl' target={"_blank"} rel={'noreferrer'}>
            <img src={ig} alt={'UApomoc Instagram'}></img>
          </a>
          <a href='https://www.facebook.com/help4uaorg' target={"_blank"} rel={'noreferrer'}>
            <img src={fb} alt={'UApomoc Facebook'}></img>
          </a>
          <a href='https://github.com/cetuspro/help4ua.org-frontend' target={"_blank"} rel={'noreferrer'}>
            <img src={gh} alt={'UApomoc GitHub'}></img>
          </a>
        </div>

        <LanguageSwitcher />
      </nav>
    </>
  )
}

export default HorizontalNavigation
