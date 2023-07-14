import Button from '../../components/button/Button';

import amazonLogo from '../../assets/Amazon logo.svg';
import dribbleLogo from '../../assets/Dribble logo.svg';
import illustration from '../../assets/Illustration.svg';
import hubspotLogo from '../../assets/hubspot logo.svg';
import netflixLogo from '../../assets/netflix logo.svg';
import notionLogo from '../../assets/notion logo.svg';
import zoomLogo from '../../assets/zoom logo.svg';

import classes from './HeroSection.module.css';

const HeroSection = () => {
	return (
		<section className={classes.hero}>
			<header className={classes['hero-header']}>
				<h1 className={classes.title}>
					Navigating the digital landscape for success
				</h1>
				<div className={classes['description-container']}>
					<p className={classes.description}>
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<Button btnType="fill">Book a consultation</Button>
				</div>
				<img
					src={illustration}
					alt="illustration img"
					className={classes.illustration}
				/>
			</header>
			<div className={classes['logos-container']}>
				<img
					src={amazonLogo}
					alt="Amazon logo"
					className={classes.logo}
				/>
				<img
					src={dribbleLogo}
					alt="Dribble logo"
					className={classes.logo}
				/>
				<img
					src={hubspotLogo}
					alt="HubSpot logo"
					className={classes.logo}
				/>
				<img
					src={notionLogo}
					alt="Notion logo"
					className={classes.logo}
				/>
				<img
					src={netflixLogo}
					alt="Netflix logo"
					className={classes.logo}
				/>
				<img
					src={zoomLogo}
					alt="Zoom logo"
					className={classes.logo}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
