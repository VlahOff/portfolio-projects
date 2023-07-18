import Button from '../../components/button/Button';
import Input from '../../components/inputs/Input';
import RadioButtons from '../../components/inputs/RadioButtons';
import Textarea from '../../components/inputs/Textarea';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { useForm } from '../../hooks/useForm';

import illustration from '../../assets/ContactIllustration.png';

import classes from './ContactUs.module.css';

const ContactUs = () => {
	const { formValues, changeHandler, radioChangeHandler } = useForm({
		radioType: 'sayHi',
		name: '',
		email: '',
		message: '',
	});

	const onFormSubmit = event => {
		event.preventDefault();
		console.log(formValues);
	};

	return (
		<section className={classes.section}>
			<SectionHeader
				title="Contact Us"
				subTitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
				className={classes.header}
			/>
			<main className={classes['contact-card']}>
				<form
					className={classes.form}
					onSubmit={onFormSubmit}
				>
					<RadioButtons
						buttons={[
							{ label: 'Say Hi', value: 'sayHi' },
							{ label: 'Get a Quote', value: 'getQuote' },
						]}
						className={classes['radio-btns']}
						onChange={e => radioChangeHandler(e, 'radioType')}
						value={formValues.radioType}
					/>
					<Input
						id="name"
						label="Name"
						className={classes.input}
						onChange={changeHandler}
						value={formValues.name}
					/>
					<Input
						id="email"
						label="Email*"
						className={classes.input}
						onChange={changeHandler}
						value={formValues.email}
					/>
					<Textarea
						id="message"
						label="Message*"
						className={classes.textarea}
						onChange={changeHandler}
						value={formValues.message}
					/>
					<Button
						btnType="fill"
						type="submit"
					>
						Send Message
					</Button>
				</form>
				<img
					src={illustration}
					alt="Contact Illustration"
					className={classes.illustration}
				/>
			</main>
		</section>
	);
};

export default ContactUs;
