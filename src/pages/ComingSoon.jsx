import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Sparkles, X, Users } from 'lucide-react'
import { useState } from 'react'

function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const registeredCount = 10121

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you can add email submission logic
      window.location.href = `mailto:contact@brahmakosh.com?subject=Early Access Registration&body=Email: ${email}`
      setSubmitted(true)
      setShowPopup(true)
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
      {/* Vibrant Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.35, 0.25],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content Container - Responsive Layout */}
      <div className="relative z-10 w-full max-w-7xl px-3 sm:px-4 lg:px-8">
        {/* Desktop Layout: Content Left, Logo Right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Side - All Content (Desktop) / Centered (Mobile) */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left mb-3 sm:mb-4 w-full px-2"
            >
              <h1 className="text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight break-words">
                <motion.span
                  className="inline-block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200%',
                  }}
                >
                  BRAHMA
                </motion.span> 
                <motion.span
                  className="inline-block text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  KOSH
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-left mb-6 sm:mb-8 px-2 w-full"
            >
              <p className="text-base min-[360px]:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Your Spiritual Operating System
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left mb-6 sm:mb-8 px-2 w-full"
            >
              <p className="text-sm min-[360px]:text-base sm:text-lg text-gray-700 flex flex-wrap items-center justify-center lg:justify-start gap-1 min-[360px]:gap-2">
                <span className="text-orange-500">•</span>
                <span className="font-medium">Sprituality</span>
                <span className="text-orange-500">•</span>
                <span className="font-medium">Astrology</span>
                <span className="text-orange-500">•</span>
                <span className="font-medium">Companion</span>
                <span className="text-orange-500">•</span>
                <span className="font-medium">Intelligence</span>
              </p>
            </motion.div>

            {/* Tagline Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 sm:mb-10 px-2 w-full"
            >
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left bg-white/60 backdrop-blur-sm rounded-2xl shadow-md sm:shadow-lg px-4 sm:px-8 py-5 sm:py-6 border border-orange-100">
                <p className="text-base sm:text-lg text-gray-800 font-serif italic mb-2">
                  <span className="font-semibold">
                    <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                      Brahma
                    </span>
                    <span className="text-gray-900">kosh</span>
                  </span>{' '}
                  is not an app.
                </p>
                <p className="text-base sm:text-lg text-gray-800 font-serif italic">
                  It is a system designed to walk with you—
                  <span className="block sm:inline"> through questions, clarity, and consciousness.</span>
                </p>
              </div>
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <motion.div
                className="inline-block px-6 min-[360px]:px-8 py-2.5 min-[360px]:py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full shadow-xl relative overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(249, 115, 22, 0.4)',
                    '0 15px 40px rgba(249, 115, 22, 0.6)',
                    '0 10px 30px rgba(249, 115, 22, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <p className="text-white text-lg min-[360px]:text-xl sm:text-2xl font-bold relative z-10">
                  Coming Soon
                </p>
              </motion.div>
            </motion.div>

            {/* Email Registration Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-md mb-6 sm:mb-8 px-2"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center lg:text-left mb-4">
                  <motion.p
                    className="text-base min-[360px]:text-lg sm:text-xl text-gray-800 font-semibold mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Register for Early Access and updates
                  </motion.p>
                  <motion.a
                    href="mailto:contact@brahmakosh.com"
                    className="inline-flex items-center justify-center lg:justify-start gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium text-sm min-[360px]:text-base sm:text-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} className="group-hover:animate-bounce" />
                    <span className="break-all">contact@brahmakosh.com</span>
                  </motion.a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-800 bg-white/90 backdrop-blur-sm shadow-md"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitted ? (
                        <>
                          <Sparkles size={18} />
                          Sent!
                        </>
                      ) : (
                        'Register'
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Privacy Policy Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 sm:mt-8"
            >
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-600 hover:text-orange-600 transition-colors underline font-medium"
              >
                Privacy Policy
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Logo (Desktop) / Centered (Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-6 sm:mb-8 lg:mb-0 flex justify-center lg:justify-end relative lg:w-1/2 order-1 lg:order-2"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-r from-orange-400/50 via-yellow-400/50 to-orange-400/50 rounded-full blur-2xl"
              style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
            />
            
            {/* Rotating Logo */}
            <motion.img
              src="/brahmakosh-logo.png"
              alt="Brahmakosh Logo"
              className="w-48 h-48 min-[360px]:w-56 min-[360px]:h-72 sm:w-64 sm:h-80 lg:w-96 lg:h-[480px] xl:w-[520px] xl:h-[520px] object-contain relative z-10"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.8 },
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Content */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Sparkles className="text-white" size={32} />
                  </motion.div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Your registration request has been received. We'll notify you when early access opens.
                  </p>

                  {/* Registered Users Count */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="text-orange-600" size={20} />
                      <span className="text-sm font-medium text-gray-700">Registered Users</span>
                    </div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                      {registeredCount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComingSoon

