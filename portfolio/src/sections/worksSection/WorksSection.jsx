import WorksCard from './WorksCard';

import bastionLogo from '../../assets/BastionLogo.png';
import chainlitLogo from '../../assets/ChainlitLogo.png';
import strapiLogo from '../../assets/StrapiLogo.png';
import topoLogo from '../../assets/TopoLogo.png';
import website1Image from '../../assets/Website1.png';
import website2Image from '../../assets/Website2.png';
import website3Image from '../../assets/Website3.png';
import website4Image from '../../assets/Website4.png';
import website5Image from '../../assets/Website5.png';
import website6Image from '../../assets/Website6.png';
import website7Image from '../../assets/Website7.png';
import website8Image from '../../assets/Website8.png';
import website9Image from '../../assets/Website9.png';
import kcStudioLogo from '../../assets/kcStudioLogo.png';
import classes from './WorksSection.module.css';

const WorksSection = () => {
	return (
		<section className={classes['works-section']} id='works'>
			<WorksCard
				image={website1Image}
				logo={topoLogo}
				title="Topo UI redesign"
				subtitle="Topo"
			/>
			<WorksCard
				image={website2Image}
				logo={bastionLogo}
				title="Bastion UI redesign"
				subtitle="Topo"
			/>
			<WorksCard
				image={website3Image}
				logo={strapiLogo}
				title="Bastion UI redesign"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website4Image}
				logo={topoLogo}
				title="Topo Navigation"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website5Image}
				logo={strapiLogo}
				title="Strapi Branding"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website6Image}
				logo={strapiLogo}
				title="Strapi Conf Identity"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website7Image}
				logo={chainlitLogo}
				title="Chainlit Branding"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website8Image}
				logo={strapiLogo}
				title="Strapi Branding"
				subtitle="Strapi"
			/>
			<WorksCard
				image={website9Image}
				logo={kcStudioLogo}
				title="Illustrations"
				subtitle="Kcstudio"
			/>
		</section>
	);
};

export default WorksSection;
