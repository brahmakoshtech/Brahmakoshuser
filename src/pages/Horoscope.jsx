import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Sparkles } from 'lucide-react'
import { zodiacSigns } from '../data/services'
import { horoscopeData } from '../data/horoscope'

function Horoscope() {
  const [selectedSign, setSelectedSign] = useState('aries')
  const [selectedType, setSelectedType] = useState('daily')
  const prediction = horoscopeData.daily.predictions[selectedSign]

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
              <Sparkles className="text-gold-600" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Your <span className="bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">Horoscope</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get daily, weekly, and monthly horoscope predictions for your zodiac sign
            </p>
          </motion.div>
        </div>
      </section>

      {/* Type Selector */}
      <section className="py-8 bg-white border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {['daily', 'weekly', 'monthly'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-lg font-medium transition-all capitalize ${
                  selectedType === type
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
                }`}
              >
                {type === 'daily' ? 'Today' : type === 'weekly' ? 'This Week' : 'This Month'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Zodiac Sign</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.id}
                  onClick={() => setSelectedSign(sign.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedSign === sign.id
                      ? 'border-gold-400 bg-gold-50 shadow-md'
                      : 'border-beige-200 bg-white hover:border-gold-200 hover:shadow-sm'
                  }`}
                >
                  <div className="text-3xl mb-2">{sign.symbol}</div>
                  <div className="text-sm font-semibold text-gray-900">{sign.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{sign.dates}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Horoscope Content */}
          <motion.div
            key={selectedSign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-beige-200 p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-3xl">
                  {zodiacSigns.find(s => s.id === selectedSign)?.symbol}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {zodiacSigns.find(s => s.id === selectedSign)?.name}
                </h2>
                <p className="text-gray-600">
                  {selectedType === 'daily' ? 'Today\'s' : selectedType === 'weekly' ? 'This Week\'s' : 'This Month\'s'} Horoscope
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gold-50 rounded-lg p-6 border border-gold-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">💕</span>
                  <span>Love & Relationships</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{prediction.love}</p>
              </div>

              <div className="bg-royal-50 rounded-lg p-6 border border-royal-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">💼</span>
                  <span>Career & Finance</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{prediction.career}</p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">🏥</span>
                  <span>Health & Wellness</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{prediction.health}</p>
              </div>

              <div className="bg-gradient-to-r from-gold-50 to-saffron-50 rounded-lg p-6 border border-gold-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Lucky Number</p>
                    <p className="text-2xl font-bold text-gold-600">{prediction.luckyNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Lucky Color</p>
                    <p className="text-2xl font-bold text-gold-600">{prediction.luckyColor}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Horoscope



