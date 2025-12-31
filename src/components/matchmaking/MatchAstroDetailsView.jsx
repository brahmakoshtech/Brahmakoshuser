function MatchAstroDetailsView({ data }) {
  if (!data) return null

  const { male_astro_details, female_astro_details } = data

  const renderDetails = (details, title, color) => {
    const colorClasses = {
      royal: { bg: 'bg-royal-50', border: 'border-royal-200', text: 'text-royal-600' },
      ruby: { bg: 'bg-ruby-50', border: 'border-ruby-200', text: 'text-ruby-600' },
    }
    const classes = colorClasses[color] || colorClasses.royal
    
    return (
      <div className={`${classes.bg} border-2 ${classes.border} rounded-lg p-6`}>
        <h3 className={`text-xl font-bold text-gray-900 mb-4 ${classes.text}`}>{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="border-b border-gray-200 pb-2">
              <span className="text-sm font-semibold text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
              <span className="ml-2 text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Astrological Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderDetails(male_astro_details, 'Male / Boy Astro Details', 'royal')}
        {renderDetails(female_astro_details, 'Female / Girl Astro Details', 'ruby')}
      </div>
    </div>
  )
}

export default MatchAstroDetailsView
