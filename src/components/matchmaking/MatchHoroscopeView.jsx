function MatchHoroscopeView({ data }) {
  if (!data) return null

  const { astro_details, match_analysis, manglik } = data

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Horoscope Match</h2>
      
      {/* Astro Details */}
      {astro_details && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-royal-50 border-2 border-royal-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-royal-600 mb-4">Male Profile</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {Object.entries(astro_details.male_profile || {}).map(([key, value]) => (
                <div key={key}>
                  <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                  <span className="ml-2 font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ruby-50 border-2 border-ruby-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-ruby-600 mb-4">Female Profile</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {Object.entries(astro_details.female_profile || {}).map(([key, value]) => (
                <div key={key}>
                  <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                  <span className="ml-2 font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Match Analysis */}
      {match_analysis && (
        <div className="bg-white border-2 border-beige-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{match_analysis.match_type}</h3>
          {match_analysis.match_points && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              {Object.entries(match_analysis.match_points).map(([key, value]) => {
                if (key === 'total') return null
                return (
                  <div key={key} className="border border-beige-200 rounded p-3 text-center">
                    <div className="text-xs text-gray-600 capitalize mb-1">{key}</div>
                    <div className="text-lg font-bold text-gold-600">
                      {value.received_points}/{value.total_points}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          {match_analysis.match_percentage && (
            <div className="bg-gold-50 border border-gold-200 rounded p-4 text-center">
              <div className="text-3xl font-bold text-gold-600">
                {match_analysis.match_percentage}%
              </div>
              <div className="text-sm text-gray-600 mt-1">Match Percentage</div>
            </div>
          )}
        </div>
      )}

      {/* Manglik Conclusion */}
      {manglik?.conclusion && (
        <div className={`p-6 rounded-lg border-2 ${
          manglik.conclusion.match
            ? 'bg-emerald-50 border-emerald-200'
            : 'bg-ruby-50 border-ruby-200'
        }`}>
          <h3 className="font-bold text-gray-900 mb-2">Manglik Conclusion</h3>
          <p className="text-gray-700">{manglik.conclusion.report}</p>
        </div>
      )}
    </div>
  )
}

export default MatchHoroscopeView


