import { Calendar, MapPin, Clock, Sun, Moon } from 'lucide-react'

function MatchBirthDetailsView({ data }) {
  if (!data) return null

  const { male_astro_details, female_astro_details } = data

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Birth Details</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Details */}
        <div className="bg-royal-50 border-2 border-royal-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <span className="text-royal-600">Male / Boy Details</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Calendar className="text-royal-600" size={18} />
              <span className="text-gray-700">
                <strong>Date:</strong> {male_astro_details.day}/{male_astro_details.month}/{male_astro_details.year}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-royal-600" size={18} />
              <span className="text-gray-700">
                <strong>Time:</strong> {male_astro_details.hour}:{male_astro_details.minute}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-royal-600" size={18} />
              <span className="text-gray-700">
                <strong>Location:</strong> {male_astro_details.latitude}°, {male_astro_details.longitude}°
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">
                <strong>Timezone:</strong> {male_astro_details.timezone}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="text-royal-600" size={18} />
              <span className="text-gray-700">
                <strong>Sunrise:</strong> {male_astro_details.sunrise}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Moon className="text-royal-600" size={18} />
              <span className="text-gray-700">
                <strong>Sunset:</strong> {male_astro_details.sunset}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-royal-200">
              <span className="text-gray-700">
                <strong>Ayanamsha:</strong> {male_astro_details.ayanamsha?.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        {/* Female Details */}
        <div className="bg-ruby-50 border-2 border-ruby-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <span className="text-ruby-600">Female / Girl Details</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Calendar className="text-ruby-600" size={18} />
              <span className="text-gray-700">
                <strong>Date:</strong> {female_astro_details.day}/{female_astro_details.month}/{female_astro_details.year}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-ruby-600" size={18} />
              <span className="text-gray-700">
                <strong>Time:</strong> {female_astro_details.hour}:{female_astro_details.minute}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-ruby-600" size={18} />
              <span className="text-gray-700">
                <strong>Location:</strong> {female_astro_details.latitude}°, {female_astro_details.longitude}°
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">
                <strong>Timezone:</strong> {female_astro_details.timezone}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="text-ruby-600" size={18} />
              <span className="text-gray-700">
                <strong>Sunrise:</strong> {female_astro_details.sunrise}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Moon className="text-ruby-600" size={18} />
              <span className="text-gray-700">
                <strong>Sunset:</strong> {female_astro_details.sunset}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-ruby-200">
              <span className="text-gray-700">
                <strong>Ayanamsha:</strong> {female_astro_details.ayanamsha?.toFixed(4)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchBirthDetailsView








