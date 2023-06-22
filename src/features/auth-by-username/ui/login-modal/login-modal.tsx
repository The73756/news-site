import { cls } from '@/shared/lib/class-names'
import { Modal } from '@/shared/ui'
import { LoginForm } from '../login-form'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <div className={cls('', {}, [className])}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <LoginForm />
      </Modal>
    </div>
  )
}
