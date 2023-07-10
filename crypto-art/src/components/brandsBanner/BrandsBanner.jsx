import relumeLogo from '../../assets/relumeLogo.svg';
import webflowLogo from '../../assets/webflowLogo.svg';

import classes from './BrandsBanner.module.css';

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
