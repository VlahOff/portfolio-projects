import Navbar from './components/navbar/Navbar';
import CaseStudies from './sections/caseStudies/CaseStudies';
import ContactUs from './sections/contactUs/ContactUs';
import CtaBlock from './sections/ctaBlock/CtaBlock';
import HeroSection from './sections/hero/HeroSection';
import ServicesSection from './sections/serviceSection/ServicesSection';
import TeamSection from './sections/team/TeamSection';
import Testimonials from './sections/testimonials/Testimonials';
import WorkingProcess from './sections/workingProcess/WorkingProcess';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<HeroSection />
				<ServicesSection />
				<CtaBlock />
				<CaseStudies />
				<WorkingProcess />
				<TeamSection />
				<Testimonials />
				<ContactUs />
			</main>
		</>
	);
}

export default App;
