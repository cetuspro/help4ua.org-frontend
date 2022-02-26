import { BiMapPin } from 'react-icons/bi'
import { FaCity, FaListUl, FaRegCommentDots, FaUsers } from 'react-icons/fa'
import { FiMap } from 'react-icons/fi'
import { GoReport } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineListAlt } from 'react-icons/md'

import { route } from '../router/urls/routes'
import {
  PERMISSION_USER,
  PERMISSION_ADMIN,
  PERMISSION_ALL,
  PERMISSION_CITY_ADMIN,
} from './permissions'
import { FiMapPin } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

export const horizontalNavigationConfig = t => [
  {
    id: 'map',
    label: t("header.map"),
    route: route['map'],
    icon: FiMapPin,
  },
  {
    id: 'reports',
    label: t("header.notices"),
    route: route['notices.list'],
    icon: MdOutlineListAlt,
  },
  // {
  //   id: 'contact',
  //   label: t("header.contact"),
  //   route: route['contact'],
  //   icon: MdOutlineListAlt,
  // },
]

export const sideNavigationConfig = [
  {
    label: 'Zgłoszenia',
  },
  {
    label: 'Do akceptacji',
    route: route['admin.pendingReports'],
    Icon: GoReport,
  },
  {
    label: 'Wszystkie',
    route: route['admin.reports'],
    Icon: FaListUl,
  },
  {
    label: 'Mapa',
    route: route['admin.map'],
    Icon: FiMap,
  },
  {
    label: 'Komentarze',
    route: route['admin.comments'],
    Icon: FaRegCommentDots,
  },
  {
    label: 'Dostęp',
  },
  {
    label: 'Użytkownicy',
    route: route['admin.users'],
    Icon: FaUsers,
  },
  {
    label: 'Administratorzy miast',
    route: route['admin.subadmins'],
    Icon: FaCity,
  },
  {
    label: 'Jednostki',
    route: route['admin.entities'],
    Icon: BiMapPin,
  },
]

export const dropdownNavigationConfig = [
  {
    id: 'myReports',
    label: 'Moje zgłoszenia',
    route: route['userReports.list'],
    icon: MdOutlineListAlt,
    permissions: [PERMISSION_USER],
  },
  {
    id: 'myAccount',
    label: 'Moje konto',
    route: route['user.profile'],
    icon: CgProfile,
    permissions: [PERMISSION_USER],
  },
  {
    id: 'adminPanel',
    label: 'Panel miasta',
    route: route['admin'],
    icon: FaCity,
    permissions: [PERMISSION_ADMIN, PERMISSION_CITY_ADMIN],
  },
  // {
  //   id: 'addReport',
  //   label: 'Dodaj zgłoszenie',
  //   route: route['map.addReport'],
  //   icon: AiOutlinePlus,
  //   permissions: [PERMISSION_USER],
  // },
]

export const userSidebarNavigationConfig = [
  // {
  //   id: 'home',
  //   label: 'Strona główna',
  //   route: route['index'],
  //   icon: AiOutlineHome,
  //   permissions: [PERMISSION_USER],
  // },
  {
    id: 'map',
    label: 'Mapa',
    route: route['map'],
    icon: FiMapPin,
    permissions: [PERMISSION_USER],
  },
  {
    id: 'myReports',
    label: 'Moje zgłoszenia',
    route: route['userReports.list'],
    icon: MdOutlineListAlt,
    permissions: [PERMISSION_USER],
  },
  {
    id: 'myAccount',
    label: 'Moje konto',
    route: route['user.profile'],
    icon: CgProfile,
    permissions: [PERMISSION_USER],
  },
  {
    id: 'reports',
    label: 'Zgłoszenia',
    route: route['reports.list'],
    icon: MdOutlineListAlt,
  },
  {
    id: 'adminPanel',
    label: 'Panel miasta',
    route: route['admin'],
    icon: FaCity,
    permissions: [PERMISSION_ADMIN, PERMISSION_CITY_ADMIN],
  },
]
