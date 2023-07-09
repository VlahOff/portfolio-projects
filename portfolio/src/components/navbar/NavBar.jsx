import logo from '../../assets/logo.svg';

import classes from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes['left-nav']}>
				<img
					src={logo}
					alt="Logo"
					className={classes['site-logo']}
				/>
				<a
					href="#"
					className={classes['social-link']}
				>
					<i className={`fa-brands fa-twitter fa-xl ${classes.logo}`}></i>
				</a>
				<a
					href="#"
					className={classes['social-link']}
				>
					<i className={`fa-brands fa-linkedin fa-xl ${classes.logo}`}></i>
				</a>
				<a
					href="#"
					className={classes['social-link']}
				>
					<i className={`fa-brands fa-dribbble fa-xl ${classes.logo}`}></i>
				</a>
				<a
					href="#"
					className={classes['social-link']}
				>
					<i className={`fa-brands fa-figma fa-xl ${classes.logo}`}></i>
				</a>
			</div>
			<div className={classes['right-nav']}>
				<a
					href="#works"
					className={classes.link}
				>
					Works
				</a>
				<a
					href="#experience"
					className={classes.link}
				>
					Experiences
				</a>
				<a
					href="#services"
					className={classes.link}
				>
					Services
				</a>
				<a
					href="#contact"
					className={classes.email}
				>
					contact@kc.studio
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
