import classes from './WorksCard.module.css';

const WorksCard = ({ image, logo, title, subtitle }) => {
	return (
		<article className={classes.card}>
			<div className={classes['image-wrapper']}>
				<img
					src={image}
					alt={title}
				/>
			</div>
			<footer className={classes.footer}>
				<img
					src={logo}
					alt={subtitle}
				/>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</footer>
		</article>
	);
};

export default WorksCard;
