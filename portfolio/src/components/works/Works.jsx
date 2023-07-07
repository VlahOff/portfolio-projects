import classes from './Works.module.css';
import WorksCard from './WorksCard';
import topoLogo from '../../assets/TopoLogo.png';
import website1Image from '../../assets/Website1.png';

const Works = () => {
	return (
		<section className={classes['works-section']}>
			<WorksCard
				image={website1Image}
				logo={topoLogo}
        title='Topo UI redesign'
        subtitle='Topo'
			/>
		</section>
	);
};

export default Works;
