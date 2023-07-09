import classes from './ExperienceCard.module.css';

const ExperienceCard = ({ period, logo, title, at, country }) => {
	return (
		<div className={classes.card}>
			<p className={classes.period}>{period}</p>
			<div className={classes['logo-wrapper']}>
				<img
					src={logo}
					alt="Firm Logo"
					className={classes.logo}
				/>
			</div>
			<h2 className={classes.title}>{title}</h2>
			<p className={classes.at}>{at}</p>
			<p className={classes.country}>{country}</p>
		</div>
	);
};

export default ExperienceCard;
