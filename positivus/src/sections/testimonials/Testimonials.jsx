import SectionHeader from '../../components/sectionHeader/SectionHeader';
import TestimonialCard from '../../components/testimonialCard/TestimonialCard';

import leftArrow from '../../assets/Arrow left.svg';
import rightArrow from '../../assets/Arrow right.svg';
import navigationIndication from '../../assets/Navigation stars.svg';

import classes from './Testimonials.module.css';

const Testimonials = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Testimonials"
				subTitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
				className={classes.header}
			/>
			<div className={classes.card}>
				<div className={classes['testimonials-container']}>
					<TestimonialCard
						description="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
						name="John Smith"
						title="Marketing Director at XYZ Corp"
					/>
					<TestimonialCard
						description="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
						name="John Smith"
						title="Marketing Director at XYZ Corp"
					/>
					<TestimonialCard
						description="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
						name="John Smith"
						title="Marketing Director at XYZ Corp"
					/>
				</div>
				<div className={classes.navigation}>
					<img
						src={leftArrow}
						alt="left arrow"
					/>
					<img
						src={navigationIndication}
						alt="navigation indicator"
					/>
					<img
						src={rightArrow}
						alt="right arrow"
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
