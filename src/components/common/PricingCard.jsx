import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function PricingCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 ${
        plan.popular
          ? 'border-gold-400 scale-105'
          : 'border-beige-200'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          {typeof plan.price === 'number' ? (
            <>
              <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-600 ml-2">/{plan.period}</span>
            </>
          ) : (
            <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          plan.popular
            ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            : 'bg-beige-100 text-gray-700 hover:bg-beige-200 border-2 border-beige-300'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  )
}

export default PricingCard









