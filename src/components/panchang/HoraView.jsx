function HoraView({ data }) {
  if (!data || !data.hora) return null

  const getPlanetColor = (planet) => {
    const colors = {
      Sun: 'bg-gold-50 border-gold-200 text-gold-700',
      Moon: 'bg-royal-50 border-royal-200 text-royal-700',
      Mars: 'bg-ruby-50 border-ruby-200 text-ruby-700',
      Mercury: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      Jupiter: 'bg-saffron-50 border-saffron-200 text-saffron-700',
      Venus: 'bg-amethyst-50 border-amethyst-200 text-amethyst-700',
      Saturn: 'bg-gray-50 border-gray-200 text-gray-700',
    }
    return colors[planet] || colors.Saturn
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Day Hora</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.hora.day?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getPlanetColor(item.hora)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.hora}</span>
                <span className="text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Night Hora</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.hora.night?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getPlanetColor(item.hora)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.hora}</span>
                <span className="text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HoraView








