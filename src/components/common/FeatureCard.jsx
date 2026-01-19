import { motion } from 'framer-motion'

function FeatureCard({ title, description, icon: Icon, color = 'gold', delay = 0 }) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-beige-200 group"
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {Icon && <Icon className="text-white" size={28} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default FeatureCard









