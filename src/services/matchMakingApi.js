import { API_CONFIG } from '../config/api'

// Helper function to create auth header
const getAuthHeader = () => {
  const credentials = `${API_CONFIG.userId}:${API_CONFIG.apiKey}`
  return `Basic ${btoa(credentials)}`
}

// Generic API call function
const callMatchMakingAPI = async (endpoint, data, language = 'en') => {
  try {
    const url = `${API_CONFIG.baseUrl}${endpoint}`
    
    // Deep clone and validate data before stringifying
    const dataToSend = JSON.parse(JSON.stringify(data))
    
    // Remove any null/undefined values
    Object.keys(dataToSend).forEach(key => {
      if (dataToSend[key] === null || dataToSend[key] === undefined) {
        console.warn(`Removing null/undefined field: ${key}`)
        delete dataToSend[key]
      }
    })
    
    console.log('Match Making API Call:', url)
    console.log('Method: POST')
    console.log('Data (object):', dataToSend)
    console.log('Data (JSON string):', JSON.stringify(dataToSend))
    console.log('Data keys:', Object.keys(dataToSend))
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/json',
        'Accept-Language': language,
      },
      body: JSON.stringify(dataToSend),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', response.status, errorText)
      console.error('Request URL:', url)
      console.error('Request Data:', dataToSend)
      throw new Error(`API Error: ${response.status} - ${errorText || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Match Making API Error:', error)
    throw error
  }
}

// Format match making data from form inputs
export const formatMatchMakingData = (maleData, femaleData) => {
  // Validate and parse male date
  if (!maleData.date) {
    throw new Error('Male date of birth is required')
  }
  const maleDate = new Date(maleData.date)
  if (isNaN(maleDate.getTime())) {
    throw new Error('Invalid male date of birth')
  }
  const maleTime = maleData.time ? maleData.time.split(':') : ['00', '00']
  
  // Validate and parse female date
  if (!femaleData.date) {
    throw new Error('Female date of birth is required')
  }
  const femaleDate = new Date(femaleData.date)
  if (isNaN(femaleDate.getTime())) {
    throw new Error('Invalid female date of birth')
  }
  const femaleTime = femaleData.time ? femaleData.time.split(':') : ['00', '00']

  // Validate coordinates
  const m_lat = parseFloat(maleData.latitude)
  const m_lon = parseFloat(maleData.longitude)
  const f_lat = parseFloat(femaleData.latitude)
  const f_lon = parseFloat(femaleData.longitude)

  if (isNaN(m_lat) || isNaN(m_lon)) {
    throw new Error('Male place coordinates are required')
  }
  if (isNaN(f_lat) || isNaN(f_lon)) {
    throw new Error('Female place coordinates are required')
  }

  // Ensure all values are valid numbers
  const m_day = maleDate.getDate()
  const m_month = maleDate.getMonth() + 1
  const m_year = maleDate.getFullYear()
  const m_hour = parseInt(maleTime[0], 10) || 0
  const m_min = parseInt(maleTime[1], 10) || 0
  
  const f_day = femaleDate.getDate()
  const f_month = femaleDate.getMonth() + 1
  const f_year = femaleDate.getFullYear()
  const f_hour = parseInt(femaleTime[0], 10) || 0
  const f_min = parseInt(femaleTime[1], 10) || 0
  
  const m_tzone = parseFloat(maleData.timezone) || 5.5
  const f_tzone = parseFloat(femaleData.timezone) || 5.5

  // Validate all numeric values
  if (isNaN(m_day) || isNaN(m_month) || isNaN(m_year) || isNaN(m_hour) || isNaN(m_min)) {
    console.error('Invalid male values:', { m_day, m_month, m_year, m_hour, m_min })
    throw new Error('Invalid male birth date/time values')
  }
  if (isNaN(f_day) || isNaN(f_month) || isNaN(f_year) || isNaN(f_hour) || isNaN(f_min)) {
    console.error('Invalid female values:', { f_day, f_month, f_year, f_hour, f_min })
    throw new Error('Invalid female birth date/time values')
  }

  // Create result object with explicit number conversion
  const result = {
    m_day: Number(m_day),
    m_month: Number(m_month),
    m_year: Number(m_year),
    m_hour: Number(m_hour),
    m_min: Number(m_min),
    m_lat: Number(m_lat),
    m_lon: Number(m_lon),
    m_tzone: Number(m_tzone),
    f_day: Number(f_day),
    f_month: Number(f_month),
    f_year: Number(f_year),
    f_hour: Number(f_hour),
    f_min: Number(f_min),
    f_lat: Number(f_lat),
    f_lon: Number(f_lon),
    f_tzone: Number(f_tzone),
  }

  // Final validation - ensure no null/undefined/NaN values
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (value === null || value === undefined || isNaN(value)) {
      console.error(`Invalid final value for ${key}:`, value, 'Type:', typeof value)
      throw new Error(`Invalid formatted value for ${key}: ${value}`)
    }
  })

  console.log('Formatted Match Making Data (final):', result)
  return result
}

// Match Making APIs
export const matchMakingAPIs = {
  // Match Birth Details
  match_birth_details: async (data, language = 'en') => {
    return callMatchMakingAPI('match_birth_details', data, language)
  },

  // Match Astro Details
  match_astro_details: async (data, language = 'en') => {
    return callMatchMakingAPI('match_astro_details', data, language)
  },

  // Match Planet Details
  match_planet_details: async (data, language = 'en') => {
    return callMatchMakingAPI('match_planet_details', data, language)
  },

  // Match Ashtakoot Points
  match_ashtakoot_points: async (data, language = 'en') => {
    return callMatchMakingAPI('match_ashtakoot_points', data, language)
  },

  // Match Making Report
  match_making_report: async (data, language = 'en') => {
    return callMatchMakingAPI('match_making_report', data, language)
  },

  // Match Manglik Report
  match_manglik_report: async (data, language = 'en') => {
    return callMatchMakingAPI('match_manglik_report', data, language)
  },

  // Match Obstructions
  match_obstructions: async (data, language = 'en') => {
    return callMatchMakingAPI('match_obstructions', data, language)
  },

  // Match Rajju Dosha
  match_rajju_dosha: async (data, language = 'en') => {
    return callMatchMakingAPI('match_rajju_dosha', data, language)
  },

  // Match Making Detailed Report
  match_making_detailed_report: async (data, language = 'en') => {
    return callMatchMakingAPI('match_making_detailed_report', data, language)
  },

  // Match Dashakoot Points
  match_dashakoot_points: async (data, language = 'en') => {
    return callMatchMakingAPI('match_dashakoot_points', data, language)
  },

  // Match Percentage
  match_percentage: async (data, language = 'en') => {
    return callMatchMakingAPI('match_percentage', data, language)
  },

  // Papasamyam Details - ensure all values are valid numbers
  papasamyam_details: async (data, language = 'en') => {
    // Validate input data exists
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data object for papasamyam_details')
    }

    // Check all required fields exist
    const requiredFields = [
      'm_day', 'm_month', 'm_year', 'm_hour', 'm_min', 'm_lat', 'm_lon', 'm_tzone',
      'f_day', 'f_month', 'f_year', 'f_hour', 'f_min', 'f_lat', 'f_lon', 'f_tzone'
    ]
    
    const missingFields = requiredFields.filter(field => data[field] === undefined || data[field] === null)
    if (missingFields.length > 0) {
      console.error('Missing fields in papasamyam_details data:', missingFields)
      console.error('Full data object:', data)
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
    }

    // Convert all values to numbers and validate
    const formattedData = {}
    requiredFields.forEach(field => {
      const value = Number(data[field])
      if (isNaN(value) || value === null || value === undefined) {
        console.error(`Invalid value for ${field}:`, data[field], 'Type:', typeof data[field])
        throw new Error(`Invalid value for ${field}: ${data[field]} (expected number)`)
      }
      formattedData[field] = value
    })
    
    console.log('Papasamyam API Data (validated):', formattedData)
    console.log('Papasamyam API Data (JSON):', JSON.stringify(formattedData))
    
    return callMatchMakingAPI('papasamyam_details', formattedData, language)
  },

  // Match Horoscope
  match_horoscope: async (data, language = 'en') => {
    return callMatchMakingAPI('match_horoscope', data, language)
  },

  // Zodiac Compatibility (single zodiac - GET request)
  zodiac_compatibility: async (zodiacName, language = 'en') => {
    try {
      const url = `${API_CONFIG.baseUrl}zodiac_compatibility/${zodiacName}`
      console.log('Zodiac Compatibility API Call:', url, 'Method: POST')
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': getAuthHeader(),
          'Content-Type': 'application/json',
          'Accept-Language': language,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`API Error: ${response.status} - ${errorText || response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Zodiac Compatibility API Error:', error)
      throw error
    }
  },

  // Zodiac Partner Compatibility (two zodiacs - GET request)
  zodiac_partner_compatibility: async (zodiacName, partnerZodiacName, language = 'en') => {
    try {
      const url = `${API_CONFIG.baseUrl}zodiac_compatibility/${zodiacName}/${partnerZodiacName}`
      console.log('Zodiac Partner Compatibility API Call:', url, 'Method: POST')
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': getAuthHeader(),
          'Content-Type': 'application/json',
          'Accept-Language': language,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`API Error: ${response.status} - ${errorText || response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Zodiac Partner Compatibility API Error:', error)
      throw error
    }
  },
}

