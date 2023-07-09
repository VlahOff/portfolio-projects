import GlowingTitle from '../../components/glowingTitle/GlowingTitle';

import avatar from '../../assets/ContactAvatar.png';
import pencilImage from '../../assets/pencil.svg';

import classes from './ContactSection.module.css';

const ContactSection = () => {
	return (
		<section className={classes.section} id='contact'>
			<GlowingTitle
				title="CONTACT"
				className={classes['glow-title']}
			/>
			<article className={classes.card}>
				<header className={classes.header}>
					<div className={classes['avatar-wrapper']}>
						<img
							src={avatar}
							alt="Avatar"
							className={classes.avatar}
						/>
					</div>
					<div className={classes['status-chip']}>
						<div className={classes.icon}></div>
						<p className={classes.status}>Available for work</p>
					</div>
				</header>
				<main className={classes.main}>
					<div className={classes['description-wrapper']}>
						<h4 className={classes.title}>
							Drop me a line or say 👋 on social networks
						</h4>
						<p className={classes.description}>
							Whether you're a design team in need of support or an early-stage
							company looking to level up your design, I'd love to talk about
							your project 💜
						</p>
					</div>
					<div className={classes['links-wrapper']}>
						<div className={classes.links}>
							<a href="#">
								<i className={`fa-brands fa-twitter fa-xl ${classes.link}`}></i>
							</a>
							<a href="#">
								<i
									className={`fa-brands fa-linkedin fa-xl ${classes.link}`}
								></i>
							</a>
							<a href="#">
								<i
									className={`fa-brands fa-dribbble fa-xl ${classes.link}`}
								></i>
							</a>
							<a href="#">
								<i className={`fa-brands fa-figma fa-xl ${classes.link}`}></i>
							</a>
						</div>
						<button className={classes.button}>
							<p>Let's create magic together ✨</p>
						</button>
					</div>
				</main>
				<img
					src={pencilImage}
					alt="Fountain pen image"
					className={classes.pen}
				/>
			</article>
		</section>
	);
};

export default ContactSection;
