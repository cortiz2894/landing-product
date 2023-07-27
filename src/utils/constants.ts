export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const SITE_NAME = `++hellohello`
export const SITE_DESCRIPTION = `We are a design agency collaborating with clients around the world to create awesome top quality digital products.`
export const SITE_LANG = `en`

// Environment
export const isBrowser: boolean = typeof window !== 'undefined'
export const isDev: boolean = process.env.NODE_ENV === 'development'
export const isProd: boolean = process.env.NODE_ENV === 'production'