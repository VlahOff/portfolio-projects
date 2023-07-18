import BrandsBanner from './components/brandsBanner/BrandsBanner';
import Divider from './components/divider/Divider';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import AboutSection from './sections/about/AboutSection';
import CharactersSection from './sections/characters/CharactersSection';
import FaqSection from './sections/faq/FaqSection';
import HeroSection from './sections/hero/HeroSection';
import JoinSection from './sections/join/JoinSection';

import classes from './App.module.css';

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				{/* 
				<HeroSection />
				<BrandsBanner />
				<AboutSection />
				<CharactersSection />
				<Divider />
				<FaqSection />
				<JoinSection />
				<Divider /> 
				*/}
			</main>
			{/* <footer>
				<Footer />
				<div className={classes.wrapper}>
					<a
						href="https://www.figma.com/community/file/1257062858453316868"
						className={classes.link}
					>
						DESIGN USED
					</a>
				</div>
			</footer> */}
		</>
	);
}

export default App;
