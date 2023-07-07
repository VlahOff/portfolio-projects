import logo from '../../assets/logo.svg';
import classes from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.contacts}>
				<img
					src={logo}
					alt="Logo"
					className={classes['site-logo']}
				/>
				<a href="#">
					<i className={`fa-brands fa-twitter fa-xl ${classes.logo}`}></i>
				</a>
				<a href="#">
					<i className={`fa-brands fa-linkedin fa-xl ${classes.logo}`}></i>
				</a>
				<a href="#">
					<i className={`fa-brands fa-dribbble fa-xl ${classes.logo}`}></i>
				</a>
				<a href="#">
					<i className={`fa-brands fa-figma fa-xl ${classes.logo}`}></i>
				</a>
			</div>
			<div className={classes.links}>
				<a
					href="#"
					className={classes.link}
				>
					Works
				</a>
				<a
					href="#"
					className={classes.link}
				>
					Experiences
				</a>
				<a
					href="#"
					className={classes.link}
				>
					Services
				</a>
				<a
					href="#"
					className={classes.email}
				>
					contact@kc.studio
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
