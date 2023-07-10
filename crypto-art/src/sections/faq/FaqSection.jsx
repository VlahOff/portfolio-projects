import FaqDropdown from './FaqDropdown';
import classes from './FaqSection.module.css';

const FaqSection = () => {
	return (
		<section className={classes.section}>
			<h2 className={classes['main-title']}>FAQ</h2>
			<h3 className={classes.title}>Your questions, answered.</h3>
			<div className={classes['faq-container']}>
				<FaqDropdown title="What is an NFT?" />
				<FaqDropdown title="What makes our NFT special?" />
				<FaqDropdown title="Who's the team behind our NFT?" />
				<FaqDropdown title="When does minting begin?" />
				<FaqDropdown title="Who can mint one?" />
			</div>
		</section>
	);
};

export default FaqSection;
