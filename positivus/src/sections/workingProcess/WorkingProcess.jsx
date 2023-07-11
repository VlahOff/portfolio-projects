import Accordion from '../../components/accordion/Accordion';
import SectionHeader from '../../components/sectionHeader/SectionHeader';

import classes from './WorkingProcess.module.css';

const WorkingProcess = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Our Working Process"
				subTitle="Step-by-Step Guide to Achieving Your Business Goals"
			/>
			<div className={classes['accordion-container']}>
				<Accordion
					number="01"
					title="Consultation"
					description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
				/>
				<Accordion
					number="02"
					title="Research and Strategy Development"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus provident mollitia ea, sed culpa pariatur enim ipsam ducimus fugit debitis iste saepe corrupti obcaecati necessitatibus reiciendis, earum iusto vero."
				/>
				<Accordion
					number="03"
					title="Implementation"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus provident mollitia ea, sed culpa pariatur enim ipsam ducimus fugit debitis iste saepe corrupti obcaecati necessitatibus reiciendis, earum iusto vero."
				/>
				<Accordion
					number="04"
					title="Monitoring and Optimization"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus provident mollitia ea, sed culpa pariatur enim ipsam ducimus fugit debitis iste saepe corrupti obcaecati necessitatibus reiciendis, earum iusto vero."
				/>
				<Accordion
					number="05"
					title="Reporting and Communication"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus provident mollitia ea, sed culpa pariatur enim ipsam ducimus fugit debitis iste saepe corrupti obcaecati necessitatibus reiciendis, earum iusto vero."
				/>
				<Accordion
					number="06"
					title="Continual Improvement"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus provident mollitia ea, sed culpa pariatur enim ipsam ducimus fugit debitis iste saepe corrupti obcaecati necessitatibus reiciendis, earum iusto vero."
				/>
			</div>
		</section>
	);
};

export default WorkingProcess;
