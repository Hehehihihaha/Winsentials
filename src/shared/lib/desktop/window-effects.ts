import type { ResolvedTheme } from '@/shared/config/app'
import { invoke } from '@tauri-apps/api/core'

export async function syncChromeAcrylic(options: {
  enabled: boolean
  theme: ResolvedTheme
}) {
  return invoke<boolean>('set_chrome_acrylic', options)
}
