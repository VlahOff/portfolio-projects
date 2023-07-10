import logo from '../../assets/cryptoArtLogo.svg';

import classes from './Footer.module.css';

const Footer = () => {
	return (

		<div className={classes.footer}>
			<div className={classes['logo-wrapper']}>
				<img
					src={logo}
					alt=""
					className={classes.logo}
				/>
				<h2 className={classes['logo-text']}>Cryptoart</h2>
			</div>
			<p className={classes.copyright}>
				© 2023 <a href="https://twitter.com/nahlourencao" className={classes['designer-link']} >Nathalia Lourencao</a>{' '}
				| Made with ❤️
			</p>
		</div>
	);
};

export default Footer;