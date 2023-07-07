import classes from './App.module.css';
import Hero from './components/heroSection/Hero';
import LogoBlock from './components/logoBlock/LogoBlock';
import NavBar from './components/navbar/NavBar';
import Works from './components/works/Works';

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<Hero />
				<LogoBlock />
				<Works />
			</main>
			<footer></footer>
		</>
	);
}

export default App;
