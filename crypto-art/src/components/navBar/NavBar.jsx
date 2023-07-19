import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

import githubLogo from '../../assets/GitHub Logo.svg';
import instagramLogo from '../../assets/Instagram Logo.svg';
import twitterLogo from '../../assets/Twitter Logo.svg';
import cryptoArtLogo from '../../assets/cryptoArtLogo.svg';

import classes from './NavBar.module.css';

const NavBar = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY >= 200) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
	}, []);

	return (
		<nav className={`${classes.navigation} ${isSticky && classes.sticky}`}>
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
			<ul
				className={`${classes['center-nav']} ${isOpen && classes['menu-links-open']}`}
			>
				<li>
					<a
						href="#home"
						className={classes.link}
					>
						HOME
					</a>
				</li>
				<li>
					<a
						href="#about"
						className={classes.link}
					>
						ABOUT
					</a>
				</li>
				<li>
					<a
						href="#characters"
						className={classes.link}
					>
						CHARACTERS
					</a>
				</li>
				<li>
					<a
						href="#faq"
						className={classes.link}
					>
						FAQ
					</a>
				</li>
				<li>
					<a
						href="#community"
						className={classes.link}
					>
						COMMUNITY
					</a>
				</li>
			</ul>
			<div
				className={`${classes['right-nav']} ${isOpen && classes['menu-social-open']}`}
			>
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
			<div className={classes['menu-btn']}>
				<Hamburger
					color="#fff"
					toggle={setIsOpen}
					toggled={isOpen}
				/>
			</div>
		</nav>
	);
};

export default NavBar;
