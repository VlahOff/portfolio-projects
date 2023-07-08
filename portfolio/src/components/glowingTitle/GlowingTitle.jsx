import classes from './GlowingTitle.module.css';

const GlowingTitle = ({ title, className }) => {
	return (
		<div className={`${classes.wrapper} ${className}`}>
			<h1 className={classes.title}>{title}</h1>
			<div className={classes.background}></div>
		</div>
	);
};

export default GlowingTitle;
