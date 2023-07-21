import bretagneFlag from '../../assets/Bretagne.png';
import logo from '../../assets/FooterLogo.png';
import figmaLogo from '../../assets/figmaIcon.png';
import framerLogo from '../../assets/framerIcon.png';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes['logo-wrapper']}>
				<img
					src={logo}
					alt="Logo"
					className={classes.logo}
				/>
			</div>
			<div className={classes.chip}>
				<span className={classes.text}>Cooked with love in </span>
				<span>
					<img
						src={bretagneFlag}
						alt="Bretagne Flag"
						className={classes.icon}
					/>
				</span>
				<span className={classes.text}> with </span>
				<span>
					<img
						src={figmaLogo}
						alt="Figma Logo"
						className={classes.icon}
					/>
				</span>
				<span className={classes.text}> & </span>
				<span>
					<img
						src={framerLogo}
						alt="Framer Logo"
						className={classes.icon}
					/>
				</span>
			</div>
			<p className={classes.copyright}>©kcstudio 2023</p>

			<a
				href="https://www.figma.com/community/file/1255560955410429196/KC-Studio-%E2%9C%A8-Portfolio-Template"
				target="_blank"
				className={classes.link}
			>
				DESIGN USED
			</a>
		</footer>
	);
};

export default Footer;
