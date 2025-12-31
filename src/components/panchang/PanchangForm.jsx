import { useState } from 'react'
import { Calendar, Clock, Globe } from 'lucide-react'
import PlaceAutocomplete from '../common/PlaceAutocomplete'

function PanchangForm({ onSubmit, selectedLanguage, onLanguageChange, isLoading = false }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
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

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ma', name: 'Marathi' },
    { code: 'bn', name: 'Bengali' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'kn', name: 'Kannada' },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ ...formData, language: selectedLanguage })
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-beige-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Enter Details</h2>
        <div className="flex items-center space-x-2">
          <Globe className="text-gray-400" size={20} />
          <select
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="px-3 py-1 border border-beige-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <Calendar size={16} className="text-gold-600" />
              <span>Date</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <Clock size={16} className="text-gold-600" />
              <span>Time</span>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>Place of Birth</span>
            </label>
            <PlaceAutocomplete
              value={formData.place}
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Auto-filled from place"
              readOnly
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
              onChange={handleChange}
              placeholder="Auto-filled from place"
              readOnly
              className="w-full px-4 py-2 border border-beige-300 rounded-lg bg-beige-50 text-gray-600 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <input
              type="number"
              step="any"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              placeholder="e.g., 5.5"
              required
              className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Get Panchang'}
        </button>
      </form>
    </div>
  )
}

export default PanchangForm

