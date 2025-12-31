function PapasamyamDetailsView({ data }) {
  if (!data) return null

  const renderDoshaSection = (title, doshaData, color) => {
    const colorClasses = {
      royal: { bg: 'bg-royal-50', border: 'border-royal-200', text: 'text-royal-600' },
      amethyst: { bg: 'bg-amethyst-50', border: 'border-amethyst-200', text: 'text-amethyst-600' },
      saffron: { bg: 'bg-saffron-50', border: 'border-saffron-200', text: 'text-saffron-600' },
    }
    const classes = colorClasses[color] || colorClasses.royal
    
    return (
      <div className={`${classes.bg} border-2 ${classes.border} rounded-lg p-6`}>
        <h3 className={`text-xl font-bold ${classes.text} mb-4`}>{title}</h3>
        <div className="space-y-3">
          {doshaData.dosha?.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded p-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">{item.planet}</span>
                <span className="text-gray-600">Position: {item.position}</span>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-600">Dosha Units:</span>
                <span className={`ml-2 font-bold ${item.doshaUnits > 0 ? 'text-ruby-600' : 'text-emerald-600'}`}>
                  {item.doshaUnits}
                </span>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-gray-900">{doshaData.total}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Papasamyam Details</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.ascendant && renderDoshaSection('Ascendant', data.ascendant, 'royal')}
        {data.moon && renderDoshaSection('Moon', data.moon, 'amethyst')}
        {data.venus && renderDoshaSection('Venus', data.venus, 'saffron')}
      </div>

      {data.final && (
        <div className="bg-gradient-to-r from-ruby-50 to-ruby-100 border-2 border-ruby-300 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Final Papasamyam Score</h3>
          <div className="text-4xl font-bold text-ruby-600">{data.final}</div>
        </div>
      )}
    </div>
  )
}

export default PapasamyamDetailsView
