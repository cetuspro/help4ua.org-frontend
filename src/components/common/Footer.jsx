import playStore from '../../assets/img/google-play-black.png'
import appStore from '../../assets/img/app-store-black.png'
import { featureUnavailable } from '../../app/utils/featureUnavaliable'

const Footer = () => {
  return (
    <footer id="main-footer" className="max-w-screen-2xl px-4 md:px-8 mx-auto w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 justify-center py-8">
          <a onClick={featureUnavailable}>
            <img src={playStore} alt="Pobierz aplikację z Google Play" />
          </a>
          <a onClick={featureUnavailable}>
            <img src={appStore} alt="Pobierz aplikację z App Store" />
          </a>
        </div>
        <div className="border-t text-gray-400 text-sm text-center py-8">
          © 2021 - Connected City
        </div>
      </div>
    </footer>
  )
}

export default Footer
