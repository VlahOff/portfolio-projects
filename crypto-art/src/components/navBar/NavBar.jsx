import githubLogo from '../../assets/GitHub Logo.svg';
import instagramLogo from '../../assets/Instagram Logo.svg';
import twitterLogo from '../../assets/Twitter Logo.svg';
import cryptoArtLogo from '../../assets/cryptoArtLogo.svg';

import classes from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={classes.navigation}>
			<div className={classes['left-nav']}>
				<div className={classes['logo-wrapper']}>
					<img
						src={cryptoArtLogo}
						alt="Crypto Art logo"
						className={classes.logo}
					/>
				</div>
				<p className={classes['logo-text']}>Cryptoart</p>
			</div>
			<ul className={classes['center-nav']}>
				<li>
					<a
						href=""
						className={classes.link}
					>
						HOME
					</a>
				</li>
				<li>
					<a
						href=""
						className={classes.link}
					>
						ABOUT
					</a>
				</li>
				<li>
					<a
						href=""
						className={classes.link}
					>
						CHARACTERS
					</a>
				</li>
				<li>
					<a
						href=""
						className={classes.link}
					>
						FAQ
					</a>
				</li>
				<li>
					<a
						href=""
						className={classes.link}
					>
						COMMUNITY
					</a>
				</li>
			</ul>
			<div className={classes['right-nav']}>
				<a
					href=""
					className={classes.link}
				>
					<img
						src={githubLogo}
						alt="Github Logo"
						className={classes.logo}
					/>
				</a>
				<a
					href=""
					className={classes.link}
				>
					<img
						src={twitterLogo}
						alt="Twitter Logo"
						className={classes.logo}
					/>
				</a>
				<a
					href=""
					className={classes.link}
				>
					<img
						src={instagramLogo}
						alt="Instagram Logo"
						className={classes.logo}
					/>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
