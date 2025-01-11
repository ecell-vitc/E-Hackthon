import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WhoCanParticipate from './components/WhoCanParticipate.jsx'
import FAQ from './components/FAQ.jsx'
import WhyParticipate from './components/WhyParticipate.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WhoCanParticipate />
    <FAQ />
    <WhyParticipate />
  </StrictMode>,
)
