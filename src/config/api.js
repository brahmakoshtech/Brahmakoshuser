export const API_CONFIG = {
  userId: import.meta.env.VITE_USER_ID || '',
  apiKey: import.meta.env.VITE_API_KEY || '',
  baseUrl: import.meta.env.VITE_BASE_URL || 'https://json.astrologyapi.com/v1/',
  language: 'en', // Default language, can be changed
}

export const setLanguage = (lang) => {
  API_CONFIG.language = lang
}

export const getLanguage = () => {
  return API_CONFIG.language
}








