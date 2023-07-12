import classes from './Button.module.css';

const Button = ({ children, btnType, type, onClick, className }) => {
	let btnTypeClass;

	switch (btnType) {
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
			className={`${classes.btn} ${classes[btnTypeClass]} ${className}`}
			onClick={onClick}
			type={type || 'button'}
		>
			{children}
		</button>
	);
};

export default Button;
