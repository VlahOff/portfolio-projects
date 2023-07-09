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
				<div className={'logo-wrapper'}>
					<img
						src={logo}
						alt={subtitle}
					/>
				</div>
				<div className={classes['titles-wrapper']}>
					<h3 className={classes.title}>{title}</h3>
					<p className={classes['sub-title']}>{subtitle}</p>
				</div>
			</footer>
		</article>
	);
};

export default WorksCard;
