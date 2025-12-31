import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calendar, ChartPie, Star, Clock, Gem, Hash, Activity, Sparkles, 
  FileText, MapPin, ChartBar, BookOpen, Compass, AlertCircle, Book, 
  AlertTriangle, Heart, Users, Shield, Circle, Moon, CalendarDays,
  ArrowRight
} from 'lucide-react'

const iconMap = {
  calendar: Calendar,
  chart: ChartPie,
  star: Star,
  clock: Clock,
  gem: Gem,
  hash: Hash,
  activity: Activity,
  sparkles: Sparkles,
  'file-text': FileText,
  'map-pin': MapPin,
  'chart-pie': ChartPie,
  'chart-bar': ChartBar,
  'book-open': BookOpen,
  compass: Compass,
  'alert-circle': AlertCircle,
  book: Book,
  'alert-triangle': AlertTriangle,
  heart: Heart,
  users: Users,
  shield: Shield,
  circle: Circle,
  moon: Moon,
  'calendar-days': CalendarDays,
}

function KundliServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Star

  const colorClasses = {
    gold: 'border-gold-200 hover:border-gold-400 bg-gold-50/50',
    saffron: 'border-saffron-200 hover:border-saffron-400 bg-saffron-50/50',
    ruby: 'border-ruby-200 hover:border-ruby-400 bg-ruby-50/50',
    emerald: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/50',
    royal: 'border-royal-200 hover:border-royal-400 bg-royal-50/50',
    amethyst: 'border-amethyst-200 hover:border-amethyst-400 bg-amethyst-50/50',
  }

  const iconColorClasses = {
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-white rounded-xl p-6 border-2 ${colorClasses[service.color] || colorClasses.gold} transition-all shadow-md hover:shadow-xl group cursor-pointer`}
    >
      <Link to={`/kundli/${service.id}`}>
        <div className="flex items-start space-x-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${iconColorClasses[service.color] || iconColorClasses.gold} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
            <Icon className="text-white" size={28} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
              {service.userTitle}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {service.description}
            </p>
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                service.color === 'gold' ? 'bg-gold-100 text-gold-700 border-gold-300' :
                service.color === 'saffron' ? 'bg-saffron-100 text-saffron-700 border-saffron-300' :
                service.color === 'ruby' ? 'bg-ruby-100 text-ruby-700 border-ruby-300' :
                service.color === 'emerald' ? 'bg-emerald-100 text-emerald-700 border-emerald-300' :
                service.color === 'royal' ? 'bg-royal-100 text-royal-700 border-royal-300' :
                'bg-amethyst-100 text-amethyst-700 border-amethyst-300'
              } border`}>
                {service.category}
              </span>
              <ArrowRight className="text-gold-600 group-hover:translate-x-1 transition-transform" size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default KundliServiceCard

