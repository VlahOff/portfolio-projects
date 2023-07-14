import arrowBG from '../../assets/ArrowBlackGreen.svg';
import arrowBW from '../../assets/ArrowBlackWhite.svg';
import arrowGB from '../../assets/ArrowGreenBlack.svg';
import arrowGW from '../../assets/ArrowGreenWhite.svg';
import arrowWB from '../../assets/ArrowWhiteBlack.svg';
import arrowWG from '../../assets/ArrowWhiteGreen.svg';

import classes from './Link.module.css';

const Link = ({ link, title, colorType, className }) => {
	let color;
	let img;
	switch (colorType) {
		case 'black-green':
			color = 'black';
			img = arrowBG;
			break;
		case 'black-white':
			color = 'black';
			img = arrowBW;
			break;
		case 'green-black':
			color = 'black';
			img = arrowGB;
			break;
		case 'green-white':
			color = 'white';
			img = arrowGW;
			break;
		case 'white-black':
			color = 'white';
			img = arrowWB;
			break;
		case 'white-green':
			color = 'white';
			img = arrowWG;
			break;

		default:
			color = 'black';
			img = arrowBG;
			break;
	}

	return (
		<a
			href={link}
			className={`${classes.link} ${className}`}
		>
			<img
				src={img}
				alt={title}
			/>
			<span className={`${classes.span} ${classes[color]}`}>{title}</span>
		</a>
	);
};

export default Link;
