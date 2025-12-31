import { API_CONFIG } from '../config/api'

// Helper function to create auth header
const getAuthHeader = () => {
  const credentials = `${API_CONFIG.userId}:${API_CONFIG.apiKey}`
  return `Basic ${btoa(credentials)}`
}

// Generic API call function
const callPanchangAPI = async (endpoint, data, language = 'en') => {
  try {
    const url = `${API_CONFIG.baseUrl}${endpoint}`
    console.log('API Call:', url, 'Method: POST', 'Data:', data)
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/json',
        'Accept-Language': language,
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', response.status, errorText)
      throw new Error(`API Error: ${response.status} - ${errorText || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Format date inputs to API format
export const formatPanchangData = (formData, endpoint = '') => {
  const date = new Date(formData.date)
  const time = formData.time ? formData.time.split(':') : ['00', '00']
  
  const baseData = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: parseInt(time[0]) || 0,
    min: parseInt(time[1]) || 0,
    lat: parseFloat(formData.latitude) || 0,
    lon: parseFloat(formData.longitude) || 0,
    tzone: parseFloat(formData.timezone) || 5.5,
  }

  // Special handling for monthly panchang APIs - they only need month and year
  if (endpoint === 'monthly_panchang' || endpoint === 'tamil_month_panchang') {
    return {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      lat: parseFloat(formData.latitude) || 0,
      lon: parseFloat(formData.longitude) || 0,
      tzone: parseFloat(formData.timezone) || 5.5,
    }
  }

  // Special handling for panchang_festival - needs date range (start and end date)
  // For festival, we'll use the selected date as start and add 30 days as end
  if (endpoint === 'panchang_festival') {
    const endDate = new Date(date)
    endDate.setDate(endDate.getDate() + 30) // 30 days range
    
    return {
      start_day: date.getDate(),
      start_month: date.getMonth() + 1,
      start_year: date.getFullYear(),
      end_day: endDate.getDate(),
      end_month: endDate.getMonth() + 1,
      end_year: endDate.getFullYear(),
      lat: parseFloat(formData.latitude) || 0,
      lon: parseFloat(formData.longitude) || 0,
      tzone: parseFloat(formData.timezone) || 5.5,
    }
  }

  return baseData
}

// Panchang APIs
export const panchangAPIs = {
  // Advanced Panchang
  advanced_panchang: async (data, language = 'en') => {
    return callPanchangAPI('advanced_panchang', data, language)
  },

  // Advanced Panchang Sunrise
  'advanced_panchang/sunrise': async (data, language = 'en') => {
    return callPanchangAPI('advanced_panchang/sunrise', data, language)
  },

  // Chaughadiya Muhurta
  chaughadiya_muhurta: async (data, language = 'en') => {
    return callPanchangAPI('chaughadiya_muhurta', data, language)
  },

  // Hora Muhurta
  hora_muhurta: async (data, language = 'en') => {
    return callPanchangAPI('hora_muhurta', data, language)
  },

  // Hora Muhurta Dinman
  hora_muhurta_dinman: async (data, language = 'en') => {
    return callPanchangAPI('hora_muhurta_dinman', data, language)
  },

  // Panchang Chart
  panchang_chart: async (data, language = 'en') => {
    return callPanchangAPI('panchang_chart', data, language)
  },

  // Panchang Chart Sunrise
  'panchang_chart/sunrise': async (data, language = 'en') => {
    return callPanchangAPI('panchang_chart/sunrise', data, language)
  },

  // Tamil Month Panchang
  tamil_month_panchang: async (data, language = 'en') => {
    return callPanchangAPI('tamil_month_panchang', data, language)
  },

  // Tamil Panchang
  tamil_panchang: async (data, language = 'en') => {
    return callPanchangAPI('tamil_panchang', data, language)
  },

  // Panchang Lagna Table
  panchang_lagna_table: async (data, language = 'en') => {
    return callPanchangAPI('panchang_lagna_table', data, language)
  },

  // Monthly Panchang
  monthly_panchang: async (data, language = 'en') => {
    return callPanchangAPI('monthly_panchang', data, language)
  },

  // Panchang Festival - requires date range
  panchang_festival: async (data, language = 'en') => {
    // Data should already be formatted with start/end dates
    return callPanchangAPI('panchang_festival', data, language)
  },
}

