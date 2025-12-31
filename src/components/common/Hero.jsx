import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import BrahmakoshLogo from './BrahmakoshLogo'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light Background with Universe Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-50 via-ivory to-beige-100">
        {/* Subtle Universe Stars Background */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, rgba(217, 119, 6, 0.3), transparent),
            radial-gradient(1px 1px at 60% 70%, rgba(217, 119, 6, 0.3), transparent),
            radial-gradient(0.5px 0.5px at 50% 50%, rgba(217, 119, 6, 0.2), transparent),
            radial-gradient(0.5px 0.5px at 80% 10%, rgba(217, 119, 6, 0.2), transparent),
            radial-gradient(1px 1px at 90% 40%, rgba(217, 119, 6, 0.3), transparent),
            radial-gradient(0.5px 0.5px at 33% 60%, rgba(217, 119, 6, 0.2), transparent),
            radial-gradient(0.5px 0.5px at 55% 80%, rgba(217, 119, 6, 0.2), transparent),
            radial-gradient(1px 1px at 10% 90%, rgba(217, 119, 6, 0.3), transparent)
          `,
          backgroundSize: '200% 200%',
          animation: 'twinkle 8s ease-in-out infinite alternate',
        }} />
        
        {/* Light Orange/Peach Gradient (Top Right) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-saffron-200/30 via-gold-200/20 to-transparent rounded-full filter blur-3xl opacity-60" />
        
        {/* Subtle Nebula Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-saffron-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full text-gold-700 text-sm font-medium mb-8"
            >
              <Sparkles size={16} className="text-gold-600" />
              <span>Your Gateway to Vedic Astrology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent">
                Brahmakosh
              </span>
              <br />
              <span className="text-gray-900">Discover Your</span>
              <br />
              <span className="text-gray-900">Life's True Path</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              Get accurate Kundli, Horoscope, Panchang, and Numerology reports. 
              Make informed life decisions with the wisdom of Vedic Astrology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/services/janam-kundli"
                className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-gold-500/50 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Your Kundli</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-all"
              >
                Explore Services
              </Link>
              <Link
                to="/horoscope"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-all"
              >
                Read Horoscope
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end z-10"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gold-400/20 rounded-full blur-3xl"
                style={{ 
                  width: '120%', 
                  height: '120%', 
                  top: '-10%', 
                  left: '-10%' 
                }}
              />
              
              {/* Animated Brahmakosh Logo */}
              <BrahmakoshLogo />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

