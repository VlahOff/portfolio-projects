import classes from './Input.module.css';

const Input = ({
	className,
	type,
	id,
	label,
	onChange,
	onBlur,
	value,
	disabled,
	error,
	errorMessage,
}) => {
	return (
		<div className={`${classes['input-wrapper']} ${className}`}>
			<label
				htmlFor={id}
				className={classes.label}
			>
				{label}
			</label>
			<input
				type={type || 'text'}
				name={id}
				id={id}
				placeholder={label}
				className={classes.input}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				disabled={disabled}
				autoComplete="off"
			/>
			{error === false && (
				<div className={classes['error-message']}>{errorMessage}</div>
			)}
		</div>
	);
};

export default Input;
