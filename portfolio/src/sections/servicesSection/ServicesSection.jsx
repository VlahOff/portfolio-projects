import GlowingTitle from '../../components/glowingTitle/GlowingTitle';
import ServiceCard from './serviceCard/ServiceCard';
import ServiceChip from './serviceChip/ServiceChip';

import serviceIcon1 from '../../assets/ServicesIcons1.png';
import serviceIcon2 from '../../assets/ServicesIcons2.png';
import serviceIcon3 from '../../assets/ServicesIcons3.svg';
import serviceIcon4 from '../../assets/ServicesIcons4.svg';
import illustratorIcon from '../../assets/aiIcon.png';
import figmaIcon from '../../assets/figmaIcon.png';
import framerIcon from '../../assets/framerIcon.png';
import notionIcon from '../../assets/notionIcon.png';
import photoshopIcon from '../../assets/psIcon.png';
import sketchIcon from '../../assets/sketchIcon.png';
import slackIcon from '../../assets/slackIcon.png';
import trashIcon from '../../assets/trashIcon.png';

import classes from './ServicesSection.module.css';

const ServicesSection = () => {
	return (
		<section className={classes['services-section']}>
			<GlowingTitle title="SERVICES" />
			<div className={classes['chips-container']}>
				<ServiceChip title="Design System" />
				<ServiceChip title="Product" />
				<ServiceChip title="Website" />
				<ServiceChip title="Branding" />
				<ServiceChip title="Logo Design" />
			</div>
			<h4 className={classes.title}>
				Product, Website or Brand Design, I've got you covered!
			</h4>
			<p className={classes['sub-title']}>
				Let's elevate your vision and achieve your design goals together!
			</p>
			<div className={classes['card-container']}>
				<ServiceCard
					title="Design System Expert"
					subTitle="Creation / Edition or Audit of your DS"
					image={serviceIcon1}
				/>
				<ServiceCard
					title="UX & UI Design"
					subTitle="Creation / Edition or Audit of your DS"
					image={serviceIcon2}
				/>
				<ServiceCard
					title="Brand Design"
					subTitle="Creation / Edition or Audit of your DS"
					image={serviceIcon3}
				/>
				<ServiceCard
					title="Brand Design"
					subTitle="Creation / Edition or Audit of your DS"
					image={serviceIcon4}
				/>
			</div>
			<div className={classes.dock}>
				<img
					src={slackIcon}
					alt="Slack Icon"
					className={classes.icon}
				/>
				<img
					src={notionIcon}
					alt="Notion Icon"
					className={classes.icon}
				/>
				<img
					src={photoshopIcon}
					alt="Photoshop Icon"
					className={classes.icon}
				/>
				<img
					src={illustratorIcon}
					alt="Illustrator Icon"
					className={classes.icon}
				/>
				<img
					src={sketchIcon}
					alt="Sketch Icon"
					className={classes.icon}
				/>
				<img
					src={figmaIcon}
					alt="Figma Icon"
					className={classes.icon}
				/>
				<img
					src={framerIcon}
					alt="Framer Icon"
					className={classes.icon}
				/>
				<div className={classes.separator}></div>
				<img
					src={trashIcon}
					alt="Trash bin icon"
					className={classes.icon}
				/>
			</div>
		</section>
	);
};

export default ServicesSection;
