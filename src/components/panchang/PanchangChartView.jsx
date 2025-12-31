function PanchangChartView({ data }) {
  if (!data || !Array.isArray(data)) return null

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Planetary Positions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((sign, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 border border-beige-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{sign.sign_name}</h4>
              <span className="text-sm text-gray-500">#{sign.sign}</span>
            </div>
            {sign.planet && sign.planet.length > 0 ? (
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Planets:</p>
                <div className="flex flex-wrap gap-2">
                  {sign.planet.map((planet, pIndex) => (
                    <span
                      key={pIndex}
                      className="px-2 py-1 bg-gold-100 text-gold-700 rounded text-xs font-medium"
                    >
                      {planet}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-400">No planets</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PanchangChartView


