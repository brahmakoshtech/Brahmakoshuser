import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, ArrowRight } from 'lucide-react'
import { services, serviceCategories } from '../data/services'

function Services() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getColorClasses = (color) => {
    const colors = {
      gold: 'border-gold-200 hover:border-gold-400 bg-gold-50/50',
      saffron: 'border-saffron-200 hover:border-saffron-400 bg-saffron-50/50',
      ruby: 'border-ruby-200 hover:border-ruby-400 bg-ruby-50/50',
      emerald: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/50',
      royal: 'border-royal-200 hover:border-royal-400 bg-royal-50/50',
      amethyst: 'border-amethyst-200 hover:border-amethyst-400 bg-amethyst-50/50',
    }
    return colors[color] || colors.gold
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
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">Astrology Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of Vedic astrology services
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
                placeholder="Search services..."
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
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-white rounded-xl p-6 border-2 ${getColorClasses(service.color)} transition-all shadow-md hover:shadow-xl group cursor-pointer`}
                >
                  <Link to={`/services/${service.id}`}>
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-${service.color}-100 text-${service.color}-700 border border-${service.color}-300`}>
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        {service.price === 0 ? (
                          <span className="text-gold-600 font-semibold">Free</span>
                        ) : (
                          <div>
                            <span className="text-2xl font-bold text-gray-900">₹{service.price}</span>
                            {service.originalPrice && (
                              <span className="text-gray-400 line-through ml-2">₹{service.originalPrice}</span>
                            )}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="text-gold-600 group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </Link>
                </motion.div>
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

export default Services









