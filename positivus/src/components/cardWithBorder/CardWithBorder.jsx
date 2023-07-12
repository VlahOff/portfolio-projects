import React from 'react';

import classes from './CardWithBorder.module.css';

const CardWithBorder = React.forwardRef(({ children, className }, ref) => {
	return (
		<article
			ref={ref}
			className={`${classes.card} ${className}`}
		>
			{children}
		</article>
	);
});

export default CardWithBorder;
