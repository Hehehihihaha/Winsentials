import type { ResolvedTheme } from '@/shared/config/app'
import { Toaster } from 'react-hot-toast'

export function AppToastProvider({ resolvedTheme }: { resolvedTheme: ResolvedTheme }) {
  return (
    <Toaster
      key={resolvedTheme}
      containerClassName="toast-host"
      gutter={10}
      position="bottom-right"
      toastOptions={{
        className: 'toast-fallback',
        duration: 4000,
      }}
    />
  )
}
