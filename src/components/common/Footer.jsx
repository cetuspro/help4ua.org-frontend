import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { useTranslation } from 'react-i18next'
import { FaHeart } from 'react-icons/all'
import li from "../../assets/img/social/li.png"
import ig from "../../assets/img/social/ig.png"
import fb from "../../assets/img/social/fb.png"

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer id="main-footer" className="max-w-screen-2xl px-4 md:px-8 mx-auto w-full mb-2">
      <div className="container mx-auto">

        <div className='flex justify-center gap-x-4 mb-3'>
          {/* <a href='https://www.instagram.com/uapomoc.pl' target={"_blank"} rel={'noreferrer'}> 
            <img src={li} alt={'UApomoc Linkedin'}></img>
          </a> */}
          <a href='https://www.instagram.com/uapomoc.pl' target={"_blank"} rel={'noreferrer'}> 
            <img src={ig} alt={'UApomoc Instagram'}></img>
          </a>
          <a href='https://www.facebook.com/help4uaorg' target={"_blank"} rel={'noreferrer'}> 
            <img src={fb} alt={'UApomoc Facebook'}></img>
          </a>
        </div>

        <div className="text-gray-500 border-t text-center py-2">
          <Link
            className="mx-2"
            to={route['contact']}>
            {t("header.contact")}
          </Link>
          <Link
            className="mx-2"
            to={route['rodo']}>
            {t("header.rodo")}
          </Link>
        </div>

        <div className="text-gray-400 text-sm text-center flex flex-col lg:flex-row justify-center py-2">
          <div>© 2022 - help4ua.org</div>
          <div className='mx-2 flex justify-center content-center flex-row flex-wrap'>
            Started by
            <a className="mx-1" href="https://cetuspro.com" target="_blank" rel='noreferrer'>cetuspro.com</a>
            and made with
            <FaHeart className="mx-1 mt-0.5 text-sm"/>
            from people to people.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
