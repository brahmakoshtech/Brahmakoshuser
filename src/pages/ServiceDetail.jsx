import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, ShoppingCart, Download } from 'lucide-react'
import { services } from '../data/services'

function ServiceDetail() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold-600 hover:text-gold-700">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const getColorClasses = (color) => {
    const colors = {
      gold: 'from-gold-400 to-gold-600 bg-gradient-to-r',
      saffron: 'from-saffron-400 to-saffron-600 bg-gradient-to-r',
      ruby: 'from-ruby-400 to-ruby-600 bg-gradient-to-r',
      emerald: 'from-emerald-400 to-emerald-600 bg-gradient-to-r',
      royal: 'from-royal-400 to-royal-600 bg-gradient-to-r',
      amethyst: 'from-amethyst-400 to-amethyst-600 bg-gradient-to-r',
    }
    return colors[color] || colors.gold
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gold-50 via-beige-50 to-white py-12 border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${getColorClasses(service.color)} text-white rounded-lg text-sm font-semibold mb-4`}>
              {service.category}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
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
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              {service.benefits && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="text-gold-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Sample Report */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-beige-50 to-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample Report</h2>
                <div className="bg-white rounded-lg p-8 border-2 border-dashed border-beige-300 text-center">
                  <Download className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600">Your detailed report will be available for download after purchase</p>
                  <p className="text-sm text-gray-500 mt-2">PDF format • Instant delivery</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Price & CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg border-2 border-gold-200 p-6 sticky top-24"
              >
                <div className="text-center mb-6">
                  {service.price === 0 ? (
                    <div>
                      <span className="text-4xl font-bold text-gold-600">Free</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">₹{service.price}</span>
                      {service.originalPrice && (
                        <div className="mt-2">
                          <span className="text-xl text-gray-400 line-through">₹{service.originalPrice}</span>
                          <span className="ml-2 text-emerald-600 font-semibold">
                            {Math.round((1 - service.price / service.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mb-4">
                  <ShoppingCart size={20} />
                  <span>Buy Now</span>
                </button>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check className="text-emerald-500" size={16} />
                    <span>Instant delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="text-emerald-500" size={16} />
                    <span>PDF download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="text-emerald-500" size={16} />
                    <span>Lifetime access</span>
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

export default ServiceDetail

