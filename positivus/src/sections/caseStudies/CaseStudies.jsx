import SectionHeader from '../../components/sectionHeader/SectionHeader';

import greenArrow from '../../assets/green arrow.svg';

import classes from './CaseStudies.module.css';

const CaseStudies = () => {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Case Studies"
				subTitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
				className={classes.header}
			/>
			<article className={classes.card}>
				<div className={classes['card-part']}>
					<p className={classes.text}>
						For a local restaurant, we implemented a targeted PPC campaign that
						resulted in a 50% increase in website traffic and a 25% increase in
						sales.
					</p>
					<a
						href="#"
						className={classes.link}
					>
						Learn more
						<img
							src={greenArrow}
							alt="green arrow"
						/>
					</a>
				</div>
				<div className={classes.divider}></div>
				<div className={classes['card-part']}>
					<p className={classes.text}>
						For a B2B software company, we developed an SEO strategy that
						resulted in a first page ranking for key keywords and a 200%
						increase in organic traffic.
					</p>
					<a
						href="#"
						className={classes.link}
					>
						Learn more
						<img
							src={greenArrow}
							alt="green arrow"
						/>
					</a>
				</div>
				<div className={classes.divider}></div>
				<div className={classes['card-part']}>
					<p className={classes.text}>
						For a national retail chain, we created a social media marketing
						campaign that increased followers by 25% and generated a 20%
						increase in online sales.
					</p>
					<a
						href="#"
						className={classes.link}
					>
						Learn more
						<img
							src={greenArrow}
							alt="green arrow"
						/>
					</a>
				</div>
			</article>
		</section>
	);
};

export default CaseStudies;
