function MatchManglikReportView({ data }) {
  if (!data) return null

  const { male, female, conclusion } = data

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Manglik Report</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Manglik */}
        <div className="bg-royal-50 border-2 border-royal-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-royal-600 mb-4">Male / Boy Manglik Analysis</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-700">Status:</p>
              <p className={`font-bold ${male.is_present ? 'text-ruby-600' : 'text-emerald-600'}`}>
                {male.manglik_status || (male.is_present ? 'Manglik' : 'Not Manglik')}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Percentage:</p>
              <p className="text-gray-900">{male.percentage_manglik_present || 0}%</p>
              {male.percentage_manglik_after_cancellation && (
                <p className="text-sm text-gray-600">After Cancellation: {male.percentage_manglik_after_cancellation}%</p>
              )}
            </div>
            {male.manglik_report && (
              <div className="mt-4 pt-4 border-t border-royal-200">
                <p className="text-gray-700 text-sm">{male.manglik_report}</p>
              </div>
            )}
          </div>
        </div>

        {/* Female Manglik */}
        <div className="bg-ruby-50 border-2 border-ruby-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-ruby-600 mb-4">Female / Girl Manglik Analysis</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-700">Status:</p>
              <p className={`font-bold ${female.is_present ? 'text-ruby-600' : 'text-emerald-600'}`}>
                {female.manglik_status || (female.is_present ? 'Manglik' : 'Not Manglik')}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Percentage:</p>
              <p className="text-gray-900">{female.percentage_manglik_present || 0}%</p>
              {female.percentage_manglik_after_cancellation && (
                <p className="text-sm text-gray-600">After Cancellation: {female.percentage_manglik_after_cancellation}%</p>
              )}
            </div>
            {female.manglik_report && (
              <div className="mt-4 pt-4 border-t border-ruby-200">
                <p className="text-gray-700 text-sm">{female.manglik_report}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Conclusion */}
      {conclusion && (
        <div className={`mt-6 p-6 rounded-lg border-2 ${
          conclusion.match
            ? 'bg-emerald-50 border-emerald-200'
            : 'bg-ruby-50 border-ruby-200'
        }`}>
          <h3 className="font-bold text-gray-900 mb-2">Conclusion</h3>
          <p className="text-gray-700">{conclusion.report}</p>
        </div>
      )}
    </div>
  )
}

export default MatchManglikReportView


