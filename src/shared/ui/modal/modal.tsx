import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface ModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className=" relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter=""
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=""
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-focus/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter=""
              enterFrom="opacity-0 scale-80"
              enterTo="opacity-100 scale-100"
              leave=""
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-80"
            >
              <Dialog.Panel className="modal-box ">{children}</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
