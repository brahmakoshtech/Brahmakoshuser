import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({ codeExamples }) {
  const [activeTab, setActiveTab] = useState(Object.keys(codeExamples)[0] || 'javascript')

  const tabs = Object.keys(codeExamples)
  const activeCode = codeExamples[activeTab]

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      {/* Tabs */}
      <div className="flex border-b border-gray-800 bg-gray-950">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium transition-colors capitalize ${
              activeTab === tab
                ? 'text-gold-400 border-b-2 border-gold-400 bg-gray-900'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-900/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Code */}
      <div className="relative">
        <SyntaxHighlighter
          language={activeTab === 'json' ? 'json' : activeTab}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            background: '#1e1e1e',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          {activeCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock

