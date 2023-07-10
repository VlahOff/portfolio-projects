import monkey3 from '../../assets/Group 63.png';
import monkey4 from '../../assets/Group 64.png';
import monkey2 from '../../assets/Group 65.png';
import monkey1 from '../../assets/Group 66.png';
import monkey5 from '../../assets/Group 67.png';
import twitterIcon from '../../assets/Twitter Logo.svg';
import ethIcon from '../../assets/ethLogo.svg';
import discordIcon from '../../assets/icon-discord.svg';
import vectorBackground from '../../assets/vectors.svg';

import classes from './JoinSection.module.css';

const JoinSection = () => {
	return (
		<section
			className={classes.section}
			id="community"
		>
			<header className={classes.header}>
				<img
					src={ethIcon}
					alt="Eth logo"
					className={classes.logo}
				/>
				<h2 className={classes.title}>Join the community</h2>
				<p className={classes['sub-title']}>
					Join our Discord channel or follow us on Twitter keep up to date with
					our latest work and announcements.
				</p>
			</header>
			<div className={classes['characters-wrapper']}>
				<img
					src={monkey1}
					alt="NTF character"
					className={classes.character}
				/>
				<img
					src={monkey2}
					alt="NTF character"
					className={classes.character}
				/>
				<img
					src={monkey3}
					alt="NTF character"
					className={classes.character}
				/>
				<img
					src={monkey4}
					alt="NTF character"
					className={classes.character}
				/>
				<img
					src={monkey5}
					alt="NTF character"
					className={classes.character}
				/>
			</div>
			<div className={classes['links-wrapper']}>
				<a
					href="#"
					className={`${classes.link} ${classes.discord}`}
				>
					<img
						src={discordIcon}
						alt="Discord logo"
						className={classes['link-logo']}
					/>
					<span>JOIN DISCORD</span>
				</a>
				<a
					href="#"
					className={`${classes.link} ${classes.twitter}`}
				>
					<img
						src={twitterIcon}
						alt="Twitter logo"
						className={classes['link-logo']}
					/>
					<span>FOLLOW TWITTER</span>
				</a>
			</div>
			<img
				src={vectorBackground}
				alt="Vector background"
				className={classes['background-vector']}
			/>
		</section>
	);
};

export default JoinSection;
