import classes from './AboutCard.module.css';

const AboutCard = ({ image, title, description, isReversed }) => {
	return (
		<article
			className={`${classes.card} ${isReversed && classes['card-revers']}`}
		>
			<img
				src={image}
				alt="Avatar image"
				className={classes.avatar}
			/>
			<div className={classes['right-part']}>
				<h4 className={classes['card-title']}>About</h4>
				<h2 className={classes.title}>{title}</h2>
				<p className={classes.description}>{description}</p>
				<button
					className={classes.btn}
					data="PLACE A BID"
				></button>
			</div>
		</article>
	);
};

export default AboutCard;
