import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function ApiCard({ api, index }) {
  const colorClasses = {
    gold: 'border-gold-200 hover:border-gold-400 bg-gold-50/50',
    saffron: 'border-saffron-200 hover:border-saffron-400 bg-saffron-50/50',
    ruby: 'border-ruby-200 hover:border-ruby-400 bg-ruby-50/50',
    emerald: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/50',
    royal: 'border-royal-200 hover:border-royal-400 bg-royal-50/50',
    amethyst: 'border-amethyst-200 hover:border-amethyst-400 bg-amethyst-50/50',
  }

  const badgeColors = {
    gold: 'bg-gold-100 text-gold-700 border-gold-300',
    saffron: 'bg-saffron-100 text-saffron-700 border-saffron-300',
    ruby: 'bg-ruby-100 text-ruby-700 border-ruby-300',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    royal: 'bg-royal-100 text-royal-700 border-royal-300',
    amethyst: 'bg-amethyst-100 text-amethyst-700 border-amethyst-300',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-white rounded-xl p-6 border-2 ${colorClasses[api.color]} transition-all shadow-md hover:shadow-xl group`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${badgeColors[api.color]}`}>
          {api.category}
        </span>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{api.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-gray-500">{api.method}</span>
        <Link
          to={`/docs/${api.id}`}
          className="flex items-center space-x-1 text-gold-600 hover:text-gold-700 font-medium group-hover:translate-x-1 transition-transform"
        >
          <span className="text-sm">View Docs</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default ApiCard



