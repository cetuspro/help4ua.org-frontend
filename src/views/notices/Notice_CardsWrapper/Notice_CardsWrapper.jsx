
const NoticeCardsWrapper = ({ icon: Icon, title = "Notice Card Title", hashId, children }) => (

  <div id={hashId} className="bg-white p-8 pb-20 mb-36 rounded-xl shadow-xl scroll-mt-16">
    <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 text-center text-3xl sm:text-4xl font-bold mb-12 mt-8">
      <Icon className={'text-primary min-h-[65px] min-w-[65px] sm:min-h-[90px] sm:min-w-[90px]'} />
      {title}
    </h2>
    <div className="flex items-start flex-wrap lg:flex-nowrap justify-center gap-y-12 gap-x-16">
      {children}
    </div>
  </div>

)

export default NoticeCardsWrapper
