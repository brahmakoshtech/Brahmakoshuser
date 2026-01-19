function FestivalView({ data }) {
  if (!data || !data.festivals) return null

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Festivals & Events</h3>
      <div className="bg-gradient-to-r from-gold-50 to-saffron-50 rounded-lg p-6 border border-gold-200">
        {data.festivals.length > 0 ? (
          <div className="space-y-2">
            {data.festivals.map((festival, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-2xl">🎉</span>
                <p className="text-gray-700 font-medium">{festival}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No festivals for this period</p>
        )}
      </div>
    </div>
  )
}

export default FestivalView








