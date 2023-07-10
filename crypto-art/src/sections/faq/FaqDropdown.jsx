import plusIcon from '../../assets/Plus.svg';
import classes from './FaqDropdown.module.css';

const FaqDropdown = ({ title, description }) => {
	return (
		<article className={classes.card}>
			<header className={classes.header}>
				<h3 className={classes.title}>{title}</h3>
				<img
					src={plusIcon}
					alt="Plus icon"
					className={classes['plus-icon']}
				/>
			</header>
		</article>
	);
};

export default FaqDropdown;
