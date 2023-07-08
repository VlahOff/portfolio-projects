import classes from './ServicesSection.module.css';
import GlowingTitle from '../glowingTitle/GlowingTitle';

const ServicesSection = () => {
	return (
		<section className={classes['services-section']}>
			<GlowingTitle title="SERVICES" />
		</section>
	);
};

export default ServicesSection;
