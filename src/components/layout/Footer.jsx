import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'All Services', path: '/services' },
      { label: 'Kundli', path: '/services?category=Kundli' },
      { label: 'Horoscope', path: '/horoscope' },
      { label: 'Panchang', path: '/panchang' },
    ],
    Company: [
      { label: 'About Us', path: '#' },
      { label: 'Blog', path: '#' },
      { label: 'Contact', path: '#' },
    ],
    Support: [
      { label: 'Help Center', path: '#' },
      { label: 'FAQs', path: '#' },
      { label: 'Privacy Policy', path: '#' },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-beige-50 to-white border-t border-beige-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/brahmakosh-logo.png" 
                alt="Brahmakosh Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">
                Brahmakosh
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Your trusted gateway to Vedic Astrology. Get accurate Kundli, Horoscope, Panchang, and Numerology reports to guide your life decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-600 hover:text-gold-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-beige-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Brahmakosh. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-600 hover:text-gold-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gold-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

