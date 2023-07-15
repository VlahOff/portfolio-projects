import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import Button from '../button/Button';

import logo from '../../assets/LogoBlack.svg';

import classes from './Navbar.module.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

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
		<nav className={`${classes.nav} ${isSticky && classes.sticky}`}>
			<div className={classes['logo-wrapper']}>
				<img
					src={logo}
					alt="Site logo"
					className={classes.logo}
				/>
			</div>
			<ul className={classes['right-part']}>
				<li>
					<a
						href="#"
						className={classes.link}
					>
						About us
					</a>
				</li>
				<li>
					<a
						href="#"
						className={classes.link}
					>
						Services
					</a>
				</li>
				<li>
					<a
						href="#"
						className={classes.link}
					>
						Use Cases
					</a>
				</li>
				<li>
					<a
						href="#"
						className={classes.link}
					>
						Pricing
					</a>
				</li>
				<li>
					<a
						href="#"
						className={classes.link}
					>
						Blog
					</a>
				</li>
				<li>
					<Button btnType="outline">Request a quote</Button>
				</li>
			</ul>
			<div className={classes['hamburger-menu']}>
				<Hamburger
					toggle={setIsOpen}
					toggled={isOpen}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
