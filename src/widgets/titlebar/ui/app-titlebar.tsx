import type { ComponentProps } from 'react'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { Minus, X } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { SidebarTrigger } from '@/shared/ui/sidebar'

function TitlebarButton({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      className={className}
      size="icon-xs"
      type="button"
      variant="ghost"
      {...props}
    />
  )
}

export function AppTitlebar() {
  const window = getCurrentWindow()

  const handleMinimize = async () => {
    await window.minimize()
  }

  const handleClose = async () => {
    await window.close()
  }

  return (
    <header className="flex h-10 shrink-0 items-center bg-sidebar px-2 text-sidebar-foreground">
      <SidebarTrigger
        className="size-8 cursor-pointer rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        iconClassName="size-3.5"
      />
      <div className="min-w-0 flex-1 self-stretch" data-tauri-drag-region />
      <div className="flex items-center gap-1">
        <TitlebarButton
          aria-label="Minimize window"
          className="h-8 w-8 cursor-pointer rounded-md p-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={() => {
            void handleMinimize()
          }}
        >
          <Minus className="size-4" />
        </TitlebarButton>
        <TitlebarButton
          aria-label="Close window"
          className="h-8 w-8 cursor-pointer rounded-md p-0 text-sidebar-foreground hover:bg-destructive hover:text-white focus-visible:ring-destructive/20 dark:hover:bg-destructive/60 dark:focus-visible:ring-destructive/40"
          onClick={() => {
            void handleClose()
          }}
        >
          <X className="size-4" />
        </TitlebarButton>
      </div>
    </header>
  )
}
