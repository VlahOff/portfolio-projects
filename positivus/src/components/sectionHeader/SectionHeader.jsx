import classes from './SectionHeader.module.css';

const SectionHeader = ({ title, subTitle, className }) => {
	return (
		<header className={`${classes.header} ${className}`}>
			<h2 className={classes.title}>{title}</h2>
			<p className={classes['sub-title']}>{subTitle}</p>
		</header>
	);
};

export default SectionHeader;
