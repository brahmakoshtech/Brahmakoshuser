import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/kundli', label: 'Kundli' },
    { path: '/services', label: 'Services' },
    { path: '/horoscope', label: 'Horoscope' },
    { path: '/panchang', label: 'Panchang' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-beige-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/brahmakosh-logo.png" 
              alt="Brahmakosh Logo" 
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">
              Brahmakosh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gold-600'
                    : 'text-gray-700 hover:text-gold-600'
                }`}>
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-105"
            >
              Get Your Kundli
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gold-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-beige-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium ${
                    isActive(link.path)
                      ? 'text-gold-600'
                      : 'text-gray-700 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-beige-200 flex flex-col space-y-3">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-gold-600"
                >
                  Dashboard
                </Link>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-gold-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold rounded-lg text-center"
                >
                  Get Your Kundli
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

