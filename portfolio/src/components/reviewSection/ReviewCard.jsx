import classes from './ReviewCard.module.css';
import linkedinLogo from '../../assets/linkedin logo.png';
import decorationLines from '../../assets/decorationLines.svg';

const ReviewCard = ({ avatar, companyLogo, name, title, at, review }) => {
	return (
		<article className={classes['review-card']}>
			<div className={classes['avatar-wrapper']}>
				<img
					src={avatar}
					alt="Avatar of review"
					className={classes.avatar}
				/>
			</div>
			<div className={classes['company-logo-wrapper']}>
				<img
					src={companyLogo}
					alt="Company Logo"
					className={classes['company-logo']}
				/>
			</div>
			<h2 className={classes.name}>{name}</h2>
			<h4 className={classes.title}>
				{title}
				<p className={classes.at}>{at}</p>
			</h4>
			<p className={classes.review}>{review}</p>
			<a
				href="#"
				className={classes.link}
			>
				<img
					src={linkedinLogo}
					alt="LinkedIn Logo"
				/>
				<p>Review</p>
			</a>
			<img
				src={decorationLines}
				alt="background for card"
				className={classes['card-background']}
			/>
		</article>
	);
};

export default ReviewCard;
