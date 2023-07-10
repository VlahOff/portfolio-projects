import CharacterCard from './CharacterCard';

import monkey4 from '../../assets/BAYC 2.png';
import monkey3 from '../../assets/BAYC 3.png';
import monkey1 from '../../assets/BAYC 7.png';
import monkey2 from '../../assets/BAYC 8.png';
import curlyLine from '../../assets/Spline 13.png';
import straightLineRight from '../../assets/Spline 17.svg';
import straightLineLeft from '../../assets/Spline 18.png';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

import classes from './CharactersSection.module.css';

const CharactersSection = () => {
	return (
		<section
			className={classes.section}
			id="characters"
		>
			<div className={classes.decoration}>
				<img
					src={straightLineLeft}
					alt="Straight decoration line"
				/>
				<img
					src={curlyLine}
					alt="Curly decoration line"
				/>
				<img
					src={straightLineRight}
					alt="Straight decoration line"
				/>
			</div>
			<header className={classes.header}>
				<div className={classes['title-wrapper']}>
					<h4 className={classes.title}>Find your</h4>
					<h2 className={classes['main-title']}>Favourite character</h2>
				</div>
				<div className={classes['btn-wrapper']}>
					<button className={classes.btn}>
						<img
							src={leftArrow}
							alt="Left Arrow"
							className={classes['btn-arrow']}
						/>
					</button>
					<button className={classes.btn}>
						<img
							src={rightArrow}
							alt="Right Arrow"
							className={classes['btn-arrow']}
						/>
					</button>
				</div>
			</header>
			<main className={classes['card-container']}>
				<CharacterCard
					title="Monkey Icon"
					image={monkey1}
					time={'12h:10m:23s'}
					bidPrice={'18.87 ETH'}
				/>
				<CharacterCard
					title="Monkey Icon"
					image={monkey2}
					time={'12h:10m:23s'}
					bidPrice={'18.87 ETH'}
				/>
				<CharacterCard
					title="Monkey Icon"
					image={monkey3}
					time={'12h:10m:23s'}
					bidPrice={'18.87 ETH'}
				/>
				<CharacterCard
					title="Monkey Icon"
					image={monkey4}
					time={'12h:10m:23s'}
					bidPrice={'18.87 ETH'}
				/>
			</main>
		</section>
	);
};

export default CharactersSection;
