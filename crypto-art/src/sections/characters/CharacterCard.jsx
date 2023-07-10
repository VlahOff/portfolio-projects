import classes from './CharacterCard.module.css';

const CharacterCard = ({ image, title, time, bidPrice }) => {
	return (
		<article className={classes.card}>
			<h2 className={classes.title}>{title}</h2>
			<main className={classes['image-wrapper']}>
				<img
					src={image}
					alt={`${title} image`}
					className={classes.image}
				/>
			</main>
			<footer className={classes.footer}>
				<div className={classes['time-wrapper']}>
					<p className={classes.time}>{time}</p>
					<p className={classes['time-info']}>Remaining Time</p>
				</div>
				<div className={classes['price-wrapper']}>
					<p className={classes.price}>{bidPrice}</p>
					<p className={classes['price-info']}>Highest bid</p>
				</div>
			</footer>
		</article>
	);
};

export default CharacterCard;
