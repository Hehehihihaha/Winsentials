import type { ResolvedTheme } from '@/shared/config/app'
import { useSyncExternalStore } from 'react'
import { usePreferencesStore } from '@/entities/settings/model/preferences-store'

function getSystemResolvedTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function subscribeSystemTheme(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', onStoreChange)

  return () => {
    mediaQuery.removeEventListener('change', onStoreChange)
  }
}

export function useResolvedTheme() {
  const theme = usePreferencesStore(state => state.theme)
  const systemResolvedTheme = useSyncExternalStore<ResolvedTheme>(
    subscribeSystemTheme,
    getSystemResolvedTheme,
    () => 'dark',
  )

  return theme === 'system'
    ? systemResolvedTheme
    : theme
}
