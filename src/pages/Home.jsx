import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, Calendar, Hash, Heart, Clock } from 'lucide-react'
import Hero from '../components/common/Hero'
import FeatureCard from '../components/common/FeatureCard'
import { services } from '../data/services'

const mainServices = services.slice(0, 6)

const features = [
  {
    title: 'Kundli',
    description: 'Get your complete birth chart with detailed planetary positions and life predictions.',
    icon: BookOpen,
    color: 'saffron',
    link: '/services?category=Kundli',
  },
  {
    title: 'Horoscope',
    description: 'Daily, weekly, and monthly horoscope predictions for all zodiac signs.',
    icon: Sparkles,
    color: 'gold',
    link: '/horoscope',
  },
  {
    title: 'Panchang',
    description: 'Daily Panchang with Tithi, Nakshatra, and auspicious timings.',
    icon: Calendar,
    color: 'emerald',
    link: '/panchang',
  },
  {
    title: 'Match Making',
    description: 'Check compatibility for marriage using Ashtakoot matching system.',
    icon: Heart,
    color: 'ruby',
    link: '/match-making',
  },
  {
    title: 'Numerology',
    description: 'Complete numerology report based on your name and date of birth.',
    icon: Hash,
    color: 'amethyst',
    link: '/services?category=Numerology',
  },
  {
    title: 'Muhurat',
    description: 'Find the best auspicious timings for important events and ceremonies.',
    icon: Clock,
    color: 'royal',
    link: '/services/muhurat',
  },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      {/* <Hero /> */}

      {/* Services Grid */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Astrology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Vedic astrology services to guide your life journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  delay={index * 0.1}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              Most trusted astrology services by our users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => {
              const colorClasses = {
                gold: 'from-gold-400 to-gold-600',
                saffron: 'from-saffron-400 to-saffron-600',
                ruby: 'from-ruby-400 to-ruby-600',
                emerald: 'from-emerald-400 to-emerald-600',
                royal: 'from-royal-400 to-royal-600',
                amethyst: 'from-amethyst-400 to-amethyst-600',
              }
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-beige-200 group cursor-pointer"
                >
                  <Link to={`/services/${service.id}`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[service.color] || colorClasses.gold} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <BookOpen className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              Why people choose Brahmakosh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accurate Predictions',
                description: 'Based on authentic Vedic astrology principles and calculations',
                icon: '✓',
              },
              {
                title: 'Expert Astrologers',
                description: 'Reports prepared by experienced Vedic astrologers',
                icon: '✓',
              },
              {
                title: 'Instant Reports',
                description: 'Get your reports instantly after purchase',
                icon: '✓',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-gold-600 font-bold">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 via-saffron-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Discover Your Life's Path?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your personalized Kundli and astrology reports today. Start your journey with Vedic wisdom.
            </p>
            <Link
              to="/services/janam-kundli"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gold-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section> */
    </div>
  )
}

export default Home
