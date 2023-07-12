import CardWithBorder from '../cardWithBorder/CardWithBorder';

import linkedInIcon from '../../assets/linkedinIcon.svg';
import profileFrame from '../../assets/profileFrame.svg';

import classes from './MemberCard.module.css';

const MemberCard = ({ profilePic, name, title, link, bio }) => {
	return (
		<CardWithBorder className={classes.card}>
			<header className={classes.header}>
				<div className={classes['profile-wrapper']}>
					<img
						src={profileFrame}
						alt="Profile frame"
						className={classes.frame}
					/>
					<img
						src={profilePic}
						alt="Team member picture "
						className={classes.avatar}
					/>
				</div>
				<div className={classes['title-wrapper']}>
					<h4 className={classes.name}>{name}</h4>
					<p className={classes.title}>{title}</p>
				</div>
				<a
					href={link}
					className={classes.social}
				>
					<img
						src={linkedInIcon}
						alt="Linked logo"
					/>
				</a>
			</header>
			<div className={classes.divider}></div>
			<main className={classes.main}>
				<p className={classes.bio}>{bio}</p>
			</main>
		</CardWithBorder>
	);
};

export default MemberCard;
