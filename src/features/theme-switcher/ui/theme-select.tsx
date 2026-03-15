import type { LucideIcon } from 'lucide-react'
import { MonitorCog, MoonStar, SunMedium } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { usePreferencesStore } from '@/entities/settings/model/preferences-store'
import { APP_THEMES } from '@/shared/config/app'
import { cn } from '@/shared/lib/utils'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group'

const THEME_ICONS: Record<(typeof APP_THEMES)[number], LucideIcon> = {
  light: SunMedium,
  dark: MoonStar,
  system: MonitorCog,
}

export function ThemeSelect() {
  const { t } = useTranslation()
  const theme = usePreferencesStore(state => state.theme)
  const setTheme = usePreferencesStore(state => state.setTheme)

  return (
    <RadioGroup
      className="grid grid-cols-3 gap-2"
      onValueChange={value => setTheme(value as typeof theme)}
      value={theme}
    >
      {APP_THEMES.map((item) => {
        const checked = theme === item
        const Icon = THEME_ICONS[item]

        return (
          <label
            key={item}
            className={cn(
              'flex w-full cursor-pointer items-center gap-2 rounded-lg border border-border/70 bg-background px-3 py-3 transition-colors',
              checked && 'border-primary/40 bg-accent/40',
            )}
          >
            <RadioGroupItem className="sr-only" value={item} />
            <span className="flex shrink-0 items-center justify-center text-muted-foreground">
              <Icon className="size-4" />
            </span>
            <div className="min-w-0">
              <span className="block text-sm font-medium text-foreground">
                {t(`settings.themes.${item}`)}
              </span>
            </div>
          </label>
        )
      })}
    </RadioGroup>
  )
}
