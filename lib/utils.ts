import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneDisplay(p: string) {
  // 06-18249249 -> 06 18 24 92 49
  return p.replace(/^06-?(\d{2})(\d{2})(\d{2})(\d{2})$/, '06 $1 $2 $3 $4')
}
