import { CheckCircle, XCircle } from 'lucide-react'

function MatchMakingDetailedReportView({ data }) {
  if (!data) return null

  const { ashtakoota, manglik, rajju_dosha, vedha_dosha, conclusion } = data

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Match Making Report</h2>
      
      {/* Ashtakoota Details */}
      {ashtakoota && (
        <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ashtakoota Matching</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {['varna', 'vashya', 'tara', 'yoni', 'maitri', 'gan', 'bhakut', 'nadi'].map((koota) => {
              const kootaData = ashtakoota[koota]
              if (!kootaData) return null
              return (
                <div key={koota} className="border border-beige-200 rounded p-3">
                  <div className="font-semibold text-sm capitalize mb-1">{koota}</div>
                  <div className="text-lg font-bold text-gold-600">
                    {kootaData.received_points}/{kootaData.total_points}
                  </div>
                </div>
              )
            })}
          </div>
          {ashtakoota.total && (
            <div className="bg-gold-50 border border-gold-200 rounded p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Points:</span>
                <span className="text-2xl font-bold text-gold-600">
                  {ashtakoota.total.received_points}/{ashtakoota.total.total_points}
                </span>
              </div>
            </div>
          )}
          {ashtakoota.conclusion && (
            <div className="mt-4 p-4 bg-beige-50 rounded">
              <p className="text-gray-700">{ashtakoota.conclusion.report}</p>
            </div>
          )}
        </div>
      )}

      {/* Manglik */}
      {manglik && (
        <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            {manglik.status ? (
              <CheckCircle className="text-emerald-500" size={24} />
            ) : (
              <XCircle className="text-ruby-500" size={24} />
            )}
            <span>Manglik Analysis</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Male Percentage:</p>
              <p className="font-bold text-gray-900">{manglik.male_percentage || 0}%</p>
            </div>
            <div>
              <p className="text-gray-600">Female Percentage:</p>
              <p className="font-bold text-gray-900">{manglik.female_percentage || 0}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Doshas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Rajju Dosha</h3>
          <p className={`font-semibold ${rajju_dosha?.status ? 'text-ruby-600' : 'text-emerald-600'}`}>
            {rajju_dosha?.status ? 'Present' : 'Not Present'}
          </p>
        </div>
        <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Vedha Dosha</h3>
          <p className={`font-semibold ${vedha_dosha?.status ? 'text-ruby-600' : 'text-emerald-600'}`}>
            {vedha_dosha?.status ? 'Present' : 'Not Present'}
          </p>
        </div>
      </div>

      {/* Conclusion */}
      {conclusion && (
        <div className="bg-gradient-to-r from-gold-50 to-saffron-50 border-2 border-gold-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Final Conclusion</h3>
          <p className="text-gray-700 leading-relaxed">{conclusion.match_report}</p>
        </div>
      )}
    </div>
  )
}

export default MatchMakingDetailedReportView








