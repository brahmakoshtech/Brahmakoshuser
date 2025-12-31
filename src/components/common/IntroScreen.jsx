import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000) // Video duration + fade out time
    return () => clearTimeout(timer)
  }, [])

  const handleVideoEnd = () => {
    setVideoEnded(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 500) // Fade out after video ends
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-contain"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback if video doesn't load */}
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-beige-50 via-ivory to-beige-100"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mb-8"
              >
                <img 
                  src="/brahmakosh-logo.png" 
                  alt="Brahmakosh Logo" 
                  className="w-48 h-48 mx-auto object-contain"
                />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent mb-2"
              >
                Brahmakosh
              </motion.h1>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default IntroScreen

