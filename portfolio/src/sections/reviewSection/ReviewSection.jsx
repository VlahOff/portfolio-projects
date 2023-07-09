import ReviewCard from './ReviewCard';

import avatar from '../../assets/ReviewAvatar.png';
import companyLogo from '../../assets/ReviewFirmLogo.png';
import slider from '../../assets/Slider.svg';

import classes from './ReviewSection.module.css';

const ReviewSection = () => {
	return (
		<section className={classes['reviews-section']}>
			<div className={classes.reviews}>
				<ReviewCard
					avatar={avatar}
					companyLogo={companyLogo}
					name="Dan Elkaim"
					title="CEO & Co-founder "
					at="@Topo.io"
					review="It was great to work with Kevin on a UI redesign of our product from A to Z. He is fast, accurate and expert on SaaS topics. I recommend him!"
				/>
				<ReviewCard
					avatar={avatar}
					companyLogo={companyLogo}
					name="Dan Elkaim"
					title="CEO & Co-founder "
					at="@Topo.io"
					review="It was great to work with Kevin on a UI redesign of our product from A to Z. He is fast, accurate and expert on SaaS topics. I recommend him!"
				/>
				<ReviewCard
					avatar={avatar}
					companyLogo={companyLogo}
					name="Dan Elkaim"
					title="CEO & Co-founder "
					at="@Topo.io"
					review="It was great to work with Kevin on a UI redesign of our product from A to Z. He is fast, accurate and expert on SaaS topics. I recommend him!"
				/>
			</div>
			<img
				src={slider}
				alt="slider temp"
				className={classes.slider}
			/>
		</section>
	);
};

export default ReviewSection;
