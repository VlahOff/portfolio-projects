import arrow from '../../assets/BubbleArrow.png';

import classes from './TestimonialCard.module.css';

const TestimonialCard = ({ description, name, title }) => {
	return (
		<article className={classes.card}>
			<div className={classes['description-wrapper']}>
				<p className={classes.description}>{description}</p>
			</div>
			<img
				src={arrow}
				alt="bubble arrow"
				className={classes.arrow}
			/>
			<div className={classes['title-wrapper']}>
				<h3 className={classes.name}>{name}</h3>
				<p className={classes.title}>{title}</p>
			</div>
		</article>
	);
};

export default TestimonialCard;
