import { motion } from 'framer-motion'
import { FileText, Download, Clock, User, Settings, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function Dashboard() {
  // Mock data for user orders/reports
  const orders = [
    {
      id: 1,
      service: 'Janam Kundli',
      date: '2024-01-10',
      status: 'Completed',
      downloadUrl: '#',
    },
    {
      id: 2,
      service: 'Kundli Matching',
      date: '2024-01-08',
      status: 'Completed',
      downloadUrl: '#',
    },
    {
      id: 3,
      service: 'Numerology Report',
      date: '2024-01-05',
      status: 'Completed',
      downloadUrl: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gold-50 via-beige-50 to-white py-12 border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your reports and account</p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6"
              >
                <nav className="space-y-2">
                  <a href="#orders" className="flex items-center space-x-3 p-3 rounded-lg bg-gold-50 text-gold-700 font-medium">
                    <FileText size={20} />
                    <span>My Reports</span>
                  </a>
                  <a href="#profile" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-beige-50 transition-colors">
                    <User size={20} />
                    <span>Profile</span>
                  </a>
                  <a href="#settings" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-beige-50 transition-colors">
                    <Settings size={20} />
                    <span>Settings</span>
                  </a>
                  <a href="#help" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-beige-50 transition-colors">
                    <HelpCircle size={20} />
                    <span>Help & Support</span>
                  </a>
                </nav>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* My Reports */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md border border-beige-200 p-6 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Reports</h2>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border border-beige-200 rounded-lg hover:border-gold-300 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                            <FileText className="text-gold-600" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{order.service}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock size={16} />
                              <span>Purchased on {order.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {order.status}
                          </span>
                          <button className="flex items-center space-x-2 px-4 py-2 bg-gold-50 text-gold-700 rounded-lg hover:bg-gold-100 transition-colors">
                            <Download size={16} />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 mb-4">You haven't purchased any reports yet</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      <span>Explore Services</span>
                    </Link>
                  </div>
                )}
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-xl shadow-md border border-gold-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    to="/services/janam-kundli"
                    className="p-4 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">Get New Kundli</h3>
                    <p className="text-sm text-gray-600">Generate your birth chart</p>
                  </Link>
                  <Link
                    to="/horoscope"
                    className="p-4 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">Read Horoscope</h3>
                    <p className="text-sm text-gray-600">Check today's predictions</p>
                  </Link>
                  <Link
                    to="/panchang"
                    className="p-4 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">View Panchang</h3>
                    <p className="text-sm text-gray-600">Today's auspicious timings</p>
                  </Link>
                  <Link
                    to="/services"
                    className="p-4 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">Browse Services</h3>
                    <p className="text-sm text-gray-600">Explore all services</p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard









