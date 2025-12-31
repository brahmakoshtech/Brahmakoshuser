import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

function BrahmakoshLogo() {
  // 7 Chakras with their positions and colors
  const chakras = [
    { name: 'Muladhara', color: '#dc2626', angle: 0, delay: 0 },      // Top - Red
    { name: 'Swadhisthana', color: '#f97316', angle: 51.4, delay: 0.1 }, // Top Right - Orange
    { name: 'Manipura', color: '#fbbf24', angle: 102.8, delay: 0.2 },   // Middle Right - Yellow
    { name: 'Anahata', color: '#10b981', angle: 154.2, delay: 0.3 },     // Bottom Right - Green
    { name: 'Vishuddha', color: '#3b82f6', angle: 205.6, delay: 0.4 },   // Bottom Left - Blue
    { name: 'Ajna', color: '#6366f1', angle: 257, delay: 0.5 },         // Middle Left - Indigo
    { name: 'Sahasrara', color: '#a855f7', angle: 308.4, delay: 0.6 },  // Top Left - Violet
  ]

  const radius = 180 // Distance from center to chakra

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer Glow */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 60px rgba(217, 119, 6, 0.4)',
            '0 0 80px rgba(217, 119, 6, 0.6)',
            '0 0 60px rgba(217, 119, 6, 0.4)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full"
      />

      {/* Circular Golden Frame */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-[450px] h-[450px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #d97706 100%)',
          boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(217, 119, 6, 0.5)',
          border: '8px solid #b45309',
        }}
      >
        {/* Ornate Pattern on Frame */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            backgroundImage: `
              repeating-conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(255, 255, 255, 0.15) 2deg,
                transparent 4deg
              ),
              radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.1) 41%, transparent 42%)
            `,
          }}
        />
        
        {/* Decorative Swirls */}
        <div 
          className="absolute inset-2 rounded-full opacity-20"
          style={{
            backgroundImage: `
              conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent 30deg),
              conic-gradient(from 120deg, transparent, rgba(255, 255, 255, 0.1), transparent 30deg),
              conic-gradient(from 240deg, transparent, rgba(255, 255, 255, 0.1), transparent 30deg)
            `,
          }}
        />

        {/* 7 Chakra Symbols around the frame */}
        {chakras.map((chakra, index) => {
          const angleInRad = (chakra.angle * Math.PI) / 180
          const x = Math.cos(angleInRad) * radius
          const y = Math.sin(angleInRad) * radius

          return (
            <motion.div
              key={chakra.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + chakra.delay,
                type: 'spring',
                stiffness: 200,
              }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Chakra Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    `0 0 10px ${chakra.color}`,
                    `0 0 20px ${chakra.color}`,
                    `0 0 10px ${chakra.color}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: chakra.delay,
                  ease: 'easeInOut',
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${chakra.color} 0%, ${chakra.color}dd 100%)`,
                  border: `2px solid ${chakra.color}`,
                  boxShadow: `0 0 15px ${chakra.color}80`,
                }}
              >
                {/* Chakra Symbol (Lotus Petal Design) */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-6 h-6 rounded-full relative"
                  style={{
                    background: `conic-gradient(from 0deg, ${chakra.color}, ${chakra.color}dd, ${chakra.color})`,
                    border: `1px solid ${chakra.color}`,
                  }}
                >
                  {/* Inner Petals */}
                  <div
                    className="absolute inset-1 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${chakra.color} 30%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}

        {/* Inner Circle Background */}
        <div
          className="absolute inset-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fef3c7 100%)',
            boxShadow: 'inset 0 0 30px rgba(217, 119, 6, 0.2)',
          }}
        >
          {/* Geometric Pattern */}
          <div
            className="absolute inset-0 rounded-full opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 30%, rgba(217, 119, 6, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 70% 70%, rgba(217, 119, 6, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 200px 200px',
            }}
          />
        </div>

        {/* Central Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Om Symbol */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-4"
          >
            <motion.div
              animate={{
                textShadow: [
                  '0 0 10px rgba(217, 119, 6, 0.5)',
                  '0 0 20px rgba(217, 119, 6, 0.8)',
                  '0 0 10px rgba(217, 119, 6, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-7xl font-light text-gold-700"
              style={{
                fontFamily: 'serif',
                textShadow: '0 0 15px rgba(217, 119, 6, 0.6)',
              }}
            >
              ॐ
            </motion.div>
          </motion.div>

          {/* Open Book */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
            className="mb-4 relative"
          >
            <motion.div
              animate={{ rotateY: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <BookOpen
                size={48}
                className="text-gold-800"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              />
              {/* Book Pages Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-8 h-6 bg-gold-200/50 rounded-sm" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* BRAHMAKOSH Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <motion.h2
              animate={{
                textShadow: [
                  '0 0 5px rgba(217, 119, 6, 0.5)',
                  '0 0 10px rgba(217, 119, 6, 0.7)',
                  '0 0 5px rgba(217, 119, 6, 0.5)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-2xl font-bold tracking-wider text-gold-800"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.2em',
                textShadow: '0 2px 10px rgba(217, 119, 6, 0.6)',
              }}
            >
              BRAHMAKOSH
            </motion.h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Particles around Logo */}
      {[...Array(12)].map((_, i) => {
        const particleAngle = (i * 30) * (Math.PI / 180)
        const particleRadius = 240
        const particleX = Math.cos(particleAngle) * particleRadius
        const particleY = Math.sin(particleAngle) * particleRadius

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold-400 rounded-full"
            style={{
              left: `calc(50% + ${particleX}px)`,
              top: `calc(50% + ${particleY}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}

export default BrahmakoshLogo

