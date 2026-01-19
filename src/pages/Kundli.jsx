import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, BookOpen } from 'lucide-react'
import KundliServiceCard from '../components/common/KundliServiceCard'
import { kundliServices, serviceCategories } from '../data/kundliServices'

function Kundli() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = kundliServices.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.userTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <BookOpen className="text-gold-600" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Your <span className="bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">Kundli Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive astrology services personalized for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-beige-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search your services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <Filter className="text-gray-400" size={20} />
              {serviceCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-gold-500 text-white shadow-md'
                      : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <KundliServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Kundli








