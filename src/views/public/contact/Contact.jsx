import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <>
      <div className="items-center  mx-auto md:mx-20 md:flex justify-center r">
        <div className="flex-1 flex-start md:justify-end flex p-4 ">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuapomocpl%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="360"
            height="500"
            className="border-none overflow-hidden"
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex-1 p-4 h-full md:mx-20 md:flex md:text-center ">
          <div className="bg-white rounded-lg border border-gray-200  lg:w-full ">
            <div className="px-6 py-4">
              <h1>{t('header.contact')}:</h1>
              <br />
              <br />
              <div className="md:text-left">
                <span>{t('form.email')}:</span>
                <h2>
                  <strong> akcjauapomoc@gmail.com</strong>
                </h2>
                <br />
                <br />
                <span>{t('form.phoneNumber')}:</span>
                <div>Oleg</div>
                <div>PL 🇵🇱 / ENG 🇬🇧 / UA 🇺🇦 </div>
                <h2>
                  <strong>+48 792 756 817</strong>
                </h2>
                <br />
                <br />
                <h2 className="text-gray-600">{t('common.discordDescription')}:</h2>
                <a href="https://discord.com/invite/QfYgU75Mcw" target="_blank" rel="noreferrer">
                  <strong className="text-gray-600">https://discord.com/invite/QfYgU75Mcw</strong>
                </a>
                <h3 className="text-gray-600">{t('common.discordDescription2')} 💙💛</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
