function MonthlyPanchangView({ data }) {
  if (!data || !data.panchang) return null

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gold-50 to-saffron-50 rounded-lg p-4 border border-gold-200">
        <h3 className="text-xl font-bold text-gray-900">
          {new Date(data.year, data.month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.panchang.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 border border-beige-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-gray-900">Day {day.day}</span>
              <span className="text-sm text-gray-500">
                Tithi: {day.tithi} | Nak: {day.nak}
              </span>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p>Sunrise: {day.sunrise}</p>
              <p>Sunset: {day.sunSetTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthlyPanchangView


