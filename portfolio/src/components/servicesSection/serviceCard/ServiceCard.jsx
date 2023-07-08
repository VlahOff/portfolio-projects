import classes from './ServiceCard.module.css';

const ServiceCard = ({ image, title, subTitle }) => {
	return (
		<article className={classes.card}>
			<div className={classes['img-wrapper']}>
				<img
					src={image}
					alt={title}
					className={classes.img}
				/>
			</div>
			<div className={classes['titles-wrapper']}>
				<h3 className={classes.title}>{title}</h3>
				<p className={classes['sub-title']}>{subTitle}</p>
			</div>
		</article>
	);
};

export default ServiceCard;
