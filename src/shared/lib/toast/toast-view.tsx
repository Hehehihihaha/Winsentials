import type { ReactNode } from 'react'
import {
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
  XCircle,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export interface ToastActionButton {
  label: ReactNode
  onClick: () => void | Promise<void>
}

export interface ToastCancelButton {
  label: ReactNode
  onClick?: () => void | Promise<void>
}

export type AppToastVariant = 'default' | 'error' | 'info' | 'success'

interface ToastViewProps {
  action?: ToastActionButton
  cancel?: ToastCancelButton
  description?: ReactNode
  message: ReactNode
  onClose: () => void
  variant: AppToastVariant
  visible: boolean
}

function ToastIcon({ variant }: { variant: AppToastVariant }) {
  const className = cn(
    'toast-icon',
    variant === 'success' && 'toast-icon--success',
    variant === 'error' && 'toast-icon--error',
    variant === 'info' && 'toast-icon--info',
  )

  if (variant === 'success') {
    return <CheckCircle2 className={className} />
  }

  if (variant === 'error') {
    return <XCircle className={className} />
  }

  if (variant === 'info') {
    return <TriangleAlert className={className} />
  }

  return <Info className={className} />
}

export function ToastView({
  action,
  cancel,
  description,
  message,
  onClose,
  variant,
  visible,
}: ToastViewProps) {
  const handleAction = () => {
    const result = action?.onClick()
    onClose()

    if (result instanceof Promise) {
      void result
    }
  }

  const handleCancel = () => {
    const result = cancel?.onClick?.()
    onClose()

    if (result instanceof Promise) {
      void result
    }
  }

  return (
    <div
      className={cn(
        'toast-root',
        visible ? 'toast-root--visible' : 'toast-root--hidden',
        variant === 'success' && 'toast-root--success',
        variant === 'error' && 'toast-root--error',
        variant === 'info' && 'toast-root--info',
      )}
    >
      <div className="toast-main">
        <div className="toast-icon-wrap">
          <ToastIcon variant={variant} />
        </div>
        <div className="toast-content">
          <div className="toast-title">{message}</div>
          {description && (
            <div className="toast-description">{description}</div>
          )}
        </div>
        <button
          aria-label="Close notification"
          className="toast-close"
          onClick={onClose}
          type="button"
        >
          <X className="size-4" />
        </button>
      </div>
      {(action || cancel) && (
        <div className="toast-actions">
          {cancel && (
            <button className="toast-cancel" onClick={handleCancel} type="button">
              {cancel.label}
            </button>
          )}
          {action && (
            <button className="toast-action" onClick={handleAction} type="button">
              {action.label}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
