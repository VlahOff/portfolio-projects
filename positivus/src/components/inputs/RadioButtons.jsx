import classes from './RadioButtons.module.css';

const RadioButtons = ({ buttons, onChange, value, id, className }) => {
	return (
		<div className={`${classes['buttons-container']} ${className}`}>
			{buttons.map(b => {
				return (
					<div
						className={classes['btn-wrapper']}
						key={b.value}
					>
						<label
							htmlFor={b.id}
							className={classes.label}
						>
							<input
								type="radio"
								name={b.label}
								id={id}
								value={b.value}
								checked={value === b.value}
								onChange={onChange}
								className={classes.input}
							/>
							{b.label}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default RadioButtons;
