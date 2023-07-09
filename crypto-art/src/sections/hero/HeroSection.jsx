import characters from '../../assets/Characters.png';
import figure2 from '../../assets/Spline 15.png';
import figure1 from '../../assets/Spline 16.png';
import heroBackground from '../../assets/criptoart.svg';
import ethLogo from '../../assets/ethLogo.svg';
import scrollExplorer from '../../assets/scrollExplorer.svg';
import vectors from '../../assets/vectors.svg';

import classes from './HeroSection.module.css';

const HeroSection = () => {
	return (
		<section className={classes['hero-section']}>
			<div className={classes['hero-wrapper']}>
				<div className={classes['light-left']}></div>
				<div className={classes['light-right']}></div>
				<div className={classes['light-center']}></div>
				<div className={classes['title-wrapper']}>
					<div className={classes['logo-wrapper']}>
						<img
							src={ethLogo}
							alt="Eth Logo"
							className={classes.logo}
						/>
					</div>
					<h1 className={classes.title}>
						Discover and collect super rare NFTs
					</h1>
					<p className={classes['sub-title']}>
						Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
						discover exclusive digital assets today.
					</p>
					<button className={classes.btn}>connect wallet</button>
				</div>
				<div className={classes['characters-wrapper']}>
					<img
						src={characters}
						alt="Characters"
						className={classes.characters}
					/>
					<img
						src={scrollExplorer}
						alt="Scroll Explorer badge"
						className={classes.badge}
					/>
				</div>
				<img
					src={figure1}
					alt="Figure 1"
					className={classes['figure-one']}
				/>
				<img
					src={figure2}
					alt="Figure 2"
					className={classes['figure-two']}
				/>
				<img
					src={vectors}
					alt="background-vectors"
					className={classes['background-vectors']}
				/>
				<img
					src={heroBackground}
					alt="Hero background"
					className={classes.background}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
