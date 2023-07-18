import classes from './RadioButtons.module.css';

const RadioButtons = ({ buttons, onChange, value, className }) => {
	return (
		<div className={`${classes['buttons-container']} ${className}`}>
			{buttons.map(b => {
				return (
					<div
						className={classes['btn-wrapper']}
						key={b.value}
					>
						<input
							type="radio"
							name={b.label}
							id={b.value}
							value={b.value}
							checked={value === b.value}
							onChange={onChange}
							className={classes.input}
						/>
						<label
							className={classes.label}
							htmlFor={b.value}
						>
							<span className={classes.circle}></span>
							<span className={classes.dot}></span>
							{b.label}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default RadioButtons;
