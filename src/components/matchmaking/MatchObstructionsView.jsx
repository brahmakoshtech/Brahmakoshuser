import { AlertTriangle, CheckCircle } from 'lucide-react'

function MatchObstructionsView({ data }) {
  if (!data) return null

  const isPresent = data.is_present || false

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Obstructions Analysis</h2>
      
      <div className={`${isPresent ? 'bg-ruby-50 border-ruby-300' : 'bg-emerald-50 border-emerald-300'} border-2 rounded-lg p-8 text-center`}>
        <div className="flex items-center justify-center mb-4">
          {isPresent ? (
            <AlertTriangle className="text-ruby-600" size={48} />
          ) : (
            <CheckCircle className="text-emerald-600" size={48} />
          )}
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${isPresent ? 'text-ruby-600' : 'text-emerald-600'}`}>
          {isPresent ? 'Obstructions Present' : 'No Obstructions'}
        </h3>
        {data.vedha_name && (
          <p className="text-lg text-gray-700 mb-4">
            Vedha Name: <strong>{data.vedha_name}</strong>
          </p>
        )}
        {data.vedha_report && (
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {data.vedha_report}
          </p>
        )}
      </div>
    </div>
  )
}

export default MatchObstructionsView








