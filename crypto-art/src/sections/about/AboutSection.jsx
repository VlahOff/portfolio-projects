import AboutCard from './AboutCard';

import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';

import classes from './AboutSection.module.css';

const AboutSection = () => {
	return (
		<section
			className={classes.section}
			id="about"
		>
			<div className={classes['titles-wrapper']}>
				<h2 className={classes.title}>
					A new wave of collectibles is about to hit the blockchain.
				</h2>
				<p className={classes['sub-title']}>
					Characterised by soft lighting, vintage colour schemes and quirky
					costumes, these generative 3D TinyFaces are the addition to your NFT
					collection you've been waiting for.
				</p>
			</div>
			<div className={classes['card-container']}>
				<AboutCard
					image={avatar1}
					title="Thousands of unique NFTs"
					description="Each character is entirely unique and is generated by combining attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind."
				/>
				<AboutCard
					image={avatar2}
					title="Secure the most rare"
					description="Even though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and raw materials - the rarer the attributes, the rarer your character will be."
					isReversed={true}
				/>
			</div>
		</section>
	);
};

export default AboutSection;