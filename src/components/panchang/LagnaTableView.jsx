function LagnaTableView({ data }) {
  if (!data || !Array.isArray(data)) return null

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Lagna Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gold-50">
              <th className="border border-beige-200 px-4 py-3 text-left font-semibold text-gray-900">Lagna</th>
              <th className="border border-beige-200 px-4 py-3 text-left font-semibold text-gray-900">Start Time</th>
              <th className="border border-beige-200 px-4 py-3 text-left font-semibold text-gray-900">End Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((lagna, index) => (
              <tr key={index} className="hover:bg-beige-50 transition-colors">
                <td className="border border-beige-200 px-4 py-3 font-semibold text-gray-900">{lagna.lagna}</td>
                <td className="border border-beige-200 px-4 py-3 text-gray-700">{lagna.start_time}</td>
                <td className="border border-beige-200 px-4 py-3 text-gray-700">{lagna.end_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LagnaTableView


