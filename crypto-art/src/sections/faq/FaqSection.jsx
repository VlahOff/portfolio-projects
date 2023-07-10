/* eslint-disable quotes */
import { useState } from 'react';
import FaqDropdown from './FaqDropdown';

import classes from './FaqSection.module.css';

const faqList = [
	{
		id: 1,
		title: 'What is an NFT?',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus vel incidunt dicta molestias quod, fuga, qui recusandae laborum ullam rerum ducimus inventore blanditiis? Distinctio inventore iste iusto corrupti a.',
	},
	{
		id: 2,
		title: 'What makes our NFT special?',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus vel incidunt dicta molestias quod, fuga, qui recusandae laborum ullam rerum ducimus inventore blanditiis? Distinctio inventore iste iusto corrupti a.',
	},
	{
		id: 3,
		title: "Who's the team behind our NFT?",
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus vel incidunt dicta molestias quod, fuga, qui recusandae laborum ullam rerum ducimus inventore blanditiis? Distinctio inventore iste iusto corrupti a.',
	},
	{
		id: 4,
		title: 'When does minting begin?',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus vel incidunt dicta molestias quod, fuga, qui recusandae laborum ullam rerum ducimus inventore blanditiis? Distinctio inventore iste iusto corrupti a.',
	},
	{
		id: 5,
		title: 'Who can mint one?',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus vel incidunt dicta molestias quod, fuga, qui recusandae laborum ullam rerum ducimus inventore blanditiis? Distinctio inventore iste iusto corrupti a.',
	},
];

const FaqSection = () => {
	return (
		<section
			className={classes.section}
			id="faq"
		>
			<h2 className={classes['main-title']}>FAQ</h2>
			<h3 className={classes.title}>Your questions, answered.</h3>
			<div className={classes['faq-container']}>
				{faqList.map(q => (
					<FaqDropdown
						key={q.id}
						title={q.title}
						description={q.description}
					/>
				))}
			</div>
		</section>
	);
};

export default FaqSection;
