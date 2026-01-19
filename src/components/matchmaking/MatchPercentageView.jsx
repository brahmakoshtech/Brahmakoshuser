function MatchPercentageView({ data }) {
  if (!data) return null

  const overallPercentage = data.match_percentage || 0
  const isGood = data.is_match_good || false

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Match Percentage</h2>
      
      {/* Overall Match Percentage */}
      <div className={`bg-gradient-to-r ${isGood ? 'from-emerald-50 to-emerald-100' : 'from-ruby-50 to-ruby-100'} border-2 ${isGood ? 'border-emerald-300' : 'border-ruby-300'} rounded-lg p-8 text-center`}>
        <div className="text-6xl font-bold mb-2" style={{ color: isGood ? '#059669' : '#dc2626' }}>
          {overallPercentage}%
        </div>
        <p className="text-2xl font-semibold text-gray-900 mb-2">Overall Match</p>
        <p className={`text-lg ${isGood ? 'text-emerald-700' : 'text-ruby-700'}`}>
          {isGood ? '✓ Good Match' : '⚠ Needs Attention'}
        </p>
      </div>

      {/* Individual Percentages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-beige-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Ashtakoota</h4>
          <div className="text-3xl font-bold text-gold-600">{data.ashtakoota_percentage || 0}%</div>
        </div>
        <div className="bg-white border-2 border-beige-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Manglik Match</h4>
          <div className="text-3xl font-bold text-royal-600">{data.manglik_match_percentage || 0}%</div>
        </div>
        <div className="bg-white border-2 border-beige-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Rajju Match</h4>
          <div className="text-3xl font-bold text-emerald-600">{data.rajju_match_percentage || 0}%</div>
        </div>
        <div className="bg-white border-2 border-beige-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Vedha Match</h4>
          <div className="text-3xl font-bold text-amethyst-600">{data.vedha_match_percentage || 0}%</div>
        </div>
      </div>
    </div>
  )
}

export default MatchPercentageView








