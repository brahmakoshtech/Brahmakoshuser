import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Search } from 'lucide-react'
import PanchangForm from '../components/panchang/PanchangForm'
import AdvancedPanchangView from '../components/panchang/AdvancedPanchangView'
import ChaughadiyaView from '../components/panchang/ChaughadiyaView'
import HoraView from '../components/panchang/HoraView'
import PanchangChartView from '../components/panchang/PanchangChartView'
import MonthlyPanchangView from '../components/panchang/MonthlyPanchangView'
import FestivalView from '../components/panchang/FestivalView'
import LagnaTableView from '../components/panchang/LagnaTableView'
import { panchangServices } from '../data/panchangServices'
import { panchangAPIs, formatPanchangData } from '../services/panchangApi'

function Panchang() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = panchangServices.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.userTitle.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleFormSubmit = async (formData) => {
    if (!selectedService) {
      setError('Please select a Panchang service first')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Format data based on endpoint (some APIs need different formats)
      const endpointKey = selectedService.apiEndpoint
      const apiData = formatPanchangData(formData, endpointKey)
      
      // Get API function - use endpoint as key
      const apiFunction = panchangAPIs[endpointKey]
      
      if (!apiFunction) {
        console.error('Available endpoints:', Object.keys(panchangAPIs))
        throw new Error(`API function not found for endpoint: ${endpointKey}. Please check your API configuration.`)
      }
      
      console.log('Calling API:', endpointKey, 'with data:', apiData)
      const result = await apiFunction(apiData, selectedLanguage)
      setApiData(result)
    } catch (err) {
      const errorMessage = err.message || 'Failed to fetch Panchang data. Please check your API credentials in .env file.'
      setError(errorMessage)
      console.error('API Error Details:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const renderView = () => {
    if (!apiData) return null

    const serviceId = selectedService?.id

    if (serviceId === 'chaughadiya-muhurta') {
      return <ChaughadiyaView data={apiData} />
    }
    
    if (serviceId === 'hora-muhurta' || serviceId === 'hora-muhurta-dinman') {
      return <HoraView data={apiData} />
    }
    
    if (serviceId === 'panchang-chart' || serviceId === 'panchang-chart-sunrise') {
      return <PanchangChartView data={apiData} />
    }
    
    if (serviceId === 'monthly-panchang') {
      return <MonthlyPanchangView data={apiData} />
    }
    
    if (serviceId === 'panchang-festival') {
      return <FestivalView data={apiData} />
    }
    
    if (serviceId === 'panchang-lagna-table') {
      return <LagnaTableView data={apiData} />
    }
    
    // Default to Advanced Panchang view
    return <AdvancedPanchangView data={apiData} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gold-50 via-beige-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Calendar className="text-emerald-600" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Your <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Panchang Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get detailed Panchang information with advanced calculations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-8 bg-white border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Panchang services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedService(service)
                  setApiData(null)
                  setError(null)
                }}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedService?.id === service.id
                    ? 'border-gold-400 bg-gold-50 shadow-md'
                    : 'border-beige-200 bg-white hover:border-gold-200 hover:shadow-sm'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{service.userTitle}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedService ? (
            <div className="space-y-8">
              {/* Selected Service Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.userTitle}</h2>
                <p className="text-gray-600">{selectedService.description}</p>
              </motion.div>

              {/* Form */}
              <PanchangForm
                onSubmit={handleFormSubmit}
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
                isLoading={isLoading}
              />

              {/* Error Message */}
              {error && (
                <div className="bg-ruby-50 border border-ruby-200 rounded-lg p-4">
                  <p className="text-ruby-700">{error}</p>
                </div>
              )}

              {/* Results */}
              {apiData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg border border-beige-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Panchang Report</h2>
                  {renderView()}
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-xl shadow-md border border-beige-200"
            >
              <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 text-lg">Select a Panchang service to get started</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Panchang
