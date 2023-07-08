import ExperienceCard from './ExperienceCard';
import pukkaioLogo from '../../assets/PukkaioMidLogo.png';
import strapiLogo from '../../assets/StrapjsMidLogo.png';
import kcStudioLogo from '../../assets/KcstudioMidLogo.png';
import sushioLogo from '../../assets/SushioMidLogo.png';
import classes from './ExperienceSection.module.css';

const ExperienceSection = () => {
	return (
		<section className={classes['experience-section']}>
			//TODO: Change to glowing title comp
			<div className={classes['main-title-wrapper']}>
				<h2 className={classes['main-title']}>12+ YEARS XP</h2>
				<div className={classes['main-title-background']}></div>
			</div>
			<div className={classes['titles-wrapper']}>
				<h4 className={classes.title}>From Saas to Website & Mobile</h4>
				<p className={classes['sub-title']}>
					I've had the opportunity to work across all kinds of product
				</p>
			</div>
			<div className={classes['cards-wrapper']}>
				<ExperienceCard
					period="2012 - 2014"
					logo={sushioLogo}
					title="Product Designer"
					at="@Sushio"
					country="🇺🇸"
				/>
				<ExperienceCard
					period="2014 - 2017"
					logo={kcStudioLogo}
					title="Freelance"
					at="@Kcstudio"
					country="🇫🇷"
				/>
				<ExperienceCard
					period="2017 - 2019"
					logo={pukkaioLogo}
					title="Co-founder"
					at="@Pukka.io"
					country="🇫🇷"
				/>
				<ExperienceCard
					period="2020 - 2022"
					logo={strapiLogo}
					title="Lead Designer"
					at="@Strapijs"
					country="🇫🇷"
				/>
				<ExperienceCard
					period="2022 - 2024"
					logo={kcStudioLogo}
					title="Senior Freelance"
					at="Kcstudio"
					country="🇫🇷"
				/>
			</div>
		</section>
	);
};

export default ExperienceSection;
