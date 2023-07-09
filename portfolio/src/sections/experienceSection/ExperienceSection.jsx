import GlowingTitle from '../../components/glowingTitle/GlowingTitle';
import ExperienceCard from './ExperienceCard';

import kcStudioLogo from '../../assets/KcstudioMidLogo.png';
import pukkaioLogo from '../../assets/PukkaioMidLogo.png';
import strapiLogo from '../../assets/StrapjsMidLogo.png';
import sushioLogo from '../../assets/SushioMidLogo.png';

import classes from './ExperienceSection.module.css';

const ExperienceSection = () => {
	return (
		<section className={classes['experience-section']} id='experience'>
			<GlowingTitle title="12+ YEARS XP" />
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
