import Flickity from 'react-flickity-component';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import TestimonialCard from '../../components/testimonialCard/TestimonialCard';

import classes from './Testimonials.module.css';
import './flickety.css';


const testimonials = [
	{
		id: 't1',
		name: 'John Smith',
		title: 'Marketing Director at XYZ Corp',
		description:
			'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
	},
	{
		id: 't2',
		name: 'John Smith',
		title: 'Marketing Director at XYZ Corp',
		description:
			'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
	},
	{
		id: 't3',
		name: 'John Smith',
		title: 'Marketing Director at XYZ Corp',
		description:
			'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
	},
	{
		id: 't4',
		name: 'John Smith',
		title: 'Marketing Director at XYZ Corp',
		description:
			'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
	},
];

const Testimonials = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Testimonials"
				subTitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
				className={classes.header}
			/>
			<div className={classes.card}>
				<Flickity
					className={classes.flickity}
					options={{
						pageDots: true,
						adaptiveHeight: true,
					}}
				>
					{testimonials.map(t => {
						return (
							<TestimonialCard
								name={t.name}
								title={t.title}
								description={t.description}
								key={t.id}
							/>
						);
					})}
				</Flickity>
			</div>
		</section>
	);
};

export default Testimonials;
