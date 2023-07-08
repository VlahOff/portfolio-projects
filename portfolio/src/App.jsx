import ExperienceSection from './components/experienceSection/ExperienceSection';
import HeroSection from './components/heroSection/HeroSection';
import LogosSection from './components/logosSection/LogosSection';
import NavBar from './components/navbar/NavBar';
import ReviewSection from './components/reviewSection/ReviewSection';
import ServicesSection from './components/servicesSection/ServicesSection';
import WorksSection from './components/worksSection/WorksSection';

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
			</main>
			<footer></footer>
		</>
	);
}

export default App;
