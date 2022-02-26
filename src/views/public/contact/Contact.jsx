import { useTranslation } from 'react-i18next'

export default function Contact() {
  const {t} = useTranslation();
  return (
    <>
      <div className="items-center p-8 mx-20 flex justify-center">
        <div className="flex-1 justify-end p-4 flex">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuapomocpl%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="360" height="500" className="border-none overflow-hidden" scrolling="no" frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex-1 p-4 h-full">
          <h1>{t("header.contact")}:</h1>
          <h2>akcjauapomoc@gmail.com</h2>
        </div>
      </div>
    </>
  )
}
