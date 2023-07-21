import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ContactSection from './sections/contactSection/ContactSection';
import ExperienceSection from './sections/experienceSection/ExperienceSection';
import HeroSection from './sections/heroSection/HeroSection';
import LogosSection from './sections/logosSection/LogosSection';
import ReviewSection from './sections/reviewSection/ReviewSection';
import ServicesSection from './sections/servicesSection/ServicesSection';
import WorksSection from './sections/worksSection/WorksSection';

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<HeroSection />
				<LogosSection />
				<WorksSection />
				<ExperienceSection />
				<ReviewSection />
				<ServicesSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
