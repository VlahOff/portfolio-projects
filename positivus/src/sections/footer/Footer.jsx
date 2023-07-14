import Button from '../../components/button/Button';

import logo from '../../assets/LogoWhite.svg';
import facebookIcon from '../../assets/facebookWhiteLogo.svg';
import linkedInIcon from '../../assets/linkedinWhiteIcon.svg';
import twitterIcon from '../../assets/twitterWhiteLogo.svg';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes['links-container']}>
				<img
					src={logo}
					alt="site logo"
					className={classes.logo}
				/>
				<ul className={classes.links}>
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
				</ul>
				<div className={classes.socials}>
					<a href="#">
						<img
							src={linkedInIcon}
							alt="LinkedIn icon"
							className={classes['social-icon']}
						/>
					</a>
					<a href="#">
						<img
							src={facebookIcon}
							alt="Facebook icon"
							className={classes['social-icon']}
						/>
					</a>
					<a href="#">
						<img
							src={twitterIcon}
							alt="Twitter icon"
							className={classes['social-icon']}
						/>
					</a>
				</div>
			</div>
			<div className={classes['contact-container']}>
				<div className={classes.contact}>
					<h4 className={classes.title}>Contact us:</h4>
					<p className={classes.info}>Email: info@positivus.com</p>
					<p className={classes.info}>Phone: 555-567-8901</p>
					<p className={classes.info}>
						Address: 1234 Main St Moonstone City, Stardust State 12345
					</p>
				</div>
				<div className={classes['news-subscription']}>
					<input
						type="text"
						placeholder="Email"
						className={classes.input}
					/>
					<Button
						btnType="green"
						className={classes.btn}
					>
						Subscribe to news
					</Button>
				</div>
			</div>
			<div className={classes['copyright-container']}>
				<p>© 2023 Positivus. All Rights Reserved.</p>
				<a href="#">Privacy Policy</a>
				<a
					href="https://www.figma.com/community/file/1230604708032389430"
					target="_blank"
					className={classes['design-link']}
				>
					<h2 className={classes.design}>DESIGN USED</h2>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
