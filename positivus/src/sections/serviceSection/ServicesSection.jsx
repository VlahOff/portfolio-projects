import SectionHeader from '../../components/sectionHeader/SectionHeader';
import ServiceCard from '../../components/serviceCard/ServiceCard';

import img3 from '../../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import img1 from '../../assets/tokyo-magnifier-web-search-with-elements 2.png';
import img5 from '../../assets/tokyo-many-browser-windows-with-different-information 1.png';
import img2 from '../../assets/tokyo-selecting-a-value-in-the-browser-window 1.png';
import img4 from '../../assets/tokyo-sending-messages-from-one-place-to-another 1.png';
import img6 from '../../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';

import classes from './ServicesSection.module.css';

const ServicesSection = () => {
	return (
		<section className={classes['service-section']} id='services'>
			<SectionHeader
				title="Services"
				subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
				className={classes.header}
			/>
			<div className={classes['cards-container']}>
				<ServiceCard
					colorScheme="gray-green"
					firstTitle="Search engine"
					secondTitle="optimization"
					link="#"
					image={img1}
				/>
				<ServiceCard
					colorScheme="green-white"
					firstTitle="Pay-per-click"
					secondTitle="advertising"
					link="#"
					image={img2}
				/>
				<ServiceCard
					colorScheme="black-white"
					firstTitle="Social Media"
					secondTitle="Marketing"
					link="#"
					image={img3}
				/>
				<ServiceCard
					colorScheme="gray-green"
					firstTitle="Email"
					secondTitle="Marketing"
					link="#"
					image={img4}
				/>
				<ServiceCard
					colorScheme="green-white"
					firstTitle="Content"
					secondTitle="Creation"
					link="#"
					image={img5}
				/>
				<ServiceCard
					colorScheme="black-green"
					firstTitle="Analytics and"
					secondTitle="Tracking"
					link="#"
					image={img6}
				/>
			</div>
		</section>
	);
};

export default ServicesSection;
