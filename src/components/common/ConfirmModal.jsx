import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ConfirmModal = ({ title, description, Icon, setOpen, open, children }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-[90] inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-primary bg-opacity-5 p-4 sm:mx-0">
                    <Icon size={32} className="text-gray-600" />
                  </div>
                  <div className="mt-3 text-left sm:mt-0">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-bold text-gray-900 capitalize">
                      {title}
                    </Dialog.Title>
                    {description && (
                      <div className="mt-2">
                        <p className="text-base text-gray-500">{description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex gap-8 justify-center sm:justify-end relative">
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ConfirmModal
