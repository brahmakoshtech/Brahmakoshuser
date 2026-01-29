import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
// import IntroScreen from './components/common/IntroScreen'

function App() {
  // const [showIntro, setShowIntro] = useState(true)

  // useEffect(() => {
  //   const hasSeenIntro = sessionStorage.getItem('brahmakosh_intro_seen')
  //   if (hasSeenIntro) {
  //     setShowIntro(false)
  //   } else {
  //     const timer = setTimeout(() => {
  //       setShowIntro(false)
  //       sessionStorage.setItem('brahmakosh_intro_seen', 'true')
  //     }, 3500)
  //     return () => clearTimeout(timer)
  //   }
  // }, [])

  return (
    <BrowserRouter>
      {/* {showIntro && <IntroScreen />} */}
      {/* {!showIntro && <AppRoutes />} */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App









