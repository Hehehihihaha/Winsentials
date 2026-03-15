import { Link, useRouterState } from '@tanstack/react-router'
import { Palette, Settings2, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar'

export function AppSidebar() {
  const { t } = useTranslation()
  const pathname = useRouterState({
    select: state => state.location.pathname,
  })

  return (
    <Sidebar
      className="h-full min-h-0 shrink-0 [&>[data-slot=sidebar-inner]]:bg-transparent"
      collapsible="icon"
      style={
        {
          '--sidebar-width': '12rem',
          '--sidebar-width-icon': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/security'}
              tooltip={t('navigation.security')}
            >
              <Link to="/security">
                <Shield />
                <span>{t('navigation.security')}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/appearance'}
              tooltip={t('navigation.appearance')}
            >
              <Link to="/appearance">
                <Palette />
                <span>{t('navigation.appearance')}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/70 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/settings'}
              tooltip={t('navigation.settings')}
            >
              <Link to="/settings">
                <Settings2 />
                <span>{t('navigation.settings')}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
