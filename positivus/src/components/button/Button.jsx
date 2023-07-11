import classes from './Button.module.css';

const Button = ({ children, type, onClick }) => {
	let btnTypeClass;

	switch (type) {
		case 'primary':
			btnTypeClass = 'fill';
			break;
		case 'outline':
			btnTypeClass = 'outline';
			break;
		case 'green':
			btnTypeClass = 'fill-green';
			break;

		default:
			btnTypeClass = 'fill';
			break;
	}

	return (
		<button
			className={`${classes.btn} ${classes[btnTypeClass]}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
