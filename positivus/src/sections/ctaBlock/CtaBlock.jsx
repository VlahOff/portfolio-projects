import Button from '../../components/button/Button';

import blockImage from '../../assets/BlockIllustration.png';
import classes from './CtaBlock.module.css';

const CtaBlock = () => {
	return (
		<div className={classes.block}>
			<div className={classes['left-part']}>
				<h3 className={classes.title}>Let’s make things happen</h3>
				<p className={classes.desc}>
					Contact us today to learn more about how our digital marketing
					services can help your business grow and succeed online.
				</p>
				<Button type="fill">Get your free proposal</Button>
			</div>
			<img
				src={blockImage}
				alt="block illustration"
			/>
		</div>
	);
};

export default CtaBlock;
