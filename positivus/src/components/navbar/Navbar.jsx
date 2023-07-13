import Button from '../button/Button';

import logo from '../../assets/LogoBlack.svg';

import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
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
		</nav>
	);
};

export default Navbar;
