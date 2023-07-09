import checkMark from '../../../assets/checkMark.png';
import classes from './ServiceChip.module.css';

const ServiceChip = ({ title }) => {
	return (
		<div className={classes.chip}>
			<img
				src={checkMark}
				alt="Check mark"
				className={classes['check-mark']}
			/>
			<p className={classes.title}>{title}</p>
		</div>
	);
};

export default ServiceChip;
