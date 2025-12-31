import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Loader2 } from 'lucide-react'
import MatchMakingForm from '../components/matchmaking/MatchMakingForm'
import { matchMakingAPIs, formatMatchMakingData } from '../services/matchMakingApi'

// Import all view components
import MatchBirthDetailsView from '../components/matchmaking/MatchBirthDetailsView'
import MatchAstroDetailsView from '../components/matchmaking/MatchAstroDetailsView'
import MatchPlanetDetailsView from '../components/matchmaking/MatchPlanetDetailsView'
import MatchAshtakootPointsView from '../components/matchmaking/MatchAshtakootPointsView'
import MatchMakingReportView from '../components/matchmaking/MatchMakingReportView'
import MatchManglikReportView from '../components/matchmaking/MatchManglikReportView'
import MatchObstructionsView from '../components/matchmaking/MatchObstructionsView'
import MatchRajjuDoshaView from '../components/matchmaking/MatchRajjuDoshaView'
import MatchMakingDetailedReportView from '../components/matchmaking/MatchMakingDetailedReportView'
import MatchDashakootPointsView from '../components/matchmaking/MatchDashakootPointsView'
import MatchPercentageView from '../components/matchmaking/MatchPercentageView'
import PapasamyamDetailsView from '../components/matchmaking/PapasamyamDetailsView'
import MatchHoroscopeView from '../components/matchmaking/MatchHoroscopeView'

const matchMakingTabs = [
  { id: 'birth-details', label: 'Birth Details', apiKey: 'match_birth_details', component: MatchBirthDetailsView },
  { id: 'astro-details', label: 'Astro Details', apiKey: 'match_astro_details', component: MatchAstroDetailsView },
  { id: 'planet-details', label: 'Planet Details', apiKey: 'match_planet_details', component: MatchPlanetDetailsView },
  { id: 'ashtakoot', label: 'Ashtakoot Points', apiKey: 'match_ashtakoot_points', component: MatchAshtakootPointsView },
  { id: 'dashakoot', label: 'Dashakoot Points', apiKey: 'match_dashakoot_points', component: MatchDashakootPointsView },
  { id: 'percentage', label: 'Match Percentage', apiKey: 'match_percentage', component: MatchPercentageView },
  { id: 'manglik', label: 'Manglik Report', apiKey: 'match_manglik_report', component: MatchManglikReportView },
  { id: 'rajju-dosha', label: 'Rajju Dosha', apiKey: 'match_rajju_dosha', component: MatchRajjuDoshaView },
  { id: 'obstructions', label: 'Obstructions', apiKey: 'match_obstructions', component: MatchObstructionsView },
  { id: 'papasamyam', label: 'Papasamyam', apiKey: 'papasamyam_details', component: PapasamyamDetailsView },
  { id: 'report', label: 'Match Report', apiKey: 'match_making_report', component: MatchMakingReportView },
  { id: 'detailed-report', label: 'Detailed Report', apiKey: 'match_making_detailed_report', component: MatchMakingDetailedReportView },
  { id: 'horoscope', label: 'Horoscope Match', apiKey: 'match_horoscope', component: MatchHoroscopeView },
]

