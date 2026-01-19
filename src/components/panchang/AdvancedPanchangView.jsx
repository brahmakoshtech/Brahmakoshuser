import { Sun, Moon, Calendar, Clock } from 'lucide-react'

function AdvancedPanchangView({ data }) {
  if (!data) return null

  return (
    <div className="space-y-6">
      {/* Day and Timings */}
      <div className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-xl p-6 border border-gold-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.day}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Sun className="text-gold-600" size={24} />
            <div>
              <p className="text-sm text-gray-600">Sunrise</p>
              <p className="font-semibold text-gray-900">{data.sunrise}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Sun className="text-gold-600 rotate-180" size={24} />
            <div>
              <p className="text-sm text-gray-600">Sunset</p>
              <p className="font-semibold text-gray-900">{data.sunset}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Moon className="text-royal-600" size={24} />
            <div>
              <p className="text-sm text-gray-600">Moonrise</p>
              <p className="font-semibold text-gray-900">{data.moonrise}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Moon className="text-royal-600 rotate-180" size={24} />
            <div>
              <p className="text-sm text-gray-600">Moonset</p>
              <p className="font-semibold text-gray-900">{data.moonset}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tithi */}
      {data.tithi && (
        <div className="bg-white rounded-xl p-6 border border-beige-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Calendar className="text-emerald-600" size={24} />
            <span>Tithi</span>
          </h3>
          {data.tithi.details && (
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {data.tithi.details.tithi_name}
              </p>
              {data.tithi.details.special && (
                <p className="text-gold-600 font-medium">{data.tithi.details.special}</p>
              )}
              {data.tithi.details.summary && (
                <p className="text-gray-600">{data.tithi.details.summary}</p>
              )}
              {data.tithi.details.deity && (
                <p className="text-sm text-gray-500">Deity: {data.tithi.details.deity}</p>
              )}
            </div>
          )}
          {data.tithi.end_time && (
            <div className="mt-4 pt-4 border-t border-beige-200">
              <p className="text-sm text-gray-600">Ends at: {data.tithi.end_time.hour}:{data.tithi.end_time.minute}:{data.tithi.end_time.second}</p>
            </div>
          )}
        </div>
      )}

      {/* Nakshatra */}
      {data.nakshatra && (
        <div className="bg-white rounded-xl p-6 border border-beige-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Nakshatra</h3>
          {data.nakshatra.details && (
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {data.nakshatra.details.nak_name}
              </p>
              {data.nakshatra.details.ruler && (
                <p className="text-gray-600">Ruler: {data.nakshatra.details.ruler}</p>
              )}
              {data.nakshatra.details.deity && (
                <p className="text-gray-600">Deity: {data.nakshatra.details.deity}</p>
              )}
              {data.nakshatra.details.special && (
                <p className="text-gold-600 font-medium">{data.nakshatra.details.special}</p>
              )}
              {data.nakshatra.details.summary && (
                <p className="text-gray-600">{data.nakshatra.details.summary}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Yog */}
      {data.yog && (
        <div className="bg-white rounded-xl p-6 border border-beige-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Yog</h3>
          {data.yog.details && (
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {data.yog.details.yog_name}
              </p>
              {data.yog.details.special && (
                <p className="text-emerald-600 font-medium">{data.yog.details.special}</p>
              )}
              {data.yog.details.meaning && (
                <p className="text-gray-600">{data.yog.details.meaning}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Karan */}
      {data.karan && (
        <div className="bg-white rounded-xl p-6 border border-beige-200 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Karan</h3>
          {data.karan.details && (
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {data.karan.details.karan_name}
              </p>
              {data.karan.details.special && (
                <p className="text-gray-600">{data.karan.details.special}</p>
              )}
              {data.karan.details.deity && (
                <p className="text-sm text-gray-500">Deity: {data.karan.details.deity}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.paksha && (
          <div className="bg-white rounded-lg p-4 border border-beige-200">
            <p className="text-sm text-gray-600">Paksha</p>
            <p className="font-semibold text-gray-900">{data.paksha}</p>
          </div>
        )}
        {data.ritu && (
          <div className="bg-white rounded-lg p-4 border border-beige-200">
            <p className="text-sm text-gray-600">Ritu</p>
            <p className="font-semibold text-gray-900">{data.ritu}</p>
          </div>
        )}
        {data.sun_sign && (
          <div className="bg-white rounded-lg p-4 border border-beige-200">
            <p className="text-sm text-gray-600">Sun Sign</p>
            <p className="font-semibold text-gray-900">{data.sun_sign}</p>
          </div>
        )}
        {data.moon_sign && (
          <div className="bg-white rounded-lg p-4 border border-beige-200">
            <p className="text-sm text-gray-600">Moon Sign</p>
            <p className="font-semibold text-gray-900">{data.moon_sign}</p>
          </div>
        )}
      </div>

      {/* Auspicious Timings */}
      {data.abhijit_muhurta && (
        <div className="bg-gradient-to-r from-emerald-50 to-gold-50 rounded-xl p-6 border border-emerald-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Auspicious Timings</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Abhijit Muhurat</p>
              <p className="font-semibold text-gray-900">
                {data.abhijit_muhurta.start} - {data.abhijit_muhurta.end}
              </p>
            </div>
            {data.rahukaal && (
              <div>
                <p className="text-sm text-gray-600">Rahu Kaal (Avoid)</p>
                <p className="font-semibold text-gray-900">
                  {data.rahukaal.start} - {data.rahukaal.end}
                </p>
              </div>
            )}
            {data.guliKaal && (
              <div>
                <p className="text-sm text-gray-600">Gulika Kaal (Avoid)</p>
                <p className="font-semibold text-gray-900">
                  {data.guliKaal.start} - {data.guliKaal.end}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedPanchangView








