import logo from '../../assets/cryptoArtLogo.svg';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes['logo-wrapper']}>
				<img
					src={logo}
					alt=""
					className={classes.logo}
				/>
				<h2 className={classes['logo-text']}>Cryptoart</h2>
			</div>
			<p className={classes.copyright}>
				© 2023{' '}
				<a
					href="https://twitter.com/nahlourencao"
					className={classes['designer-link']}
				>
					Nathalia Lourencao
				</a>{' '}
				| Made with ❤️
			</p>
			<div className={classes['design-link']}>
				<a
					href="https://www.figma.com/community/file/1257062858453316868"
					className={classes.link}
				>
					DESIGN USED
				</a>
			</div>
		</footer>
	);
};

export default Footer;