function MatchMaking() {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [activeTab, setActiveTab] = useState('birth-details')
  const [apiResults, setApiResults] = useState({})
  const [loading, setLoading] = useState({})
  const [errors, setErrors] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  // Clear localStorage on page load/refresh
  useEffect(() => {
    // Clear saved match making data on page refresh
    localStorage.removeItem('brahmakosh_matchmaking_data')
    
    // Reset all states
    setIsFormSubmitted(false)
    setApiResults({})
    setLoading({})
    setErrors({})
    setActiveTab('birth-details')
  }, [])

  const handleFormSubmit = async (formData) => {
    setIsFormSubmitted(true)
    
    // Validate form data before formatting
    if (!formData.male || !formData.female) {
      alert('Please fill in both male and female details')
      return
    }

    if (!formData.male.date || !formData.female.date) {
      alert('Please enter dates of birth for both male and female')
      return
    }

    if (!formData.male.latitude || !formData.male.longitude || !formData.female.latitude || !formData.female.longitude) {
      alert('Please select places of birth for both male and female using the place autocomplete')
      return
    }
    
    try {
      const formattedData = formatMatchMakingData(formData.male, formData.female)
      console.log('Formatted Match Making Data:', formattedData)
      console.log('Formatted Match Making Data (JSON):', JSON.stringify(formattedData))
      
      // Validate formatted data before sending
      const requiredFields = [
        'm_day', 'm_month', 'm_year', 'm_hour', 'm_min', 'm_lat', 'm_lon', 'm_tzone',
        'f_day', 'f_month', 'f_year', 'f_hour', 'f_min', 'f_lat', 'f_lon', 'f_tzone'
      ]
      
      const invalidFields = requiredFields.filter(field => {
        const value = formattedData[field]
        return value === undefined || value === null || isNaN(value)
      })
      
      if (invalidFields.length > 0) {
        console.error('Invalid fields in formatted data:', invalidFields)
        console.error('Formatted data:', formattedData)
        throw new Error(`Invalid data format. Missing or invalid fields: ${invalidFields.join(', ')}`)
      }
      
      // Save to localStorage
      localStorage.setItem('brahmakosh_matchmaking_data', JSON.stringify(formData))

      // Fetch all APIs in parallel
      const fetchPromises = matchMakingTabs.map(async (tab) => {
        setLoading(prev => ({ ...prev, [tab.id]: true }))
        setErrors(prev => ({ ...prev, [tab.id]: null }))
        
        try {
          const apiFunction = matchMakingAPIs[tab.apiKey]
          if (!apiFunction) {
            throw new Error(`API function not found for ${tab.apiKey}`)
          }
          
          console.log(`Calling ${tab.label} API with data:`, formattedData)
          const result = await apiFunction(formattedData, selectedLanguage)
          setApiResults(prev => ({ ...prev, [tab.id]: result }))
        } catch (error) {
          setErrors(prev => ({ ...prev, [tab.id]: error.message }))
          console.error(`Error fetching ${tab.label}:`, error)
          console.error(`Error details for ${tab.label}:`, {
            apiKey: tab.apiKey,
            data: formattedData,
            error: error.message
          })
        } finally {
          setLoading(prev => ({ ...prev, [tab.id]: false }))
        }
      })

      await Promise.all(fetchPromises)
    } catch (error) {
      alert(`Error: ${error.message}`)
      console.error('Error formatting match making data:', error)
    }
  }

  const handleTabClick = async (tab) => {
    setActiveTab(tab.id)
    
    // If data not loaded yet, fetch it (data should be in state from form submit)
    // Note: We don't load from localStorage here as it's cleared on page refresh
    if (!apiResults[tab.id] && !loading[tab.id] && !errors[tab.id] && isFormSubmitted) {
      // Data should already be in state from handleFormSubmit
      // If not, show error
      setErrors(prev => ({ ...prev, [tab.id]: 'Please submit the form first to load data' }))
    }
  }

  const renderActiveTabContent = () => {
    const activeTabData = matchMakingTabs.find(tab => tab.id === activeTab)
    if (!activeTabData) return null

    const ViewComponent = activeTabData.component
    const data = apiResults[activeTab]
    const isLoading = loading[activeTab]
    const error = errors[activeTab]

    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-gold-600" size={48} />
        </div>
      )
    }

    if (error) {
      return (
        <div className="bg-ruby-50 border border-ruby-200 rounded-lg p-6 text-center">
          <p className="text-ruby-700 font-semibold">Error loading {activeTabData.label}</p>
          <p className="text-ruby-600 text-sm mt-2">{error}</p>
        </div>
      )
    }

    if (!data) {
      return (
        <div className="bg-beige-50 border border-beige-200 rounded-lg p-6 text-center">
          <p className="text-gray-600">Click on the tab to load {activeTabData.label}</p>
        </div>
      )
    }

    return <ViewComponent data={data} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-ruby-50 via-beige-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ruby-100 rounded-full mb-6">
              <Heart className="text-ruby-600" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-ruby-600 to-ruby-800 bg-clip-text text-transparent">Match Making</span> Report
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive marriage compatibility analysis using Vedic astrology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MatchMakingForm
            onSubmit={handleFormSubmit}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            isLoading={Object.values(loading).some(l => l)}
          />
        </div>
      </section>

      {/* Results Section with Tabs */}
      {isFormSubmitted && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="mb-8">
              <div className="border-b border-beige-200 overflow-x-auto">
                <div className="flex space-x-1 min-w-max">
                  {matchMakingTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab)}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-ruby-500 text-ruby-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                      {loading[tab.id] && (
                        <Loader2 className="inline-block ml-2 animate-spin" size={14} />
                      )}
                      {errors[tab.id] && (
                        <span className="ml-2 text-ruby-500">⚠</span>
                      )}
                      {apiResults[tab.id] && !loading[tab.id] && !errors[tab.id] && (
                        <span className="ml-2 text-emerald-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-beige-200 p-8"
            >
              {renderActiveTabContent()}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default MatchMaking

