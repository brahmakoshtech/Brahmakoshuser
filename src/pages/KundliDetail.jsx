import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Download } from 'lucide-react'
import { kundliServices } from '../data/kundliServices'
import { useState, useEffect } from 'react'
import PlaceAutocomplete from '../components/common/PlaceAutocomplete'

function KundliDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = kundliServices.find(s => s.id === id)
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    place: '',
    latitude: '',
    longitude: '',
    timezone: '5.5',
  })

  const handlePlaceSelect = (placeData) => {
    setFormData({
      ...formData,
      place: placeData.place,
      latitude: placeData.latitude.toString(),
      longitude: placeData.longitude.toString(),
    })
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Redirect Panchang services to Panchang page
  const panchangServices = ['advanced-panchang', 'basic-panchang']
  // Redirect Match Making service to Match Making page
  useEffect(() => {
    if (service && panchangServices.includes(service.id)) {
      navigate('/panchang', { replace: true })
    } else if (service && service.id === 'match-making') {
      navigate('/match-making', { replace: true })
    }
  }, [service, navigate])

  if (service && (panchangServices.includes(service.id) || service.id === 'match-making')) {
    return null
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/kundli" className="text-gold-600 hover:text-gold-700">
            Back to Kundli Services
          </Link>
        </div>
      </div>
    )
  }

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'mr', name: 'Marathi' },
    { code: 'te', name: 'Telugu' },
    { code: 'ta', name: 'Tamil' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gold-50 via-beige-50 to-white py-12 border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/kundli"
            className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Kundli Services</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.userTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Select Language</h2>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedLanguage === lang.code
                          ? 'bg-gold-500 text-white shadow-md'
                          : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h2>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time of Birth
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Place of Birth
                      </label>
                      <PlaceAutocomplete
                        value={formData.place}
                        onChange={handleFormChange}
                        onPlaceSelect={handlePlaceSelect}
                        placeholder="Enter city name (e.g., Mumbai, Delhi)"
                      />
                      {formData.latitude && formData.longitude && (
                        <p className="text-xs text-gray-500 mt-1">
                          Coordinates: {formData.latitude}, {formData.longitude}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Latitude <span className="text-gray-400 text-xs">(Auto-filled)</span>
                      </label>
                      <input
                        type="number"
                        step="any"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleFormChange}
                        placeholder="Auto-filled from place"
                        readOnly
                        required
                        className="w-full px-4 py-2 border border-beige-300 rounded-lg bg-beige-50 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Longitude <span className="text-gray-400 text-xs">(Auto-filled)</span>
                      </label>
                      <input
                        type="number"
                        step="any"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleFormChange}
                        placeholder="Auto-filled from place"
                        readOnly
                        required
                        className="w-full px-4 py-2 border border-beige-300 rounded-lg bg-beige-50 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleFormChange}
                        placeholder="e.g., 5.5"
                        required
                        className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Generate Your Report
                  </button>
                </form>
              </motion.div>

              {/* What You'll Get */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h2>
                <ul className="space-y-3">
                  {[
                    'Detailed analysis based on your birth details',
                    'Personalized predictions and insights',
                    'PDF report for download',
                    'Instant delivery after generation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg border-2 border-gold-200 p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <p className="font-semibold text-gray-900">{service.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service Type</p>
                    <p className="font-semibold text-gray-900">{service.title}</p>
                  </div>
                  <div className="pt-4 border-t border-beige-200">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Check className="text-emerald-500" size={16} />
                      <span>Instant Report</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Check className="text-emerald-500" size={16} />
                      <span>PDF Download</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="text-emerald-500" size={16} />
                      <span>Multiple Languages</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KundliDetail

