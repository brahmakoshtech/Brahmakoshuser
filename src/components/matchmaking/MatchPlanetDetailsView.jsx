function MatchPlanetDetailsView({ data }) {
  if (!data) return null

  const { male_planet_details, female_planet_details } = data

  const renderPlanetCard = (planet, index) => (
    <div key={index} className="bg-white border border-beige-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-gray-900">{planet.name}</h4>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          planet.isRetro === 'true' || planet.isRetro === true
            ? 'bg-ruby-100 text-ruby-700'
            : 'bg-emerald-100 text-emerald-700'
        }`}>
          {planet.isRetro === 'true' || planet.isRetro === true ? 'Retrograde' : 'Direct'}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div><span className="text-gray-600">Sign:</span> <span className="font-semibold">{planet.sign}</span></div>
        <div><span className="text-gray-600">House:</span> <span className="font-semibold">{planet.house}</span></div>
        <div><span className="text-gray-600">Nakshatra:</span> <span className="font-semibold">{planet.nakshatra}</span></div>
        <div><span className="text-gray-600">Degree:</span> <span className="font-semibold">{planet.normDegree?.toFixed(2)}°</span></div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Planet Details</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Planets */}
        <div>
          <h3 className="text-xl font-bold text-royal-600 mb-4">Male / Boy Planets</h3>
          <div className="grid grid-cols-1 gap-3">
            {male_planet_details?.map((planet, index) => renderPlanetCard(planet, index))}
          </div>
        </div>

        {/* Female Planets */}
        <div>
          <h3 className="text-xl font-bold text-ruby-600 mb-4">Female / Girl Planets</h3>
          <div className="grid grid-cols-1 gap-3">
            {female_planet_details?.map((planet, index) => renderPlanetCard(planet, index))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchPlanetDetailsView








