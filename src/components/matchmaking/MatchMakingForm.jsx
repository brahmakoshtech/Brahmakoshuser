import { useState, useEffect } from 'react'
import { Calendar, Clock, Globe, User, Heart } from 'lucide-react'
import PlaceAutocomplete from '../common/PlaceAutocomplete'

function MatchMakingForm({ onSubmit, selectedLanguage, onLanguageChange, isLoading = false }) {
  const [maleData, setMaleData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    latitude: '',
    longitude: '',
    timezone: '5.5',
  })

  const [femaleData, setFemaleData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    latitude: '',
    longitude: '',
    timezone: '5.5',
  })

  // Don't load from localStorage on mount - data will be cleared on page refresh
  // Form will start fresh each time

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

  const handleMaleChange = (e) => {
    setMaleData({ ...maleData, [e.target.name]: e.target.value })
  }

  const handleFemaleChange = (e) => {
    setFemaleData({ ...femaleData, [e.target.name]: e.target.value })
  }

  const handleMalePlaceSelect = (placeData) => {
    setMaleData({
      ...maleData,
      place: placeData.place,
      latitude: placeData.latitude.toString(),
      longitude: placeData.longitude.toString(),
    })
  }

  const handleFemalePlaceSelect = (placeData) => {
    setFemaleData({
      ...femaleData,
      place: placeData.place,
      latitude: placeData.latitude.toString(),
      longitude: placeData.longitude.toString(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Save to localStorage
    const dataToSave = { male: maleData, female: femaleData }
    localStorage.setItem('brahmakosh_matchmaking_data', JSON.stringify(dataToSave))
    
    onSubmit({ male: maleData, female: femaleData, language: selectedLanguage })
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-beige-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          <Heart className="text-ruby-600" size={24} />
          <span>Enter Birth Details</span>
        </h2>
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

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Male Details */}
        <div className="border-2 border-royal-200 rounded-lg p-6 bg-royal-50/30">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <User className="text-royal-600" size={20} />
            <span>Male / Boy Details</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={maleData.name}
                onChange={handleMaleChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Calendar size={16} className="text-royal-600" />
                <span>Date of Birth</span>
              </label>
              <input
                type="date"
                name="date"
                value={maleData.date}
                onChange={handleMaleChange}
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Clock size={16} className="text-royal-600" />
                <span>Time of Birth</span>
              </label>
              <input
                type="time"
                name="time"
                value={maleData.time}
                onChange={handleMaleChange}
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth</label>
              <PlaceAutocomplete
                value={maleData.place}
                onChange={handleMaleChange}
                onPlaceSelect={handleMalePlaceSelect}
                placeholder="Enter city name"
              />
              {maleData.latitude && maleData.longitude && (
                <p className="text-xs text-gray-500 mt-1">
                  Coordinates: {maleData.latitude}, {maleData.longitude}
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
                value={maleData.latitude}
                onChange={handleMaleChange}
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
                value={maleData.longitude}
                onChange={handleMaleChange}
                placeholder="Auto-filled from place"
                readOnly
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg bg-beige-50 text-gray-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <input
                type="number"
                step="0.1"
                name="timezone"
                value={maleData.timezone}
                onChange={handleMaleChange}
                placeholder="e.g., 5.5"
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-400"
              />
            </div>
          </div>
        </div>

        {/* Female Details */}
        <div className="border-2 border-ruby-200 rounded-lg p-6 bg-ruby-50/30">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Heart className="text-ruby-600" size={20} />
            <span>Female / Girl Details</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={femaleData.name}
                onChange={handleFemaleChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Calendar size={16} className="text-ruby-600" />
                <span>Date of Birth</span>
              </label>
              <input
                type="date"
                name="date"
                value={femaleData.date}
                onChange={handleFemaleChange}
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Clock size={16} className="text-ruby-600" />
                <span>Time of Birth</span>
              </label>
              <input
                type="time"
                name="time"
                value={femaleData.time}
                onChange={handleFemaleChange}
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth</label>
              <PlaceAutocomplete
                value={femaleData.place}
                onChange={handleFemaleChange}
                onPlaceSelect={handleFemalePlaceSelect}
                placeholder="Enter city name"
              />
              {femaleData.latitude && femaleData.longitude && (
                <p className="text-xs text-gray-500 mt-1">
                  Coordinates: {femaleData.latitude}, {femaleData.longitude}
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
                value={femaleData.latitude}
                onChange={handleFemaleChange}
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
                value={femaleData.longitude}
                onChange={handleFemaleChange}
                placeholder="Auto-filled from place"
                readOnly
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg bg-beige-50 text-gray-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <input
                type="number"
                step="0.1"
                name="timezone"
                value={femaleData.timezone}
                onChange={handleFemaleChange}
                placeholder="e.g., 5.5"
                required
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby-400"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-ruby-500 to-ruby-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <Heart size={20} />
          <span>{isLoading ? 'Generating Match Report...' : 'Get Match Making Report'}</span>
        </button>
      </form>
    </div>
  )
}

export default MatchMakingForm

