import Banner from './components/Banner'
import About from './components/About'
import Participate from './components/WhoCanParticipate'
import WhyParticipate from './components/WhyParticipate'
import Sponsor from './components/SponsorSection'
import FAQ from './components/FAQ'
import Contact from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<Banner />
			<About />
			<Participate />
			<WhyParticipate />
			<Sponsor />
			<FAQ />
			<Contact />
			<Footer />
		</>
	)
}

export default App;