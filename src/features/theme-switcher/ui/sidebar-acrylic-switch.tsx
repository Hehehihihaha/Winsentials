import { MirrorRectangular } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { usePreferencesStore } from '@/entities/settings/model/preferences-store'
import { Switch } from '@/shared/ui/switch'

export function ChromeAcrylicSwitch() {
  const { t } = useTranslation()
  const chromeAcrylic = usePreferencesStore(state => state.chromeAcrylic)
  const setChromeAcrylic = usePreferencesStore(state => state.setChromeAcrylic)

  return (
    <label className="flex min-h-9 items-start justify-between gap-2 rounded-md border border-border/70 bg-background px-3 py-3">
      <div className="flex min-w-0 gap-2">
        <span className="mt-px flex size-4 shrink-0 items-center justify-center text-muted-foreground">
          <MirrorRectangular className="size-4" />
        </span>
        <div className="min-w-0">
          <div className="flex min-h-4 items-center">
            <span className="block text-sm font-medium leading-4 text-foreground">
              {t('settings.acrylic')}
            </span>
          </div>
          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
            {t('settings.acrylicDescription')}
          </span>
        </div>
      </div>
      <Switch
        checked={chromeAcrylic}
        className="mt-0.5"
        onCheckedChange={setChromeAcrylic}
      />
    </label>
  )
}
