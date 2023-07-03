import { Suspense } from 'react'
import { cls } from '@/shared/lib/class-names'
import { Loader, Modal } from '@/shared/ui'
import { LoginFormAsync } from '../login-form'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <div className={cls('', {}, [className])}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync />
        </Suspense>
      </Modal>
    </div>
  )
}
