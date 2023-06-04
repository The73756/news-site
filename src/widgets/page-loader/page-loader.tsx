import { tw } from 'typewind'
import { Loader } from '@/shared/ui/loader'

export const PageLoader = () => {
  return (
    <div className={tw.w_full.flex.justify_center.items_center.flex_1 + ' body-height'}>
      <Loader />
    </div>
  )
}
