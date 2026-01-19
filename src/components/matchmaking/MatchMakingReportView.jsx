import { CheckCircle, XCircle } from 'lucide-react'

function MatchMakingReportView({ data }) {
  if (!data) return null

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Match Making Report</h2>
      
      {/* Ashtakoota */}
      <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          {data.ashtakoota?.status ? (
            <CheckCircle className="text-emerald-500" size={24} />
          ) : (
            <XCircle className="text-ruby-500" size={24} />
          )}
          <span>Ashtakoota Matching</span>
        </h3>
        <p className="text-gray-700">
          Points Received: <strong>{data.ashtakoota?.received_points || 0}</strong>
        </p>
      </div>

      {/* Manglik */}
      <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          {data.manglik?.status ? (
            <CheckCircle className="text-emerald-500" size={24} />
          ) : (
            <XCircle className="text-ruby-500" size={24} />
          )}
          <span>Manglik Analysis</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Male Percentage:</p>
            <p className="font-bold text-gray-900">{data.manglik?.male_percentage || 0}%</p>
          </div>
          <div>
            <p className="text-gray-600">Female Percentage:</p>
            <p className="font-bold text-gray-900">{data.manglik?.female_percentage || 0}%</p>
          </div>
        </div>
      </div>

      {/* Rajju Dosha */}
      <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          {!data.rajju_dosha?.status ? (
            <CheckCircle className="text-emerald-500" size={24} />
          ) : (
            <XCircle className="text-ruby-500" size={24} />
          )}
          <span>Rajju Dosha</span>
        </h3>
        <p className={`font-semibold ${data.rajju_dosha?.status ? 'text-ruby-600' : 'text-emerald-600'}`}>
          {data.rajju_dosha?.status ? 'Present' : 'Not Present'}
        </p>
      </div>

      {/* Vedha Dosha */}
      <div className="bg-white border-2 border-beige-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          {!data.vedha_dosha?.status ? (
            <CheckCircle className="text-emerald-500" size={24} />
          ) : (
            <XCircle className="text-ruby-500" size={24} />
          )}
          <span>Vedha Dosha</span>
        </h3>
        <p className={`font-semibold ${data.vedha_dosha?.status ? 'text-ruby-600' : 'text-emerald-600'}`}>
          {data.vedha_dosha?.status ? 'Present' : 'Not Present'}
        </p>
      </div>

      {/* Conclusion */}
      {data.conclusion && (
        <div className="bg-gradient-to-r from-gold-50 to-saffron-50 border-2 border-gold-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed">{data.conclusion.match_report}</p>
        </div>
      )}
    </div>
  )
}

export default MatchMakingReportView








