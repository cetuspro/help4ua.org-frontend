const NoticeListItemWrapper = ({ children }) => (
  <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
    <div className="flex md:gap-5 flex-col md:flex-row text-left">{children}</div>
  </div>
)

export default NoticeListItemWrapper
