import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import { FaCheckCircle } from 'react-icons/all'

const NoticeCreateSuccess = () => {
  return (
    <div>
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <FaCheckCircle className="text-9xl mx-auto text-green-400"/>
            <h1 className="text-6xl font-medium py-8">Udało się!</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              Zgłoszenie zostało dodane i teraz czeka na weryfikację przez naszych wolontariuszy.
              W najbliższym czasie ktoś się z Tobą skontaktuje telefonicznie aby potwierdzić zgłoszenie.
            </p>
            <Link
              to={route['index']}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeCreateSuccess