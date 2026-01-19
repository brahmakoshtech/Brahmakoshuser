function ChaughadiyaView({ data }) {
  if (!data || !data.chaughadiya) return null

  const getMuhurtaColor = (muhurta) => {
    const colors = {
      Labh: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      Amrit: 'bg-gold-50 border-gold-200 text-gold-700',
      Shubh: 'bg-royal-50 border-royal-200 text-royal-700',
      Kaal: 'bg-ruby-50 border-ruby-200 text-ruby-700',
      Rog: 'bg-gray-50 border-gray-200 text-gray-700',
      Udveg: 'bg-saffron-50 border-saffron-200 text-saffron-700',
      Char: 'bg-amethyst-50 border-amethyst-200 text-amethyst-700',
    }
    return colors[muhurta] || colors.Char
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Day Muhurta</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.chaughadiya.day?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getMuhurtaColor(item.muhurta)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.muhurta}</span>
                <span className="text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Night Muhurta</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.chaughadiya.night?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getMuhurtaColor(item.muhurta)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.muhurta}</span>
                <span className="text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChaughadiyaView








