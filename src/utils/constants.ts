export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const SITE_NAME = `3D Product Landing`
export const SITE_DESCRIPTION = `Website for product 3D demo`
export const SITE_LANG = `en`

// Environment
export const isBrowser: boolean = typeof window !== 'undefined'
export const isDev: boolean = process.env.NODE_ENV === 'development'
export const isProd: boolean = process.env.NODE_ENV === 'production'