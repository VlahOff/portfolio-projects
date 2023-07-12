import Button from '../../components/button/Button';
import MemberCard from '../../components/memberCard/MemberCard';
import SectionHeader from '../../components/sectionHeader/SectionHeader';

import member6 from '../../assets/alexandra-gorn-smuS_jUZa9I-unsplash 1.png';
import member5 from '../../assets/chanvre-quebec-mXu1SpzHq6w-unsplash 1.png';
import member3 from '../../assets/christian-buehner-DItYlc26zVI-unsplash 1.png';
import member4 from '../../assets/feli-ramsanjami-agung-wUe_Q-t4-cI-unsplash 1.png';
import member1 from '../../assets/ian-dooley-d1UPkiFd04A-unsplash 1.png';
import member2 from '../../assets/suad-kamardeen-khewjy5l4Zo-unsplash 2.png';

import classes from './TeamSection.module.css';

const TeamSection = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Team"
				subTitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
				className={classes.header}
			/>
			<main className={classes['team-container']}>
				<MemberCard
					name="John Smith"
					title="CEO and Founder"
					bio="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
					link="#"
					profilePic={member1}
				/>
				<MemberCard
					name="Jane Doe"
					title="Director of Operations"
					bio="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
					link="#"
					profilePic={member2}
				/>
				<MemberCard
					name="Michael Brown"
					title="Senior SEO Specialist"
					bio="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
					link="#"
					profilePic={member3}
				/>
				<MemberCard
					name="Emily Johnson"
					title="PPC Manager"
					bio="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
					link="#"
					profilePic={member4}
				/>
				<MemberCard
					name="Brian Williams"
					title="Social Media Specialist"
					bio="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
					link="#"
					profilePic={member5}
				/>
				<MemberCard
					name="Sarah Kim"
					title="Content Creator"
					bio="2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
					link="#"
					profilePic={member6}
				/>
			</main>
			<footer className={classes.footer}>
				<Button btnType="fill" className={classes.btn}>See all team</Button>
			</footer>
		</section>
	);
};

export default TeamSection;
