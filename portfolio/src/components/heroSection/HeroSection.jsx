import classes from './HeroSection.module.css';
import avatar from '../../assets/avatar.png';
import heroBackground from '../../assets/hero-background.png';

const HeroSection = () => {
	return (
		<section className={classes.hero}>
			<img
				src={heroBackground}
				alt="Hero background"
				className={classes['hero-background']}
			/>
			<h1 className={classes.introduction}>I'm Kevin</h1>
			<div className={classes['avatar-wrapper']}>
				<img
					src={avatar}
					alt="Avatar"
				/>
				<p className={classes['avatar-emoji']}>👋</p>
			</div>
			//TODO: Change to glowing title comp
			<div className={classes['title-wrapper']}>
				<h2 className={classes.title}>SENIOR FREELANCE DESIGNER</h2>
				<div className={classes['title-background']}></div>
			</div>
		</section>
	);
};

export default HeroSection;
