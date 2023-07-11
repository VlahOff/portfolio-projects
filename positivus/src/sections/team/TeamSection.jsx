import SectionHeader from '../../components/sectionHeader/SectionHeader';
import classes from './TeamSection.module.css';

const TeamSection = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Team"
				subTitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
			/>
		</section>
	);
};

export default TeamSection;
