import { CheckCircle, XCircle } from 'lucide-react'

function MatchDashakootPointsView({ data }) {
  if (!data) return null

  const kootas = ['dina', 'gana', 'yoni', 'rashi', 'rasyadhipati', 'rajju', 'vedha', 'vashya', 'mahendra', 'streeDeergha']
  const totalPoints = data.total?.received_points || 0
  const maxPoints = data.total?.total_points || 36
  const minimumRequired = data.total?.minimum_required || 18
  const percentage = ((totalPoints / maxPoints) * 100).toFixed(1)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashakoot Matching Points</h2>
      
      {/* Summary Card */}
      <div className="bg-gradient-to-r from-gold-50 to-saffron-50 border-2 border-gold-300 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Total Points</h3>
            <p className="text-gray-600 mt-1">
              {totalPoints} out of {maxPoints} points ({percentage}%)
            </p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${totalPoints >= minimumRequired ? 'text-emerald-600' : 'text-ruby-600'}`}>
              {totalPoints}/{maxPoints}
            </div>
            <p className="text-sm text-gray-600 mt-1">Minimum Required: {minimumRequired}</p>
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all ${
              totalPoints >= minimumRequired ? 'bg-emerald-500' : 'bg-ruby-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Koota Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kootas.map((koota) => {
          const kootaData = data[koota]
          if (!kootaData) return null
          
          const received = kootaData.received_points || 0
          const total = kootaData.total_points || 0
          const isMatch = received > 0

          return (
            <div key={koota} className="bg-white border-2 border-beige-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-900 capitalize text-sm">{koota}</h4>
                {isMatch ? (
                  <CheckCircle className="text-emerald-500" size={18} />
                ) : (
                  <XCircle className="text-ruby-500" size={18} />
                )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Points:</span>
                <span className={`font-bold text-sm ${isMatch ? 'text-emerald-600' : 'text-ruby-600'}`}>
                  {received}/{total}
                </span>
              </div>
              {kootaData.male_koot_attribute && (
                <div className="mt-2 text-xs text-gray-500 space-y-1">
                  <div>M: {kootaData.male_koot_attribute}</div>
                  {kootaData.female_koot_attribute && (
                    <div>F: {kootaData.female_koot_attribute}</div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MatchDashakootPointsView


