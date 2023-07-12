import { useEffect, useRef, useState } from 'react';

import CardWithBorder from '../cardWithBorder/CardWithBorder';

import minusIcon from '../../assets/Minus icon.svg';
import plusIcon from '../../assets/Plus icon.svg';

import classes from './Accordion.module.css';

const Accordion = ({ number, title, description }) => {
	const card = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [containerHeight, setContainerHeight] = useState(0);

	useEffect(() => {
		setContainerHeight(card.current.scrollHeight);
	}, []);

	const toggleCard = () => {
		setIsOpen(s => !s);
	};

	return (
		<CardWithBorder className={`${classes.card} ${isOpen && classes.active}`}>
			<header className={classes.header}>
				<div className={classes['title-wrapper']}>
					<p className={classes.number}>{number}</p>
					<h2 className={classes.title}>{title}</h2>
				</div>
				<div
					className={classes['btn-wrapper']}
					onClick={toggleCard}
				>
					<img
						src={isOpen ? minusIcon : plusIcon}
						alt=""
						className={classes.icon}
					/>
				</div>
			</header>
			<div
				className={classes.line}
				style={{ display: isOpen ? 'block' : 'none' }}
			></div>
			<main
				ref={card}
				className={classes.main}
				style={{ maxHeight: isOpen ? containerHeight : 0 }}
			>
				<p className={classes.description}>{description}</p>
			</main>
		</CardWithBorder>
	);
};

export default Accordion;
