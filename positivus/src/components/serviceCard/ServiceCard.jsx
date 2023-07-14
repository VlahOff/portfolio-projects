import Link from '../link/Link';

import classes from './ServiceCard.module.css';

const ServiceCard = ({ firstTitle, secondTitle, image, link, colorScheme }) => {
	let colorsClass;
	let linkType;
	switch (colorScheme) {
		case 'gray-green':
			colorsClass = 'gray-green';
			linkType = 'black-green';
			break;
		case 'green-white':
			colorsClass = 'green-white';
			linkType = 'black-green';
			break;
		case 'black-white':
			colorsClass = 'black-white';
			linkType = 'white-black';
			break;
		case 'black-green':
			colorsClass = 'black-green';
			linkType = 'white-black';
			break;

		default:
			colorsClass = 'gray-green';
			linkType = 'black-green';
			break;
	}

	return (
		<article className={`${classes.card} ${classes[colorsClass]}`}>
			<div className={classes.titles}>
				<h3 className={classes.title}>{firstTitle}</h3>
				<h3 className={classes.title}>{secondTitle}</h3>
			</div>
			<Link
				title="Learn more"
				link={link}
				colorType={linkType}
				className={classes.link}
			/>
			<img
				src={image}
				alt={firstTitle + secondTitle}
				className={classes.img}
			/>
		</article>
	);
};

export default ServiceCard;
