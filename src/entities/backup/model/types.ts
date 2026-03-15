export interface BackupMeta {
  filename: string
  label: string
  createdAt: string
}

export interface RestoreReport {
  applied: number
  failed: string[]
}

export interface BackupSnapshot {
  createdAt: string
  label: string
  tweaks: Record<string, string>
}
