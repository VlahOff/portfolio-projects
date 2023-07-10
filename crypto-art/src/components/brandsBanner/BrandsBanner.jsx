import classes from './BrandsBanner.module.css';
import webflowLogo from '../../assets/webflowLogo.svg';
import relumeLogo from '../../assets/relumeLogo.svg';

const BrandsBanner = () => {
	return (
		<div className={classes.banner}>
			<img
				src={webflowLogo}
				alt="Webflow logo"
				className={classes.brand}
			/>
			<img
				src={relumeLogo}
				alt="Relume logo"
				className={classes.brand}
			/>
			<img
				src={webflowLogo}
				alt="Webflow logo"
				className={classes.brand}
			/>
			<img
				src={relumeLogo}
				alt="Relume logo"
				className={classes.brand}
			/>
			<img
				src={webflowLogo}
				alt="Webflow logo"
				className={classes.brand}
			/>
			<img
				src={relumeLogo}
				alt="Relume logo"
				className={classes.brand}
			/>
			<img
				src={webflowLogo}
				alt="Webflow logo"
				className={classes.brand}
			/>
		</div>
	);
};

export default BrandsBanner;
