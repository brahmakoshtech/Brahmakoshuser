import { Routes, Route } from 'react-router-dom'
// import PageWrapper from '../components/layout/PageWrapper'
import ComingSoon from '../pages/ComingSoon'
// import Home from '../pages/Home'
// import Kundli from '../pages/Kundli'
// import KundliDetail from '../pages/KundliDetail'
// import Services from '../pages/Services'
// import ServiceDetail from '../pages/ServiceDetail'
// import Horoscope from '../pages/Horoscope'
// import Panchang from '../pages/Panchang'
// import MatchMaking from '../pages/MatchMaking'
// import Dashboard from '../pages/Dashboard'
// import Login from '../pages/Login'
// import Signup from '../pages/Signup'
import PrivacyPolicy from '../pages/PrivacyPolicy'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      {/* <Route path="/kundli" element={<Kundli />} /> */}
      {/* <Route path="/kundli/:id" element={<KundliDetail />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/services/:id" element={<ServiceDetail />} /> */}
      {/* <Route path="/horoscope" element={<Horoscope />} /> */}
      {/* <Route path="/panchang" element={<Panchang />} /> */}
      {/* <Route path="/match-making" element={<MatchMaking />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default AppRoutes

