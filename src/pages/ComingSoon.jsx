import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Sparkles, X, Users, Rocket, Smartphone, Globe } from 'lucide-react'
import { useState, useEffect, useMemo, memo } from 'react'
import { getRegistrationCount, registerEmail } from '../services/registrationApi'

// Memoized Background Animations Component - won't re-render on state changes
const BackgroundAnimations = memo(() => {
  // Generate stable particle positions once
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  }, [])

  return (
    <>
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
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
})

BackgroundAnimations.displayName = 'BackgroundAnimations'

function ComingSoon() {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState('ios')
  const [submitted, setSubmitted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [registeredCount, setRegisteredCount] = useState(12478)
  const [displayCount, setDisplayCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isDuplicate, setIsDuplicate] = useState(false)

  // Fetch count on component mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await getRegistrationCount()
        setRegisteredCount(count)
      } catch (error) {
        console.error('Error fetching count:', error)
      }
    }
    fetchCount()
  }, [])

  // Animate the counter so it counts up smoothly and slows down near the target
  useEffect(() => {
    let frameId

    const animate = () => {
      setDisplayCount((prev) => {
        if (prev === registeredCount) {
          return prev
        }

        const remaining = registeredCount - prev
        const absRemaining = Math.abs(remaining)

        let step
        if (absRemaining > 400) {
          // Far from target (e.g. 0 → 12000): consistently fast but not too fast
          step = 50
        } else if (absRemaining > 80) {
          // Between ~80 and 400: noticeably slower
          step = 20
        } else if (absRemaining > 3) {
          // Between ~3 and 80: even slower
          step = 5
        } else {
          // Last 3 numbers: one by one
          step = 1
        }

        const next = prev + Math.sign(remaining) * step

        // Clamp to exact target if we would overshoot
        if ((remaining > 0 && next > registeredCount) || (remaining < 0 && next < registeredCount)) {
          return registeredCount
        }

        return next
      })

      frameId = requestAnimationFrame(animate)
    }

    if (displayCount !== registeredCount) {
      frameId = requestAnimationFrame(animate)
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [registeredCount, displayCount])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && !loading) {
      setLoading(true)
      setIsDuplicate(false)
      try {
        const result = await registerEmail(email, platform)
        setRegisteredCount(result.count)
        setSubmitted(true)
        setIsDuplicate(false)
        setShowPopup(true)
        setEmail('')
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } catch (error) {
        // Check if it's a duplicate email error (409 status or message contains "already registered")
        if (error.status === 409 || (error.message && error.message.toLowerCase().includes('already registered'))) {
          setIsDuplicate(true)
          setShowPopup(true)
          // Fetch current count to show in popup
          try {
            const count = await getRegistrationCount()
            setRegisteredCount(count)
          } catch (err) {
            console.error('Error fetching count:', err)
          }
        } else {
          alert(error.message || 'Failed to register. Please try again.')
        }
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-white flex flex-col items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
      {/* Background Animations - Memoized to prevent re-renders */}
      <BackgroundAnimations />

      {/* Content Container - Responsive Layout */}
      <div className="relative z-10 w-full max-w-7xl px-3 sm:px-4 lg:px-8">
        {/* Desktop Layout: Content Left, Logo Right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Side - All Content (Desktop) / Centered (Mobile) */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            {/* Logo at Top - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="mb-6 lg:hidden flex justify-center relative"
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
                className="w-48 h-72 min-[360px]:w-56 min-[360px]:h-56 sm:w-64 sm:h-80 object-contain relative z-10"
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

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 text-center lg:text-left w-full"
            >
              Coming Soon
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-900 mb-8 text-center lg:text-left"
            >
              Be the first to experience <span className="font-semibold text-orange-600">Brahmakosh</span> on your device
            </motion.p>

            {/* Devotees Waiting Section - Pill Shape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full mb-8"
            >
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-4 flex items-center justify-center gap-3 shadow-sm border border-orange-200">
                <Sparkles className="text-orange-600 flex-shrink-0" size={24} />
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {displayCount.toLocaleString()}
                </span>
                <span className="text-base sm:text-lg text-gray-700">
                 Divine Seeking
                </span>
              </div>
            </motion.div>

            {/* Platform Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-full max-w-md mb-6"
            >
              <p className="text-sm sm:text-base text-gray-700 mb-4 text-center lg:text-left">
                Choose your platform
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {/* Android Button */}
                <motion.button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 transition-all ${
                    platform === 'android'
                      ? 'bg-orange-50 border-orange-500 shadow-md'
                      : 'bg-white border-gray-200 hover:border-orange-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${platform === 'android' ? 'text-orange-600' : 'text-gray-600'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5506 0 .9989.4482.9989.9993.0001.5511-.4483.9997-.9989.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5506 0 .9989.4482.9989.9993 0 .5511-.4483.9997-.9989.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0987L4.8429 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8532 13.0814 0 15.5001h24c-.8535-2.4186-2.6892-4.3137-5.1225-6.1787" />
                  </svg>
                  <span className={`text-xs sm:text-sm mt-1 font-medium ${platform === 'android' ? 'text-orange-600' : 'text-gray-700'}`}>
                    Android
                  </span>
                </motion.button>

                {/* iOS Button */}
                <motion.button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 transition-all ${
                    platform === 'ios'
                      ? 'bg-orange-50 border-orange-500 shadow-md'
                      : 'bg-white border-gray-200 hover:border-orange-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${platform === 'ios' ? 'text-orange-600' : 'text-gray-900'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className={`text-xs sm:text-sm mt-1 font-medium ${platform === 'ios' ? 'text-orange-600' : 'text-gray-700'}`}>
                    iOS
                  </span>
                </motion.button>

                {/* Web Button */}
                <motion.button
                  type="button"
                  onClick={() => setPlatform('web')}
                  className={`flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 transition-all ${
                    platform === 'web'
                      ? 'bg-orange-50 border-orange-500 shadow-md'
                      : 'bg-white border-gray-200 hover:border-orange-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className={`w-8 h-8 sm:w-10 sm:h-10 ${platform === 'web' ? 'text-orange-600' : 'text-gray-900'}`} />
                  <span className={`text-xs sm:text-sm mt-1 font-medium ${platform === 'web' ? 'text-orange-600' : 'text-gray-700'}`}>
                    Web
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Email Registration Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-md mb-6"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={loading}
                    className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-800 placeholder-gray-400 disabled:opacity-50 shadow-md"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    disabled={loading || submitted}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group whitespace-nowrap"
                    whileHover={{ scale: loading ? 1 : 1.05 }}
                    whileTap={{ scale: loading ? 1 : 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Registering...</span>
                        </>
                      ) : submitted ? (
                        <>
                          <Sparkles size={18} />
                          <span>Registered!</span>
                        </>
                      ) : (
                        <>
                          <Rocket size={18} className="flex-shrink-0" />
                          <span>Join the Waitlist</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Legal Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center lg:text-left mb-6"
            >
              <p className="text-xs sm:text-sm text-gray-500">
                By joining, you agree to our{' '}
                <Link to="/privacy-policy" className="underline hover:text-orange-600 transition-colors">
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="underline hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </motion.div>
          </div>

          {/* Right Side - Logo (Desktop) / Hidden (Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:flex justify-center lg:justify-end relative lg:w-1/2 order-1 lg:order-2"
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
              className="w-96 h-96 xl:w-[520px] xl:h-[520px] object-contain relative z-10"
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
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isDuplicate 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-r from-orange-500 to-orange-600'
                    }`}
                  >
                    {isDuplicate ? (
                      <Users className="text-white" size={32} />
                    ) : (
                      <Sparkles className="text-white" size={32} />
                    )}
                  </motion.div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {isDuplicate ? "You're Already Registered!" : "Thank You!"}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {isDuplicate 
                      ? "You're already on our waitlist! We'll notify you when early access opens. Stay tuned for updates."
                      : "Your registration request has been received. We'll notify you when early access opens."
                    }
                  </p>

                  {/* Registered Users Count */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="text-orange-600" size={20} />
                      <span className="text-sm font-medium text-gray-700">Registered Users</span>
                    </div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                      {displayCount.toLocaleString()}
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
