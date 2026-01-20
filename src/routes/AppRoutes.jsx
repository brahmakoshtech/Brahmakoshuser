import { Routes, Route } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import Home from '../pages/Home'
import Services from '../pages/Services'
import ServiceDetail from '../pages/ServiceDetail'
import Panchang from '../pages/Panchang'
import MatchMaking from '../pages/MatchMaking'
import Horoscope from '../pages/Horoscope'
import Kundli from '../pages/Kundli'
import KundliDetail from '../pages/KundliDetail'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PrivacyPolicy from '../pages/PrivacyPolicy'

function AppRoutes() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/panchang" element={<Panchang />} />
        <Route path="/match-making" element={<MatchMaking />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/kundli/:id" element={<KundliDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </PageWrapper>
  )
}

export default AppRoutes


