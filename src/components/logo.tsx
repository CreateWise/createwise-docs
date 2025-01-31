import Icon from '~/assets/images/logo-icon.svg'
import Text from '~/assets/images/logo-text.svg'
import { cn } from '~/lib/utils'

export function LogoIcon({ className }: { className?: string }) {
  return <Icon className={className} />
}

export function LogoText({ className }: { className?: string }) {
  return <Text className={className} />
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <LogoIcon className='size-8' />
      <LogoText className='w-32' />
    </div>
  )
}
