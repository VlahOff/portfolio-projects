import { useState } from 'react';
import plusIcon from '../../assets/Plus.svg';

import classes from './FaqDropdown.module.css';

const FaqDropdown = ({ title, description }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(s => !s);
	};

	return (
		<article className={classes.card}>
			<header className={classes.header}>
				<h3 className={classes.title}>{title}</h3>
				<button
					onClick={toggleIsOpen}
					className={classes.btn}
				>
					<img
						src={plusIcon}
						alt="Plus icon"
						className={`${classes['plus-icon']} ${isOpen ? classes.rotate : classes['rotate-back']}`}
					/>
				</button>
			</header>
			{isOpen && (
				<div className={classes.description}>
					<p className={classes.text}>{description}</p>
				</div>
			)}
		</article>
	);
};

export default FaqDropdown;
